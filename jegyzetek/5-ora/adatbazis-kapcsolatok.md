```git checkout adatbazis-kapcsolatok```

# Adatbázis, domain tervezés

- Milyen adatokkal kell dolgoznunk? (megjelenítés, szerkesztés, külső rendszerrel kommunikálni, stb.)
- Melyik adatok tartoznak össze? Normalizálás? -> Entitások.
- Mi a kapcsolat az egyes entitások között?
- Egyéb megfontolások? (hatékonyság, speciális üzleti igény)

## Kapcsolatok fajtái

- 1 - 1 ( Ország -fővárosa- Város  )
- 1 - N ( Issue -létrehozója- Személy )
- N - N ( Issue -címkéje- Label) - szükség van kapcsolótáblára

## Entity-relationship diagram
