
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

## Rotas do Projeto
Abaixo segue coleção postman com os endpoints ja desenvolvidos, basta importar para dentro do software e configurar um `enviroment` contendo uma varivel de nome `host` contendo o `basepath` da aplicação. Localmente essa variavel tem o valor `localhost:8000`

### Coleção Postman
https://www.getpostman.com/collections/2cc257623b9b69d35c86

### Criação de Enviroments Postman
https://learning.postman.com/docs/postman/variables-and-environments/variables/
