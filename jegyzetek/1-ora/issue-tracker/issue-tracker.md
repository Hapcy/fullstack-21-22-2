```git checkout issue-tracker-rest```

Készítsünk egy webes alkalmazást, amellyel bejelentezett felhasználóként olyan hibákat jelenthetünk be, amelyek az ELTE egyes termeiben találhatóak (pl. elromlott projektor), a bejelentett hibáinkat megtekinthetjük, ezekhez megjegyszést írhatunk. Adminként mindenki hibáját megtekinthetjük, változtathatjuk a hibák státuszát, és válaszolhatunk a felhasználók üzeneteire. Látogatóként csak statisztikát látunk, és regisztrálhatunk.

# Funkcionális követelmények

- Vendégként szeretnék regisztrálni az oldalra --> Regisztráció
- Vendégként szeretnék bejelentkezni az oldalra --> Bejelentkezés
- Felhasználóként szeretnék bejelenteni egy gépterembeli hibát, hogy minél előbb javíthassák. --> Hiba bejelentése
- Felhasználóként szeretnék visszajelzést kapni, hogy a bejelentett hiba milyen státuszban van. --> Hibák listázása
- Felhasználóként szeretnék kérdést vagy megjegyzést fűzni egy hibához azután is, hogy felvettem. --> Hiba megtekintése, alatta fórum.
- Operátorként szeretném látni a hibalistát. --> Hibák listázása
- Operátorként szeretnék egy hibát megtekinteni, szerkeszteni az adatait és státuszát váltani. --> Hiba megtekintése, szerkesztése
- Operátorként szeretnék termeket rögzíteni a rendszerbe. --> Termek szerkesztése, listázása
- Operátorként szeretném a regisztrált felhasználók szerepkörein állítani --> Felhasználó listázás, szerepkör állítás

# Nem funkcionális követelmények

- Felhasználóbarát, ergonomikus elrendezés és kinézet.
- Gyors működés.
- Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

# Szerepkörök

- vendég: a főoldal tartalmához fér hozzá, rögzíteni nem tud.
- bejelentő: a vendég szerepkörén túl hibát tud bejelenteni, és saját bejelentett hibáit megtekinteni.
- operátor: a bejelentő szerepkörén túl az összes hibát meg tudja tekinteni, és annak státuszát állítani tudja.

