/* =============================================================
   StaffSection — スタッフ紹介
   Design: Forest green bg with staff cards and team photo
   ============================================================= */

const TEAM_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/rTqCMPRiMiMJFZC3xCaukY/sandbox/KYv5tPQrkigDmI6d8stU7u-img-4_1771544934000_na1fn_c3RhZmYtdGVhbQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclRxQ01QUmlNaU1KRlpDM3hDYXVrWS9zYW5kYm94L0tZdjV0UFFya2lnRG1JNmQ4c3RVN3UtaW1nLTRfMTc3MTU0NDkzNDAwMF9uYTFmbl9jM1JoWm1ZdGRHVmhiUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DW7w-ovip~LodG2iANzieLubQtM3I1e~r1ozfoJmcZkGNnGVzfn03dXoR7AZ1~J91zPhQvwp-l6MnhzWvBIixA8PPlEU8rntzAcL3P7~pKlcdghDmXi9ID0PPOW4TTY3xn6CTSreaPztMLRu8FrigbM--FpuZVTv-JTm~TjAmouRG-QEcAWEUgam4WrOSv97HhA14cBqIOZpGXYE8M5wO-zuyQ1iYAHGEJgNV95T3phdu28jUxCXvAedDMlw8qrs3bjBTsxVWJd3Qp~iJlk3ItlRW8xSJ~sKxEBJgCA2u8momlRJjN6R0SmUTftRPvac~qp6b1IzKiqHAvUZ5dmWOA__";

const staffMembers = [
  {
    name: "田中 美咲",
    role: "サービス提供責任者",
    cert: "介護福祉士",
    comment: "「ご利用者様の笑顔が私の原動力です。毎日の小さな変化に気づき、寄り添えるヘルパーでありたいと思っています。」",
    initial: "田",
    color: "oklch(0.58 0.12 42)",
  },
  {
    name: "鈴木 恵子",
    role: "訪問介護員",
    cert: "ホームヘルパー2級",
    comment: "「お体のことだけでなく、心のケアも大切にしています。気軽に話しかけてください。」",
    initial: "鈴",
    color: "oklch(0.45 0.08 152)",
  },
  {
    name: "山本 健太",
    role: "訪問介護員",
    cert: "介護職員初任者研修修了",
    comment: "「男性ヘルパーとして、力仕事や外出支援など積極的にサポートします。安心してお任せください。」",
    initial: "山",
    color: "oklch(0.44 0.11 42)",
  },
];

export default function StaffSection() {
  return (
    <section id="staff" className="py-20 md:py-28 relative overflow-hidden"
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
            Our Staff
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-heading"
            style={{ color: "oklch(0.22 0.01 285)" }}>
            スタッフ紹介
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.01 285)" }}>
            資格を持ったスタッフが、真心を込めてサポートします。
          </p>
        </div>

        {/* Team photo */}
        <div className="mb-12 fade-up">
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/6]">
            <img
              src={TEAM_IMAGE}
              alt="やすらぎ訪問介護サービスのスタッフチーム"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-8 text-white">
              <p className="text-xs opacity-75 mb-1">やすらぎ訪問介護サービス</p>
              <p className="text-lg font-bold" style={{ fontFamily: "'Zen Old Mincho', serif" }}>
                スタッフ一同、心よりお待ちしております
              </p>
            </div>
          </div>
        </div>

        {/* Staff cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staffMembers.map((staff, i) => (
            <div
              key={staff.name}
              className="fade-up bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                  style={{ backgroundColor: staff.color, fontFamily: "'Zen Old Mincho', serif" }}
                >
                  {staff.initial}
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: "oklch(0.22 0.01 285)" }}>
                    {staff.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.01 85)" }}>
                    {staff.role}
                  </p>
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded-full mt-1"
                    style={{
                      backgroundColor: `${staff.color.replace(")", " / 0.1)")}`,
                      color: staff.color,
                    }}
                  >
                    {staff.cert}
                  </span>
                </div>
              </div>
              <blockquote
                className="text-sm leading-relaxed italic border-l-2 pl-3"
                style={{ color: "oklch(0.45 0.01 285)", borderColor: staff.color }}
              >
                {staff.comment}
              </blockquote>
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
