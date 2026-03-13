import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/cases', label: '케이스' },
  { to: '/series', label: 'AI협업기' },
  { to: '/letters', label: '처음 짓기' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleClose = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" onClick={handleClose} className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
          Aimit
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[#1A1A1A] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            to="/start"
            className="px-4 py-2 bg-[#FF5C35] text-white text-sm font-semibold rounded-md hover:bg-[#e54e2a] transition-colors"
          >
            시작하기
          </Link>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={handleClose}
              className={`text-base font-medium transition-colors ${
                location.pathname === l.to ? 'text-[#1A1A1A]' : 'text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/start"
            onClick={handleClose}
            className="mt-2 text-center px-4 py-3 bg-[#FF5C35] text-white font-semibold rounded-md hover:bg-[#e54e2a] transition-colors"
          >
            시작하기
          </Link>
        </div>
      )}
    </nav>
  )
}
