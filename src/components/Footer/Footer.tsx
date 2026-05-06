import { FooterBrand } from "./FooterBrand";
import { FooterLinkColumn } from "./FooterLinkColumn";
import { FooterMeta } from "./FooterMeta";
import { FOOTER_CONTACT, FOOTER_ELSEWHERE, FOOTER_SITEMAP } from "./footer-data";

export function Footer() {
    return (
        <footer className="pt-16 pb-12 mt-auto border-t" style={{ borderColor: "var(--border-mid)" }}>
            <div className="page-wrap">
                <div className="grid gap-8 mb-12 grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <FooterBrand />
                    <FooterLinkColumn title="Sitemap" items={FOOTER_SITEMAP} />
                    <FooterLinkColumn title="Elsewhere" items={FOOTER_ELSEWHERE} />
                    <FooterLinkColumn title="Get in touch" items={FOOTER_CONTACT} />
                </div>
                <FooterMeta />
            </div>
        </footer>
    );
}
