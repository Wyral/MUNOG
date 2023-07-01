# MUNOG Website
Der Quellcode für die Munog Website.

## Instalation

```console
git clone https://github.com/Wyral/MUNOG.git\
npm install
```
----------------------------------------------------
Um den Entwicklungsserver zu starten:

```console
npm start
``` 
_Diese Befehle habe ich noch nicht getestet_  
<br><br>
## Struktur


Der Code befindet sich im `src` Ordner. `Public` beinhaltet dateien, die vom Internet aus erreichbar sind.

Webseiten sind in Komponenten unterteilt. Diese befinden sich in `components`. Ist eine Komponente ein Ordner, befindet sich in `index.js` der Code und in der `.style.js` Datei die zugehörige styles für die Komponente. Anstatt CSS wird `styled-components` verwendet (die finde ich etwas Komisch).  

<br>

Komponente        | Teil der Website 
----------------- | -------------------------------
`Footer`          | Footer der Website
`Navbar`          | Navigationsleiste + Menü
`Sponsors`        | Sponsoren auf der Homepage
`TitleImage`      | Hintergrundbild oben auf der Homepage
`Home.js`         | Gesamte Homepage
`NotFound.js`     | 404 Seite  

<br>

### Uninterresante Dateien
Die Dateien/Ordner `/node_modules`, `/package.json`, `/package-lock.json` und `/build` sind systemgeneriert.  
`/ressources`, `/css` und `/index.js` beinhalten alten Code.  
<br>

__________________________
## TODO
- [ ] Invitation Letter
- [ ] Mobile carousel bei Sponsoren-Logos
- [ ] Restliche Unterseiten
- [ ] Nutzerfreundlicher machen
- [ ] Anleitung 