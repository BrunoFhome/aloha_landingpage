import { Shield, Clock, Star, Users } from 'lucide-react'

const stats = [
  { icon: Clock, value: '19+', label: 'Anos de Experiência' },
  { icon: Users, value: '5.000+', label: 'Clientes Atendidos' },
  { icon: Shield, value: '100%', label: 'Viagens Seguras' },
  { icon: Star, value: '5★', label: 'Avaliação dos Clientes' },
]

export default function SobreNos() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="border-l-4 pl-8" style={{ borderColor: '#fbbf24' }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#fbbf24' }}>
              Sobre Nós
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Mais de 19 anos levando você{' '}
              <span style={{ color: '#fbbf24' }}>com segurança</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A <strong>Aloha Turismo</strong> é uma empresa especializada em fretamento
              de ônibus para viagens. Com uma frota moderna e motoristas experientes,
              garantimos conforto e segurança em cada quilômetro percorrido.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Atendemos grupos, empresas, eventos, excursões e viagens personalizadas,
              sempre com o compromisso de oferecer o melhor serviço de transporte
              da região.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl p-6 text-center border-2 hover:shadow-lg transition-all"
                style={{ borderColor: '#fbbf24', backgroundColor: '#fffbeb' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fbbf24' }}>
                  <Icon size={22} className="text-gray-900" />
                </div>
                <p className="text-3xl font-extrabold text-gray-900 mb-1">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
