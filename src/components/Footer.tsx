import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <p className="font-serif font-bold text-[#1A1A1A] mb-1">Aimit</p>
          <p className="text-sm text-[#6B7280]">어제의 경험을 내일의 자산으로.</p>
        </div>
        <div className="flex gap-6 text-sm text-[#6B7280]">
          <Link to="/cases" className="hover:text-[#1A1A1A] transition-colors">케이스</Link>
          <Link to="/series" className="hover:text-[#1A1A1A] transition-colors">AI협업기</Link>
          <Link to="/letters" className="hover:text-[#1A1A1A] transition-colors">처음 짓기</Link>
          <Link to="/about" className="hover:text-[#1A1A1A] transition-colors">About</Link>
        </div>
      </div>
    </footer>
  )
}
