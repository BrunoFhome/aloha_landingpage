import { Link } from 'react-router-dom'
import { Users, ChevronRight } from 'lucide-react'
import { frota } from '../data/frota'

export default function Frota() {
  return (
    <section id="frota" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="uppercase tracking-widest text-sm font-semibold text-center mb-3" style={{ color: '#fbbf24' }}>
          Nossa Frota
        </p>
        <h2 className="section-title text-gray-900">Conheça Nossos Veículos</h2>
        <div className="section-underline" />
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
          Frota moderna e bem equipada para garantir conforto e segurança em todas as viagens.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {frota.map((bus) => (
            <div
              key={bus.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border-2"
              style={{ borderColor: '#fde68a' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={bus.imagem}
                  alt={bus.nome}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#fbbf24' }}>
                  {bus.categoria}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1 leading-tight">{bus.nome}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{bus.descricaoCurta}</p>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                  <Users size={14} />
                  <span>{bus.poltronas}</span>
                </div>
                <Link
                  to={`/onibus/${bus.slug}`}
                  className="w-full text-gray-900 font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm hover:brightness-105"
                  style={{ backgroundColor: '#fbbf24' }}
                >
                  Ver Mais <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
