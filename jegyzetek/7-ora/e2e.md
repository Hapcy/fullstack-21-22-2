```git checkout e2e```

# End-to-end tesztelés

- Az alkalmazást teljesen felállítva tesztelünk, mintha egy frontend indítani API kéréseket.
- A Nest ehhez a supertest/superagent nevű libraryket használja.
- Kell teszt adatbázist létrehozni. (Ezt akár kódból is tehetnénk. SQLite-tal akár in-memory is elég lehet.)
- Környezetek bevezetése (cross-env, env-cmd)
- npm scriptek
- Itt is lehetne mockolni serviceket.
