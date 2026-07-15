import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'

const WA_LINK = 'https://wa.me/5542999850000'

const infoContato = [
  {
    icon: MessageCircle,
    titulo: 'WhatsApp',
    valor: '(42) 9 9985-0000',
    href: WA_LINK,
  },
  {
    icon: Phone,
    titulo: 'Telefone',
    valor: '(42) 9 9985-0000',
    href: 'tel:+5542999850000',
  },
  {
    icon: Mail,
    titulo: 'E-mail',
    valor: 'contato@alohaturismo.com.br',
    href: 'mailto:contato@alohaturismo.com.br',
  },
  {
    icon: MapPin,
    titulo: 'Localização',
    valor: 'Rua Leonardo Valente Hiczy, 414 – Guarapuava, PR',
    href: 'https://maps.google.com/?q=Rua+Leonardo+Valente+Hiczy+414+Guarapuava+PR',
  },
  {
    icon: Clock,
    titulo: 'Horário',
    valor: 'Seg à Sex: 08:00 às 18:00',
    href: null,
  },
]

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-secondary-100">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-primary-500 uppercase tracking-widest text-sm font-semibold text-center mb-3">
          Entre em Contato
        </p>
        <h2 className="section-title text-gray-900">Fale com a Aloha Turismo</h2>
        <div className="section-underline" />
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 text-lg">
          Solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você!
        </p>

        {/* WhatsApp CTA destaque */}
        <div className="bg-white border border-secondary-200 rounded-2xl p-8 text-center mb-10 shadow-sm">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Atendimento pelo WhatsApp</h3>
          <p className="text-gray-500 mb-6">
            A forma mais rápida de falar com a gente. Clique abaixo e inicie uma conversa!
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-xl transition-all inline-flex items-center gap-3 text-lg shadow-md"
          >
            <MessageCircle size={22} />
            Chamar no WhatsApp
          </a>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {infoContato.map(({ icon: Icon, titulo, valor, href }) => (
            <div key={titulo} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-secondary-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">{titulo}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-900 font-semibold hover:text-primary-500 transition-colors"
                  >
                    {valor}
                  </a>
                ) : (
                  <p className="text-gray-900 font-semibold">{valor}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
