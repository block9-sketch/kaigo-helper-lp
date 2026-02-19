/* =============================================================
   PricingSection — 料金について
   Design: Simple table + note cards on cream background
   ============================================================= */

import { Info } from "lucide-react";

const pricingItems = [
  { service: "身体介護（20分未満）", insurance: "167円", selfPay: "1,670円" },
  { service: "身体介護（20〜30分未満）", insurance: "250円", selfPay: "2,500円" },
  { service: "身体介護（30〜60分未満）", insurance: "396円", selfPay: "3,960円" },
  { service: "生活援助（20〜45分未満）", insurance: "183円", selfPay: "1,830円" },
  { service: "生活援助（45分以上）", insurance: "225円", selfPay: "2,250円" },
  { service: "通院等乗降介助", insurance: "99円", selfPay: "990円" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.97 0.015 85)" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-14 fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}>
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            料金について
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.01 285)" }}>
            介護保険適用の場合、自己負担は1〜3割です。
            詳しい料金はお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pricing table */}
          <div className="lg:col-span-2 fade-left">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4" style={{ backgroundColor: "oklch(0.58 0.12 42)" }}>
                <h3 className="text-white font-bold text-sm">介護保険適用サービス料金（目安）</h3>
                <p className="text-white/75 text-xs mt-0.5">※1割負担の場合</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "oklch(0.93 0.02 85)" }}>
                      <th className="text-left px-6 py-3 font-medium text-xs"
                        style={{ color: "oklch(0.45 0.01 285)" }}>サービス内容</th>
                      <th className="text-right px-4 py-3 font-medium text-xs"
                        style={{ color: "oklch(0.45 0.01 285)" }}>1割負担</th>
                      <th className="text-right px-6 py-3 font-medium text-xs"
                        style={{ color: "oklch(0.45 0.01 285)" }}>全額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingItems.map((item, i) => (
                      <tr
                        key={item.service}
                        className="border-t"
                        style={{ borderColor: "oklch(0.88 0.02 85)" }}
                      >
                        <td className="px-6 py-3.5" style={{ color: "oklch(0.32 0.01 285)" }}>
                          {item.service}
                        </td>
                        <td className="text-right px-4 py-3.5 font-medium"
                          style={{ color: "oklch(0.58 0.12 42)" }}>
                          {item.insurance}
                        </td>
                        <td className="text-right px-6 py-3.5"
                          style={{ color: "oklch(0.55 0.01 85)" }}>
                          {item.selfPay}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="fade-right space-y-4">
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border-l-4"
              style={{ borderColor: "oklch(0.45 0.08 152)" }}
            >
              <div className="flex items-start gap-3">
                <Info size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.45 0.08 152)" }} />
                <div>
                  <h4 className="font-bold text-sm mb-2" style={{ color: "oklch(0.22 0.01 285)" }}>
                    介護保険について
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.01 285)" }}>
                    要介護・要支援の認定を受けた方は介護保険が適用されます。
                    まずはケアマネジャーにご相談ください。
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-6 shadow-sm border-l-4"
              style={{ borderColor: "oklch(0.58 0.12 42)" }}
            >
              <div className="flex items-start gap-3">
                <Info size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.58 0.12 42)" }} />
                <div>
                  <h4 className="font-bold text-sm mb-2" style={{ color: "oklch(0.22 0.01 285)" }}>
                    自費サービスについて
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.01 285)" }}>
                    介護保険の対象外のサービスも自費でご利用いただけます。
                    詳しい料金はお問い合わせください。
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
            >
              <h4 className="font-bold text-sm mb-2">無料相談受付中</h4>
              <p className="text-xs leading-relaxed opacity-90 mb-4">
                料金や手続きについて、わかりやすくご説明します。
                お気軽にご相談ください。
              </p>
              <a
                href="tel:0120-000-000"
                className="block text-center text-sm font-medium py-2.5 rounded-full bg-white transition-all hover:bg-opacity-90"
                style={{ color: "oklch(0.58 0.12 42)" }}
              >
                0120-000-000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
