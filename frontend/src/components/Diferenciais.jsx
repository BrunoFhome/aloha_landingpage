import { ShieldCheck, Armchair, Satellite, Headphones } from 'lucide-react'

const diferenciais = [
  {
    icone: ShieldCheck,
    titulo: 'Segurança em primeiro lugar',
    descricao: 'Motoristas experientes e veículos revisados, com checklist completo antes de cada saída.',
  },
  {
    icone: Armchair,
    titulo: 'Conforto do início ao fim',
    descricao: 'Poltronas leito e semi-leito reclináveis, ar-condicionado e banheiro a bordo.',
  },
  {
    icone: Satellite,
    titulo: 'Internet Starlink a bordo',
    descricao: 'Wi-Fi de alta velocidade via Starlink durante toda a viagem, mesmo nas estradas mais remotas.',
  },
  {
    icone: Headphones,
    titulo: 'Atendimento humano 24h',
    descricao: 'Você fala com uma pessoa de verdade, não com robô — inclusive durante a viagem.',
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0b1224' }}>
      {/* Brilhos sutis no fundo */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: '#fbbf24' }}
      />
      <div
        className="absolute -bottom-40 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: '#fbbf24' }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <p className="uppercase tracking-widest text-sm font-bold mb-4" style={{ color: '#fbbf24' }}>
          Por que a Aloha
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-14 max-w-xl">
          Diferenciais que se sentem na estrada.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item) => (
            <div
              key={item.titulo}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <item.icone size={30} style={{ color: '#fbbf24' }} className="mb-5" />
              <h3 className="text-white font-bold text-lg leading-snug mb-3">{item.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
