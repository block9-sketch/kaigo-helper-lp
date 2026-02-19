/* =============================================================
   ServicesSection — サービス内容
   Design: Alternating image + text layout with forest green bg
   ============================================================= */

const BODY_CARE_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/rTqCMPRiMiMJFZC3xCaukY/sandbox/KYv5tPQrkigDmI6d8stU7u-img-2_1771544922000_na1fn_c2VydmljZS1ib2R5LWNhcmU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclRxQ01QUmlNaU1KRlpDM3hDYXVrWS9zYW5kYm94L0tZdjV0UFFya2lnRG1JNmQ4c3RVN3UtaW1nLTJfMTc3MTU0NDkyMjAwMF9uYTFmbl9jMlZ5ZG1salpTMWliMlI1TFdOaGNtVS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ad5UxTZHAwm-uk0OQZIdYZkH5PN23RwciFUOuqRiqEm92RJetqLXh2xzoFjg9~AKOXlpN4tXvsolMrNodkLgUBzpZY233vJnVXrumkYrHU13AKxfdOWSCsQ6fkCEkVgumzA7DlhM295Xtyr6T~g-JtGUvIfS1hqiwHWeM6YZQE2hWQmDSznwX0VCiQa479cM3kIIPzNyPiqWgMYW-H~y4JwYznmu0gYx4flol7FmIG4e2bAgPhG6T~GGap76JMwbDzJg9asjJIBfzeGD1sCCCiiKJTBM8UfL~GyFl2QvUTtC73neq1~EeO~FmzEU0yxMtdQwSXJR8UMsrC7Wud8r1g__";
const DAILY_LIFE_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/rTqCMPRiMiMJFZC3xCaukY/sandbox/KYv5tPQrkigDmI6d8stU7u-img-3_1771544925000_na1fn_c2VydmljZS1kYWlseS1saWZl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclRxQ01QUmlNaU1KRlpDM3hDYXVrWS9zYW5kYm94L0tZdjV0UFFya2lnRG1JNmQ4c3RVN3UtaW1nLTNfMTc3MTU0NDkyNTAwMF9uYTFmbl9jMlZ5ZG1salpTMWtZV2xzZVMxc2FXWmwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=W1cVW2sn8JTDCYurupSZaT2lAVU1HbdeMpb3XM8w~70YMg2-V2sLyu-MiTzIIDSbAktGR8-Qj1Aev1a~KjytuD3qvLYabicc~CLbKAaZczXpBZdXmCU6G4Za7vQfQQlPAf2kPgPuvkQ7nAwdH9Ql7cgGfeDoS9X03jBPJhIC61zF7qvRWQSEk6xBIKVEOHcl5VH~G5ylANohSN9oNHG6FjXcnpNU0wAs91b-tXDRrs-ljFklvvb-QcjRmdqlS7mNS2GPV3QgWODH44huHbasFOUEPW11GUGgL-d1ZZPwitboSCAm-3XnPhSXnHuL01WFYENqRXp9Sgj0-MoxYjKF3A__";

const services = [
  {
    id: "body",
    tag: "身体介護",
    title: "身体介護サービス",
    desc: "入浴・排泄・食事などの日常生活動作のサポートを行います。ご利用者様の尊厳を大切にしながら、安全で快適な生活を支援します。",
    items: ["入浴介助・清拭", "排泄介助", "食事介助・口腔ケア", "体位変換・移乗介助", "歩行・移動介助", "更衣介助"],
    image: BODY_CARE_IMAGE,
    imageAlt: "身体介護サービスの様子",
    reverse: false,
  },
  {
    id: "daily",
    tag: "生活援助",
    title: "生活援助サービス",
    desc: "掃除・洗濯・買い物・調理など、日常生活の家事全般をサポートします。住み慣れたご自宅で快適に生活できるよう、きめ細やかにお手伝いします。",
    items: ["掃除・整理整頓", "洗濯・衣類の整理", "食事の準備・後片付け", "買い物代行", "薬の受け取り", "ゴミ出し"],
    image: DAILY_LIFE_IMAGE,
    imageAlt: "生活援助サービスの様子",
    reverse: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden"
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
        <div className="mb-16 fade-up">
          <p className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.58 0.12 42)", fontFamily: "'Noto Sans JP', sans-serif" }}>
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            サービス内容
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.01 285)" }}>
            介護保険を利用したサービスから自費サービスまで、幅広くご対応しています。
          </p>
        </div>

        {/* Service items */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col ${service.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className={`w-full md:w-1/2 ${service.reverse ? "fade-right" : "fade-left"}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  {/* Tag */}
                  <span
                    className="absolute top-4 left-4 text-xs font-medium px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: "oklch(0.58 0.12 42)" }}
                  >
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className={`w-full md:w-1/2 ${service.reverse ? "fade-left" : "fade-right"}`}>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "oklch(0.22 0.01 285)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed mb-6"
                  style={{ color: "oklch(0.45 0.01 285)" }}
                >
                  {service.desc}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm"
                      style={{ color: "oklch(0.32 0.01 285)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.45 0.08 152)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Outdoor support card */}
        <div className="mt-16 fade-up">
          <div
            className="rounded-2xl p-8 md:p-10 text-white relative overflow-hidden"
            style={{ backgroundColor: "oklch(0.45 0.08 152)" }}
          >
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <span className="text-xs font-medium tracking-widest uppercase opacity-75 mb-2 block">
                  外出支援
                </span>
                <h3 className="text-2xl font-bold mb-3">外出・通院支援サービス</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  通院・買い物・散歩・趣味の外出など、外出時の付き添いと移動サポートを行います。
                  車椅子での外出や公共交通機関の利用もサポートします。
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block px-6 py-3 rounded-full text-sm font-medium bg-white transition-all hover:bg-opacity-90"
                  style={{ color: "oklch(0.45 0.08 152)" }}
                >
                  詳しく相談する
                </a>
              </div>
            </div>
            {/* Decorative blob */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
              style={{ backgroundColor: "white" }}
            />
          </div>
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
