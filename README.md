# HvanA | Toegankelijke website

Voor de leertaak **All Human Accessible Website** heb ik de columns-pagina van HvanA verder ontwikkeld, met de focus op toegankelijkheid, gebruiksvriendelijkheid en responsive design.

Het doel was om een overzichtelijke website te maken die voor zoveel mogelijk gebruikers goed te bedienen en te begrijpen is, ongeacht het apparaat of de manier waarop iemand navigeert.

**[Bekijk de live website](https://justinverbon1234.github.io/all-human-accessible-website/)**

## Inhoudsopgave

- [Beschrijving](#beschrijving)
- [Toegankelijkheid](#toegankelijkheid)
- [Technieken](#technieken)
- [Projectstructuur](#projectstructuur)
- [Installatie](#installatie)
- [Verbeterpunten](#verbeterpunten)
- [Bronnen](#bronnen)
- [Licentie](#licentie)

## Beschrijving

HvanA is een nieuwsplatform voor studenten van de Hogeschool van Amsterdam. Voor dit project heb ik de columns-pagina opnieuw vormgegeven en verder verbeterd.

De oorspronkelijke columns-pagina bevatte veel artikelen onder elkaar. Ik heb ervoor gekozen om de nadruk te leggen op de nieuwste column en daarnaast drie andere columns te tonen. Hierdoor blijft de pagina overzichtelijk en kunnen bezoekers sneller zien welke artikelen interessant zijn.

De pagina bestaat uit een introductie, een uitgelichte column, een overzicht van andere columns en een navigatiemenu met zoekfunctie.

## Toegankelijkheid

Tijdens deze leertaak heb ik vooral gekeken naar hoe de website toegankelijker gemaakt kon worden. Daarbij heb ik rekening gehouden met de WCAG-richtlijnen en geprobeerd zoveel mogelijk gebruik te maken van de standaardmogelijkheden van HTML en CSS.

### 1. Toetsenbordnavigatie

Om de website beter toegankelijk te maken voor gebruikers die met een toetsenbord navigeren, heb ik een skip-link toegevoegd. Hiermee kunnen bezoekers direct naar de hoofdinhoud navigeren zonder eerst alle navigatielinks te doorlopen.

Daarnaast heb ik `:focus-visible` gebruikt om interactieve elementen een duidelijke focusrand te geven. Hierdoor is beter zichtbaar welk element geselecteerd is tijdens het navigeren.

### 2. Kleurcontrast en donkere modus

Ik heb de kleuren van de website aangepast om de leesbaarheid in zowel de lichte als donkere modus te verbeteren.

Met CSS custom properties worden de kleuren centraal beheerd. Voor bepaalde merkkleuren zijn aparte tekstkleuren ingesteld om voldoende contrast te behouden.

De donkere modus houdt rekening met de systeemvoorkeur van de gebruiker via `prefers-color-scheme`. Daarnaast kunnen bezoekers zelf van thema wisselen. Met JavaScript wordt deze voorkeur opgeslagen in `localStorage`.

### 3. Toegankelijke navigatie en zoekfunctie

Voor het navigatiemenu en de zoekfunctie heb ik gebruikgemaakt van de HTML-elementen `<details>` en `<summary>`.

Deze elementen hebben standaard functionaliteit voor het openen en sluiten van onderdelen. Hierdoor blijft de basisnavigatie bruikbaar wanneer JavaScript is uitgeschakeld.

JavaScript wordt alleen gebruikt voor aanvullende functionaliteit, zoals het automatisch focussen op het zoekveld, het sluiten met Escape en het aanpassen van de navigatie op grotere schermen.

### Overige verbeteringen

Naast deze drie onderdelen heb ik ook aandacht besteed aan:

- Semantische HTML voor een duidelijke paginastructuur.
- Beschrijvende alt-teksten bij afbeeldingen.
- Responsive layouts voor verschillende schermformaten.
- `prefers-reduced-motion` om animaties te beperken wanneer gebruikers dat aangeven.
- WebP-afbeeldingen en lazy loading om onnodig laden te verminderen.

## Technieken

De website is gebouwd met **HTML, CSS en JavaScript**, zonder externe frameworks.

| Techniek | Toepassing |
|---|---|
| HTML5 | Semantische structuur en native interactieve elementen |
| CSS3 | Layout, responsive design, animaties en thema's |
| JavaScript | Thema opslaan en aanvullende navigatiefunctionaliteit |
| GitHub Pages | Hosting van de website |

Ik heb ervoor gekozen om de CSS op te splitsen in verschillende bestanden. Hierdoor blijft de code overzichtelijk en zijn onderdelen gemakkelijker terug te vinden en aan te passen.

## Projectstructuur

```text
all-human-accessible-website/
├── assets/
├── docs/
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── footer.css
├── index.html
├── script.js
├── README.md
└── LICENSE
```

## Installatie

Je kunt het project lokaal bekijken door de repository te downloaden of te clonen.

```bash
git clone https://github.com/justinverbon1234/all-human-accessible-website.git
```

Open vervolgens `index.html` in je browser. Je kunt hiervoor ook de Live Server-extensie in Visual Studio Code gebruiken.

Er zijn geen extra dependencies nodig.

De website staat ook online, dus je kan ook op de link klikken die in de repo staat.

## Verbeterpunten

De belangrijkste onderdelen van de pagina zijn uitgewerkt, maar er zijn nog een aantal punten die verder ontwikkeld kunnen worden.

- De onderwerpfilters zijn visueel uitgewerkt, maar filteren de artikelen nog niet.
- Verschillende navigatie- en artikellinks zijn nog placeholders.
- De zoekfunctie heeft een werkend invoerveld, maar is nog niet gekoppeld aan een zoekresultatenpagina.

## Bronnen

- [WCAG 2.2 richtlijnen](https://www.w3.org/TR/WCAG22/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [All Human Accessible Website, FDND](https://github.com/fdnd-task/all-human-accessible-website/wiki)

## Licentie

Dit project valt onder de [MIT-licentie](./LICENSE).
