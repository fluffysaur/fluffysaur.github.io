import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(rootDir, "public/assets/documents/TanYiJia-Resume.pdf");
const port = 4173;
const host = "127.0.0.1";
const url = `http://${host}:${port}/experience/resume?pdf=1`;
const exportWidthPx = 1120;
const exportHeightPx = Math.round(exportWidthPx * 1.414);
const a4WidthPx = 794;

function run(command, args, options = {}) {
    return new Promise((resolvePromise, reject) => {
        const child = spawn(command, args, {
            cwd: rootDir,
            stdio: options.stdio ?? "inherit",
            shell: process.platform === "win32",
            env: { ...process.env, ...options.env },
        });

        child.once("error", reject);
        child.once("exit", (code) => {
            if (code === 0) {
                resolvePromise();
                return;
            }

            reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
        });
    });
}

function waitForServer(child) {
    return new Promise((resolvePromise, reject) => {
        let output = "";
        const timeout = setTimeout(() => {
            reject(new Error(`Timed out waiting for Vite preview at ${url}`));
        }, 15000);

        const handleOutput = (chunk) => {
            const text = chunk.toString();
            output += text;
            process.stdout.write(text);

            if (output.includes(`http://${host}:${port}/`)) {
                clearTimeout(timeout);
                resolvePromise();
            }
        };

        child.stdout?.on("data", handleOutput);
        child.stderr?.on("data", handleOutput);
        child.once("error", (error) => {
            clearTimeout(timeout);
            reject(error);
        });
        child.once("exit", (code) => {
            clearTimeout(timeout);
            reject(new Error(`Vite preview exited before PDF export completed with code ${code}`));
        });
    });
}

async function exportResume() {
    await run("npm", ["run", "build"]);

    const preview = spawn("npm", ["run", "preview", "--", "--host", host, "--port", String(port), "--strictPort"], {
        cwd: rootDir,
        stdio: ["ignore", "pipe", "pipe"],
        shell: process.platform === "win32",
    });

    try {
        await waitForServer(preview);
        await mkdir(dirname(outputPath), { recursive: true });

        const browser = await chromium.launch();
        const page = await browser.newPage({
            viewport: { width: exportWidthPx, height: exportHeightPx },
            deviceScaleFactor: 1,
        });

        try {
            await page.goto(url, { waitUntil: "networkidle" });
            await page.emulateMedia({ media: "screen" });
            await page.evaluate(() => document.fonts.ready);
            await page.locator(".resume-sheet").waitFor({ state: "visible" });

            const overflow = await page.locator(".resume-sheet").evaluate((element) => {
                const htmlElement = element;
                return {
                    scrollWidth: htmlElement.scrollWidth,
                    clientWidth: htmlElement.clientWidth,
                    scrollHeight: htmlElement.scrollHeight,
                    clientHeight: htmlElement.clientHeight,
                };
            });

            const tolerancePx = 2;
            if (
                overflow.scrollWidth - overflow.clientWidth > tolerancePx ||
                overflow.scrollHeight - overflow.clientHeight > tolerancePx
            ) {
                throw new Error(
                    `Resume content overflows A4 sheet: ${JSON.stringify(overflow)}. Tighten resume content or print CSS before exporting.`,
                );
            }

            await page.pdf({
                path: outputPath,
                format: "A4",
                printBackground: true,
                preferCSSPageSize: false,
                scale: a4WidthPx / exportWidthPx,
                margin: { top: "0", right: "0", bottom: "0", left: "0" },
            });

            console.log(`Exported resume PDF to ${outputPath}`);
        } finally {
            await browser.close();
        }
    } finally {
        preview.kill("SIGTERM");
    }
}

exportResume().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
