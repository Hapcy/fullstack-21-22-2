```git checkout http-rest```

# Webes kommunikáció

## HTTP (Hypertext Transfer Protocol)

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- TCP feletti szöveges protokoll
- HTTP3 már UDP + QUIC felett lesz, és nem csak szöveges lehet
- Böngésző alapból ezt használja
- Kliens kérést indít, szerver válaszol
- HTTP üzenetváltás https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages:
  - Request:
    - HTTP metódus + path + verzió
    - Headers
    - Body
  - Response:
    - verzió + státusz
    - Headers
    - Body

## REST (Representational State Transfer)

- https://en.wikipedia.org/wiki/Representational_state_transfer
- http://webprogramozas.inf.elte.hu/#!/subjects/full-stack/01
- Ajánlások halmaza, hogy hogyan építsünk API-t
  - (Mi van még? RPC, GraphQL, stomp (ws))
- Erőforrásokat URL-lel azonosítjuk
  - Path paraméterek - hierarchikus elérés
  - Query paraméterek - nem hierarchikus elérés
- Egy erőforrás az a backenden tárolt adatoknak egy reprezentációja
- HTTP metódusoknak, státusz kódoknak jelentése van
- CRUD
- általában JSON

```
create  → POST   /collection
read    → GET    /collection[/id]
update  → PUT    /collection/id
patch   → PATCH  /collection/id
delete  → DELETE /collection[/id]
```
