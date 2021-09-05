Issue:
{
  "issueId": 1,
  "title": "Rossz projektor",
  "description": "Lorem ipsum",
  "place": 1,
  "labels": [1, 2],
  "status": "NEW",
  "creator": "John Doe",
  "creationDate": "2021-09-01T12:30:00"
}

GET /issues - összes issue lekérdezése
  params:
    status: string - Csak adott státuszú issuekat kapjunk vissza
  returns:
    200: Issue[] - az összes felhasználó által elérhető issue
POST /issues - issue létrehozása
  params:
    Issue
  returns:
    200: Issue - a létrehozott issue
GET /issues/:issueId - Egy konkrét issue lekérdezése
  params:
    issueId: number - a lekérdezendő issue azonosítója
  returns:
    200: Issue - A lekérdezett issue
    404 - nincs ilyen issue
    403 - nincs a felhasználónak joga az issuehoz
PUT /issues/:issueId - Egy konkrét issue összes adatának megváltoztatása
  params:
    issueId: number - a lecserélendő issue azonosítója
    Issue
  returns:
    200: Issue
    404 - nincs ilyen issue
    403 - nincs a felhasználónak joga az issuehoz vagy az issue módosításához
PATCH /issues/:issueId - Egy konkrét issue megadott adatainak megváltoztatása
  params:
    issueId: number - a módosítandó issue azonosítója
    Issue
  returns:
    200: Issue
    404 - nincs ilyen issue
    403 - nincs a felhasználónak joga az issuehoz vagy az issue módosításához
DELETE /issues/:issueId - Egy konkrét issue törlése
  params:
    issueId: number - a törlendő issue azonosítója
  returns:
    404 - nincs ilyen issue
    403 - nincs a felhasználónak joga az issuehoz vagy az issue törléséhez

Message:
{
  "messageId": 1,
  "creator": "John Doe",
  "creationDate": "2021-09-01T12:30:00",
  "text": "Lorem ipsum"
}

GET /issues/:issueId/messages - Egy issuehoz tartozó üzenetek lekérdezése
  params:
    issueId: number - az adott issue azonosítója
  returns:
    200: Message[] - Az issuehoz tartozó üzenetek
    404 - Nincs ilyen issue
POST /issues/:issueId/messages - Egy issuehoz üzenet létrehozása
  params:
    issueId: number - az adott issue azonosítója
    Message
  returns:
    200: Message - A létrehozott üzenet
    404 - Nincs ilyen issue

// TODO: Labels, Places
