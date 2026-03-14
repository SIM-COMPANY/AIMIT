import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const cases = [
  {
    id: 'unclejoe',
    name: '조경만 · 금융교육 20년',
    tag: '완성',
    tagDone: true,
    lines: ['20년 동안 움직였는데', '한 곳에 없었다.'],
    sub: '유튜브, 칼럼, 강의. 다 흩어져 있었다.\n흩어진 것들이 처음으로 내 공간에 모였다.',
    result: '하프타임클럽 랜딩페이지',
  },
  {
    id: 'hyunbo',
    name: '심현보 · 마케팅 전략가',
    tag: '진행 중',
    tagDone: false,
    lines: ['15년 일했는데', '내 것이 없었다.'],
    sub: '남의 브랜드만 만들었다.\n경험은 쌓였는데 내 이름은 없었다.\n처음으로 내 구조를 짓기 시작했다.',
    result: '개인 브랜드 아카이브 · 뉴스레터',
  },
]

export default function CasesList() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-[#6B7280] font-medium mb-4">케이스</p>
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            이렇게 시작했습니다.
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">
            이야기 한 번으로 자기 공간을 처음 지은 사람들.
          </p>
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="flex flex-col h-full border border-[#E5E7EB] rounded-xl p-8 hover:border-[#FF5C35] hover:shadow-md transition-all"
            >
              <span
                className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${
                  c.tagDone
                    ? 'border-[#FF5C35] text-[#FF5C35]'
                    : 'border-[#6B7280] text-[#6B7280]'
                }`}
              >
                {c.tag}
              </span>
              <p className="text-sm text-[#6B7280] font-medium mb-3">{c.name}</p>
              <h2
                className="font-serif font-bold text-[#1A1A1A] mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
              >
                {c.lines.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h2>
              <p className="text-[15px] text-[#6B7280] leading-relaxed whitespace-pre-line mb-6 flex-1">
                {c.sub}
              </p>
              <p className="text-[13px] text-[#1A1A1A] font-medium mb-6 pb-6 border-b border-[#E5E7EB]">
                → {c.result}
              </p>
              <Link
                to={`/cases/${c.id}`}
                className="text-[#FF5C35] font-semibold text-sm hover:underline"
              >
                이야기 보기 →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
