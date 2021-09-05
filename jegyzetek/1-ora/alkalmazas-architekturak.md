```git checkout alkalmazas-architekturak```

# Webes alkalmazás architektúrák

http://webprogramozas.inf.elte.hu/alkfejl/04/#/4

- Egyszerű szerver alkalmazás
  - Üzleti logika és hálózat kezelés is
  - Csak egy alkalmazás
  - Folyamatosan fut az alkalmazás
  - Akár stateful is lehet
- Alkalmazásszerveren belüli alkalmazás
  - Elsősorban üzleti logika kerül az alkalmazásba
  - Más alkalmazások is lehetnek az alkalmazásszerveren
  - Ez is lehet stateful
- CGI (common gateway interface)
  - Elsősorban üzleti logika
  - Stateless
