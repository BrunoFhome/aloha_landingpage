function IconeInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconeFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="footer">
      {/* Main footer */}
      <div style={{ backgroundColor: '#0b1224' }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                MLM Aloha Turismo e Transportes LTDA.<br />
                Fretamento de ônibus com qualidade, segurança e pontualidade.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/alohaturismoguarapuava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors text-base inline-flex items-center gap-2 w-fit"
                >
                  <IconeInstagram />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/alohaguarapuava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors text-base inline-flex items-center gap-2 w-fit"
                >
                  <IconeFacebook />
                  Facebook
                </a>
              </div>
            </div>

            {/* Menu */}
            <div>
              <p className="font-bold mb-6 uppercase tracking-widest text-sm" style={{ color: '#fbbf24' }}>
                Menu
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  ['Início', '/#inicio'],
                  ['Sobre Nós', '/#sobre'],
                  ['Nossa Frota', '/#frota'],
                  ['Serviços', '/#servicos'],
                  ['Contato', '/#footer'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-gray-200 hover:text-white transition-colors text-base">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <p className="font-bold mb-6 uppercase tracking-widest text-sm" style={{ color: '#fbbf24' }}>
                Contato
              </p>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="https://wa.me/5542999850000" target="_blank" rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors text-base">
                    WhatsApp: (42) 9 9985-0000
                  </a>
                </li>
                <li className="text-gray-200 text-base">alohaturismo@hotmail.com</li>
                <li className="text-gray-200 text-base">
                  Rua Leonardo Valente Hiczy, 414<br />
                  Guarapuava – PR
                </li>
                <li className="text-gray-200 text-base">Seg à Sex: 08:00 às 18:00</li>
              </ul>
            </div>

            {/* Mapa */}
            <div>
              <p className="font-bold mb-6 uppercase tracking-widest text-sm" style={{ color: '#fbbf24' }}>
                Localização
              </p>
              <div className="rounded-xl overflow-hidden border-2 border-gray-600">
                <iframe
                  title="Localização Aloha Turismo"
                  src="https://maps.google.com/maps?q=ALOHA+TRANSPORTES+E+TURISMO+Guarapuava+PR&output=embed&hl=pt-BR"
                  width="100%"
                  height="190"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/ALOHA+TRANSPORTES+E+TURISMO./@-25.3593684,-51.4789768,18z/data=!3m1!4b1!4m6!3m5!1s0x94ef37e5f0d42345:0x1c341796f1339403!8m2!3d-25.3593708!4d-51.4765413!16s%2Fg%2F11flgbzbjr?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm text-gray-400 hover:text-white transition-colors inline-block"
              >
                Abrir no Google Maps
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MLM Aloha Turismo e Transportes LTDA. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm">CNPJ: 18.029.571/0001-14</p>
        </div>
      </div>
    </footer>
  )
}
