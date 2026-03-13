import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function CaseUnclejoe() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors mb-8 inline-block">
            ← 홈으로
          </Link>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#FF5C35] text-[#FF5C35] mb-6">
            완성
          </span>
          <p className="text-sm text-[#6B7280] font-medium mb-4">조경만 · 금융교육 20년</p>
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            20년 동안 움직였는데<br />
            한 곳에 없었다.
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">
            유튜브, 칼럼, 강의. 다 흩어져 있었다.<br />
            흩어진 것들이 처음으로 내 공간에 모였다.
          </p>
        </div>
      </section>

      {/* 구분선 */}
      <div className="border-t border-[#E5E7EB]" />

      {/* 이야기 */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">01 · 상황</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              20년의 일이 어디에도 정리되지 않았다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              조경만은 20년 동안 금융교육 현장에 있었다. 증권사·보험사·금융기관을 거쳐 엉클조아카데미를 직접 운영했다.
              유튜브 채널도 있었고, 칼럼도 썼고, 강의도 했다. 그런데 어디서 찾아야 하는지 아는 사람이 없었다.
              본인도 설명하기 어려웠다. 흩어져 있으니까.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">02 · 발굴</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              딸 은세미, 아들 형찬이 이야기에서 시작됐다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              인터뷰를 시작했다. 강의 이력을 나열하는 게 아니었다. "어떻게 아이들에게 돈을 가르쳤나요?"
              용돈기입장부터 시작해서 100% 매칭 적금, 직접 주식 투자까지. 5년 뒤 형찬이 주식이 400% 수익을 냈다는 이야기가 나왔다.
              이게 진짜 자산이었다. 이론이 아닌, 자기 가족에게 먼저 써본 방법.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">03 · 설계</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              "하프타임"이라는 단어 하나로 방향이 잡혔다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              45~55세. 전반전은 끝났고 후반전을 어떻게 뛸지 막막한 사람들.
              조경만이 가진 경험이 정확히 그 자리에 맞았다. 금융 전문 지식이 아니라, 같은 나이대 아버지로서 먼저 해본 사람의 이야기.
              "하프타임클럽"이라는 이름이 자연스럽게 나왔다.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">04 · 결과</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              흩어졌던 것들이 한 곳에 모였다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              unclejohalftime.com. 20년의 경험이 처음으로 한 주소에 담겼다.
              유튜브 링크를 일일이 보내지 않아도 됐다. "여기 보세요" 한 마디면 됐다.
              처음 짓기 전과 후가 달랐다.
            </p>
          </div>

        </div>
      </section>

      {/* 결과물 카드 */}
      <section className="py-16 px-6 bg-[#F8F7F4]">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#FF5C35] tracking-widest">결과물</span>
          <div className="mt-6 border border-[#E5E7EB] rounded-xl p-8 bg-white">
            <p className="font-serif font-bold text-[#1A1A1A] text-[20px] mb-2">하프타임클럽 랜딩페이지</p>
            <p className="text-[15px] text-[#6B7280] mb-4">unclejohalftime.com</p>
            <a
              href="https://unclejohalftime.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5C35] font-semibold text-sm hover:underline"
            >
              사이트 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            당신의 이야기도<br />
            한 곳에 담을 수 있습니다.
          </h2>
          <Link
            to="/start"
            className="inline-block px-8 py-4 bg-[#FF5C35] text-white font-semibold text-[17px] rounded-md hover:bg-[#e54e2a] transition-colors"
          >
            이야기 들려주기
          </Link>
          <p className="text-sm text-[#6B7280] mt-4">* 부담 없이 이야기만 해도 됩니다.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
