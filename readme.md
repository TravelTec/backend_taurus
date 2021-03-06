
## API Chat Whatsapp

API de backend para controle de chat whatsapp empresarial


## Requisitos projeto

- PHP >=7.2.27
- PostgreSQL 12
- Composer

## Inicialização do projeto
- Para que o projeto seja iniciado, configure o ambiente com as variaveis informadas logo abaixo na sessão de `Ambiente`.
- Dentro do diretorio do projeto, baixe todas as dependencias executando o comando abaixo (caso o projeto esteja sendo instalado em um cluster com ambiente pré-configurado, esse passo costuma ser executado automaticamente)
```sh
composer install
```

- Inicie a estrutura inicial do banco com o comando: 
```sh
php artisan migrate
```
- As migrações serão inseridas na base de dados, lembrando que sempre que houver uma atualização de banco de dados esse comando deve ser executado

## ATUALIZAÇÃO 11/03/2020
Executar o comando SQL na base de dados para funcionamento da autenticação
```sql
insert into oauth_clients 
values(1, null, 'password_client', 'FjRWKj9xSkwCqLyRdt2QiGrEJs87iPRWVdHaJARm', 'http://url-da-api', false, true, false, '2020-03-11 20:00:00', null);
```

## ATUALIZAÇÃO 03/06/2020
- Para funcionamento dessa atualização as novas variaveis de ambiente referente a Chat Pro devem ser definidas, que são: `CHATPRO_ADMIN_HOST`,`CHATPRO_ADMIN_USER`, `CHATPRO_ADMIN_PASSWORD`, a primeira deve se colocar `https://api.chatpro.com.br/painel/ws/endpoint.php`, a variavel serve apenas para caso o endereço mude, mas pode setar esse padrão.
- Criadas novas rotas para administração das instancias do chat-pro, endpoints adicionados a collection do postman na pasta `Admin Chat Pro`, lembrando que o token de acesso para as rotas é o setado na variavel de ambiente `TOKEN_ADMIN`.

## ATUALIZAÇÃO 12/06/2020
- Para funcionamento da atualização deve ser gerado uma `KEY` no console do google com permissões de uso da API `Distance Matrix API`, e setado na variavel de ambiente `TOKEN_APP_GOOGLE`
- Criada rota para calculo de distancia entre endereços, a mesma foi adicionada a collection do postman na pasta `Google`.

## ATUALIZAÇÃO 29/07/2020
- Para funcionamento da atualização as novas variaveis de ambiente precisam ser setadas: `FACEBOOK_APP_ID`, `FACEBOOK_APP_SECRET`, `FACEBOOK_SECRET_TOKEN` e os novos campos `page_id` e `catalog_id` devem ser configurados (tabela `configurations`)
- Rotas para uso da integração do facebook criadas na collection do postman na pasta `Facebook`. As rotas usam a proteção por token e precisam que a `license_id` seja passada nos headers da requisição para que a configuração seja buscada.

## Ambiente 
Configure as variaveis de ambiente de acordo com as configurações de infra necessárias.

| Nome | Descrição | Valor Padrão | Obrigatório |
| -- | -- | -- | -- |
| APP_NAME | Nome da Aplicação | Api Chat |Sim |
| APP_ENV | Qual Enviroment a Aplicação está | local |Sim |
| APP_KEY | Base64 da aplicação |Perguntar ao dev| Sim |
| APP_DEBUG | Se a aplicação deve exibir erros detalhados |true | Sim |
| DB_CONNECTION | Tipo de conexão |pgsql| Sim |
| DB_HOST | Host de conexão || Sim |
| DB_PORT | Porta de conexão || Sim |
| DB_DATABASE | Nome do banco de dados || Sim |
| DB_USERNAME | Usuario de conexão de banco de dados || Sim |
| DB_PASSWORD | Senha de conexão de banco de dados || Sim |
| TOKEN_ADMIN | Token usado para acessar o resource /api/users e /api/admin/chatpro || Sim |
| CHATPRO_ADMIN_HOST | Host da API da chat pro de administração || Sim |
| CHATPRO_ADMIN_USER | Usuario/Email do painel da chat pro || Sim |
| CHATPRO_ADMIN_PASSWORD | Senha do painel da chat pro || Sim |
| TOKEN_APP_GOOGLE | Token gerado no console do google para uso das APIs || Sim |
| FACEBOOK_APP_ID | Id da app do facebook  || Sim |
| FACEBOOK_APP_SECRET | App secret do facebook || Sim |
| FACEBOOK_SECRET_TOKEN | Secret do facebook || Sim |


## Resource User
O Resource de usuarios é utilizado para gerenciar os usuarios da API, esses usuarios são utilizados para criar token de acesso geral ou seja, quando se precisa acessar a API sem que exista nenhum atendente logado. 
Para acessar esse resource é necessário setar a variavel de ambiente `TOKEN_ADMIN` e usar o valor quando for chamar o endpoint passando o valor do mesmo no header `Authorization` da requisição. Abaixo a lista dos endpoints (que podem ser encontrados na coleção do postman)

- POST - /api/users - Criação de usuario
- GET - /api/users - Listagem de usuarios
- GET - /api/users/{id} - Listagem de usuario unico
- PUT - /api/users/{id} - Update de usuario
- DELETE - /api/users/{id} - Delete de usuario

## Autenticação
Todas as rotas estão protegidas por autenticação com token. Ou seja para acessar uma rota/recurso será necessário anteriormente gerar um token. Existe uma pasta na coleção do postman chamada `OAuth` com uma requisição `OAUTH CREATE TOKEN`. Essa requisição é um modelo de como deve ser a geração de token, lembrando que quando um `Clerk` logar, deve ser gerado um token baseado no usuario referente ao `Clerk`, e não um token unico para todas as operações.

## Rotas do Projeto
Abaixo segue coleção postman com os endpoints ja desenvolvidos, basta importar para dentro do software e configurar um `enviroment` contendo uma varivel de nome `host` contendo o `basepath` da aplicação. Localmente essa variavel tem o valor `localhost:8000`

### Atualizações Postman
Foram criadas duas novas variaveis que devem ser configuradas no `enviroment`.
- `token`: deve ser colocado o `access_token` gerado no endpoint de `oauth create` (ver sessao de autenticação)
- `token_admin`: deve ser colocado o valor setado na variavel `TOKEN_ADMIN` da aplicação.

### Coleção Postman
https://www.getpostman.com/collections/2cc257623b9b69d35c86

### Criação de Enviroments Postman
https://learning.postman.com/docs/postman/variables-and-environments/variables/
