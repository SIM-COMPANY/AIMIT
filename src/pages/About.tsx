import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#6B7280] font-medium mb-4">About</p>
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            못 짓던 사람이,<br />
            이제 짓습니다.
          </h1>
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      {/* 서사 */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-14">

          <div>
            <p className="text-[17px] text-[#1A1A1A] leading-relaxed mb-4">
              15년 동안 마케팅 전략을 했습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              브랜드를 만들고, 캠페인을 기획하고, 콘텐츠를 썼습니다.
              잘했을 때도 있었고, 못했을 때도 있었습니다.
              그런데 잘했을 때와 못했을 때의 결말이 같았습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              회사가 바뀌면 처음부터였습니다. 내 이름이 남지 않았습니다.
            </p>
          </div>

          <div className="pl-6 border-l-2 border-[#FF5C35]">
            <p className="text-[17px] text-[#1A1A1A] leading-relaxed font-medium">
              "경험은 쌓였는데, 정작 내 것이 없다."
            </p>
          </div>

          <div>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              그런데 어느 날 다르게 봤습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              15년 동안 가장 보람 있었던 순간을 떠올려봤습니다.
              내가 빛나는 순간이 아니었습니다.
              내가 만든 구조 위에서 다른 사람이 빛나는 순간이었습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              저는 주연이 아니라 스태프였습니다.
              뒤에서 실행되게 하는 사람. 그게 제 방식이었습니다.
            </p>
          </div>

          <div className="pl-6 border-l-2 border-[#E5E7EB]">
            <p className="text-[17px] text-[#6B7280] leading-relaxed italic">
              부모님은 30년 동안 농사를 지었습니다.
              좋은 쌀이 있었습니다. 그런데 팔 방법이 없었습니다.
              마케팅을 15년 한 저도 막막했습니다.
              재료가 없는 게 아니었습니다. 구조가 없는 거였습니다.
            </p>
          </div>

          <div>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              그게 부모님만의 문제가 아니었습니다.
              오래 일한 사람들이 다 그랬습니다.
              재료는 충분했습니다. 꺼내는 방법을 몰랐을 뿐이었습니다.
            </p>
          </div>

          <div>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              어느 날 AI와 일하기 시작했습니다.
              처음엔 도구였습니다. 쓰다 보니 달랐습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              AI는 방향을 결정하지 않았습니다. 구조를 짜지도 않았습니다.
              하지만 내가 방향을 정하면, 구조를 짜는 속도가 달라졌습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              못 짓던 것들이 만들어지기 시작했습니다.
              홈페이지, 뉴스레터, 브랜드. 처음으로 내 이름이 붙었습니다.
            </p>
          </div>

          <div>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              그걸 나만 하기 아까웠습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">
              오래 일했는데 내 것이 없는 사람, 재료는 있는데 구조를 모르는 사람.
              그 사람들이 처음으로 자기 공간을 짓는 걸 돕고 싶었습니다.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              남을 빛나게 하는 것이 — 제가 빛나는 방식입니다.<br />
              그게 Aimit입니다.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-[15px] text-[#6B7280] leading-relaxed mb-1">심현보</p>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              마케팅 전략가 · Aimit 대표
            </p>
          </div>

        </div>
      </section>

      {/* Aimit 소개 */}
      <section className="py-20 px-6 bg-[#F8F7F4]">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#FF5C35] tracking-widest">Aimit</span>
          <h2
            className="font-serif font-bold text-[#1A1A1A] mt-4 mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            어제의 경험을 내일의 자산으로.
          </h2>
          <p className="text-[16px] text-[#6B7280] leading-relaxed mb-4">
            Aimit은 AI를 도구 삼아, 오래 일한 사람이 처음으로 자기 것을 짓도록 돕습니다.
          </p>
          <p className="text-[16px] text-[#6B7280] leading-relaxed">
            인터뷰 한 번으로 시작합니다. 경험을 꺼내고, 방향을 잡고, 공간을 짓고, 혼자 굴릴 수 있는 상태로 넘깁니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            이야기 한 번으로 시작합니다.
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
