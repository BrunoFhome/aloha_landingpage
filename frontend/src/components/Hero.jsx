import { ChevronDown, ShieldCheck, Star, ArrowRight } from 'lucide-react'
import background from '../assets/background.jpg'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0b1224]">

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />
      {/* Overlay escuro para leitura */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1224]/95 via-[#0b1224]/75 to-[#0b1224]/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Fretamento de ônibus com{' '}
            <span style={{ color: '#fbbf24' }}>conforto e segurança</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            Ônibus Double Deck modernos para viagens turísticas, transporte
            corporativo, excursões e eventos. A Aloha Turismo leva seu grupo
            ao destino com pontualidade e cuidado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="https://wa.me/5542999850000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:brightness-110 text-gray-900"
              style={{ backgroundColor: '#fbbf24' }}
            >
              Peça seu orçamento agora <ArrowRight size={20} />
            </a>
            <a
              href="#frota"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg border-2 border-white/30 transition-all text-lg inline-flex items-center justify-center"
            >
              Ver nossa frota
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-2 text-gray-200 text-sm font-medium">
              <ShieldCheck size={18} style={{ color: '#fbbf24' }} />
              Motoristas certificados
            </div>
            <div className="flex items-center gap-2 text-gray-200 text-sm font-medium">
              <Star size={18} style={{ color: '#fbbf24' }} />
              Frota moderna e revisada
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
