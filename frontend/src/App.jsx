import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SobreNos from './components/SobreNos'
import Diferenciais from './components/Diferenciais'
import Frota from './components/Frota'
import Servicos from './components/Servicos'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import OnibusDetalhe from './pages/OnibusDetalhe'

function Home() {
  return (
    <>
      <Hero />
      <SobreNos />
      <Diferenciais />
      <Frota />
      <Servicos />
      <Depoimentos />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onibus/:slug" element={<OnibusDetalhe />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App
