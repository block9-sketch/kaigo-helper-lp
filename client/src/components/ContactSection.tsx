/* =============================================================
   ContactSection — お問い合わせ
   Design: Split layout — phone CTA left, form right
   ============================================================= */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    toast.success("お問い合わせを受け付けました。担当者よりご連絡いたします。");
    setFormData({ name: "", phone: "", email: "", type: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2";
  const inputStyle = {
    borderColor: "oklch(0.88 0.02 85)",
    backgroundColor: "white",
    color: "oklch(0.22 0.01 285)",
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.97 0.015 85)" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-14 fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}>
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            お問い合わせ
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.01 285)" }}>
            ご相談・ご質問はお気軽にどうぞ。無料でご対応いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 fade-left space-y-5">
            {/* Phone CTA */}
            <div
              className="rounded-2xl p-7 text-white"
              style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
            >
              <p className="text-xs opacity-75 mb-2">お電話でのご相談</p>
              <a
                href="tel:0120-000-000"
                className="flex items-center gap-3 text-2xl font-bold hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Zen Old Mincho', serif" }}
              >
                <Phone size={22} />
                0120-000-000
              </a>
              <p className="text-xs opacity-75 mt-2">通話料無料</p>
            </div>

            {/* Info cards */}
            {[
              {
                icon: Clock,
                title: "受付時間",
                content: "月〜土 8:00〜18:00\n（日・祝日も緊急対応あり）",
              },
              {
                icon: MapPin,
                title: "所在地",
                content: "〒000-0000\n東京都○○区○○1-2-3",
              },
              {
                icon: Mail,
                title: "メールアドレス",
                content: "info@yasuragi-kaigo.jp",
              },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.58 0.12 42 / 0.1)" }}
                  >
                    <Icon size={16} style={{ color: "oklch(0.58 0.12 42)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-1" style={{ color: "oklch(0.55 0.01 85)" }}>
                      {info.title}
                    </p>
                    <p className="text-sm whitespace-pre-line" style={{ color: "oklch(0.32 0.01 285)" }}>
                      {info.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 fade-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.22 0.01 285)" }}>
                メールでのお問い合わせ
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "oklch(0.45 0.01 285)" }}>
                    お名前 <span style={{ color: "oklch(0.58 0.12 42)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    className={inputClass}
                    style={{ ...inputStyle, "--tw-ring-color": "oklch(0.58 0.12 42 / 0.3)" } as React.CSSProperties}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "oklch(0.45 0.01 285)" }}>
                    電話番号
                  </label>
                  <input
                    type="tel"
                    placeholder="090-0000-0000"
                    className={inputClass}
                    style={inputStyle}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "oklch(0.45 0.01 285)" }}>
                  メールアドレス <span style={{ color: "oklch(0.58 0.12 42)" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  className={inputClass}
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "oklch(0.45 0.01 285)" }}>
                  お問い合わせ種別
                </label>
                <select
                  className={inputClass}
                  style={inputStyle}
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="">選択してください</option>
                  <option value="service">サービス内容について</option>
                  <option value="pricing">料金について</option>
                  <option value="start">利用開始について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "oklch(0.45 0.01 285)" }}>
                  お問い合わせ内容
                </label>
                <textarea
                  rows={4}
                  placeholder="ご相談内容をご記入ください"
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-white font-medium text-sm transition-all hover:opacity-90 hover:shadow-md disabled:opacity-60"
                style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>

              <p className="text-xs text-center" style={{ color: "oklch(0.65 0.01 85)" }}>
                個人情報は適切に管理し、お問い合わせへの返答以外には使用しません。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
