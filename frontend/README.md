# Aloha Turismo

Site institucional da Aloha Turismo e Transportes (fretamento de ônibus em Guarapuava/PR). React + Vite + Tailwind CSS, sem backend — contato via WhatsApp/telefone/e-mail.

## Scripts

```bash
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (gera dist/)
npm run preview  # serve o build de produção localmente
npm run lint     # checagem de lint
```

## Estrutura

- `src/components` — seções da home (Hero, Frota, Serviços, Contato, etc.)
- `src/pages/OnibusDetalhe.jsx` — página de detalhe de cada veículo (`/onibus/:slug`)
- `src/data/frota.js` — dados e fotos da frota
- `public/` — favicons, `robots.txt`, `sitemap.xml`, imagem de Open Graph

## Deploy

Deploy configurado para Vercel (`vercel.json`), com rewrite de SPA e headers de segurança.
