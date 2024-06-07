# Test d'un serveur Node.JS avec le framework Nest.Js et l'ORM TypeOpm
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project test the [Nest](https://github.com/nestjs/nest) framework TypeScript using [TypeOrm](https://typeorm.io) Object Relational Mapping.

## Prerequisis

This project uses Docker

## Installation and running in dev mode

```bash
$ docker compose -f docker-compose-dev.yaml up -d --build
```

## Running the app in dev mode

```bash
$ docker compose -f docker-compose.yaml start
```

## Stopping 

```bash
$ docker compose -f docker-compose.yaml stop
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API
### Users
#### Lister les utilisateurs du forum

- Method: GET
- URL: `http://localhost:3000/users`

#### Récupérer un utilisateur du forum

- Method: GET
- URL: `http://localhost:3000/users/{{id}}` où `{{id}}` est un nombre entier

#### Supprimer un utilisateur du forum

- Method: DELETE
- URL:  `http://localhost:3000/users/{{id}}` où `{{id}}` est un nombre entier

#### Ajouter un utilisateur au forum

- Method: POST
- Header: `Content-type: application/json`
- URL `http://localhost:3000/users`
- BODY:
```json
{
  "firstname": "François",
  "lastname":"Laconique",
  "username":"francois.laconique",
  "email":"francois.laconique@veonum.com"
}
```
#### Modifier un utilisateur du forum

- Method: PUT
- URL: `http://localhost:3000/users/{{id}}` où `{{id}}` est un nombre entier
- Header: `Content-type: application/json`
- BODY:
```json
{
  "username":"francois.laconique2",
  "email":"francois.laconique2@veonum.com"
}
```
### Keywords
#### Lister les mots clés
- Method: GET
- URL `http://localhost:3000/keywords`

#### Récupérer un mot clé

- Method: GET
- URL `http://localhost:3000/keyword{{id}}` où `{{id}}` est un nombre entier

#### Créer un mot clé

- Method: POST
- Header: `Content-type: application/json`
- URL `http://localhost:3000/keyword`
- BODY
```json 
{
  "label": "Astronaute"
}
```

#### Modifier un mot clé

- Method: PUT
- Header: `Content-type: application/json`
- URL `http://localhost:3000/keyword/{{id}}` où `{{id}}` est un nombre entier
- BODY
```json 
{
  "label": "Spacionaute"
}
```

#### Supprimer un mot clé
- Method: DELETE
- URL `http://localhost:3000/keyword/{{id}}` où `{{id}}` est un nombre entier

### Forum
#### Lister les sujets du forum

- Method: GET
- URL `http://localhost:3000/forum`

#### Récupérer un sujet du forum

- Method: GET
- URL: `http://localhost:3000/forum/{{id}}`

#### Supprimer un sujet du forum

- Method: DELETE
- URL `http://localhost:3000/forum/{{id}}`

#### Créer un sujet du forum

- Method: POST
- Header: `Content-type: application/json`
- URL: `http://localhost:3000/forum`
- BODY: 
```json 
{
  "parent": null,
  "title": "premier sujet",
  "message": "salut à tous, j'ai un problème, je suis le premier homme sur la lune",
  "user": 1,
  "keywords": [{
      "id": 1,
    }, {
      "id": 2,
    }, {
      "id": 3,
    }]
}
```

#### Ajouter un sujet du forum en réponse à un autre sujet

- Method: POST
- Header: `Content-type: application/json`
- URL: `http://localhost:3000/forum`
- BODY: 
```json
{
  "parent": 1,
  "title": "Re: premier sujet",
  "message": "salut à toi! mais non, tu n'es pas tout seul ! moi aussi, je suis sur la lune !",
  "user": 2,
  "keywords": [{
      "id": 1,
      "label": "Satellite"
    }, {
      "id": 2,
      "label": "Astronaute"
    }, {
      "id": 4,
      "label": "Rencontre"
    }]

}
```

#### Modifier un sujet du forum

- Method: PUT
- URL: `http://localhost:3000/forum/{{id}}`
- Header: `Content-type: application/json`
- BODY:
```json
{
  "title": "premier sujet modifié",
  "message": "salut à tous, j'ai un problème, je suis le premier homme sur mars."
}
```

## Stay in touch

- Website - [Veonum Internet site](https://www.veonum.com/)
- Author - [Xavier Ottolini](https://www.veonum.com/contact/)

## License

- Nest is [MIT licensed](https://raw.githubusercontent.com/nestjs/nestjs.com/master/LICENSE).
- TypeOrm is [MIT License](https://github.com/typeorm/typeorm/blob/master/LICENSE)
