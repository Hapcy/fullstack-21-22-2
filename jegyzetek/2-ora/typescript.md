```git checkout typescript```

# Typescript

JavaScript: dinamikusan típusos, interpretált nyelv
TypeScript: statikusan típusos, fordítani kell, fordítás JavaScriptet generál

statikusan típusos nyelvek előnyei:
  - kevesebb futási idejű hiba
  - jobb karbantarthatóság
  - editor többet tud segíteni

Typescriptről:
- A JavaScript egy részhalmaza a TypeScriptnek -> minden valid js kód valid ts kód.
- A típusrendszer próbál igazodni a JavaScript dinamikusosságához. (Strukturális típusok)
- Lehetőséget ad nem típusos kódok típusosázásra. (pl. [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped))
- Több JS verzióra is ad fordítási lehetőséget.
- Valójában inkább egy "nyelvcsalád", mert sok konfigurációs lehetőség van, hogy mi valid kód.

## Előkövetelmény

NodeJS
  - https://nodejs.org/en/ LTS verzió telepítése
  - globális npm mappa kerüljön bele a PATH-be

Próba projekt előkészítése:

```
mkdir ts-proba

cd ts-proba

npm init --yes

npm install --save-dev typescript

npx tsc --init

echo node_modules >> .gitignore
```

VAGY

[Typescript playground](https://www.typescriptlang.org/play)

## Típusok

Primitív típusok:
  - any
  - unknown
  - never
  - void
  - undefined
  - null
  - boolean
  - number
  - string
  - array
  - object
  - Function (ehelyett inkább valami konkrétabbat használjunk)

Típusok definiálása:
  - type
  - interface
  - class
  - enum

Unió, metszet, konstans típusok

## Továbbá...

- dekorátorok
- típusdefiníciók
- műveletek típusokon
