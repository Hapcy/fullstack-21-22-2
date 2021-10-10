# Authentikáció, authorizáció

- User modul bevezetése
  - User modul, controller, service létrehozás
  - User entitás, többi entitással összekötés, mikroorm config kiegészítés
  - Migráció létrehozása - érdemes először törölni az adatbázist, hogy ne legyenek user nélkül lógó issuek, messagek
  - Dto, regisztráció controller, service
- Auth modul bevezetése
  - Auth modul, service létrehozása
  - npm install --save @nestjs/passport passport passport-local @nestjs/jwt passport-jwt
  - npm install --save-dev @types/passport-local @types/passport-jwt
  - getUserByUserNameAndPassword, LocalStrategy, LocalGuard, User (paramDecorator)
  - JwtModule, generateJwt, JwtStrategy, JwtAuthGuard
  - Global guard, public végpontok
