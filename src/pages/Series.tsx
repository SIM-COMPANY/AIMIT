import Nav from '../components/Nav'
import Footer from '../components/Footer'

const series = [
  {
    no: '프롤로그',
    title: '나는 왜 15년 동안 내 것이 없었나',
    desc: '경험은 쌓였는데, 남의 집만 지었습니다.',
    url: 'https://maily.so/hyunvo/posts/10z30e4jzlw',
    published: true,
  },
  {
    no: '1편',
    title: '나는 왜 개발자 없이 랜딩페이지를 직접 만들었나',
    desc: '15년 마케터가 AI를 팀원으로 쓰는 방법을 찾은 날.',
    url: null,
    published: false,
  },
  {
    no: '2편',
    title: 'Claude Code랑 하루 종일 싸운 이야기',
    desc: '잘 된 것만 있지 않았습니다. 꽤 싸웠습니다.',
    url: null,
    published: false,
  },
  {
    no: '3편',
    title: '15년 마케터가 발견한 AI 협업의 진짜 한계',
    desc: '"AI가 다 해준다"는 말, 반은 맞고 반은 틀립니다.',
    url: null,
    published: false,
  },
  {
    no: '4편',
    title: 'MVP 패키지로 만든 이유',
    desc: '진짜로 만든 건 워크플로우였습니다.',
    url: null,
    published: false,
  },
  {
    no: '5편',
    title: '자동화 하나 만들려다 반나절 날렸습니다',
    desc: '삽질기. 근데 그 삽질이 구조를 만들었습니다.',
    url: null,
    published: false,
  },
]

export default function Series() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#6B7280] font-medium mb-4">AI 협업기</p>
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            15년 마케터의<br />AI 협업 실전 기록
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">
            잘 된 것만 쓰지 않습니다. 삽질도 씁니다.
          </p>
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {series.map((s) => (
            <div key={s.no} className="py-8 flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#FF5C35] tracking-widest">{s.no}</span>
                  {!s.published && (
                    <span className="text-xs text-[#6B7280] border border-[#E5E7EB] px-2 py-0.5 rounded-full">
                      준비 중
                    </span>
                  )}
                </div>
                <p className="font-serif font-bold text-[#1A1A1A] text-[18px] leading-snug mb-1">
                  {s.title}
                </p>
                <p className="text-[14px] text-[#6B7280]">{s.desc}</p>
              </div>
              {s.published && s.url && (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[#FF5C35] font-semibold text-sm hover:underline"
                >
                  읽기 →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
