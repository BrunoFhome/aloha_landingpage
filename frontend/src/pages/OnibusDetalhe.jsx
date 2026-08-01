import { useEffect, useRef, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Bus, Users, Wifi, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { buscarPorSlug } from '../data/frota'

function Lightbox({ imagens, indice, onClose, onNavigate }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (indice === null) return
    closeButtonRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate((indice - 1 + imagens.length) % imagens.length)
      if (e.key === 'ArrowRight') onNavigate((indice + 1) % imagens.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [indice, imagens.length, onClose, onNavigate])

  if (indice === null) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos do interior"
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate((indice - 1 + imagens.length) % imagens.length) }}
        aria-label="Foto anterior"
        className="absolute left-3 md:left-8 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft size={40} />
      </button>
      <img
        src={imagens[indice]}
        alt={`Interior ${indice + 1}`}
        className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate((indice + 1) % imagens.length) }}
        aria-label="Próxima foto"
        className="absolute right-3 md:right-8 text-white/70 hover:text-white transition-colors"
      >
        <ChevronRight size={40} />
      </button>
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {indice + 1} / {imagens.length}
      </p>
    </div>
  )
}

const ANDARES = [
  { chave: 'inferior', label: 'Andar de Baixo' },
  { chave: 'superior', label: 'Andar de Cima' },
]

export default function OnibusDetalhe() {
  const { slug } = useParams()
  return <OnibusDetalheConteudo key={slug} slug={slug} />
}

function OnibusDetalheConteudo({ slug }) {
  const bus = buscarPorSlug(slug)
  const [andar, setAndar] = useState('inferior')
  const [fotoAberta, setFotoAberta] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!bus) return <Navigate to="/" replace />

  const fotosDoAndar = bus.interiores[andar]

  return (
    <main className="pt-24 bg-white">
      {/* Cabeçalho escuro com a foto do ônibus */}
      <section className="py-16" style={{ backgroundColor: '#123239' }}>
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="/#frota"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} /> Voltar para a frota
          </a>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide text-white mb-5" style={{ backgroundColor: '#e66c3b' }}>
                {bus.categoria}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                {bus.nome}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{bus.descricao}</p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 border border-white/15 text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Bus size={15} style={{ color: '#7bb7c1' }} /> {bus.tipo}
                </span>
                <span className="bg-white/10 border border-white/15 text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Users size={15} style={{ color: '#7bb7c1' }} /> {bus.poltronas}
                </span>
                {bus.wifi && (
                  <span className="bg-white/10 border border-white/15 text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <Wifi size={15} style={{ color: '#7bb7c1' }} /> Wi-Fi Starlink
                  </span>
                )}
                {bus.ar && <span className="bg-white/10 border border-white/15 text-gray-200 text-sm px-4 py-2 rounded-full">Ar-condicionado</span>}
                {bus.banheiro && <span className="bg-white/10 border border-white/15 text-gray-200 text-sm px-4 py-2 rounded-full">Banheiro</span>}
                {bus.tv && <span className="bg-white/10 border border-white/15 text-gray-200 text-sm px-4 py-2 rounded-full">TV</span>}
              </div>
            </div>

            <img
              src={bus.imagem}
              alt={bus.nome}
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Galeria do interior */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#e66c3b' }}>
            Por dentro
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            Interior do {bus.nome}
          </h2>

          <div className="flex gap-2 mb-8" role="tablist" aria-label="Andar do ônibus">
            {ANDARES.map(({ chave, label }) => (
              <button
                key={chave}
                role="tab"
                aria-selected={andar === chave}
                onClick={() => { setAndar(chave); setFotoAberta(null) }}
                className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
                style={
                  andar === chave
                    ? { backgroundColor: '#e66c3b', color: '#fff' }
                    : { backgroundColor: '#fff', color: '#374151', border: '1px solid #d1d5db' }
                }
              >
                {label}
              </button>
            ))}
          </div>

          {fotosDoAndar.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {fotosDoAndar.map((foto, i) => (
                <button
                  key={i}
                  onClick={() => setFotoAberta(i)}
                  className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all aspect-[4/3]"
                >
                  <img
                    src={foto}
                    alt={`Interior do ${bus.nome} — ${andar === 'inferior' ? 'andar de baixo' : 'andar de cima'} — foto ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Fotos deste andar em breve.</p>
          )}
        </div>
      </section>

      <Lightbox
        imagens={fotosDoAndar}
        indice={fotoAberta}
        onClose={() => setFotoAberta(null)}
        onNavigate={setFotoAberta}
      />
    </main>
  )
}
