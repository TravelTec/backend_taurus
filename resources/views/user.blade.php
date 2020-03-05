
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Taurus Multicanal</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{asset('app-assets/assets/bootstrap/css/bootstrap.min.css')}}">
    <!-- CSS's próprios -->
    <link rel="stylesheet" href="{{asset('app-assets/assets/style.css')}}">
    <link rel="stylesheet" href="{{asset('app-assets/assets/overview.css')}}">

    <!-- Ícones Font Awesome 4.7 -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"> 
  </head>
  <body>
    <header id="cabecalho" class="">
        <nav class="navbar navbar-expand-lg" id="navbar-primario">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="{{asset('app-assets/assets/img/logo.png')}}" width="30" height="30" class="d-inline-block mr-1" alt="Logo da Taurus Multicanal">
                <div class="d-inline-block">
                    <div class="d-flex flex-column text-center">
                        <span class="font-weight-bold" style="font-size: 1.4em;">Teaurus </span>
                        <span style="font-size: 0.8em;">Multicanal</span>
                    </div>
                </div>        
              </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
        <div class="bg-white py-1">   
            <nav class="navbar navbar-expand-lg" id="navbar-secundaria">
                <div class="navbar-brand m-0 border-right px-2" href="#">
                    <span class="mr-5">Browser</span> 
                    <a href="#" class="border p-1 rounded"><i class="fas fa-database"></i></a>     
                    <a href="#" class="border p-1 rounded"><i class="fas fa-table"></i></a>
                    <a href="#" class="border p-1 rounded"><i class="fas fa-filter"></i></a>       
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown2">
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
        </div>
    </header>

    <main id="container" class="">
        <div id="container__principal" class="bg-white row m-0">
            <div id="container__contatos" class="col-sm-4 p-0">
                <div id="container__pesquisa" class="border-bottom py-1 d-flex align-items-center px-2">
                    <div class="rounded-pill bg-white py-1 px-3 d-flex align-items-center justify-content-center flex-grow-1">
                        <i class=" fas fa-search text-muted"></i>
                        <input class="form-control border-0" type="text" placeholder="Procurar ou começar uma nova conversa">
                    </div>
                    <i id="botao__config" class="fas fa-ellipsis-v px-3"></i>
                </div>
                <ul id="lista-conversas" class="list-group">
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
                <ul id="lista-configuracoes" class="list-group" style="display: none;">
                    <li class="list-group-item" id="botao__voltar">
                        <i class="fas fa-chevron-left mr-2"></i> Voltar
                    </li>
                    <li class="list-group-item">
                        Atalhos
                    </li>
                    <li class="list-group-item">
                        Usuários
                    </li>
                    <li class="list-group-item">
                        Motivos de finalização
                    </li>
                    <li class="list-group-item">
                        Meu perfil
                    </li>
                    <li class="list-group-item">
                        Configurações da instância
                    </li>
                    <li class="list-group-item">
                        Departamentos
                    </li>
                </ul>
            </div>
            <div id="container__conversa" class="col-sm-8 p-0">
                <div class="conversa" contato="1" style="display: none;">
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
                        <div class="contato-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-right p-2">
                                Olá
                                <div class="text-muted text-right">
                                    <small>29/02/2020 - 18:29:15</small> 
                                </div>
                            </div>
                        </div>
                        <div class="minha-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-left p-2">
                                Olá
                                <div class="text-muted text-right">
                                    <small>29/02/2020 - 18:29:15 <i class="fas fa-check"></i> </small> 
                                </div>
                            </div>
                        </div>
                        <div class="minha-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-left p-2">
                                Olá
                                <div class="text-muted text-right">
                                    <small>29/02/2020 - 18:29:15 <i class="fas fa-check"></i> </small> 
                                </div>
                            </div>
                        </div>
                        <div class="minha-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-left p-2">
                                Olá
                                <div class="text-muted text-right">
                                    <small>29/02/2020 - 18:29:15 <i class="fas fa-check"></i> </small> 
                                </div>
                            </div>
                        </div>
                        <div class="contato-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-right p-2">
                                Olá
                                <div class="text-muted text-right">
                                    <small>29/02/2020 - 18:29:15 </small> 
                                </div>
                            </div>
                        </div>
                        <div class="contato-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-right p-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae quisquam ducimus veritatis voluptatum excepturi, mollitia exercitationem sapiente, quam deserunt quidem incidunt saepe corporis magnam ut nemo dignissimos? Voluptatum, atque.
                                <div class="text-muted text-right p-1">
                                    <small>29/02/2020 - 18:29:15 </small> 
                                 </div>
                            </div>
                        </div>
                        <div class="contato-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-right p-2">
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
                <div class="conversa" contato="2" style="display: none;">
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
                        <div class="contato-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-right p-2">
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
                <div class="conversa" contato="3" style="display: none;">
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
                        <div class="contato-mensagem py-1 px-4">
                            <div class="container__mensagem py-2 rounded-right p-2">
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
            </div>
        </div>
    </main>

    <!-- jQuery - Popper.js - Bootstrap JS -->
    <script src="{{asset('app-assets/assets/js/jquery-3.4.1.min.js')}}"></script>
    <script src="{{asset('app-assets/assets/js/popper.min.js')}}"></script>
    <script src="{{asset('app-assets/assets/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('app-assets/assets/conversas.js')}}"></script>
    <script src="{{asset('app-assets/assets/js/menu_conversas.js')}}"></script>
  </body>
</html>