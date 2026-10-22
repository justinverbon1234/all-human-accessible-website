# Accessible Website

Ontwerp en maak voor een opdrachtgever een website toegankelijk volgens WCAG richtlijnen.

De instructie van deze leertaak staat in [WIKI](https://github.com/fdnd-task/all-human-accessible-website/wiki)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Een pagina met columns voor "HvanA", een nieuwsomgeving voor studenten van de HvA. De pagina bevat een introductie, een filter op onderwerpen, een uitgelichte (nieuwste) column en een overzicht van meer columns.

De focus van deze leertaak lag op toegankelijkheid: een skip-link, een zichtbare focus-stijl, voldoende kleurcontrast in beide thema's, een responsive menu en zoekbalk die ook zonder JavaScript werken, en afbeeldingen met goede alt-teksten.

<!-- Voeg een mooie poster visual toe 📸 -->

Bekijk de live versie op [GitHub Pages](https://justinverbon1234.github.io/all-human-accessible-website/).

## Kenmerken

* **Semantische HTML**: `header`, `nav`, `main`, `article`, `footer`, `<search>`, `<time>` en een skip-link naar de hoofdinhoud.
* **Design tokens**: alle kleuren, afstanden en thema-waarden staan als CSS custom properties in `styles/tokens.css`.
* **Menu en zoeken**: native `<details>`/`<summary>`-elementen. Openen, sluiten, "maar één open tegelijk" (`name`-attribuut) en de expanded-toestand zitten in HTML zelf — geen ARIA-attributen nodig.
* **Donkere modus**: de standaard volgt uit `prefers-color-scheme` in CSS. De thema-knop is een native checkbox die via `:has()` ook zonder JavaScript werkt; JavaScript onthoudt de keuze in `localStorage`.
* **No-JS**: de hele pagina werkt zonder JavaScript; de `no-js`/`js`-klasse schakelt alleen de desktop-variant van het menu.
* **JavaScript**: alleen voor wat HTML niet biedt: focus in het zoekveld bij openen, Escape en buiten-klik om te sluiten, en het menu openhouden op desktop (waar de knop verborgen is).
* **Toegankelijkheid**: `:focus-visible`-stijlen, animaties respecteren `prefers-reduced-motion`, en de merk-kleuren hebben contrast-veilige tekstvarianten (`--blue-text`, `--orange-text`, `--pink-text`) die per thema wisselen.
* **Performance**: afbeeldingen als WebP met `width` en `height` (tegen layout shift) en `loading="lazy"` voor de columns onder de vouw.

## Bronnen

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
