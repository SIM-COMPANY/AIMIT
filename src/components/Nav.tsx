import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
          Aimit
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
          <Link to="/cases" className="hover:text-[#1A1A1A] transition-colors">케이스</Link>
          <Link to="/series" className="hover:text-[#1A1A1A] transition-colors">AI협업기</Link>
          <Link to="/letters" className="hover:text-[#1A1A1A] transition-colors">처음 짓기</Link>
          <Link to="/about" className="hover:text-[#1A1A1A] transition-colors">About</Link>
          <Link
            to="/start"
            className="px-4 py-2 bg-[#FF5C35] text-white text-sm font-semibold rounded-md hover:bg-[#e54e2a] transition-colors"
          >
            시작하기
          </Link>
        </div>
      </div>
    </nav>
  )
}
