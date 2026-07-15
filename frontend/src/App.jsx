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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onibus/:slug" element={<OnibusDetalhe />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App
