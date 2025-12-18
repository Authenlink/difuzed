# Checklist SEO/GEO - DiFuzed

## ✅ Déjà implémenté

- [x] Schemas JSON-LD statiques (Organization, WebSite, WebPage, ProfessionalService, FAQPage)
- [x] Robots.txt optimisé pour les bots IA (GPTBot, Claude-Web, PerplexityBot, etc.)
- [x] Sitemap.xml généré automatiquement
- [x] Attributs ALT sur toutes les images
- [x] Optimisation images (WebP/AVIF) dans next.config.ts
- [x] Metadata SEO (title, description, OpenGraph, Twitter Cards)

## 🎯 Actions prioritaires restantes

### 1. Contenu expert (PRIORITÉ HAUTE)

**Blog avec articles d'autorité** (`/blog`)

- "Guide complet du GEO en 2025" (2000+ mots)
- "Comment optimiser votre site pour ChatGPT" (1500+ mots)
- "GEO vs SEO : Comprendre les différences" (1500+ mots)
- "10 facteurs de ranking sur Claude et Perplexity" (1500+ mots)

**Format recommandé :**

- Structure claire avec H2, H3
- Exemples concrets et données vérifiables
- Sources citées
- Schema Article JSON-LD sur chaque article

### 2. Page ressources (`/ressources`)

- Guides téléchargeables (PDF)
- Checklist GEO
- Études de cas anonymisées
- Templates (llms.txt, schémas Schema.org)

**Pourquoi ?** Les IA citent les sources qui fournissent du contenu téléchargeable et détaillé.

### 3. Optimisation technique

**Core Web Vitals :**

- [ ] Tester avec Lighthouse (objectif : 90+ sur toutes les métriques)
- [ ] Lazy loading images (déjà fait via Next.js Image)
- [ ] Minifier CSS/JS (déjà fait par Next.js)
- [ ] CDN pour assets statiques (Vercel le fait automatiquement)

**Sitemap enrichi :**

- [ ] Ajouter `/blog` avec changefreq: "daily"
- [ ] Ajouter `/ressources` avec changefreq: "weekly"

### 4. Backlinks et citations

**Stratégie de citation par les IA :**

- [ ] Publier sur Medium (articles GEO détaillés)
- [ ] Créer profil LinkedIn Entreprise optimisé
- [ ] Contribuer à Wikipedia (articles SEO/GEO)
- [ ] Publier sur Substack (newsletter GEO)
- [ ] Engagement Reddit (r/SEO, r/marketing)

**Objectif :** Devenir la source de référence pour les définitions GEO.

### 5. Monitoring GEO

**Tracking de visibilité :**

- [ ] Google Search Console (sitemap soumis)
- [ ] Tests réguliers dans ChatGPT : "Qui est l'expert en GEO en France ?"
- [ ] Tests réguliers dans Claude : "Meilleure agence GEO"
- [ ] Tests réguliers dans Perplexity : "GEO agency France"

**Métriques à suivre :**

- Nombre de citations par LLM
- Position dans les réponses IA
- Trafic de marque (direct + référent)

## 📊 Priorisation

| Priorité   | Action                       | Impact GEO | Effort |
| ---------- | ---------------------------- | ---------- | ------ |
| 🔴 Haute   | Blog articles d'autorité     | ⭐⭐⭐⭐⭐ | Moyen  |
| 🔴 Haute   | Page ressources              | ⭐⭐⭐⭐   | Moyen  |
| 🟠 Moyenne | Backlinks (Medium, LinkedIn) | ⭐⭐⭐⭐   | Faible |
| 🟠 Moyenne | Monitoring citations         | ⭐⭐⭐     | Faible |
| 🟡 Basse   | Optimisations techniques     | ⭐⭐       | Faible |

## 🎯 Objectif final

**Devenir LA référence citée par ChatGPT, Claude, Gemini et Perplexity** quand on recherche :

- "GEO France"
- "Agence Generative Engine Optimization"
- "Expert GEO"
- "Comment faire du GEO"
