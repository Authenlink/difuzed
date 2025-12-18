# Next.js, React et SEO : Guide des bonnes pratiques

## Le mythe de la "coquille vide"

### Le problème souvent évoqué

On entend souvent que React rend une "coquille vide" qui empêche Google d'indexer correctement les sites. **C'est partiellement vrai**, mais uniquement dans certains cas.

### Quand c'est vrai : Client-Side Rendering (CSR) pur

- Si tout le contenu est rendu côté client (avec `"use client"` + `useEffect` pour fetch les données), Google voit d'abord une page HTML quasi-vide
- Googlebot doit exécuter le JavaScript pour voir le contenu réel
- C'est plus lent, moins fiable, et certains crawlers (AI, autres moteurs) n'exécutent pas du tout le JS

### Quand c'est faux : Next.js bien configuré

Next.js n'est **PAS** du CSR pur ! Il offre plusieurs stratégies de rendu serveur qui résolvent complètement ce problème.

---

## Les stratégies de rendu Next.js

| Stratégie                                 | Description                               | Usage                                 | SEO           |
| ----------------------------------------- | ----------------------------------------- | ------------------------------------- | ------------- |
| **SSG** (Static Site Generation)          | Pages générées au build                   | Pages qui changent rarement           | ✅ Parfait    |
| **SSR** (Server-Side Rendering)           | Pages générées à chaque requête           | Contenu dynamique personnalisé        | ✅ Très bon   |
| **ISR** (Incremental Static Regeneration) | Pages statiques régénérées périodiquement | Contenu qui change de temps en temps  | ✅ Très bon   |
| **CSR** (Client-Side Rendering)           | Pages générées dans le navigateur         | Données privées/temps réel uniquement | ⚠️ Non indexé |

---

## Server Components vs Client Components

### Server Components (par défaut dans App Router)

Les Server Components sont rendus **entièrement sur le serveur**. Le HTML final est envoyé directement au navigateur et aux crawlers.

// Pas de "use client" = Server Component
async function Page() {
const data = await fetch('https://api.example.com/data')
return <div>{data.title}</div> // ✅ HTML complet envoyé à Google
}### Client Components avec `"use client"`

Même avec `"use client"`, Next.js fait un **pré-rendu HTML** sur le serveur. Le problème arrive uniquement quand on fetch les données côté client :

"use client"
import { useEffect, useState } from 'react'

// ❌ MAUVAISE PRATIQUE - données non indexables
function BadComponent() {
const [data, setData] = useState(null)

useEffect(() => {
fetch('/api/data').then(res => setData(res))
}, [])

return <div>{data?.title}</div> // Google voit: <div></div>
}---

## Bonnes pratiques pour le SEO

### 1. Garder `"use client"` au plus bas niveau possible

// page.tsx (Server Component)
async function Page() {
const data = await fetchData() // Fetch côté serveur

return (
<div>
<h1>{data.title}</h1> {/_ ✅ Contenu indexable _/}
<p>{data.description}</p> {/_ ✅ Contenu indexable _/}
<InteractiveButton /> {/_ Client component pour l'interactivité _/}
</div>
)
}### 2. Passer les données du serveur aux composants client

// page.tsx (Server Component)
async function Page() {
const data = await fetchData()
return <ClientComponent initialData={data} />
}

// ClientComponent.tsx (Client Component)
"use client"
function ClientComponent({ initialData }) {
// ✅ Les données sont déjà dans le HTML initial !
const [data, setData] = useState(initialData)

return <div>{data.title}</div>
}### 3. Réserver le client-side rendering pour l'interactivité

Utilisez `"use client"` uniquement pour :

- Événements utilisateur (onClick, onChange, etc.)
- Hooks React (useState, useEffect, useContext)
- APIs navigateur (localStorage, geolocation, etc.)
- Bibliothèques tierces qui nécessitent le DOM

### 4. Ne jamais fetch les données importantes dans useEffect

// ❌ À ÉVITER pour le contenu SEO-critique
useEffect(() => {
fetchImportantContent()
}, [])

// ✅ PRÉFÉRER le fetch côté serveur
async function Page() {
const content = await fetchImportantContent()
return <Content data={content} />
}---

## Architecture recommandée
