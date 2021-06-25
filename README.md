# NLW VALORIZA APP

Aplicativo que permite a troca de mensagens de reconhecimento entre membro de uma equipe (FeedBack)!, o aplicativo permite que um usuário possa enviar uma mensagem para reconher outro membro da equipe, por exemplo, agrader por uma atividade prestada, alem disso é enviado o ``id`` de uma ``tag`` que é previamente cadastrada junto com um tag, por exemplo:
> Tag
```json
{
	"name":"Comprometido"

}
```

> Mensagem:
```json
{
	"tag_id":"8ed6aac6-3a56-4709-a14d-4e9201180c13",
    "user_receiver":"1d30564b-6897-4aad-804b-4d58dd750866",
    "user_sender":"1d30564bdd-6897-4aad-804b-4d58dd750866",
    "message":"Valeu pela ajuda"
}

```


## 👨‍💻Tecnologias utilzadas

Nesse projeto utilizei as tecnologias 
- TypeScript
- Express
- SQLite
- JWT
- Bcryptjs
- SQLite




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