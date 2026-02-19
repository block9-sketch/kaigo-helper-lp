/* =============================================================
   ReasonsSection — 選ばれる理由
   Design: Asymmetric card grid with terracotta numbered accents
   ============================================================= */

import { Shield, Heart, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    number: "01",
    title: "一人ひとりに寄り添うケア",
    desc: "画一的なサービスではなく、ご利用者様の生活リズム・ご要望・お体の状態に合わせたオーダーメイドのケアプランをご提案します。担当ヘルパーが継続的にサポートするため、安心してお任せいただけます。",
  },
  {
    icon: Shield,
    number: "02",
    title: "資格を持つ専門スタッフ",
    desc: "介護福祉士・ホームヘルパーの資格を持つスタッフが対応します。定期的な研修と勉強会を実施し、常に質の高いサービスを維持しています。",
  },
  {
    icon: Clock,
    number: "03",
    title: "24時間・365日の相談体制",
    desc: "急なご相談や体調変化にも迅速に対応できるよう、24時間365日の緊急連絡体制を整えています。ご家族の方も安心してお任せください。",
  },
  {
    icon: Users,
    number: "04",
    title: "地域密着15年の実績",
    desc: "地域に根ざした15年の実績と500名以上のご利用実績。ケアマネジャーや医療機関との連携も充実しており、トータルサポートが可能です。",
  },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.97 0.015 85)" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-14 fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            選ばれる理由
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.01 285)" }}>
            やすらぎ訪問介護サービスが多くのご家族から信頼される理由をご紹介します。
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                  i % 2 === 0 ? "fade-left" : "fade-right"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Number accent */}
                <span
                  className="absolute top-6 right-6 text-5xl font-bold opacity-10 select-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.58 0.12 42)" }}
                >
                  {reason.number}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "oklch(0.58 0.12 42 / 0.1)" }}
                >
                  <Icon size={22} style={{ color: "oklch(0.58 0.12 42)" }} />
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "oklch(0.22 0.01 285)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.01 285)" }}
                >
                  {reason.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
