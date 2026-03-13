import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const FORMSPREE_ID = 'xyknjval'

export default function Start() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('done')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <h1
            className="font-serif font-black text-[#1A1A1A] leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            이야기 한 번으로<br />
            시작합니다.
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed mb-12">
            부담 없이 이야기만 해도 됩니다.<br />
            어떤 경험이 있는지, 뭐가 없어서 불편한지만 알려주세요.
          </p>

          {status === 'done' ? (
            <div className="py-12 text-center">
              <p
                className="font-serif font-bold text-[#1A1A1A] mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                이야기 잘 받았습니다.
              </p>
              <p className="text-[17px] text-[#6B7280]">곧 연락 드릴게요.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 이름 */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  이름 <span className="text-[#FF5C35]">*</span>
                </label>
                <input
                  type="text"
                  name="이름"
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-[16px] text-[#1A1A1A] placeholder-[#6B7280] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                />
              </div>

              {/* 하시는 일 */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  지금 하시는 일 <span className="text-[#FF5C35]">*</span>
                </label>
                <input
                  type="text"
                  name="하시는_일"
                  required
                  placeholder="예: 마케팅 15년차 / 강사 / 프리랜서 디자이너"
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-[16px] text-[#1A1A1A] placeholder-[#6B7280] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                />
              </div>

              {/* 없어서 불편한 것 */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  지금 없어서 불편한 것 <span className="text-[#FF5C35]">*</span>
                </label>
                <textarea
                  name="없어서_불편한_것"
                  required
                  rows={4}
                  placeholder="예: 내 이름으로 된 공간이 없다 / 경험은 있는데 어디서부터 시작해야 할지 모르겠다"
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-[16px] text-[#1A1A1A] placeholder-[#6B7280] focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  연락처 (이메일 또는 전화) <span className="text-[#FF5C35]">*</span>
                </label>
                <input
                  type="text"
                  name="연락처"
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-[16px] text-[#1A1A1A] placeholder-[#6B7280] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">전송 중 오류가 발생했습니다. 다시 시도해주세요.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-[#FF5C35] text-white font-semibold text-[17px] rounded-lg hover:bg-[#e54e2a] transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? '전송 중...' : '이야기 들려주기'}
              </button>

              <p className="text-center text-sm text-[#6B7280]">
                * 부담 없이 이야기만 해도 됩니다.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
