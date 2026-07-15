import whatsappIcon from '../assets/whatsapp.png'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5542999850000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 hover:scale-110 transition-all drop-shadow-lg"
      aria-label="Falar pelo WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain" />
    </a>
  )
}
