import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(@Headers('host') hostname: string): string {
    const hello = this.appService.getHello();
    return `<html>

<head>
  <style type="text/css">
    body {
      font-family: "Arial", "Helvetica", "sans-serif";
    }

    h1 {
      text-align: center;
    }

    pre {
      background-color: #eee;
      padding: 0.5rem;
    }
  </style>
  <title>${hello}</title>
</head>

<body>
  <h1>${hello}</h1>
  <h2>API Users</h2>
  <h3>Lister les utilisateurs du forum</h3>
  <p>GET <a>http://${hostname}/users</a></p>
  <h3>Récupérer un utilisateur du forum</h3>
  <p>GET <a>http://${hostname}/users/\{\{id\}\}</a></p>
  <h3>Supprimer un utilisateur du forum</h3>
  <p>DELETE <a>http://${hostname}/users/\{\{id\}\}</a></p>
  <h3>Ajouter un utilisateur au forum</h3>
  <p>POST <a>http://${hostname}/users</a></p>
  <p>BODY:
  <pre>{
  "firstname": "François",
  "lastname":"Laconique",
  "username":"francois.laconique",
  "email":"francois.laconique@veonum.com"
  }</pre>
  </p>
  <h3>Modifier un utilisateur du forum</h3>
  <p>PUT <a>http://${hostname}/users/\{\{id\}\}</a></p>
  <p>BODY:
  <pre>{
  "username":"francois.laconique2",
  "email":"francois.laconique2@veonum.com"
  }</pre>
  </p>
  <h2>API keywords</h2>
  <h3>Lister les mot clés</h3>
  <p>GET <a>http://${hostname}/keywords</a></p>
  <h3>Récupérer un mot clé</h3>
  <p>GET <a>http://${hostname}/keywords/\{\{id\}\}</a></p>
  <h3>Supprimer un mot clé</h3>
  <p>DELETE <a>http://${hostname}/keywords/\{\{id\}\}</a></p>
  <h3>Ajouter un mot clé</h3>
  <p>POST <a>http://${hostname}/keywords</a></p>
  <p>BODY:
  <pre>{
  "label": "Astronaute",
  }</pre>
  </p>
  <h3>Modifier un mot clé</h3>
  <p>PUT <a>http://${hostname}/keywords/\{\{id\}\}</a></p>
  <p>BODY:
  <pre>{
  "label": "Spacionaute",
  }</pre>
  </p>    
  <h2>API Forum</h2>
  <h3>Lister les sujets du forum</h3>
  <p>GET <a>http://${hostname}/forum</a></p>
  <h3>Récupérer un sujet du forum</h3>
  <p>GET <a>http://${hostname}/forum/\{\{id\}\}</a></p>
  <h3>Supprimer un sujet du forum</h3>
  <p>DELETE <a>http://${hostname}/forum/\{\{id\}\}</a></p>
  <h3>Ajouter un sujet du forum</h3>
  <p>POST <a>http://${hostname}/forum</a></p>
  <p>BODY:
  <pre>{
  "parent": null,
  "title": "premier sujet",
  "message": "salut à tous, j'ai un problème, je suis le premier homme sur la lune",
  "user": 1,
  "keywords": [
    {
      "id": 1,
      "label": "Satellite"
    }, {
      "id": 2,
      "label": "Astronaute"
    }, {
      "id": 3,
      "label": "Exploration"
    }
  ]
}</pre>
  </p>
  <h3>Ajouter un sujet du forum avec un parent</h3>
  <p>POST <a>http://${hostname}/forum</a></p>
  <p>BODY:
  <pre>{
  "parent": 1,
  "title": "Re: premier sujet",
  "message": "salut à toi! mais non, tu n'es pas tout seul ! moi aussi, je suis sur la lune !",
  "user": 2,
  "keywords": [
    {
      "id": 1,
      "label": "Satellite"
    }, {
      "id": 2,
      "label": "Astronaute"
    }, {
      "id": 4,
      "label": "Rencontre"
    }
  ]
}</pre>
  </p>
  <h3>Modifier un sujet du forum</h3>
  <p>PUT <a>http://${hostname}/forum/\{\{id\}\}</a></p>
  <p>BODY:
  <pre>{
  "title": "premier sujet modifié",
  "message": "salut à tous, j'ai un problème, je suis le premier homme sur mars."
}</pre>
  </p>
</body>

</html>
`;
  }
}
