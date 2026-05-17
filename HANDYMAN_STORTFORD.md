# HANDYMAN_STORTFORD.md — Pasquale Rocchida

> Creato: Maggio 2026

---

## DATI CLIENTE

| Campo | Valore |
|---|---|
| Nome | Pasquale Rocchida — brand: **QuickFix Property Maintenance** |
| Settore | Handyman / Home Maintenance |
| Località | Bishop's Stortford, Hertfordshire, UK |
| WhatsApp | +44 7746 187685 (UK) → https://wa.me/447746187685 |
| Email | da definire |
| Telefono (UK) | 07746 187685 · `tel:+447746187685` (stesso numero su WhatsApp) |
| Stato contratto | Nessuno — preventivo da effettuare in seconda fase |

---

## PROGETTO

| Campo | Valore |
|---|---|
| Tipo | Sito vetrina Next.js 16 |
| Stack | Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion |
| Remote origin | https://github.com/alessandro2506/handyman-stortford (account personale, collegato a Vercel) |
| Remote alvenco | https://github.com/AlvencoLtd/handyman-stortford (org, archivio sincronizzato) |
| Deploy demo | https://handyman-stortford.vercel.app |
| Dominio finale | da acquistare (incluso nel preventivo) — candidato: handymanstortford.co.uk |
| Benchmark design | alvenco-demo.vercel.app |

---

## SITEMAP

1. Home
2. Services
3. Areas Covered
4. FAQ
5. About
6. Gallery
7. Reviews
8. Contact

---

## FEATURE SET

- Hero con CTA doppia (Get a Quote + WhatsApp UK `wa.me/447746187685`)
- Floating WhatsApp button fisso (stesso deep link UK)
- Scroll-to-top con effetto ring (REGOLA GLOBALE Alvenco)
- **Navbar**: crest brand **quickfix-house-tools-mark.svg** (logo grande, padding verticale ridotto es. `py-1` sulla barra desktop); link menu ravvicinati al logo · CTA «Get a Quote»
- **Footer**: stesso crest SVG molto più visibile delle dimensioni storiche compatte (`h-*` aumentato)
- **Trust bar**: riga pillar (icone Lucide: check, clock, shield, star) · sotto fascia full-width **`trustbar-tools-strip.svg`** (utensili bianchi + testo HANDYMAN); riempimento SVG **`#1a3a6b`** (= `--primary`) per continuità con lo sfondo sezione · asset ritagliato (clip-path / margin negativi nel layout) per ridurre vuoto nell’arte file e avvicinarla alla copy sopra
- Sezione **Services**: **9** servizi in `src/lib/services.ts`; home usa **prime 6 card** tramite `HOME_PREVIEW_SERVICES` (slice delle 9)
- Sezione aree coperte (Areas)
- Pagina About
- Pagina **FAQ** (`/faq`): 12 Q&A in `src/lib/faq.ts`, schema **FAQPage** (JSON-LD inline), **FaqStrip** in home tra Reviews e Contact
- Reviews strip
- Gallery (asset locali in `/public/images/site/` allineati ai servizi ove possibile)
- Form contatto
- Footer: telefono, WhatsApp, link **Facebook**
- **SEO**: `sitemap.ts` + `robots.ts` (App Router); **Open Graph** + **Twitter** globali in `layout.tsx`; `generateMetadata` + OG per pagine interne (Services, Areas, About, Reviews, Gallery, Contact, FAQ)
- Schema markup **LocalBusiness** esteso in `layout.tsx` (`url`, `sameAs` Facebook, `hasOfferCatalog` servizi, `areaServed` ampliato)

---

## SEO TARGET

- handyman Bishop's Stortford
- local handyman Bishop's Stortford
- home maintenance Bishop's Stortford
- property maintenance Bishop's Stortford
- small repairs Bishop's Stortford
- furniture assembly Bishop's Stortford

---

## SERVIZI DA RAPPRESENTARE

1. Small Repairs
2. Furniture Assembly
3. Wall Fixing & Shelving
4. Painting & Decorating
5. Plumbing
6. Electrical
7. Garden Maintenance
8. Laminated Flooring
9. Property Maintenance

---

## GIT & DEPLOY

### Struttura remote
- **`origin`**: `github.com/alessandro2506/handyman-stortford` — repo personale, collegata a Vercel (Hobby plan compatibile)
- **`alvenco`**: `github.com/AlvencoLtd/handyman-stortford` — org, archivio sincronizzato manualmente
- **Push standard**: `git push origin main && git push alvenco main`

