import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/aloha_logo.png'
import whatsappIcon from '../assets/whatsapp.png'

const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre Nós', href: '/#sobre' },
  { label: 'Nossa Frota', href: '/#frota' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Contato', href: '/#footer' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" style={{ borderBottom: '3px solid #fbbf24' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/#inicio" className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
          <img src={logo} alt="Aloha Turismo" className="h-16 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary-500 transition-colors font-medium text-sm relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#fbbf24' }} />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5542999850000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          Solicitar Orçamento
        </a>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t-2 px-4 py-4 flex flex-col gap-4" style={{ borderColor: '#fbbf24' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary-500 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5542999850000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center gap-2 mt-2 text-sm"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
