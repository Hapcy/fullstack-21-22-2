`git checkout cicd`

# Continuous integration, Continuous deployment

- CI - kódok gyakori mergelése, buildelése, tesztelése, hogy az alkalmazás ne törjön, ne kerüljön sok időbe a merge
- https://en.wikipedia.org/wiki/Continuous_integration#Common_practices
- CD - Minden olyan módszer, ami ahhoz vezet, hogy gyakrabban releaseljünk

- Általában ezek sok technológia, eszköz összességéből áll össze. A középpontban valamilyen kódtár + pipeline + környezetek állnak.

- Mi most [GitHubot](https://github.com) (kódtár), [Github Actionst](https://docs.github.com/en/actions) (pipeline) és [Herokut](https://dashboard.heroku.com) (deploy platform) használunk. Ezekre ingyenesen lehet regisztrálni.

## Lépések

- Heroku regisztráció
- Herokuban alkalmazás létrehozása
- (Nem kötelező) Heroku CLI telepítése (https://devcenter.heroku.com/articles/heroku-cli)
- .github/workflows/main.yml elkészítése.
- Github repositoryban HEROKU_API_KEY secret beállítása
- Procfile elkészítése. Előkészülés a herokus indításra (admin seed, PORT környezeti változóból vétele, package.json-be enginesben node verzió beállítás).
