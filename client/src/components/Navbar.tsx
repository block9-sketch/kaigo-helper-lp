/* =============================================================
   Navbar — やすらぎ訪問介護サービス
   Design: 「大地の温もり」 — Sticky top nav with terracotta accent
   ============================================================= */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "選ばれる理由", href: "#reasons" },
  { label: "サービス内容", href: "#services" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "スタッフ紹介", href: "#staff" },
  { label: "よくある質問", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.58 0.12 42)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span
              className="font-bold text-lg leading-tight"
              style={{ fontFamily: "'Zen Old Mincho', serif", color: "oklch(0.22 0.01 285)" }}
            >
              やすらぎ<br />
              <span className="text-xs font-normal" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "oklch(0.55 0.01 85)" }}>
                訪問介護サービス
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors hover:text-[oklch(0.58_0.12_42)] relative group"
                style={{ color: isScrolled ? "oklch(0.22 0.01 285)" : "oklch(0.22 0.01 285)" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "oklch(0.58 0.12 42)" }} />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0120-000-000"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
            >
              <Phone size={14} />
              無料相談
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                style={{ color: "oklch(0.22 0.01 285)" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0120-000-000"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
            >
              <Phone size={14} />
              無料相談のお電話
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
