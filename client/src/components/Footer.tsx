/* =============================================================
   Footer — やすらぎ訪問介護サービス
   Design: Dark charcoal footer with terracotta accents
   ============================================================= */

import { toast } from "sonner";

const navLinks = [
  { label: "選ばれる理由", href: "#reasons" },
  { label: "サービス内容", href: "#services" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "スタッフ紹介", href: "#staff" },
  { label: "料金について", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.01 285)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b"
          style={{ borderColor: "oklch(1 0 0 / 0.1)" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.58 0.12 42)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg"
                style={{ fontFamily: "'Zen Old Mincho', serif" }}>
                やすらぎ訪問介護サービス
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 85)" }}>
              住み慣れたご自宅で、安心と笑顔をお届けします。
              ご利用者様一人ひとりに寄り添った介護サービスを提供しています。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.58 0.12 42)" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.65 0.01 85)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.58 0.12 42)" }}>
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs mb-1" style={{ color: "oklch(0.55 0.01 85)" }}>お電話</p>
                <a href="tel:0120-000-000"
                  className="text-xl font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Zen Old Mincho', serif" }}>
                  0120-000-000
                </a>
                <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.01 85)" }}>
                  月〜土 8:00〜18:00（通話料無料）
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "oklch(0.55 0.01 85)" }}>所在地</p>
                <p className="text-sm" style={{ color: "oklch(0.75 0.01 85)" }}>
                  〒000-0000 東京都○○区○○1-2-3
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.45 0.01 85)" }}>
            © 2024 やすらぎ訪問介護サービス. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["プライバシーポリシー", "利用規約"].map((item) => (
              <button
                key={item}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "oklch(0.45 0.01 85)" }}
                onClick={() => toast.info("準備中です")}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
