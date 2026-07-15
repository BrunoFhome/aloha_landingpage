import { Quote, Star, ExternalLink } from 'lucide-react'

// TODO: substituir pelos depoimentos reais das avaliações do Google da Aloha
const depoimentos = [
  {
    texto:
      'Viagem excelente do início ao fim. Ônibus muito confortável, limpo e o motorista extremamente atencioso. Recomendo demais a Aloha!',
    nome: 'Cliente Aloha',
    cargo: 'Avaliação no Google',
    nota: 5,
  },
  {
    texto:
      'Contratamos para uma excursão com grupo grande e foi tudo impecável: pontualidade, conforto e atendimento nota dez.',
    nome: 'Cliente Aloha',
    cargo: 'Avaliação no Google',
    nota: 5,
  },
  {
    texto:
      'O Double Deck é maravilhoso, viajamos à noite e todos dormiram tranquilos. Comunicação clara desde o orçamento até o retorno.',
    nome: 'Cliente Aloha',
    cargo: 'Avaliação no Google',
    nota: 5,
  },
]

// TODO: trocar pelo link real do perfil da Aloha no Google (Maps / avaliações)
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Aloha+Turismo+e+Transportes+avalia%C3%A7%C3%B5es'

function Estrelas({ nota }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < nota ? '#fbbf24' : 'none'}
          style={{ color: '#fbbf24' }}
        />
      ))}
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="uppercase tracking-widest text-sm font-semibold text-center mb-3" style={{ color: '#fbbf24' }}>
          Depoimentos
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight mb-14 max-w-2xl mx-auto">
          Quem viaja com a gente, volta.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {depoimentos.map((dep) => (
            <div
              key={dep.texto}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Quote size={36} fill="#fbbf24" style={{ color: '#fbbf24' }} className="mb-5" />
              <Estrelas nota={dep.nota} />
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">"{dep.texto}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{dep.nome}</p>
                <p className="text-gray-500 text-sm">{dep.cargo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-full px-7 py-3.5 font-semibold text-gray-800 transition-all"
          >
            {/* Logo "G" do Google */}
            <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            Ver todas as avaliações no Google
            <ExternalLink size={16} className="text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  )
}
