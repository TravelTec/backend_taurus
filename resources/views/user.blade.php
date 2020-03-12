<?php  
	session_start();

	$_SESSION['license_id'] = $_GET['a'];
?>

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
    <!-- Ícones Font Awesome 4.7 -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"> 
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
                <li class="contato list-group-item" contato="1">
                    <div class="row">
                        <div class="col-sm-2 px-3 d-flex align-items-center justify-content-center border-right">
                            <img src="{{asset('app-assets/assets/img/whatsapp-logo.png')}}" alt="Cliente" class="img-fluid rounded-circle img-contato">
                        </div>
                        <div class="col-sm-2 p-0 d-flex align-items-center justify-content-center">
                            <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato">
                        </div>
                        <div class="col-sm-8">
                            <div class="d-flex">
                                <span class="font-weight-bold">Pierre Brito</span>
                                <span class="ml-auto">12:36</span>
                            </div>
                            <div class="">
                                <i class="fas fa-bookmark text-muted"></i>
                                <span class="font-italic">novo</span>
                            </div>
                            <div class="resumo-mensagem text-truncate">
                                "Daniel": kkkk
                            </div>
                        </div>
                    </div>
                </li>
                <li class="contato list-group-item" contato="2">
                    <div class="row">
                        <div class="col-sm-2 px-3 d-flex align-items-center justify-content-center border-right">
                            <img src="{{asset('app-assets/assets/img/whatsapp-logo.png')}}" alt="Cliente" class="img-fluid rounded-circle img-contato">
                        </div>
                        <div class="col-sm-2 d-flex align-items-center justify-content-center p-0">
                            <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato">
                        </div>
                        <div class="col-sm-8">
                            <div class="d-flex">
                                <span class="font-weight-bold">Rodolfo Landim</span>
                                <span class="ml-auto">20:00</span>
                            </div>
                            <div class="">
                                <i class="fas fa-bookmark text-muted"></i>
                                <span class="font-italic">novo</span>
                            </div>
                            <div class="resumo-mensagem text-truncate">
                                Vamos construir um novo Flamengo!
                            </div>
                        </div>
                    </div>
                </li>
                <li class="contato list-group-item" contato="3">
                    <div class="row">
                        <div class="col-sm-2 px-3 d-flex align-items-center justify-content-center border-right">
                            <img src="{{asset('app-assets/assets/img/menssenger-logo.png')}}" alt="Cliente" class="img-fluid rounded-circle img-contato">
                        </div>
                        <div class="col-sm-2 d-flex align-items-center justify-content-center p-0">
                            <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato">
                        </div>
                        <div class="col-sm-8">
                            <div class="d-flex">
                                <span class="font-weight-bold">Anonimo</span>
                                <span class="ml-auto">14:00</span>
                            </div>
                            <div class="">
                                <i class="fas fa-bookmark text-muted"></i>
                                <span class="font-italic">novo</span>
                            </div>
                            <div class="resumo-mensagem text-truncate">
                                Há uma nova ameaça surgindo!
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul id="lista__configuracoes" class="list-group" style="display: none;">
                <li class="list-group-item" id="botao__voltar">
                    <i class="fas fa-chevron-left mr-2"></i> Voltar
                </li>
                <li class="list-group-item" id="botao__atalhos">
                    Atalhos
                </li>
                <li class="list-group-item" id="botao__usuarios">
                    Usuários
                </li>
                <li class="list-group-item" id="botao__finalizacoes">
                    Motivos de finalização
                </li>
                <li class="list-group-item" id="botao__meuperfil">
                    Meu perfil
                </li>
                <li class="list-group-item" id="botao__estancia">
                    Configurações da instância
                </li>
                <li class="list-group-item" id="botao__departamentos">
                    Departamentos
                </li>
            </ul>
        </div>
        <div id="container__conversa" class="col-sm-9 p-0">
            <!-- Cada DIV conversa tem o id do contato para relacionar a conversa com o contato -->
            <div class="conversa" contato="1">
                <div id="cabecalho__conversa" class="p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato2">
                        <span class="font-weight-bold">Pierre Brito</span>
                    </div>
                    <div class="">
                        <a href="#" class="mx-2"><i class="fas fa-paperclip"></i> anexo</a>
                        <a href="#" class="mx-2"> <i class="fas fa-exchange-alt"></i> transferir</a>  
                        <a href="#" class="mx-2"><i class="fas fa-check-square"></i> finalizar</a>       
                    </div>
                </div>
                <div class="conversa__mensagens">
                    <div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            Olá
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15</small> 
                            </div>
                        </div>
                    </div>
                    <div class="minha__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-left p-2">
                            Olá
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15 <i class="fas fa-check"></i> </small> 
                            </div>
                        </div>
                    </div>
                    <div class="minha__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-left p-2">
                            Olá
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15 <i class="fas fa-check"></i> </small> 
                            </div>
                        </div>
                    </div>
                    <div class="minha__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-left p-2">
                            Olá
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15 <i class="fas fa-check"></i> </small> 
                            </div>
                        </div>
                    </div>
                    <div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            Olá
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15 </small> 
                            </div>
                        </div>
                    </div>
                    <div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae quisquam ducimus veritatis voluptatum excepturi, mollitia exercitationem sapiente, quam deserunt quidem incidunt saepe corporis magnam ut nemo dignissimos? Voluptatum, atque.
                            <div class="text-muted text-right p-1">
                                <small>29/02/2020 - 18:29:15 </small> 
                                </div>
                        </div>
                    </div>
                    <div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae quisquam ducimus veritatis voluptatum excepturi, mollitia exercitationem sapiente, quam deserunt quidem incidunt saepe corporis magnam ut nemo dignissimos? Voluptatum, atque.
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15 </small> 
                            </div>
                        </div>
                    </div>
                </div>
                <div id="container__nova__mensagem" class="d-flex justify-content-between align-items-center px-2">
                    <form action="" class="w-100">
                        <div class="form-row w-100">
                            <div class="col-sm-11">
                                <textarea id="campo__nova_mensagem" name="" id="" cols="30" rows="2" class="w-100 form-control" placeholder="Digite aqui uma nova mensagem..."></textarea>
                            </div>
                            <div class="col-sm-1 d-flex align-items-center">
                                <button class="btn btn-primary w-100"><i class="far fa-paper-plane"></i></button>   
                            </div>
                        </div>
                    </form>
                </div>
            </div>   
            <div class="conversa" contato="2">
                <div id="cabecalho__conversa" class="p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato2">
                        <span class="font-weight-bold">Rodolfo Landim</span>
                    </div>
                    <div class="">
                        <a href="#" class="mx-2"><i class="fas fa-paperclip"></i> anexo</a>
                        <a href="#" class="mx-2"> <i class="fas fa-exchange-alt"></i> transferir</a>  
                        <a href="#" class="mx-2"><i class="fas fa-check-square"></i> finalizar</a>       
                    </div>
                </div>
                <div class="conversa__mensagens">
                    <div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            Essa é a conversa do contato 2!
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15</small> 
                            </div>
                        </div>
                    </div>
                </div>
                <div id="container__nova__mensagem" class="d-flex justify-content-between align-items-center px-2">
                    <form action="" class="w-100">
                        <div class="form-row w-100">
                            <div class="col-sm-11">
                                <textarea id="campo__nova_mensagem" name="" id="" cols="30" rows="2" class="w-100 form-control" placeholder="Digite aqui uma nova mensagem..."></textarea>
                            </div>
                            <div class="col-sm-1 d-flex align-items-center">
                                <button class="btn btn-primary w-100"><i class="far fa-paper-plane"></i></button>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>   
            <div class="conversa" contato="3">
                <div id="cabecalho__conversa" class="p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <img src="{{asset('app-assets/assets/img/client.jpg')}}" alt="Cliente" class="img-fluid rounded-circle img-contato2">
                        <span class="font-weight-bold">Anônimo</span>
                    </div>
                    <div class="">
                        <a href="#" class="mx-2"><i class="fas fa-paperclip"></i> anexo</a>
                        <a href="#" class="mx-2"> <i class="fas fa-exchange-alt"></i> transferir</a>  
                        <a href="#" class="mx-2"><i class="fas fa-check-square"></i> finalizar</a>       
                    </div>
                </div>
                <div class="conversa__mensagens">
                    <div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            Essa é a conversa de anônimo!
                            <div class="text-muted text-right">
                                <small>29/02/2020 - 18:29:15</small> 
                            </div>
                        </div>
                    </div>
                </div>
                <div id="container__nova__mensagem" class="d-flex justify-content-between align-items-center px-2">
                    <form action="" class="w-100">
                        <div class="form-row w-100">
                            <div class="col-sm-11">
                                <textarea id="campo__nova_mensagem" name="" id="" cols="30" rows="2" class="w-100 form-control" placeholder="Digite aqui uma nova mensagem..."></textarea>
                            </div>
                            <div class="col-sm-1 d-flex align-items-center">
                                <button class="btn btn-primary w-100"><i class="far fa-paper-plane"></i></button>  
                            </div>
                        </div>
                    </form>
                </div>
            </div>   
            <div id="mensagem__taurus" class="flex-column align-items-center justify-content-center bg-light" style=" min-height: 500px; display: flex;">
                <img src="{{asset('app-assets/assets/img/ilustracao_mensagens.svg')}}" alt="Ilustração para mensagens" 
                        style="max-width: 370px;">
                <h3 class="mt-2">Bem-vindo ao Taurus Multicanal!</h3>
            </div>
            <div class="container__config" id="container__atalhos">
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
            </div>
            <div class="container__config" id="container__usuarios">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Usuários</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__usuarios__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__usuarios__novo" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Novo</button>
                    </div>
                    <table class="table w-100 table-striped">
                        <thead>
                            <tr>
                                <td class="font-weight-bold">Nome</td>
                                <td class="font-weight-bold">E-mail</td>
                                <td class="font-weight-bold">Perfil</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Raabe</td>
                                <td>raabe@montenegroev.com.br</td>
                                <td>Agente</td>
                                <td>
                                    <button class="btn btn-primary">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button class="btn btn-light">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Daniel</td>
                                <td>daniel@montenegroev.com.br</td>
                                <td class="font-weight-bold">Admin</td>
                                <td>
                                    <button class="btn btn-primary">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button class="btn btn-light">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container__config" id="container__usuarios__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Usuários</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__usuarios__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__usuarios__detalhe__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="perfil">Perfil</label>
                            <select class="form-control" id="perfil">
                                <option>Agente</option>
                                <option>Admnistrador</option>
                              </select>
                        </div>
                        <div class="form-group">
                            <label for="senha">Senha</label>
                            <input type="password" class="form-control" name="senha" id="senha" >
                        </div>
                        <div class="form-group">
                            <label for="confimar__senha">Confirmar Senha</label>
                            <input type="password" class="form-control" id="confirmar__senha" >
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
                                <td>Tag</td>
                                <td>Manter vínculo</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Contato efetuado</td>
                                <td>Não</td>
                                <td>
                                    <button class="btn btn-primary">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button class="btn btn-light">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Solicitou orçamento</td>
                                <td>Não</td>
                                <td>
                                    <button class="btn btn-primary">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button class="btn btn-light">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
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
                        <button id="botao__finalizacoes__detalhe__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <input class="" type="checkbox"  id="vinculo">
                            <label class="form-check-label" for="vinculo">
                                Manter vínculo?
                            </label>   
                        </div>
                        <div class="form-group">
                            <label for="mensagem">Mensagem padrão</label>
                            <textarea name="mensagem" id="mensagem" class="form-control" rows="2"></textarea>
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
                    <h3 class="h5">Meu Perfil</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__estancia__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__estancia__editar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Editar</button>
                    </div>
                    <div>
                        <p class="font-weight-bold m-0">Nome da Instância</p>
                        <p>Montenegro Digital</p>
                    </div>
                    <div>
                        <p class="font-weight-bold m-0">Mensagem de Boas Vindas</p>
                    </div>
                    <div>
                        <p class="font-weight-bold m-0">Mensagem de Finalização</p>
                    </div>
                    <div>
                        <p class="font-weight-bold m-0">Horário de Atendimento</p>
                        <p>Sempre Ativo</p>
                    </div>
                </div>
            </div>
            <div class="container__config" id="container__estancia__detalhe">
                <div class="container__config__cabecalho p-2">
                    <h3 class="h5">Meu Perfil</h3> 
                </div>
                <div class="container__config__corpo p-5">
                    <div class="container__config__botoes mb-3">
                        <button id="botao__estancia__detalhe__voltar" class="btn btn-light"><i class="fas fa-chevron-left mr-2"></i>Voltar</button>
                        <button id="botao__estancia__detalhe__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome">Nome da instância</label>
                            <input type="text" class="form-control" id="nome__instancia" placeholder="Nome da instância">
                        </div>
                        <div class="form-group">
                            <label for="mensagem__boasvindas">Mensagem de boas vindas</label>
                            <input type="password" class="form-control" id="mensagem__boasvindas" placeholder="Mensagem de boas vindas">
                        </div>
                        <div class="form-group">
                            <label for="mensagem__final__padrao">Mensagem de finalização padrão</label>
                            <input type="password" class="form-control" id="mensagem__final__padrao" placeholder="Mensagem de finalização padrão">
                        </div>
                        <div class="form-group">
                            <label for="horario__atendimento">Horário de atendimento</label>
                            <select class="form-control" id="horario__atendimento">
                                <option>Sempre ativo</option>
                                <option>Meio período</option>
                            </select>
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
                                <td>Nome</td>
                                <td>Distribuição automática?</td>
                            </tr>
                        </thead>
                        <tbody>
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
                        <button id="botao__departamentos__detalhe__salvar" class="btn btn-primary"><i class="fas fa-check mr-2"></i>Salvar</button>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="nome__departamento">Nome do departamento</label>
                            <input type="text" class="form-control" id="nome__departamento" placeholder="Nome do Departamento">
                        </div>
                        <div class="form-group">
                            <input class="" type="checkbox"  id="vinculo">
                            <label class="form-check-label" for="vinculo">
                                Distribuir atendimento automaticamente
                            </label>   
                        </div>
                        <div class="form-group">
                            <label for="nome__operador">Adicionar operadores</label>
                            <input type="text" class="form-control" id="nome__operador" placeholder="Digite o nome do operador">
                        </div>
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
  </body>
</html>