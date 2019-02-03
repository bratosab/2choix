# 2choix

### Faites votre choix entre deux choix intéressant et recevez des statistiques sur vos préférences!

Application en production crée pour un showcase Angular 7 & Loopback 4

Live app : http://www.2choix.com

## Démarrer le projet

Tous dabbord, installez toutes les dépendances

```
$ npm install
```

Ensuite, vous pouvez démarrer en mode debug (avec le watch modification en live) avec la commande :

```
$ npm start
```

Si vous avez Docker, vous pouvez contenriser et executer le tout avec :

```
$ npm start:docker
```

---

## Structure du projet

Chaque dossier est composé de ses propre script, le front et le back peut être lancer indépendament.

## Scripts

### `npm install`

Install toutes les dépendances du dossier root, ensuite fait pareil pour les dépendances des dossiers `web`et `api`.

### `npm start`

Lance en parallèle les projets `web` et `api` en se servant de [`npm-run-all`].

### `npm run build`

Build en parallèle les projets `web` et `api`.

### `npm run start:docker`

Execute le build, crée et démarre les conteneurs nécessaire à l'execution du projet :

- un pour l'api en .NET Core,
- l'autre executant nginx pour servir les fichiers statics SPA (Angular) et relayé (proxy) toutes les requêtes démarrant par `/api/` vers le conteneur api.

Ensuite, il ouvre un navigateur sur "http://localhost:8000/".

Vous pouvez arrêter les conteneurs avec `npm run stop:docker`.

---

## License

MIT © [Abdallah Bratos](http://www.bratos.me)
