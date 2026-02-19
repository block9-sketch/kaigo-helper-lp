/* =============================================================
   FlowSection — ご利用の流れ
   Design: Vertical step timeline with terracotta accents
   ============================================================= */

import { Phone, ClipboardList, UserCheck, CalendarCheck, Smile } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "STEP 01",
    title: "お問い合わせ・ご相談",
    desc: "まずはお電話またはメールフォームよりお気軽にご連絡ください。担当スタッフが丁寧にご状況をお伺いします。相談は無料です。",
  },
  {
    icon: ClipboardList,
    step: "STEP 02",
    title: "ご自宅への訪問・アセスメント",
    desc: "担当スタッフがご自宅を訪問し、ご利用者様の生活状況・ご要望・身体状況などを詳しくお聞きします。",
  },
  {
    icon: UserCheck,
    step: "STEP 03",
    title: "ケアプランの作成",
    desc: "アセスメントをもとに、ご利用者様・ご家族様と相談しながら最適なケアプランを作成します。",
  },
  {
    icon: CalendarCheck,
    step: "STEP 04",
    title: "サービス開始",
    desc: "担当ヘルパーが決定し、サービスを開始します。開始後も定期的にサービス内容を見直し、より良いケアを提供します。",
  },
  {
    icon: Smile,
    step: "STEP 05",
    title: "継続的なサポート",
    desc: "定期的なモニタリングと担当者会議を実施し、ご利用者様の状態変化に合わせてケアプランを柔軟に調整します。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.97 0.015 85)" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-14 fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}>
            How to Start
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            ご利用の流れ
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.01 285)" }}>
            初めてご利用の方も安心。丁寧にご案内します。
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5 hidden md:block"
            style={{ backgroundColor: "oklch(0.88 0.02 85)" }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="fade-up flex gap-6 items-start"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Icon circle */}
                  <div
                    className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10"
                    style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span
                      className="text-xs font-medium tracking-widest uppercase block mb-1"
                      style={{ color: "oklch(0.58 0.12 42)" }}
                    >
                      {step.step}
                    </span>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "oklch(0.22 0.01 285)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.45 0.01 285)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center fade-up">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-sm transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
          >
            まずは無料相談から始める
          </a>
        </div>
      </div>
    </section>
  );
}
