import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const hostname = 'test'
      expect(appController.get("test")).toBe(`<html><head><title>Hello World!</title></head>
      <body>
      <h1>Hello World!</h1><h2>Lister les sujets du forum</h2>
      <p>GET <a>http://${hostname}/forum</a></p>
      <h2>Lister un sujet du forum</h2>
      <p>GET <a>http://${hostname}/forum/\{\{id\}\}</a></p>
      <h2>Supprimer un sujet du forum</h2>
      <p>DELETE <a>http://${hostname}/forum/\{\{id\}\}</a></p>
      <h2>Ajouter un sujet du forum</h2>
      <p>POST <a>http://${hostname}/forum</a></p>  
      <p>BODY: <pre>{
        "parent": null,
        "title": "premier sujet",
        "message": "salut à tous, j'ai un problème, je suis le premier homme sur la lune",
        "user": 1
  }</pre></p>
  <h2>Ajouter un sujet du forum avec un parent</h2>
  <p>POST <a>http://${hostname}/forum</a></p>  
  <p>BODY: <pre>{
    "parent": 1,
    "title": "Re: premier sujet",
    "message": "salut à toi! mais non, tu n'es pas tout seul ! moi aussi, je suis sur la lune !",
    "user": 2
  
  }</pre></p>
  <h2>Modifier un sujet du forum</h2>
  <p>PUT <a>http://${hostname}/forum/\{\{id\}\}</a></p>  
  <p>BODY: <pre>{
    "title": "premier sujet modifié",
    "message": "salut à tous, j'ai un problème, je suis le premier homme sur mars."
  }</pre></p>
  <h2>Lister les utilisateurs du forum</h2>
  <p>GET <a>http://${hostname}/users</a></p>
  <h2>Lister un utilisateur du forum</h2>
  <p>GET <a>http://${hostname}/users/\{\{id\}\}</a></p>
  <h2>Supprimer un utilisateur du forum</h2>
  <p>DELETE <a>http://${hostname}/users/\{\{id\}\}</a></p>
  <h2>Ajouter un utilisateur au forum</h2>
  <p>POST <a>http://${hostname}/users</a></p>  
  <p>BODY: <pre>{
    "firstname": "François",
    "lastname":"Laconique",
    "username":"francois.laconique",
    "email":"francois.laconique@veonum.com"
    }</pre></p>
  <h2>Modifier un utilisateur du forum</h2>
  <p>PUT <a>http://${hostname}/users/\{\{id\}\}</a></p>  
  <p>BODY: <pre>{
    "username":"francois.laconique2",
    "email":"francois.laconique2@veonum.com"
    }</pre></p>
  </body>
</html>
`);
    });
  });
});
