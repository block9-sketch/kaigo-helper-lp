/* =============================================================
   HeroSection — やすらぎ訪問介護サービス
   Design: Full-bleed image, left-aligned text, organic wave divider
   Background: Light (cream) — use DARK text
   ============================================================= */

import { Phone, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/rTqCMPRiMiMJFZC3xCaukY/sandbox/KYv5tPQrkigDmI6d8stU7u-img-1_1771544941000_na1fn_aGVyby1jYXJlZ2l2ZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclRxQ01QUmlNaU1KRlpDM3hDYXVrWS9zYW5kYm94L0tZdjV0UFFya2lnRG1JNmQ4c3RVN3UtaW1nLTFfMTc3MTU0NDk0MTAwMF9uYTFmbl9hR1Z5YnkxallYSmxaMmwyWlhJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NDZKM7sVzLFOKYswhd3wCSC9USaP8k7ORQdSTOZ5UPgpRjfEmeBPNMBv2AxxMJ21lKgqjtgmggmXci8r5BpL-ODdeWbD2D5LRylxFiITAr3dkkXvVFR4JRl70M9mRI-1a15QkFE5-2TnvfJ-Kz8fTPORvLcTaEcxnrPMllkHGpcOtge-g9gwqzpHkaNf1-FCxL2fU0NmprCVA5LGMyJjicvN5qQp0cwPQTmXbzxR3Cm1jnud~LECt9u2mrZ5QFUn-Kb3I59q-ozFXJOtWmclFBt9S8jGtpirEVH~zbq-udd9CWiBmUgDqXRWTquVWzxebTSxt1X1udhrXXW9NC3FQQ__";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image — right side */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.015_85)] via-[oklch(0.97_0.015_85)/90%] to-transparent z-10" />
        <img
          src={HERO_IMAGE}
          alt="介護ヘルパーがお年寄りに寄り添う様子"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p
            className="text-sm font-medium tracking-widest mb-4 uppercase"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Yasuragi Home Care Service
          </p>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Zen Old Mincho', serif", color: "oklch(0.22 0.01 285)" }}
          >
            住み慣れた
            <br />
            <span style={{ color: "oklch(0.58 0.12 42)" }}>わが家</span>で、
            <br />
            笑顔の毎日を。
          </h1>

          {/* Subtext */}
          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "oklch(0.38 0.01 285)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            やすらぎ訪問介護サービスは、ご利用者様一人ひとりの
            <br className="hidden md:block" />
            ペースと意思を大切にした、心のこもった介護をお届けします。
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            {[
              { num: "500+", label: "利用者様" },
              { num: "15年", label: "の実績" },
              { num: "24時間", label: "相談対応" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "'Zen Old Mincho', serif", color: "oklch(0.58 0.12 42)" }}
                >
                  {stat.num}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.01 85)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-medium text-sm transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
            >
              無料でご相談する
            </a>
            <a
              href="tel:0120-000-000"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-sm border-2 transition-all hover:bg-[oklch(0.97_0.015_85)]"
              style={{
                borderColor: "oklch(0.58 0.12 42)",
                color: "oklch(0.58 0.12 42)",
              }}
            >
              <Phone size={15} />
              0120-000-000
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["介護保険適用", "初回無料相談", "土日祝も対応"].map((badge) => (
              <span
                key={badge}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  backgroundColor: "oklch(0.45 0.08 152 / 0.12)",
                  color: "oklch(0.32 0.08 152)",
                  border: "1px solid oklch(0.45 0.08 152 / 0.25)",
                }}
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={24} style={{ color: "oklch(0.58 0.12 42)" }} />
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
          fill="oklch(0.97 0.015 85)"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
