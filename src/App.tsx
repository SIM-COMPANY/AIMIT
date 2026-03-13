import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Start from './pages/Start'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Process />
      <Cases />
      <CTA />
      <Footer />
    </div>
  )
}


/* ─── Hero ────────────────────────────────────────── */
function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1
          className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          경험은 쌓였는데<br />
          정작 내 것이 없습니다.
        </h1>
        <div className="space-y-1 mb-8 pl-4 border-l-2 border-[#E5E7EB]">
          <p className="text-[17px] text-[#6B7280] leading-relaxed">열심히 했는데 아무것도 안 남는 느낌.</p>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">남의 일만 잘해준 것 같은 느낌.</p>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">시작은 하고 싶은데 어디서부터인지 모르는 느낌.</p>
        </div>
        <p
          className="font-serif font-bold text-[#1A1A1A] mb-8 leading-snug"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
        >
          이야기 한 번으로<br />
          내 이름 걸린 공간이 생깁니다.
        </p>
        <a
          href="/start"
          className="inline-block px-8 py-4 bg-[#FF5C35] text-white font-semibold text-[17px] rounded-md hover:bg-[#e54e2a] transition-colors"
        >
          처음 짓기 시작하기
        </a>
      </div>
    </section>
  )
}

/* ─── Process ─────────────────────────────────────── */
const steps = [
  { num: '01', title: '경험을 캐내다', desc: '인터뷰 — 경험·이야기·강점 꺼내기' },
  { num: '02', title: '방향을 잡다', desc: '구조 설계 — 최소 상품 1개 + 랜딩페이지 방향' },
  { num: '03', title: '공간을 짓다', desc: '완성 — 랜딩페이지 + 채널 개설 + 1호 발행' },
  { num: '04', title: '열쇠를 넘기다', desc: '인계 — 혼자 굴릴 수 있는 상태로' },
]

function Process() {
  return (
    <section className="py-32 px-6 bg-[#F8F7F4]">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-serif font-bold text-[#1A1A1A] mb-16 leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          이렇게 짓습니다.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num}>
              <span className="font-inter text-[#FF5C35] font-bold text-xs tracking-widest">
                {step.num}
              </span>
              <h3 className="font-serif font-bold text-[#1A1A1A] text-[24px] mt-3 mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#6B7280] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Cases ───────────────────────────────────────── */
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

function Cases() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-serif font-bold text-[#1A1A1A] mb-12 leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          이렇게 시작했습니다.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {cases.map((c) => (
            <div
              key={c.id}
              className="flex flex-col h-full border border-[#E5E7EB] rounded-xl p-8 hover:border-[#FF5C35] hover:shadow-md transition-all"
            >
              {/* 태그 */}
              <span
                className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${
                  c.tagDone
                    ? 'border-[#FF5C35] text-[#FF5C35]'
                    : 'border-[#6B7280] text-[#6B7280]'
                }`}
              >
                {c.tag}
              </span>

              {/* 이름 */}
              <p className="text-sm text-[#6B7280] font-medium mb-3">{c.name}</p>

              {/* 핵심 카피 */}
              <h3
                className="font-serif font-bold text-[#1A1A1A] mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
              >
                {c.lines.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h3>

              {/* 서사 */}
              <p className="text-[15px] text-[#6B7280] leading-relaxed whitespace-pre-line mb-6 flex-1">
                {c.sub}
              </p>

              {/* 결과물 */}
              <p className="text-[13px] text-[#1A1A1A] font-medium mb-6 pb-6 border-b border-[#E5E7EB]">
                → {c.result}
              </p>

              {/* 링크 */}
              <a
                href={`/cases/${c.id}`}
                className="text-[#FF5C35] font-semibold text-sm hover:underline"
              >
                이야기 보기 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="font-serif font-bold text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          이야기 한 번으로 시작합니다.
        </h2>
        <Link
          to="/start"
          className="inline-block px-8 py-4 bg-[#FF5C35] text-white font-semibold text-[17px] rounded-md hover:bg-[#e54e2a] transition-colors mb-4"
        >
          이야기 들려주기
        </Link>
        <p className="text-sm text-[#6B7280] mt-4">* 부담 없이 이야기만 해도 됩니다.</p>
      </div>
    </section>
  )
}


export default App
