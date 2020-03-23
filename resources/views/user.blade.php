<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Taurus Multicanal</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="{{asset('app-assets/assets/bootstrap/css/bootstrap.min.css')}}">
        <!-- CSS's próprios -->
        <link rel="stylesheet" href="{{asset('app-assets/css/style.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/overview/cabecalho.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/overview/container-contatos.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/overview/container-conversa.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/overview/container__config/container-config.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/overview/container__config/atalhos.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/sweetalert.css')}}">
        <!-- Ícones Font Awesome 4.7 -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"> 

        <style type="text/css">
            .sweet-alert button.cancel:active, .sweet-alert button.cancel{
                background-color: #da2828 !important;
            }
            .sweet-alert button{
                    background-color: #AEDEF4 !important;
            }
            a{
                color: #007bff !important;
                cursor: pointer !important;
            }
            a:hover{
                color: #0056b3 !important;
                cursor: pointer !important;
            }
        </style>
    </head>
  <body>
    <header id="cabecalho">
        <nav class="navbar navbar-expand-lg" id="navbar__primario">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img id="logo" src="{{asset('app-assets/assets/img/logo.png')}}"  class="img-fluid d-inline-block mr-1" alt="Logo da Taurus Multicanal">
                <div class="d-inline-block" id="logo__texto">
                    <div class="d-flex flex-column text-center">
                        <span class="font-weight-bold">Taurus </span>
                        <span>Multicanal</span>
                    </div>
                </div>        
              </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar__primario__dropdown" aria-controls="navbar__primario__dropdown">
                <i class="fas fa-bars text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar__primario__dropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        File
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
            
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Object
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tools
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Help
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg py-1" id="navbar__secundario">
            <div class="navbar-brand m-0 border-right px-2" href="#">
                <span class="mr-5">Browser</span> 
                <a href="#" class="border p-1 rounded"><i class="fas fa-database"></i></a>     
                <a href="#" class="border p-1 rounded"><i class="fas fa-table"></i></a>
                <a href="#" class="border p-1 rounded"><i class="fas fa-filter"></i></a>       
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar__secundario__dropdown" aria-controls="navbar__secundario__dropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar__secundario__dropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">
                            Properties
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            SQL
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Statistics
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Dependencies
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            Dependents
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main id="container__principal" class="bg-white row m-0">
        <div id="container__contatos" class="col-sm-3 p-0">
            <div id="container__pesquisa" class="border-bottom py-1 d-flex align-items-center px-2">
                <div class="rounded-pill bg-white py-1 px-3 d-flex align-items-center justify-content-center flex-grow-1">
                    <i class=" fas fa-search text-muted"></i>
                    <input class="form-control border-0" type="text" placeholder="Procurar ou começar uma nova conversa">
                </div>
                <i id="botao__config" class="fas fa-ellipsis-v px-3"></i>
            </div>
            <ul id="lista__contatos" class="list-group">
                 
            </ul>
            <ul id="lista__configuracoes" class="list-group" style="display: none;">
                <li class="list-group-item" id="botao__voltar">
                    <i class="fas fa-chevron-left mr-2"></i> Voltar
                </li>
                <li class="list-group-item" id="botao__departamentos">
                    Departamentos
                </li>
                <li class="list-group-item" id="botao__usuarios">
                    Atendentes
                </li>
                <!-- <li class="list-group-item" id="botao__atalhos">
                    Atalhos
                </li> -->
                <li class="list-group-item" id="botao__finalizacoes">
                    Motivos de finalização
                </li>
                <li class="list-group-item" id="botao__estancia">
                    Configurações da instância
                </li>
                <li class="list-group-item" id="botao__meuperfil">
                    Meu perfil
                </li>
            </ul>
        </div>
        <div id="container__conversa" class="col-sm-9 p-0">
            <!-- Cada DIV conversa tem o id do contato para relacionar a conversa com o contato -->
            <div class="conversa" contato="1">
                <div id="cabecalho__conversa" class="p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato2">
                        <span class="font-weight-bold" id="nome__contato"></span>
                    </div>
                    <div class="acoes__mensagem">
                        <a onclick="send_file()" class="mx-2"><i class="fas fa-paperclip"></i> anexo</a>
                        <a onclick="change_clerk()" class="mx-2"> <i class="fas fa-exchange-alt"></i> transferir</a>  
                        <a onclick="end_message()" class="mx-2"><i class="fas fa-check-square"></i> finalizar</a>       
                    </div>
                </div>
                <div class="conversa__mensagens">
                    

                </div>
                <div id="container__nova__mensagem" class="d-flex justify-content-between align-items-center px-2"> 
                        <div class="form-row w-100">
                            <input type="hidden" id="license__id" name="">
                            <input type="hidden" id="clerk__id" name="">
                            <input type="hidden" id="token" name="">
                            <input type="hidden" id="session__id" name="">
                            <input type="hidden" id="nome_contato_name" name=""> 
                            <input type="hidden" id="number__contato" name=""> 
                            <div class="col-sm-11">
                                <div id="campo__novo__arquivo" style="padding: 3px;border: 1px solid #ddd;width: 63px;height: 63px;background-color: #ddd;position: absolute;display: none">
                                    <input type="hidden" id="nome__novo__arquivo" >
                                    <span id="dados__novo__arquivo"></span>
                                </div>
                                <textarea id="campo__nova_mensagem" name="" id="" cols="30" rows="2" class="w-100 form-control" placeholder="Digite aqui uma nova mensagem..."></textarea>
                            </div>
                            <div class="col-sm-1 d-flex align-items-center">
                                <a onclick="send_message_chat()">
                                    <button class="btn btn-primary w-100"><i class="far fa-paper-plane"></i></button>
                                </a>
                            </div>
                        </div> 
                </div>
            </div>   
            <div id="mensagem__taurus" class="flex-column align-items-center justify-content-center bg-light" style=" min-height: 500px; display: flex;">
                <img src="{{asset('app-assets/assets/img/ilustracao_mensagens.svg')}}" alt="Ilustração para mensagens" 
                        style="max-width: 370px;">
                <h3 class="mt-2">Bem-vindo ao Taurus Multicanal!</h3>
            </div>
            <!-- <div class="container__config" id="container__atalhos">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Atalhos</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__atalhos__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__atalhos__novo" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Novo</button>
                    </div>
                    <table class="table w-100 table-striped">
                        <thead>
                            <tr>
                                <td>Descrição</td>
                                <td>Atalho</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apagar uma conversa</td>
                                <td>ctrl + del</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container__config" id="container__atalhos__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Atalhos</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__atalhos__detalhes__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__atalhos__detalhes__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="atalho">Atalho</label>
                            <input type="text" class="form-control" id="atalho" placeholder="Atalho">
                        </div>
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <label for="mensagem">Mensagem</label>
                            <textarea class="form-control" name="mensagem" id="mensagem"  rows="2"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="complemento">Complemento</label>
                            <select class="form-control" id="complemento">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div> -->
            <div class="container__config" id="container__usuarios">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Atendentes</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__usuarios__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__usuarios__novo" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Novo</button>
                    </div>
                    <table class="table w-100 table-striped">
                        <thead>
                            <tr>
                                <td></td>
                                <td class="font-weight-bold">Nome</td> 
                                <td class="font-weight-bold">E-mail</td>
                                <td class="font-weight-bold">Departamento</td>
                            </tr>
                        </thead>
                        <tbody id="div__list_clerks">
                            <tr>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container__config" id="container__usuarios__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Atendentes</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__usuarios__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <a onclick="save_clerk()"><button id="" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button></a>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome_clerk" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email_clerk" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="user_clerk">Username</label>
                            <input type="text" class="form-control" id="user_clerk" >
                        </div>
                        <div class="form-group">
                            <label for="senha">Senha</label>
                            <input type="password" class="form-control" name="senha" id="senha_clerk" >
                        </div>
                        <div class="form-group">
                            <label for="confimar__senha">Confirmar Senha</label>
                            <input type="password" class="form-control" id="confirmar_senha_clerk" >
                        </div>
                        <div class="form-group">
                            <label for="perfil">Departamento</label>
                            <select class="form-control" id="div_combo_dptos"> </select>
                        </div>
                    </form>
                </div>
            </div>

            <div class="container__config" id="container__finalizacoes">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Finalizações</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__finalizacoes__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__finalizacoes__novo" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Novo</button>
                    </div>
                    <table class="table w-100 table-striped">
                        <thead>
                            <tr class="font-weight-bold">
                                <td></td>
                                <td>Tag</td>
                                <td>Manter vínculo</td>
                            </tr>
                        </thead>
                        <tbody id="div_reasons">
                            <tr> 
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container__config" id="container__finalizacoes__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Finalizações</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__finalizacoes__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <a onclick="save_reason()"><button id="" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button></a>
                    </div>
                    <form action="#" method="post"> 
                        <div class="form-group">
                            <input class="" type="checkbox"  id="vinculo_reason">
                            <label class="form-check-label" for="vinculo">
                                Manter vínculo?
                            </label>   
                        </div>
                        <div class="form-group">
                            <label for="mensagem">Mensagem padrão</label>
                            <textarea name="mensagem" id="mensagem_reason" class="form-control" rows="2"></textarea>
                        </div>
                    </form>
                </div>
            </div>

            <div class="container__config" id="container__meuperfil">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Meu Perfil</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__meuperfil__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__meuperfil__editar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Editar</button>
                    </div>
                    <p>
                        Nome: Daniel
                    </p>
                    <p>
                        Email: daniel@montenegroev.com.br
                    </p>    
                </div>
            </div>
            <div class="container__config" id="container__meuperfil__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Meu Perfil</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__meuperfil__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__meuperfil__detalhe__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <label for="senha__atual">Senha atual</label>
                            <input type="password" class="form-control" id="senha__atual" placeholder="Senha atual">
                        </div>
                        <div class="form-group">
                            <label for="senha__nova">Nova senha</label>
                            <input type="password" class="form-control" id="senha__nova" placeholder="Nova senha">
                        </div>
                        <div class="form-group">
                            <label for="senha__nova__confirmar">Confirmar nova senha</label>
                            <input type="password" class="form-control" id="senha__nova__confirmar" placeholder="Confirmar nova senha">
                        </div>
                    </form>
                </div>
            </div>

            <div class="container__config" id="container__estancia">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Configuração da instância</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__estancia__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__estancia__novo" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Novo</button>
                    </div>
                    <div id="div_configurations">
                        
                    </div>
                </div>
            </div>
            <div class="container__config" id="container__estancia__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Configuração da instância</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__estancia__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <a onclick="save_config()"><button id="" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button></a>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome">Nome da instância</label>
                            <input type="text" class="form-control" id="nome__instancia" placeholder="Nome da instância">
                        </div>
                        <div class="form-group">
                            <label for="mensagem__boasvindas">Mensagem de boas vindas</label>
                            <input type="text" class="form-control" id="mensagem__boasvindas" placeholder="Mensagem de boas vindas">
                        </div>
                        <div class="form-group">
                            <label for="mensagem__final__padrao">Mensagem de finalização padrão</label>
                            <input type="text" class="form-control" id="mensagem__final__padrao" placeholder="Mensagem de finalização padrão">
                        </div>
                        <div class="form-group">
                            <label for="horario__atendimento">Horário de atendimento</label>
                            <br>
                            <label for="horario__atendimento">Domingo</label>
                            <input type="text" class="form-control" id="sunday_open" placeholder="Horário abertura domingo" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="sunday_close" placeholder="Horário fechamento domingo">
                            <br>
                            <label for="horario__atendimento">Segunda</label>
                            <input type="text" class="form-control" id="monday_open" placeholder="Horário abertura segunda" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="monday_close" placeholder="Horário fechamento segunda">
                            <br>
                            <label for="horario__atendimento">Terça</label>
                            <input type="text" class="form-control" id="tuesday_open" placeholder="Horário abertura terça" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="tuesday_close" placeholder="Horário fechamento terça">
                            <br>
                            <label for="horario__atendimento">Quarta</label>
                            <input type="text" class="form-control" id="wednesday_open" placeholder="Horário abertura quarta" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="wednesday_close" placeholder="Horário fechamento quarta">
                            <br>
                            <label for="horario__atendimento">Quinta</label>
                            <input type="text" class="form-control" id="thursday_open" placeholder="Horário abertura quinta" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="thursday_close" placeholder="Horário fechamento quinta">
                            <br>
                            <label for="horario__atendimento">Sexta</label>
                            <input type="text" class="form-control" id="friday_open" placeholder="Horário abertura sexta" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="friday_close" placeholder="Horário fechamento sexta">
                            <br>
                            <label for="horario__atendimento">Sábado</label>
                            <input type="text" class="form-control" id="saturday_open" placeholder="Horário abertura sábado" style="margin-bottom: 7px"> 
                            <input type="text" class="form-control" id="saturday_close" placeholder="Horário fechamento sábado">
                        </div>
                        <div class="form-group">
                            <label for="endpoint_pro">Endpoint Chat PRO</label>
                            <input type="text" class="form-control" id="endpoint_pro" placeholder="Endpoint Chat PRO">
                        </div>
                        <div class="form-group">
                            <label for="token_pro">Token Chat PRO</label>
                            <input type="text" class="form-control" id="token_pro" placeholder="Token Chat PRO">
                        </div>
                        <div class="form-group">
                            <label for="id_pro">ID Chat PRO</label>
                            <input type="text" class="form-control" id="id_pro" placeholder="ID Chat PRO">
                        </div>
                    </form>
                </div>
            </div>

            <div class="container__config" id="container__departamentos">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Departamentos</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__departamentos__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__departamentos__novo" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Novo</button>
                    </div>
                    <table class="table w-100 table-striped">
                        <thead>
                            <tr class="font-weight-bold">
                                <td></td>
                                <td>Nome</td>
                                <td>Distribuição automática?</td>
                            </tr>
                        </thead>
                        <tbody id="div_dptos">
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container__config" id="container__departamentos__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Meu Perfil</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__departamentos__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <a onclick="save_department()"><button id="botao__departamentos__detalhe__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button></a>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="name_department">Nome do departamento</label>
                            <input type="text" class="form-control" id="name_department" placeholder="Nome do Departamento">
                        </div>
                        <!-- <div class="form-group">
                            <input class="" type="checkbox"  id="vinculo">
                            <label class="form-check-label" for="vinculo">
                                Distribuir atendimento automaticamente
                            </label>   
                        </div>
                        <div class="form-group">
                            <label for="nome__operador">Adicionar operadores</label>
                            <input type="text" class="form-control" id="nome__operador" placeholder="Digite o nome do operador">
                        </div> -->
                    </form>
                </div>
            </div>

        </div>
    </main>

    <!-- jQuery - Popper.js - Bootstrap JS -->
    <script src="{{asset('app-assets/assets/js/jquery-3.4.1.min.js')}}"></script>
    <script src="{{asset('app-assets/assets/js/popper.min.js')}}"></script>
    <script src="{{asset('app-assets/assets/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('app-assets/assets/conversas.js')}}"></script>
    <script src="{{asset('app-assets/assets/js/menu_conversas.js')}}"></script>
    <script src="{{asset('app-assets/assets/js/menu_config.js')}}"></script>
    <script src="{{asset('app-assets/js/sweetalert.min.js')}}"></script>
    <script src="{{asset('app-assets/js/jquery.mask.js')}}"></script>
    <script src="{{asset('app-assets/js/bootbox.min.js')}}"></script>

    <div class="modal fade" id="popup-modal-warning" aria-hidden="false" style="padding-right: 15px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="z-index: 999999999;padding-right: 26px;border-bottom: none;position: absolute;float: right;width: 100%;"><div class="row">
                    <div class="col-lg-12"><button type="button" class="close" data-dismiss="modal" style="padding-right: 3px;padding-top: 7px;float: right;">×</button>
                    </div>
                </div>
                </div>
                <div class="modal-body" style="padding: 0px 1rem 0px 1rem;margin-top: -16px;"> 
                    <div class="row">
                        <div class="nav-box" style="padding: 0px !important">
                            <div class="inner-box" style="padding: 0px !important"> 
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        $("#sunday_open").mask("00:00:00");
        $("#sunday_close").mask("00:00:00");
        $("#monday_open").mask("00:00:00");
        $("#monday_close").mask("00:00:00");
        $("#tuesday_open").mask("00:00:00");
        $("#tuesday_close").mask("00:00:00");
        $("#wednesday_open").mask("00:00:00");
        $("#wednesday_close").mask("00:00:00");
        $("#thursday_open").mask("00:00:00");
        $("#thursday_close").mask("00:00:00");
        $("#friday_open").mask("00:00:00");
        $("#friday_close").mask("00:00:00");
        $("#saturday_open").mask("00:00:00");
        $("#saturday_close").mask("00:00:00");

        //FUNÇÕES DEPARTAMENTO
            function save_department(){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"];

                var name_department = $("#name_department").val();

                if (name_department == '') {
                    swal({
                        title: "Campo nome vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else{

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "http://localhost/api/departments",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "authorization": "Bearer "+token,
                            "cache-control": "no-cache",
                            "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                        },
                        "processData": false,
                        "data": '{"license_id": '+id_licenca+', "name":"'+name_department+'"}'
                    }

                    $.ajax(settings).done(function (response) { 
                        if (response["data"] == null || response["data"] == '') {
                            swal({
                                title: "Departamento não cadastrado.",
                                text: "Tente novamente.",
                                type: "warning"
                            },function(){ 
                                location.reload();
                            });
                        }else{
                            swal({
                                title: "Departamento cadastrado com sucesso.", 
                                type: "success"
                            },function(){ 
                                location.reload();
                            });
                        }
                    });

                }
            }

            function del_departament(id_department){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"]; 

                swal({
                    title: "Você tem certeza?",
                    text: "O departamento será excluído.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Deletar",
                    closeOnConfirm: true,
                    closeOnCancel: false
                }, function (isConfirm) {

                    if (isConfirm) {

                    }else{
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost/api/departments/"+id_department,
                            "method": "DELETE",
                            "headers": {
                                "content-type": "application/json",
                                "authorization": "Bearer "+token,
                                "cache-control": "no-cache",
                                "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                            },
                            "processData": false
                        }

                        $.ajax(settings).done(function (response) { 
                            if (response == null || response == '' || response == 'undefined' || response == undefined) { 
                                swal({
                                    title: "Departamento excluído com sucesso.", 
                                    type: "success"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Departamento não excluído.",
                                    text: "Tente novamente.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        });
                    }

                });
            }
        //FIM FUNÇÕES DEPARTAMENTO

        //FUNÇÕES CLERKS
            function save_clerk(){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"];

                var nome_clerk = $("#nome_clerk").val();
                var email_clerk = $("#email_clerk").val();
                var senha_clerk = $("#senha_clerk").val();
                var confirmar_senha_clerk = $("#confirmar_senha_clerk").val();
                var div_combo_dptos = $("#div_combo_dptos").val();
                var user_clerk = $("#user_clerk").val(); 

                if (div_combo_dptos == '' || div_combo_dptos == null || div_combo_dptos == 'null') {
                    swal({
                        title: "Não há departamentos cadastrados.", 
                        type: "warning"
                    },function(){ 
                        location.reload();
                    });
                }else{
                    if (nome_clerk == '') {
                        swal({
                            title: "Campo nome vazio.",
                            text: "É necessário preencher todos os campos.",
                            type: "warning"
                        });
                    }else if (email_clerk == '') {
                        swal({
                            title: "Campo e-mail vazio.",
                            text: "É necessário preencher todos os campos.",
                            type: "warning"
                        });
                    }else if (user_clerk == '') {
                        swal({
                            title: "Campo username vazio.",
                            text: "É necessário preencher todos os campos.",
                            type: "warning"
                        });
                    }else if (senha_clerk.length < 10) {
                        swal({
                            title: "Campo senha inválido.",
                            text: "Senha precisa conter ao menos 10 caracteres.",
                            type: "warning"
                        });
                    }else if (senha_clerk == '') {
                        swal({
                            title: "Campo senha vazio.",
                            text: "É necessário preencher todos os campos.",
                            type: "warning"
                        });
                    }else if (confirmar_senha_clerk == '') {
                        swal({
                            title: "Campo senha não confere.",
                            text: "É necessário que o campo senha seja igual a confirmação.",
                            type: "warning"
                        });
                    }else{ 

                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost/api/clerks",
                            "method": "POST",
                            "headers": {
                                "content-type": "application/json",
                                "authorization": "Bearer "+token,
                                "cache-control": "no-cache",
                                "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                            },
                            "processData": false,
                            "data": '{"license_id": '+id_licenca+', "department_id": '+div_combo_dptos+', "name": "'+nome_clerk+'", "email": "'+email_clerk+'", "username": "'+user_clerk+'", "password": "'+senha_clerk+'"}'
                        }

                        $.ajax(settings).done(function (response) { 
                            console.log(response);
                            if (response["data"] == null || response["data"] == '') {
                                swal({
                                    title: "Atendente não cadastrado.",
                                    text: "Tente novamente.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Atendente cadastrado com sucesso.", 
                                    type: "success"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        });

                    }
                }
            }

            function del_clerk(id_department){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"]; 

                swal({
                    title: "Você tem certeza?",
                    text: "O atentende será excluído.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Deletar",
                    closeOnConfirm: true,
                    closeOnCancel: false
                }, function (isConfirm) {

                    if (isConfirm) {

                    }else{
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost/api/clerks/"+id_department,
                            "method": "DELETE",
                            "headers": {
                                "content-type": "application/json",
                                "authorization": "Bearer "+token,
                                "cache-control": "no-cache",
                                "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                            },
                            "processData": false
                        }

                        $.ajax(settings).done(function (response) { 
                            if (response == null || response == '' || response == 'undefined' || response == undefined) { 
                                swal({
                                    title: "Atendente excluído com sucesso.", 
                                    type: "success"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Atendente não excluído.",
                                    text: "Tente novamente.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        });
                    }

                });
            }
        //FIM FUNÇÕES CLERKS

        //FUNÇÕES REASONS
            function save_reason(){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"];

                var mensagem_reason = $("#mensagem_reason").val();
                if ($("#vinculo_reason").is(":checked")) {
                    var vinculo_reason = true;
                }else{
                    var vinculo_reason = false;
                }

                if (mensagem_reason == '') {
                    swal({
                        title: "Campo descritivo vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else{

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "http://localhost/api/reasons",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "authorization": "Bearer "+token,
                            "cache-control": "no-cache",
                            "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                        },
                        "processData": false,
                        "data": '{"license_id": '+id_licenca+', "name":"'+mensagem_reason+'", "bound":"'+vinculo_reason+'"}'
                    }

                    $.ajax(settings).done(function (response) { 
                        if (response["data"] == null || response["data"] == '') {
                            swal({
                                title: "Motivo de finalização não cadastrado.",
                                text: "Tente novamente.",
                                type: "warning"
                            },function(){ 
                                location.reload();
                            });
                        }else{
                            swal({
                                title: "Motivo de finalização cadastrado com sucesso.", 
                                type: "success"
                            },function(){ 
                                location.reload();
                            });
                        }
                    });

                }
            }

            function del_reasons(id_reason){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"]; 

                swal({
                    title: "Você tem certeza?",
                    text: "O motivo de finalização será excluído.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Deletar",
                    closeOnConfirm: true,
                    closeOnCancel: false
                }, function (isConfirm) {

                    if (isConfirm) {

                    }else{
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost/api/reasons/"+id_reason,
                            "method": "DELETE",
                            "headers": {
                                "content-type": "application/json",
                                "authorization": "Bearer "+token,
                                "cache-control": "no-cache",
                                "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                            },
                            "processData": false
                        }

                        $.ajax(settings).done(function (response) { 
                            if (response == null || response == '' || response == 'undefined' || response == undefined) { 
                                swal({
                                    title: "Motivo de finalização excluído com sucesso.", 
                                    type: "success"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Motivo de finalização não excluído.",
                                    text: "Tente novamente.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        });
                    }

                });
            }
        //FIM FUNÇÕES REASONS

        //FUNÇÕES CONFIG
            function save_config(){    
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"];

                var nome__instancia = $("#nome__instancia").val(); 
                var mensagem__boasvindas = $("#mensagem__boasvindas").val(); 
                var mensagem__final__padrao = $("#mensagem__final__padrao").val();
                var endpoint_pro = $("#endpoint_pro").val(); 
                var token_pro = $("#token_pro").val(); 
                var id_pro = $("#id_pro").val();   

                var sunday_open = $("#sunday_open").val(); 
                var sunday_close = $("#sunday_close").val(); 
                var monday_open = $("#monday_open").val(); 
                var monday_close = $("#monday_close").val(); 
                var tuesday_open = $("#tuesday_open").val(); 
                var tuesday_close = $("#tuesday_close").val(); 
                var wednesday_open = $("#wednesday_open").val(); 
                var wednesday_close = $("#wednesday_close").val(); 
                var thursday_open = $("#thursday_open").val(); 
                var thursday_close = $("#thursday_close").val(); 
                var friday_open = $("#friday_open").val(); 
                var friday_close = $("#friday_close").val(); 
                var saturday_open = $("#saturday_open").val(); 
                var saturday_close = $("#saturday_close").val(); 

                if (nome__instancia == '') {
                    swal({
                        title: "Campo nome vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else if (mensagem__boasvindas == '') {
                    swal({
                        title: "Campo mensagem de boas vindas vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else if (mensagem__final__padrao == '') {
                    swal({
                        title: "Campo mensagem de finalização vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else if (endpoint_pro == '') {
                    swal({
                        title: "Campo endpoint vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else if (token_pro == '') {
                    swal({
                        title: "Campo token vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else if (id_pro == '') {
                    swal({
                        title: "Campo id vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else{

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "http://localhost/api/configurations",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "authorization": "Bearer "+token,
                            "cache-control": "no-cache",
                            "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                        },
                        "processData": false,
                        "data": '{"license_id": '+id_licenca+', "name":"'+nome__instancia+'","welcome_message": "'+mensagem__boasvindas+'","logout_message": "'+mensagem__final__padrao+'","attendance": 0,"absent_message": "","monday_open": "'+monday_open+'","monday_close": "'+monday_close+'","tuesday_open": "'+tuesday_open+'","tuesday_close": "'+tuesday_close+'","wednesday_open": "'+wednesday_open+'","wednesday_close": "'+wednesday_close+'","thursday_open": "'+thursday_open+'","thursday_close": "'+thursday_close+'","friday_open": "'+friday_open+'","friday_close" : "'+friday_close+'","saturday_open": "'+saturday_open+'","saturday_close": "'+saturday_close+'","sunday_open": "'+sunday_open+'","sunday_close": "'+sunday_close+'","endpoint_chatpro": "'+endpoint_pro+'","token_chatpro": "'+token_pro+'","id_chatpro": "'+id_pro+'"}'
                    }

                    $.ajax(settings).done(function (response) { 
                        if (response["data"] == null || response["data"] == '') {
                            swal({
                                title: "Configuração de instância não cadastrada.",
                                text: "Tente novamente.",
                                type: "warning"
                            },function(){ 
                                location.reload();
                            });
                        }else{
                            swal({
                                title: "Configuração de instância cadastrada com sucesso.", 
                                type: "success"
                            },function(){ 
                                location.reload();
                            });
                        }
                    });

                }
            }

            function del_config(id_licenca){
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"]; 

                swal({
                    title: "Você tem certeza?",
                    text: "A configuração de instância será excluída.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Deletar",
                    closeOnConfirm: true,
                    closeOnCancel: false
                }, function (isConfirm) {

                    if (isConfirm) {

                    }else{
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost/api/configurations/"+id_licenca,
                            "method": "DELETE",
                            "headers": {
                                "content-type": "application/json",
                                "authorization": "Bearer "+token,
                                "cache-control": "no-cache",
                                "postman-token": "d1ad31b0-3dd0-f91a-ef14-cd63d5e4661e"
                            },
                            "processData": false
                        }

                        $.ajax(settings).done(function (response) {  
                            if (response == null || response == '' || response == 'undefined' || response == undefined) { 
                                swal({
                                    title: "Instância de configuração excluída com sucesso.", 
                                    type: "success"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Instância de configuração não excluída.",
                                    text: "Tente novamente.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        });
                    }

                });
            }
        //FIM FUNÇÕES CONFIG

        function exibe_div_conversa(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name, number_contato){
            $(".conversa").show();
            $('.container__config').hide();
            $("#mensagem__taurus").hide(); 
            $('.conversa__mensagens').animate({scrollTop: $('.conversa__mensagens')[0].scrollHeight}, 500);

            $('#nome__contato').val(nome_contato);
            $('#license__id').val(license_id);
            $('#clerk__id').val(clerk_id);
            $('#token').val(token);
            $('#session__id').val(session_id);
            $('#nome_contato_name').val(nome_contato_name);
            $('#number__contato').val(number_contato);
 
            get_message_by_session(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name);
        } 

        function get_message_by_session(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name){
            $.ajax({
                url: "{{asset('app-assets/functions/session.php')}}",
                type:'POST',
                data: {nome_contato:nome_contato, license_id:license_id, clerk_id:clerk_id, token:token, session_id:session_id, acao:'get_message_by_session'},
                success: function(response){
                    $("#nome__contato").html(nome_contato_name); 
                    $(".conversa__mensagens").html(response); 

                    $.ajax({
                        url: "{{asset('app-assets/functions/session.php')}}",
                        type:'POST',
                        data: {license_id:license_id, clerk_id:clerk_id, session_id:session_id, acao:'verify_message_by_session'},
                        success: function(response){
                            console.log(response);
                            if (response == 1) {
                                $('#campo__nova_mensagem').attr("disabled", "disabled");  
                                $('.acoes__mensagem').attr("style", "display:none"); 
                            }else{
                                $('#campo__nova_mensagem').removeAttr("disabled"); 
                                $('.acoes__mensagem').attr("style", "display:block"); 
                            }
                        }
                    });
                }
            });
        }

        function end_message(){
            var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
            var dados = $.parseJSON(getskills[0]); 

            var token = dados["access_token"];
            var id_licenca = dados["id_licenca"];

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/reasons",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "d13df344-a066-986e-9d94-f06572de1383"
                }
            }

            $.ajax(settings).done(function (response) {
                var escrever = response["data"]; 
                var motivos = '';
                $(escrever).each(function(i, item) { 
                    if(item.license_id == id_licenca){ 
                        motivos += '<option value="'+item.name+'">'+item.name+'</option>';
                    }
                });

                bootbox.dialog({
                    message:  '<div class="row">'+ 
                                '<div class="col-md-12">'+
                                    '<h4>Finalizar conversa</h4><hr>'+ 
                                    '<select class="form-control m-b" id="select_motivo" style="padding: 3px 0px 5px;">'+
                                        '<option value="">Selecione um motivo para finalizar...</option>'+
                                        motivos+
                                    '</select>'+ 
                                '</div>'+
                              '</div>',
                    buttons: { 
                        success: {
                            label: "Selecionar",
                            className: "btn-primary pull-left btnModal",
                            callback: function () { 
                                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                                var dados = $.parseJSON(getskills[0]); 

                                var token = dados["access_token"];
                                var id_licenca = dados["id_licenca"];

                                var dados_sessao_clerk = $.parseJSON(localStorage.getItem("dados_sessao_clerk"));
                                dados_sessao_clerk = $.parseJSON(dados_sessao_clerk);  
                                
                                if(dados_sessao_clerk[0] != '{}'){ 
                                    var dados = [];
                                    for (var key in dados_sessao_clerk) {
                                        dados.push(dados_sessao_clerk[key]);
                                    } 
                                    var id_clerk = dados[0];
                                }

                                var message = $("#select_motivo").val();
                                var number__contato = $("#number__contato").val();
                                var session_id = $('#session__id').val();

                                var settings = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": "http://localhost/api/operations/send-message",
                                    "method": "POST",
                                    "headers": {
                                        "license_id": id_licenca,
                                        "authorization": "Bearer "+token,
                                        "content-type": "application/json",
                                        "cache-control": "no-cache",
                                        "postman-token": "6c47de3e-997b-114a-2923-aa17300735aa"
                                    },
                                    "processData": false,
                                    "data": '{"message": "'+message+'", "number": "'+number__contato+'", "clerk_id": '+id_clerk+'}'
                                } 

                                $.ajax(settings).done(function (response) {    

                                    $.ajax({
                                        url: "{{asset('app-assets/functions/session.php')}}",
                                        type:'POST',
                                        data: {id_licenca:id_licenca, id_clerk:id_clerk, session_id:session_id, acao:'close_session_contact'},
                                        success: function(response){
                                            console.log(response);

                                            var nome_contato = $('#nome__contato').val();
                                            var license_id = $('#license__id').val();
                                            var clerk_id = $('#clerk__id').val();
                                            var token = $('#token').val();
                                            var session_id = $('#session__id').val();
                                            var nome_contato_name = $('#nome_contato_name').val(); 

                                            $('#color__dados__contato').attr("style", "color:#b1b1b1"); 
                                            $('#campo__nova_mensagem').attr("disabled", "true"); 

                                            get_message_by_session(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name);

                                            return false;
                                        }
                                    });

                                });                         
                            }
                        }
                    }
                });
            });
        }

        function change_clerk(){
            var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
            var dados = $.parseJSON(getskills[0]); 

            var token = dados["access_token"];
            var id_licenca = dados["id_licenca"];

            var dados_sessao_clerk = $.parseJSON(localStorage.getItem("dados_sessao_clerk"));
            dados_sessao_clerk = $.parseJSON(dados_sessao_clerk);  
            
            if(dados_sessao_clerk[0] != '{}'){ 
                var dados = [];
                for (var key in dados_sessao_clerk) {
                    dados.push(dados_sessao_clerk[key]);
                } 
                var id_clerk = dados[0];
            }

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/clerks",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "b50fb89a-89e6-d333-a6cf-38001674eccc"
                }
            }

            $.ajax(settings).done(function (response) { 
                var escrever = response["data"];  

                var motivos = '';
                $(escrever).each(function(i, item) { 
                    if(item.license_id == id_licenca && id_clerk != item.id){    
                        motivos += '<option value="'+item.name+';'+item.id+'">'+item.name+'</option>'; 
                    }
                    
                });
                

                bootbox.dialog({
                    message:  '<div class="row">'+ 
                                '<div class="col-md-12">'+
                                    '<h4>Transferir chamado</h4><hr>'+ 
                                    '<select class="form-control m-b" id="select_clerk" style="padding: 3px 0px 5px;">'+
                                        '<option value="">Selecione um atendente para transferir...</option>'+
                                        motivos+
                                    '</select>'+ 
                                '</div>'+
                              '</div>',
                    buttons: { 
                        success: {
                            label: "Selecionar",
                            className: "btn-primary pull-left btnModal",
                            callback: function () { 
                                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                                var dados = $.parseJSON(getskills[0]); 

                                var token = dados["access_token"];
                                var id_licenca = dados["id_licenca"];

                                var dados_sessao_clerk = $.parseJSON(localStorage.getItem("dados_sessao_clerk"));
                                dados_sessao_clerk = $.parseJSON(dados_sessao_clerk);  
                                
                                if(dados_sessao_clerk[0] != '{}'){ 
                                    var dados = [];
                                    for (var key in dados_sessao_clerk) {
                                        dados.push(dados_sessao_clerk[key]);
                                    } 
                                    var id_clerk = dados[0];
                                }

                                var select_clerk = $("#select_clerk").val();
                                var dados_clerk_atual = select_clerk.split(";");
                                var id_clerk_change = dados_clerk_atual[1];

                                var message = 'O chamado será transferido. Você será atendido por '+dados_clerk_atual[0];
                                var number__contato = $("#number__contato").val();
                                var session_id = $('#session__id').val();     

                                var settings = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": "http://localhost/api/operations/send-message",
                                    "method": "POST",
                                    "headers": {
                                        "license_id": id_licenca,
                                        "authorization": "Bearer "+token,
                                        "content-type": "application/json",
                                        "cache-control": "no-cache",
                                        "postman-token": "6c47de3e-997b-114a-2923-aa17300735aa"
                                    },
                                    "processData": false,
                                    "data": '{"message": "'+message+'", "number": "'+number__contato+'", "clerk_id": '+id_clerk+'}'
                                } 

                                $.ajax(settings).done(function (response) {    

                                    $.ajax({
                                        url: "{{asset('app-assets/functions/session.php')}}",
                                        type:'POST',
                                        data: {id_licenca:id_licenca, id_clerk_change:id_clerk_change, session_id:session_id, acao:'close_session_clerk'},
                                        success: function(response){
                                            console.log(response);

                                            var nome_contato = $('#nome__contato').val();
                                            var license_id = $('#license__id').val();
                                            var clerk_id = $('#clerk__id').val();
                                            var token = $('#token').val();
                                            var session_id = $('#session__id').val();
                                            var nome_contato_name = $('#nome_contato_name').val(); 

                                            $('#color__dados__contato').attr("style", "color:#b1b1b1"); 
                                            $('#campo__nova_mensagem').attr("disabled", "true"); 

                                            get_message_by_session(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name);

                                            return false;
                                        }
                                    });

                                });                                           
                            }
                        }
                    }
                });

                
            }); 
        }

        function send_file(){
            bootbox.dialog({
                message: '<div class="row">'+ 
                        '<div class="col-md-12">'+ 
                            '<h4>Selecionar arquivo</h4><hr>'+
                            '<div class="form-group">'+
                                '<input id="uploadBtn" type="file" class="form-control" />'+
                            '</div>'+
                        '</div>'+
                      '</div>',
                buttons: { 
                    success: {
                        label: "Selecionar",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {  
                            var imagem_galeria = $("#uploadBtn")[0].files[0]; 

                            var form_data = new FormData();

                            form_data.append('arquivo', imagem_galeria); 
                            
                            $.ajax({

                                url: "{{asset('app-assets/functions/upload.php')}}",
                                dataType: 'text',
                                cache: false,
                                contentType: false,
                                processData: false,
                                data: form_data,
                                type: 'POST',
                                success: function(resposta){
                                    console.log(resposta); 

                                    var tipo_arquivo = resposta.split(".");

                                    $("#campo__novo__arquivo").attr("style", "padding: 3px;border: 1px solid #ddd;width: 63px;height: 63px;background-color: #ddd;position: absolute;display: block;text-align:center");
                                    $("#campo__nova_mensagem").attr("style", "padding-left: 71px;");
                                    $("#nome__novo__arquivo").val(resposta);
                                    if (tipo_arquivo[3] == "png" || tipo_arquivo[3] == "jpg" || tipo_arquivo[3] == "jpeg") {
                                        $("#dados__novo__arquivo").html('<img src="'+resposta+'" style="max-height:40px;width: 100%;">');
                                    }else if (tipo_arquivo[3] == "pdf") {
                                        $("#dados__novo__arquivo").html("<i class='fa fa-file' style='font-size: 26px;padding-top: 7px;'></i>");
                                    }else{
                                        $("#dados__novo__arquivo").html("<i class='fa fa-camera' style='font-size: 26px;padding-top: 7px;'></i>");
                                    }
                                    
                                }

                            });
                        }
                    },
                }
                
            });
        }

        function send_message_chat(){
            if ($("#nome__novo__arquivo").val() == '') { 
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"];

                var dados_sessao_clerk = $.parseJSON(localStorage.getItem("dados_sessao_clerk"));
                dados_sessao_clerk = $.parseJSON(dados_sessao_clerk);  
                
                if(dados_sessao_clerk[0] != '{}'){ 
                    var dados = [];
                    for (var key in dados_sessao_clerk) {
                        dados.push(dados_sessao_clerk[key]);
                    } 
                    var id_clerk = dados[0];
                }

                var message = $("#campo__nova_mensagem").val();
                var number__contato = $("#number__contato").val();

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost/api/operations/send-message",
                    "method": "POST",
                    "headers": {
                        "license_id": id_licenca,
                        "authorization": "Bearer "+token,
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        "postman-token": "6c47de3e-997b-114a-2923-aa17300735aa"
                    },
                    "processData": false,
                    "data": '{"message": "'+message+'", "number": "'+number__contato+'", "clerk_id": '+id_clerk+'}'
                }

                if (message == '') {
                    swal({
                        title: "Campo mensagem vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else{

                    $.ajax(settings).done(function (response) {
                        console.log(response);

                        var nome_contato = $('#nome__contato').val();
                        var license_id = $('#license__id').val();
                        var clerk_id = $('#clerk__id').val();
                        var token = $('#token').val();
                        var session_id = $('#session__id').val();
                        var nome_contato_name = $('#nome_contato_name').val(); 

                        get_message_by_session(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name);

                        return false;
                    });

                }
            }else{
                var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
                var dados = $.parseJSON(getskills[0]); 

                var token = dados["access_token"];
                var id_licenca = dados["id_licenca"];

                var dados_sessao_clerk = $.parseJSON(localStorage.getItem("dados_sessao_clerk"));
                dados_sessao_clerk = $.parseJSON(dados_sessao_clerk);  
                
                if(dados_sessao_clerk[0] != '{}'){ 
                    var dados = [];
                    for (var key in dados_sessao_clerk) {
                        dados.push(dados_sessao_clerk[key]);
                    } 
                    var id_clerk = dados[0];
                }

                var message = $("#campo__nova_mensagem").val();
                var arquivo = $("#nome__novo__arquivo").val();
                var number__contato = $("#number__contato").val();

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost/api/operations/send-file",
                    "method": "POST",
                    "headers": {
                        "license_id": id_licenca,
                        "authorization": "Bearer "+token,
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        "postman-token": "6c47de3e-997b-114a-2923-aa17300735aa"
                    },
                    "processData": false,
                    "data": '{"caption": "'+message+'", "number": "'+number__contato+'", "url": "'+arquivo+'"}'
                }

                if (message == '') {
                    swal({
                        title: "Campo mensagem vazio.",
                        text: "É necessário preencher todos os campos.",
                        type: "warning"
                    });
                }else{

                    $.ajax(settings).done(function (response) {
                        console.log(response);

                        $("#campo__novo__arquivo").attr("style", "display: none;");
                        $("#campo__nova_mensagem").attr("style", "padding-left: 0px;");
                        $("#nome__novo__arquivo").val("");
                        $("#campo__nova_mensagem").val("");
                        var session_id = $('#session__id').val();
                        var nome_contato = number__contato+'@s.whatsapp.net';

                        $.ajax({
                            url: "{{asset('app-assets/functions/session.php')}}",
                            type:'POST',
                            data: {token:token, id_licenca:id_licenca, id_clerk:id_clerk, session_id:session_id, nome_contato:nome_contato, arquivo:arquivo, message:message, acao:'set_message_file'},
                            success: function(response){
                                var nome_contato = $('#nome__contato').val();
                                var license_id = $('#license__id').val();
                                var clerk_id = $('#clerk__id').val();
                                var token = $('#token').val();
                                var session_id = $('#session__id').val();
                                var nome_contato_name = $('#nome_contato_name').val(); 

                                get_message_by_session(nome_contato, license_id, clerk_id, token, session_id, nome_contato_name);

                                return false;
                            }
                        }); 
                    });

                }
            }
        }

        function check_session() {
            var dados_sessao_cliente = localStorage.getItem("dados_sessao_cliente");
            dados_sessao_cliente = JSON.parse(dados_sessao_cliente);
            if(dados_sessao_cliente == null){
                window.location.href = '/';
            } 

            var dados_sessao_clerk = localStorage.getItem("dados_sessao_clerk");
            dados_sessao_clerk = JSON.parse(dados_sessao_clerk); 
            if(dados_sessao_clerk[0] != '{}'){
                $("#container__usuarios").attr('style', 'display:none');
                $("#container__estancia").attr('style', 'display:none');
                $("#container__departamentos").attr('style', 'display:none');

                $("#botao__departamentos").attr('style', 'display:none');
                $("#botao__usuarios").attr('style', 'display:none');
                $("#botao__estancia").attr('style', 'display:none'); 
            }
        }

        function ver_dados_local_storage(){ 
            var getskills = $.parseJSON(localStorage.getItem("dados_sessao_cliente")); 
            var dados = $.parseJSON(getskills[0]); 

            var token = dados["access_token"];
            var id_licenca = dados["id_licenca"];

            var dados_sessao_clerk = $.parseJSON(localStorage.getItem("dados_sessao_clerk"));
            dados_sessao_clerk = $.parseJSON(dados_sessao_clerk);  
            
            if(dados_sessao_clerk[0] != '{}'){ 
                var dados = [];
                for (var key in dados_sessao_clerk) {
                    dados.push(dados_sessao_clerk[key]);
                } 
                var id_clerk = dados[0];

                set_dados_message_by_clerk(token, id_licenca, id_clerk);
            }else{
                set_dados_message_by_clerk(token, id_licenca, null);
            }

            set_dados_departamentos(token, id_licenca);
            set_dados_clerks(token, id_licenca);
            set_dados_reasons(token, id_licenca);
            set_dados_configurations(token, id_licenca); 
        }

        async function set_dados_departamentos(token, id_licenca){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/departments",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "b50fb89a-89e6-d333-a6cf-38001674eccc"
                }
            }

            $.ajax(settings).done(function (response) {
                var escrever = response["data"]; 
                var retorno_dptos = "";
                var retorno_combo_dptos = "";

                $(escrever).each(function(i, item) { 
                    if(item.license_id == id_licenca){ 
                        retorno_dptos += "<tr><td><a onclick='del_departament(\""+item.id+"\")'><i class='fa fa-times' style='color:#d41212'></i></a></td> <td>"+item.name+"</td><td> - </td></tr>";
                        retorno_combo_dptos += "<option value="+item.id+">"+item.name+"</option>";
                    }
                });

                $("#div_dptos").html(retorno_dptos);
                $("#div_combo_dptos").html(retorno_combo_dptos);
            });
        } 
 
        async function set_dados_clerks(token, id_licenca){ 

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/clerks",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "b50fb89a-89e6-d333-a6cf-38001674eccc"
                }
            }

            $.ajax(settings).done(function (response) { 
                var escrever = response["data"]; 
                var retorno_clerks = "";  

                $(escrever).each(function(i, item) { 
                    if(item.license_id == id_licenca){  

                        retorno_clerks += "<tr><td><a onclick='del_clerk(\""+item.id+"\")'><i class='fa fa-times' style='color:#d41212'></i></a></td> <td>"+item.name+"</td> <td>"+item.email+"</td> <td id='td_id_nome_department_"+i+"'> </td></tr>";
                        $("#div__list_clerks").html(retorno_clerks); 

                        var nome_departamento = ''; 

                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost/api/departments/"+item.department_id,
                            "method": "GET",
                            "headers": {
                                "authorization": "Bearer "+token,
                                "cache-control": "no-cache",
                                "postman-token": "8ad833e1-fa2e-a02b-eb8a-e5f46f195e51"
                            }
                        } 

                        $.ajax(settings).done(function (response) {  
                            if (item.department_id == response["data"][0]["id"]) {
                                nome_departamento = response["data"][0]["name"];  
                                $("#td_id_nome_department_"+i).html(nome_departamento); 
                            }  
                        });  

                                
                                
                    }
                    
                });

                
            }); 
        }

        async function set_dados_reasons(token, id_licenca){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/reasons",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "b50fb89a-89e6-d333-a6cf-38001674eccc"
                }
            }

            $.ajax(settings).done(function (response) { 
                var escrever = response["data"]; 
                var retorno_reasons = "";  

                $(escrever).each(function(i, item) { 
                    if(item.license_id == id_licenca){  

                        if (item.bound == true) {
                            var bound = 'Sim';
                        }else{
                            var bound = 'Não';
                        }

                        retorno_reasons += "<tr><td><a onclick='del_reasons(\""+item.id+"\")'><i class='fa fa-times' style='color:#d41212'></i></a></td> <td>"+item.name+"</td> <td>"+bound+"</td> </tr>";
                    }
                });

                $("#div_reasons").html(retorno_reasons);
            }); 
        }

        async function set_dados_configurations(token, id_licenca){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/configurations",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "b50fb89a-89e6-d333-a6cf-38001674eccc"
                }
            }

            $.ajax(settings).done(function (response) { 
                var escrever = response["data"]; 
                var retorno_reasons = "";  

                $(escrever).each(function(i, item) { 
                    if(item.license_id == id_licenca){  

                        if (item.sunday_open == null || item.sunday_close == null) {
                            var var_sunday = '<p style="margin-bottom:0">Domingo: Não abre</p>';
                        }else{
                            var var_sunday = '<p style="margin-bottom:0">Domingo: '+item.sunday_open+' a '+item.sunday_close+'</p>';
                        }

                        if (item.monday_open == null || item.monday_close == null) {
                            var var_monday = '<p style="margin-bottom:0">Segunda: Não abre</p>';
                        }else{
                            var var_monday = '<p style="margin-bottom:0">Segunda: '+item.monday_open+' a '+item.monday_close+'</p>';
                        }

                        if (item.tuesday_open == null || item.tuesday_close == null) {
                            var var_tuesday = '<p style="margin-bottom:0">Terça: Não abre</p>';
                        }else{
                            var var_tuesday = '<p style="margin-bottom:0">Terça: '+item.tuesday_open+' a '+item.tuesday_close+'</p>';
                        }

                        if (item.wednesday_open == null || item.wednesday_close == null) {
                            var var_wednesday = '<p style="margin-bottom:0">Quarta: Não abre</p>';
                        }else{
                            var var_wednesday = '<p style="margin-bottom:0">Quarta: '+item.wednesday_open+' a '+item.wednesday_close+'</p>';
                        }

                        if (item.thursday_open == null || item.thursday_close == null) {
                            var var_thursday = '<p style="margin-bottom:0">Quinta: Não abre</p>';
                        }else{
                            var var_thursday = '<p style="margin-bottom:0">Quinta: '+item.thursday_open+' a '+item.thursday_close+'</p>';
                        }

                        if (item.friday_open == null || item.friday_close == null) {
                            var var_friday = '<p style="margin-bottom:0">Sexta: Não abre</p>';
                        }else{
                            var var_friday = '<p style="margin-bottom:0">Sexta: '+item.friday_open+' a '+item.friday_close+'</p>';
                        }

                        if (item.saturday_open == null || item.saturday_close == null) {
                            var var_saturday = '<p style="margin-bottom:0">Sábado: Não abre</p>';
                        }else{
                            var var_saturday = '<p style="margin-bottom:0">Sábado: '+item.saturday_open+' a '+item.saturday_close+'</p>';
                        }

                        retorno_reasons += '<div style="border-bottom: 1px solid #ddd;padding-bottom: 12px;margin-bottom: 12px;"><a onclick="del_config('+id_licenca+')"><p class="font-weight-bold m-0" style="float:right"><i class="fa fa-times"></i></p></a><p class="font-weight-bold m-0">Nome da Instância</p><p>'+item.name+'</p> <p class="font-weight-bold m-0">Mensagem de Boas Vindas</p><p>'+item.welcome_message+'</p> <p class="font-weight-bold m-0">Mensagem de Finalização</p><p>'+item.logout_message+'</p> <p class="font-weight-bold m-0">Horário de Atendimento</p>'+var_sunday+''+var_monday+''+var_tuesday+''+var_wednesday+''+var_thursday+''+var_friday+''+var_saturday+'</div>';
                    }
                });

                $("#div_configurations").html(retorno_reasons);
            }); 
        }

        async function set_dados_contacts(token, id_licenca){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost/api/operations/contacts",
                "method": "GET",
                "headers": {
                    "license_id": id_licenca,
                    "authorization": "Bearer "+token,
                    "cache-control": "no-cache",
                    "postman-token": "b50fb89a-89e6-d333-a6cf-38001674eccc"
                }
            }

            $.ajax(settings).done(function (response) { 
                var escrever = response["data"]; 
                var retorno_contatos = "";  

                var array_contatos = [];
                $(escrever).each(function(i, item) {  
                    if(item.Name != ""){   
                        array_contatos.push(item); 
                    }
                });
                $(array_contatos).each(function(i, item) {  
                    var contador = i+1; 
                    retorno_contatos += '<li class="contato list-group-item" contato="'+contador+'"><div class="row"><div class="col-sm-2 px-3 d-flex align-items-center justify-content-center border-right"><img src="{{asset("app-assets/assets/img/whatsapp-logo.png")}}" alt="Cliente" class="img-fluid rounded-circle img-contato"></div><div class="col-sm-2 p-0 d-flex align-items-center justify-content-center"><img src="{{asset("app-assets/assets/img/client.jpg")}}" alt="Cliente" class="img-fluid rounded-circle img-contato"></div><div class="col-sm-8"><div class="d-flex"><span class="font-weight-bold">'+item.Name+'</span><span class="ml-auto">12:36</span></div><div class=""> </div><div class="resumo-mensagem text-truncate"> Vamos construir um novo...</div></div></div></li>'; 
                });

                $("#lista__contatos").html(retorno_contatos);
            }); 
        }

        async function set_dados_message_by_clerk(token, id_licenca, id_clerk){
            $.ajax({
                url: "{{asset('app-assets/functions/session.php')}}",
                type:'POST',
                data: {token:token, id_licenca:id_licenca, id_clerk:id_clerk, acao:'set_dados_message_by_clerk'},
                success: function(response){
                    $("#lista__contatos").html(response); 
                }
            });
        }

        $(document).ready(function(){
            check_session();

            ver_dados_local_storage();
        });
    </script>
  </body>
</html>