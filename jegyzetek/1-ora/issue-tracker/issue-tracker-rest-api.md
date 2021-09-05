Issue:
{
  "issueId": 1,
  "title": "Cím",
  "description": "Leírás",
  "placeId": 1,
  "labelIds": [1, 2],
  "status": "NEW",
  "creatorId": 1,
  "creationDate": "2021-09-01T12:31:43"
}

GET /issues - összes issue lekérdezés
  params:
    status: string - Ilyen státuszú issuekat kapjak csak vissza
  returns:
    200: Issue[] - A felhasználó által elérhető issuek

GET /issues/:issueId - egy konkrét issue lekérdezése
  params:
    issueId: number - Ezt a konkrét issue-t akarom lekérdezni
  return:
    200: Issue - A kért issue
    404 - Nem létezik ez az issue

POST /issues - egy új issue létrehozása
  params:
    Issue - A létrehozandó issue adatai
  returns:
    200: Issue - A létrehozott issue

PATCH /issues/:issueId - issue módosítása a megadott adatokkal
  params:
    issueId: number - A módosítandó issue Id-ja
    Issue - A módosítandó mezők és értékeik
  returns:
    200: Issue - A módosított issue
    404 - Nem létezik a módosítandó issue
    403 - Ezt az issuet nem módosíthatja az aktuális felhasználó

PUT /issues/:issueId - issue lecserélése
  params:
    issueId: number - A módosítandó issue Id-ja
    Issue - A cél issue
  returns:
    200: Issue - A módosított issue
    404 - Nem létezik a módosítandó issue
    403 - Ezt az issuet nem módosíthatja az aktuális felhasználó

DELETE /issues/:issueId - issue törlése
  params:
    issueId: number - A törlendő issue Id-ja
  returns:
    200 - Sikerült törölni az issuet
    404 - Nem létezik a törlendő issue
    403 - Nincs jog az adott issue törléséhez



Message
{
  "messageId": 1,
  "creatorId": 1,
  "creationDate": "2021-09-01T12:30:00",
  "text": "Lorem ipsum"
}

GET /issues/:issueId/messages - Issuehoz tartozó üzenetek lekérdezése
  params:
    issueId: number - A lekérdezendő üzenetek issueja
  returns:
    200: Message[] - Az issuehoz tartozó üzenetek
    403 - A felhasználó nem férhet hozzá ehhez az issuehoz

POST /issues/:issueId/messages - Issuehoz üzenet létrehozása
  params:
    issueId: number - Az issue id-ja, amihez az üzenetet létre akarom hozni
  returns:
    200: Message - A létrehozott üzenet
    403 - A felhasználó nem férhet hozzá ehhez az issuehoz

Label
{
  "labelId": 1,
  "text": "Rossz projektor"
}

GET /labels
POST /labels
GET /labels/:labelId
DELETE /labels/:labelId

// TODO: helyek
