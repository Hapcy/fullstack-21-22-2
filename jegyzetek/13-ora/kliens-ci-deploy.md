```git checkout kliens-ci```

# CI beállítása

- Github Actions main workflow módosítása (kliens build, kell böngésző is a tesztekhez a karma miatt)
- karma reportolja consolera is a hibákat (`karma-spec-reporter` csomag)
- CI-ra külön config kell

```git checkout kliens-deploy```

# Deployment

- Kliens build artifactja html, css fájlokból áll, amit a felhasználó gépén kell futtatni a böngészőben, és nem a szerveren futnak.
- Ezeket a fájlokat statikusan ki kell szolgálni.
- Lehetőségek
  - Nest alkalmazás alá beszúrás közvetlenül, és nest kiegészítése statikus kiszolgálással.
    - Projektstruktúra átrendezése? Bonyolult build? Skálázás?
  - Kiszolgálás tetszőleges webszerverrel.
    - Bonyolultabb infrastruktúra.
- 2.-at választjuk. Egyszerű express szerver, cors vagy proxy a szerver felé.

```git checkout ssr```

## SSR

- Server-side rendering
- Authentikációs probléma - nincs storage a szerveren
