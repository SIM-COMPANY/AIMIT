import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function CaseHyunbo() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors mb-8 inline-block">
            ← 홈으로
          </Link>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#6B7280] text-[#6B7280] mb-6">
            진행 중
          </span>
          <p className="text-sm text-[#6B7280] font-medium mb-4">심현보 · 마케팅 전략가</p>
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            15년 일했는데<br />
            내 것이 없었다.
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">
            남의 브랜드만 만들었다.<br />
            경험은 쌓였는데 내 이름은 없었다.<br />
            처음으로 내 구조를 짓기 시작했다.
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
              잘해도 못해도 같은 결말이었다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              15년 동안 마케팅 전략을 했다. 브랜드를 만들고, 캠페인을 기획하고, 콘텐츠를 썼다.
              그런데 그게 전부 남의 것이었다. 회사가 바뀌면 처음부터였다.
              잘했을 때도, 못했을 때도 결과는 같았다. 내 이름이 남지 않았다.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">02 · 발굴</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              재료는 있었다. 구조가 없었을 뿐이다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              일을 되짚어 봤다. 15년치 경험이 있었다. 마케팅, 브랜딩, 전략. AI와 함께 일한 경험도 쌓이고 있었다.
              문제는 재료가 아니었다. 어디에 담을지를 몰랐다. 내 이름으로 된 공간이 없었다.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">03 · 설계</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              "처음 짓기"가 방향이 됐다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              오래 일한 사람이 처음으로 자기 것을 만드는 과정. 그게 콘텐츠가 됐다.
              AI와 함께 일하는 방식, 자동화의 삽질기, 브랜드를 짓는 과정.
              "내가 해봤다"는 것들만 썼다. 뉴스레터 이름은 "심현보의 처음 짓기"로 정했다.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-[#FF5C35] tracking-widest">04 · 현재</span>
            <h2 className="font-serif font-bold text-[#1A1A1A] text-[22px] mt-3 mb-4 leading-tight">
              지금 이 페이지도 그 과정 중 하나다
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Aimit은 내가 먼저 써보고 있는 서비스다. 내 브랜드를 짓는 것, 내 뉴스레터를 만드는 것, 이 홈페이지를 개발하는 것.
              전부 "처음 짓기"다. 진행 중이라는 태그가 아직 붙어 있는 이유다.
            </p>
          </div>

        </div>
      </section>

      {/* 결과물 카드 */}
      <section className="py-16 px-6 bg-[#F8F7F4]">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#FF5C35] tracking-widest">결과물</span>
          <div className="mt-6 space-y-4">
            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
              <p className="font-serif font-bold text-[#1A1A1A] text-[18px] mb-1">개인 브랜드 아카이브</p>
              <p className="text-[14px] text-[#6B7280]">Aimit 홈페이지 — 진행 중</p>
            </div>
            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
              <p className="font-serif font-bold text-[#1A1A1A] text-[18px] mb-1">심현보의 처음 짓기</p>
              <p className="text-[14px] text-[#6B7280] mb-3">maily.so 뉴스레터 — 발행 중</p>
              <a
                href="https://maily.so/hyunvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5C35] font-semibold text-sm hover:underline"
              >
                뉴스레터 보기 →
              </a>
            </div>
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
