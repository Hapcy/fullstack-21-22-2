```
git checkout mikroorm-nest
```

# MikroORM

- Telepítés:
```
npm i @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite
npm i -D @mikro-orm/cli
```
- Entitások definiálása
```
@Entity()
@Property()
@PrimaryKey()
...
```
- MikroORM modul behúzása
```
MikroOrmModule.forRoot()
MikroOrmModule.forFeature()
```
- Repositoryk injektálása
```
@InjectRepository(...)
```
