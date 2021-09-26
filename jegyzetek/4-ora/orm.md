```git checkout orm```

# Adatbázisok, ORM

## Adatbázisok

- Adatok jellege
- Adatok változása

## Hogyan használhatjuk őket?

- Kézzel írt queryk
```
  db.executeSql("SELECT * FROM Issue WHERE terem LIKE 'Déli'");
```
- Prepared statementek
```
  const selectIssues = db.prepareStatement("SELECT * FROM Issue WHERE terem LIKE %1");
  db.executePreparedSql(selectIssues, 'Déli');
```
- Query builderek
```
  const query = queryBuilder
    .table('Issue')
    .select('*')
    .where()
      .column('terem')
      .like('Déli');
  db.executeSql(query.toSql());
```
- ORM

## ORM

- Object-relational mapping
- láthatóság, öröklődés, műveletek, kapcsolatok

## ORM minták

- Active record
```
const issue = Issue.find({ filter: { id: 1 }});
issue.status = 'DONE';
issue.save();
```
- Entity manager, Repository, UnitOfWork, Identity map
```
const issueRepository = em.getRepository(Issue);
const issue = issueRepository.find({ filter: { id: 1 } });
issue.status = 'DONE';
em.flush();
```
- Tranzakciók
