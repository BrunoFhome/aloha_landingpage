import { Building2, Users, Plane, Music, GraduationCap, MapPin } from 'lucide-react'

const servicos = [
  {
    icon: Building2,
    titulo: 'Transporte Corporativo',
    descricao: 'Soluções de transporte para empresas, fretamento de funcionários com pontualidade e segurança.',
  },
  {
    icon: Users,
    titulo: 'Viagens em Grupo',
    descricao: 'Fretamento para grupos de turismo, associações, igrejas e comunidades.',
  },
  {
    icon: Plane,
    titulo: 'Transfer Aeroporto',
    descricao: 'Serviço de traslado para aeroportos e terminais rodoviários com conforto.',
  },
  {
    icon: Music,
    titulo: 'Eventos e Shows',
    descricao: 'Transporte para eventos, shows, festivais e comemorações em geral.',
  },
  {
    icon: GraduationCap,
    titulo: 'Excursões Escolares',
    descricao: 'Transporte escolar para passeios, viagens pedagógicas e formaturas.',
  },
  {
    icon: MapPin,
    titulo: 'Viagens Personalizadas',
    descricao: 'Roteiros sob medida para qualquer destino, com planejamento completo da viagem.',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="uppercase tracking-widest text-sm font-semibold text-center mb-3" style={{ color: '#fbbf24' }}>
          O Que Oferecemos
        </p>
        <h2 className="section-title text-gray-900">Nossos Serviços</h2>
        <div className="section-underline" />
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 text-lg">
          Oferecemos soluções completas de fretamento para atender todas as necessidades de transporte.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map(({ icon: Icon, titulo, descricao }) => (
            <div
              key={titulo}
              className="bg-white rounded-2xl p-7 border-2 hover:shadow-lg transition-all duration-300 group"
              style={{ borderColor: '#fde68a' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: '#fbbf24' }}
              >
                <Icon size={26} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{titulo}</h3>
              <p className="text-gray-500 leading-relaxed">{descricao}</p>
              <div className="mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-20" style={{ backgroundColor: '#fbbf24' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
