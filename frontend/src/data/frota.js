import busPremium from '../assets/frota/Branco.png'
import busComfort from '../assets/frota/bus2.jpeg'
import busSemiLeito from '../assets/frota/Cinzaa.png'

// Carrega todas as fotos de interior, indexadas pelo nome do arquivo (sem extensão)
const interiores = import.meta.glob('../assets/interior/*.jpeg', { eager: true, import: 'default' })

const interioresPorNome = {}
for (const [caminho, imagem] of Object.entries(interiores)) {
  const nome = caminho.split('/').pop().replace(/\.jpeg$/i, '')
  interioresPorNome[nome] = imagem
}

// Cada ônibus é Double Deck (dois andares). O andar de cada foto vem do
// próprio nome do arquivo (sufixo "_cima" ou "_baixo"); fotos sem esse
// sufixo (ex: "_banheiro") são tratadas como andar de baixo.
const galeriaPorPrefixo = (prefixo) => {
  const nomes = Object.keys(interioresPorNome)
    .filter((nome) => nome.toLowerCase().startsWith(prefixo.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const inferior = []
  const superior = []
  for (const nome of nomes) {
    const lista = nome.includes('_cima') ? superior : inferior
    lista.push(interioresPorNome[nome])
  }
  return { inferior, superior }
}

export const frota = [
  {
    slug: 'double-deck-premium',
    nome: 'Double Deck Premium',
    categoria: 'Semi-Leito / Leito',
    descricaoCurta: 'Ônibus Double Deck de alto padrão com acabamento luxuoso.',
    descricao:
      'Nosso Double Deck Premium é o topo de linha da frota Aloha. Com dois andares e ' +
      'acabamento em alto padrão, oferece poltronas semi-leito no piso superior e leito ' +
      'no piso inferior — a escolha ideal para viagens longas em que o conforto faz toda ' +
      'a diferença. Perfeito para excursões, turismo e grupos que querem viajar com o ' +
      'máximo de qualidade.',
    imagem: busPremium,
    interiores: galeriaPorPrefixo('branco'),
    poltronas: '52 lugares',
    tipo: 'Semi-Leito + Leito (piso inferior)',
    wifi: true, ar: true, banheiro: true, tv: true,
  },
  {
    slug: 'double-deck-comfort-premium',
    nome: 'Double Deck Comfort Premium',
    categoria: 'Leito',
    descricaoCurta: 'Ônibus Double Deck com amplo espaço e conforto superior.',
    descricao:
      'O Double Deck Comfort Premium combina o amplo espaço de um ônibus de dois andares ' +
      'com poltronas leito espaçosas e reclináveis. Equipado com Wi-Fi a bordo, ' +
      'ar-condicionado e banheiro, garante uma viagem tranquila e confortável para todo o grupo.',
    imagem: busComfort,
    interiores: galeriaPorPrefixo('azul'),
    poltronas: '49 lugares',
    tipo: 'Leito',
    wifi: true, ar: true, banheiro: true, tv: true,
  },
  {
    slug: 'double-deck-semi-leito',
    nome: 'Double Deck Semi-Leito',
    categoria: 'Semi-Leito',
    descricaoCurta: 'Ônibus Double Deck para viagens longas com máximo conforto.',
    descricao:
      'Ideal para viagens longas e excursões, o Double Deck Semi-Leito oferece poltronas ' +
      'reclináveis com apoio de pernas, dois andares de amplo espaço interno, ar-condicionado ' +
      'e banheiro a bordo. Conforto e segurança para seu grupo chegar bem ao destino.',
    imagem: busSemiLeito,
    interiores: galeriaPorPrefixo('cinza'),
    poltronas: '60 lugares',
    tipo: 'Semi-Leito',
    wifi: true, ar: true, banheiro: true, tv: false,
  },
]

export const buscarPorSlug = (slug) => frota.find((bus) => bus.slug === slug)
