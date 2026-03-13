import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const letters = [
  {
    no: '0',
    title: '나는 왜 15년 동안 내 것이 없었나',
    date: '2026-03-13',
    url: 'https://maily.so/hyunvo/posts/10z30e4jzlw',
    published: true,
  },
  {
    no: '1',
    title: '유튜브 영상을 직접 보지 않아도 되는 날이 왔습니다',
    date: '2026-03-17',
    url: null,
    published: false,
  },
  {
    no: '2',
    title: 'AI한테 내 인생을 구술했더니 패턴이 보였다',
    date: '2026-03-24',
    url: null,
    published: false,
  },
  {
    no: '3',
    title: 'AI와 토론했습니다, 결정은 내가 했습니다',
    date: '2026-03-31',
    url: null,
    published: false,
  },
]

export default function Letters() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#6B7280] font-medium mb-4">처음 짓기</p>
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            심현보의 처음 짓기
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed mb-2">
            내 것이 없던 사람이 자기 세계를 만들기 시작한 기록.
          </p>
          <a
            href="https://maily.so/hyunvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#FF5C35] font-semibold hover:underline"
          >
            maily.so에서 구독하기 →
          </a>
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {letters.map((l) => (
            <div key={l.no} className="py-8 flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#FF5C35] tracking-widest">{l.no}호</span>
                  <span className="text-xs text-[#6B7280]">{l.date}</span>
                  {!l.published && (
                    <span className="text-xs text-[#6B7280] border border-[#E5E7EB] px-2 py-0.5 rounded-full">
                      준비 중
                    </span>
                  )}
                </div>
                <p className="font-serif font-bold text-[#1A1A1A] text-[18px] leading-snug">
                  {l.title}
                </p>
              </div>
              {l.published && l.url && (
                <a
                  href={l.url}
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
