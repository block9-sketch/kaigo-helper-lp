/* =============================================================
   FaqSection — よくある質問
   Design: Accordion on muted cream background
   ============================================================= */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "介護保険の認定を受けていないと利用できませんか？",
    a: "介護保険の認定がなくても、自費サービスとしてご利用いただけます。また、介護保険の申請手続きについてもご相談を承っておりますので、お気軽にお問い合わせください。",
  },
  {
    q: "担当ヘルパーは固定されますか？",
    a: "基本的には担当ヘルパーを固定してサービスを提供します。ご利用者様との信頼関係を大切にしているため、特別な事情がない限り同じヘルパーが継続してお伺いします。",
  },
  {
    q: "急に体調が悪くなった場合はどうすればいいですか？",
    a: "24時間365日の緊急連絡体制を整えています。緊急時はいつでもご連絡ください。必要に応じて医療機関や救急への連絡も行います。",
  },
  {
    q: "サービスの時間帯や頻度は変更できますか？",
    a: "ご利用者様の状況やご要望に合わせて、柔軟に対応いたします。変更のご希望はサービス提供責任者にご相談ください。",
  },
  {
    q: "男性ヘルパーを希望することはできますか？",
    a: "はい、可能です。男性・女性ヘルパーのご希望をお伝えください。できる限りご要望に沿った担当者を配置いたします。",
  },
  {
    q: "ケアマネジャーがいない場合はどうすればいいですか？",
    a: "ケアマネジャーをご紹介することも可能です。まずはお気軽にご相談ください。介護保険の申請から手続きまで、一緒にサポートします。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.93 0.02 85)" }}>

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16"
          fill="oklch(0.97 0.015 85)">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container pt-8">
        {/* Section header */}
        <div className="mb-14 fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            よくある質問
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-up bg-white rounded-2xl shadow-sm overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
                  >
                    Q
                  </span>
                  <span className="text-sm font-medium leading-relaxed"
                    style={{ color: "oklch(0.22 0.01 285)" }}>
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: "oklch(0.58 0.12 42)" }}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="flex items-start gap-3 pt-2 border-t"
                    style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                      style={{ backgroundColor: "oklch(0.45 0.08 152)" }}
                    >
                      A
                    </span>
                    <p className="text-sm leading-relaxed pt-0.5"
                      style={{ color: "oklch(0.45 0.01 285)" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16"
          fill="oklch(0.97 0.015 85)">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