### STEP 1 — Repo personale (Cursor)
```bash
# Prima crea repo su https://github.com/new
# Account: alessandro2506 | Nome: handyman-stortford | Visibilità: public
git init
git add .
git commit -m "feat: initial handyman site"
git remote add origin https://github.com/alessandro2506/handyman-stortford.git
git push -u origin main
```

### STEP 2 — Mirror org AlvencoLtd (Cursor)
```bash
# Prima crea repo su https://github.com/orgs/AlvencoLtd/repositories
# Nome: handyman-stortford | Visibilità: public
git remote add alvenco https://github.com/AlvencoLtd/handyman-stortford.git
git push alvenco main
```

### STEP 3 — Vercel (Alex)
- Vai su https://vercel.com/new
- Importa `alessandro2506/handyman-stortford` (account personale — NON l'org)
- Framework: Next.js — Root directory: vuota
- Project name: `handyman-stortford`
- Deploy e verifica 200 su https://handyman-stortford.vercel.app

### STEP 4 — Aggiorna HANDYMAN_STORTFORD.md (Cursor)
- **Da aggiornare** dopo ogni blocco milestone (palette, logo, Trust bar, navbar, contenuti cliente) — vedi changelog in fondo.

> **Nessuna GitHub Action, nessun PAT, nessun Secret.** Pattern standard Alvenco: doppio remote manuale.

---

## STATO AVANZAMENTO

- [x] Brief analizzato
- [x] File .md creato
- [x] CLAUDE.md aggiornato
- [x] Prompt Cursor generato
- [x] Repo personale `alessandro2506/handyman-stortford` creata e pushata (`origin`)
- [x] Repo org `AlvencoLtd/handyman-stortford` disponibile come mirror (`alvenco`)
- [x] Sviluppo Next.js avviato
- [x] Deploy Vercel (demo: `handyman-stortford.vercel.app`, repo collegata a `origin`)
- [ ] Revisione con cliente
- [ ] Contratto e preventivo

---

## CONTENUTI

- **Immagini servizi/gallery/trust**: preferenza **PNG locali** sotto **`/public/images/site/`** (naming slug servizio dove applicabile — es. `small-repairs.png`; asset banner trust storico **`handyman-banner.png`** disponibile ma la strip HANDYMAN in home è ora **SVG** dedicato)
- **Logo / brand**: crest vettoriale **`/public/images/site/quickfix-house-tools-mark.svg`** (Navbar + Footer); versione raster generabile da script `scripts/build_quickfix_house_tools_mark.py` + template **`/public/source-assets/house-tools-mark-template.png`** → output **`quickfix-house-tools-mark.png`** (non obbligatoria se si usa solo l’SVG)
- **HANDYMAN strip**: **`/public/images/site/trustbar-tools-strip.svg`** (+ legacy PNG `trustbar-tools-strip.png` se ancora nel repo ma non più referenziato dal componente)
- **Foto on-site cliente**: integrate nel tempo (set attuale usato nei servizi / gallery quando applicabile al brief)
- **Testi**: in inglese, tone of voice locale / chiaro — brand **QuickFix Property Maintenance**

---

## NOTE OPERATIVE

### Contatti UK (go-live)
- **WhatsApp / click-to-chat**: `https://wa.me/447746187685` (usato ovunque: Hero, Contact, Footer, floating button).
- **Telefono formato UK**: visualizzazione `07746 187685`, link `tel:+447746187685`.

### Brand & asset
- Nome brand: **QuickFix Property Maintenance** (non wording generico tipo “Rocchida Handyman” nel sito).
- **Crest homepage/header**: `public/images/site/quickfix-house-tools-mark.svg` — knockout interni **`#f8faf5`** (knock-out sopra gli strati blu export); il rettangolo di sfondo sul viewBox pieno **non** va restituito nel file pubblicato (solo trasparenza attorno alla crest). Wordmark sulla crest: Quick / Fix bip colore · Property Maintenance payoff.
- **Wordmark/tool strip trust**: `public/images/site/trustbar-tools-strip.svg` — nell’arte i fill blu molto scuri (**es. `#002042` nell’export**) sono stati normalizzati a **`#1a3a6b`** per fusione con `--primary` Tailwind/globals.
- In repo può essere presente **`public/logo-quickfix.svg`** (grafica precedente tipo “solo logo”) — uso corrente vetrina: crest casa+strumenti sopra citata.

### Layout componenti chiave (`src/components/…`)
- `layout/Navbar.tsx` — crest SVG, logo dimensioni elevate, **`py-1`** barra, nav affiancata al marchio · CTA a destra.
- `layout/Footer.tsx` — stesso crest, altezza maggiore rispetto al vecchio **`h-12`**.
- `sections/TrustBar.tsx` — griglia pillar + **Immagine Next** sulla strip **`trustbar-tools-strip.svg`** (`object-contain`, `clip-path:inset(...)` dall’alto per togliere cielo SVG, **margin-top negativo** sulla fascia per chiudere lo spazio sotto alla copy prima del refactor).

### Dati & tooling
- **Palette** (`globals.css`): `--primary: #1a3a6b`; `--accent: #6dbe45`; ecc. (legacy doc con maiuscole equivalgono.)
- **`src/lib/services.ts`**: `SERVICES` (9 elementi); `HOME_PREVIEW_SERVICES = SERVICES.slice(0, 6)` per preview home — **mapping immagini**: verificare coppie titolo/path (historical swap Wall Fixing ↔ Painting decorator path nomi file se documentato nei commit).
- **`src/lib/gallery.ts`**: `GALLERY_ITEMS` sincronizzato con asset `/images/site/` ove previsto.
- **Facebook footer**: https://www.facebook.com/profile.php?id=61587750327501  
- Rigenerazione asset raster crest (facoltativo): `python3 scripts/build_quickfix_house_tools_mark.py`.

### Tech note
- `allowFullScreen` con **`S`** maiuscola in JSX/TSX — `allowFullscreen` minuscolo causa errore build React/TS.
- **`next.config.ts`**: SVG immagini ammesse per `next/image` (impostazioni `dangerouslyAllowSVG` + CSP note).

### Repo & push
- **Push abituale**: `git push origin main && git push alvenco main` (sync mirror org).

### Ancora da brief / cliente
- **Email** pubblica sul sito: da confermare prima del definitivo cliente.
- **Dominio** produzione (`handymanstortford.co.uk` candidato): acquisto/install seconda fase preventivo.

---

*Per hash commit granulari dopo Maggio 2026: cronologia `git log` sul branch `main`.*

---

## Changelog

| Data | Modifica |
|---|---|
| Maggio 2026 | File creato — progetto avviato, brief analizzato |
| Maggio 2026 | Sezione GIT & DEPLOY corretta: doppio remote manuale (origin + alvenco), nessuna GitHub Action — pattern standard Alvenco |
| 16 Maggio 2026 | Fix immagini non pertinenti; gallery nove voci didascalie; Areas con iframe Maps reale (commit storico sul repo ~ `74695bc`) |
| Maggio 2026 | Rollout marchio **QuickFix Property Maintenance**: palette `globals.css`, metadata/SEO/schema, **`logo-quickfix.svg`** poi sostituito dalla **crest casa+strumenti** |
| Maggio 2026 | Contatti **UK**: `wa.me/447746187685`, `tel:+447746187685`, display **07746 187685** (Hero, Contact, Footer, floating WhatsApp) |
| Maggio 2026 | **9 servizi** in `SERVICES`; home anteprima **6** tramite `HOME_PREVIEW_SERVICES` |
| Maggio 2026 | Footer link **Facebook**; foto servizi/on-site dove integrate sotto **`/public/images/site/`** |
| Maggio 2026 | **Trust bar**: sfondo `--primary`; striscia tool da PNG full-bleed → strip **inline poi full-width**; asset finale **`trustbar-tools-strip.svg`** con fill **`#1a3a6b`**; layout con **clip-path** + **negative margin** per ridurre distanza pillar → HANDYMAN e ingrandire resa grafica |
| Maggio 2026 | Navbar: crest **quickfix-house-tools-mark.svg**, logo sempre più grande, **padding verticale ridotto**, menu ravvicinato al brand |
| Maggio 2026 | Footer: crest SVG ingrandito (non più **`h-12`** minuto) |
| Maggio 2026 | Crest SVG trasparenza: rimosso fondo `#f8faf5` sul viewBox; knock-out lettering/finestre **`#f8faf5`** sopra gli strati blu — alfa vera sui “buchi” solo con refactoring boolean/maschere nell’Illustrator in export futuro |
| Maggio 2026 | Script opzionale `scripts/build_quickfix_house_tools_mark.py` + template `public/source-assets/house-tools-mark-template.png` per PNG crest |
| 17 Maggio 2026 | Documento HANDYMAN_STORTFORD.md riallineato allo stato codebase (trust strip SVG, navbar densa/crest grande, checklist deploy demo) |
| 17 Maggio 2026 | SEO completo: sitemap.ts, robots.ts, generateMetadata+OG su tutte le pagine, JSON-LD LocalBusiness espanso con hasOfferCatalog e sameAs Facebook. Pagina FAQ (12 domande, FAQPage schema), FaqStrip in homepage, FAQ in navbar. |

