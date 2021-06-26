# NLW VALORIZA APP

Aplicativo que permite a troca de mensagens de reconhecimento entre membro de uma equipe (FeedBack)!, o aplicativo permite que um usuário possa enviar uma mensagem para reconher outro membro da equipe, por exemplo, agrader por uma atividade prestada, alem disso é enviado o ``id`` de uma ``tag`` que é previamente cadastrada junto com um tag.

Abaixo uma animação mostrando o funcionamento de todas as rotas testas e documentadas pelo Swagger!

<p align="center">
 
![Gif de utilização do sistema](./src/img/NlwValorizaApp.gif)
</p>



## 👨‍💻Tecnologias utilzadas

Nesse projeto utilizei as tecnologias 
- TypeScript
- Express
- SQLite
- JWT
- Bcryptjs
- SQLite
- Swagger




## Regras

### Cadastro de usuário

[X] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

[X] Não é permitido cadastrar usuário sem e-mail

---

### Cadastro de TAG

[X] Não é permitido cadastrar mais de uma tag com o mesmo nome

[X] Não é permitido cadastrar tag sem nome

[X] Não é permitido o cadastro por usuários que não sejam administradores

---

### Cadastro de elogios

[X] Não é permitido um usuário cadastrar um elogio para si

[X] Não é permitido cadastrar elogios para usuários inválidos

[X] O usuário precisa estar autenticado na aplicação

---
