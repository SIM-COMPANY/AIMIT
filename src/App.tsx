import { useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Start from './pages/Start'
import CaseUnclejoe from './pages/CaseUnclejoe'
import CaseHyunbo from './pages/CaseHyunbo'
import About from './pages/About'
import Letters from './pages/Letters'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/about" element={<About />} />
      <Route path="/letters" element={<Letters />} />
      <Route path="/cases" element={<Navigate to="/" replace />} />
      <Route path="/cases/unclejoe" element={<CaseUnclejoe />} />
      <Route path="/cases/hyunbo" element={<CaseHyunbo />} />
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
      <Diagnosis />
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

/* ─── Diagnosis ───────────────────────────────────── */
const diagnosisQuestions = [
  { q: '내가 누구에게 무엇을 파는지 한 문장으로 말할 수 있다', level: 1 },
  { q: '랜딩페이지와 온라인 신청서가 있다', level: 2 },
  { q: '재구매 고객이 있고, 그들이 모인 공간이 있다', level: 3 },
  { q: '월 매출이 손익분기점을 넘고 있다', level: 4 },
  { q: '고객 유입 채널이 2개 이상이고 팬이 생기고 있다', level: 5 },
]

const diagnosisResults = [
  {
    level: 1,
    tag: 'Level 1',
    title: '방향부터 잡겠습니다.',
    desc: '비즈니스 모델이 먼저입니다. 누구에게 무엇을 팔지 명확하게 만드는 것부터 시작합니다.',
    cta: '비즈니스 모델 설계하기',
  },
  {
    level: 2,
    tag: 'Level 2',
    title: '온라인 판매 흐름을 만들겠습니다.',
    desc: '랜딩페이지·신청서·CRM까지 광고 → 신청 → 고객 관리 흐름을 자동화합니다.',
    cta: '퍼널 + CRM 세팅하기',
  },
  {
    level: 3,
    tag: 'Level 3',
    title: '재구매 구조를 만들겠습니다.',
    desc: '단골풀을 세팅하고 뉴스레터를 시작합니다. 신규 고객보다 단골이 더 안정적입니다.',
    cta: '단골풀 세팅하기',
  },
  {
    level: 4,
    tag: 'Level 4',
    title: '성장을 다시 시작하겠습니다.',
    desc: '유입 채널을 늘리고 생산 시스템을 구축합니다. 나 없이도 돌아가는 구조로 만듭니다.',
    cta: '스케일업 시작하기',
  },
  {
    level: 5,
    tag: 'Level 5',
    title: '다음 시장으로 갑니다.',
    desc: '팬덤 시스템과 시장 다각화. 지금까지 쌓인 것을 자산으로 확장합니다.',
    cta: '다각화 설계하기',
  },
]

function Diagnosis() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false])

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const firstNo = checked.findIndex((v) => !v)
  const levelIndex = firstNo === -1 ? 4 : firstNo
  const result = diagnosisResults[levelIndex]
  const started = checked.some((v) => v)

  return (
    <section className="py-24 px-6 bg-[#F8F7F4]">
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-serif font-bold text-[#1A1A1A] mb-4 leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          지금 어디쯤인가요?
        </h2>
        <p className="text-[16px] text-[#6B7280] mb-12">해당하는 항목을 선택해주세요.</p>

        <div className="space-y-4 mb-12">
          {diagnosisQuestions.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full text-left flex items-center gap-4 px-6 py-4 rounded-xl border transition-all ${
                checked[i]
                  ? 'border-[#FF5C35] bg-white text-[#1A1A1A]'
                  : 'border-[#E5E7EB] bg-white text-[#6B7280]'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  checked[i] ? 'border-[#FF5C35] bg-[#FF5C35]' : 'border-[#D1D5DB]'
                }`}
              >
                {checked[i] && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="text-[15px] leading-relaxed">{item.q}</span>
            </button>
          ))}
        </div>

        {started && (
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-8">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#FF5C35] text-[#FF5C35] mb-4">
              {result.tag}
            </span>
            <h3
              className="font-serif font-bold text-[#1A1A1A] mb-3 leading-tight"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              {result.title}
            </h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed mb-6">{result.desc}</p>
            <Link
              to="/start"
              className="inline-block px-6 py-3 bg-[#FF5C35] text-white font-semibold text-[15px] rounded-md hover:bg-[#e54e2a] transition-colors"
            >
              {result.cta} →
            </Link>
          </div>
        )}
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
