<?php  
    session_start(); 
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
                        <span class="font-weight-bold" style="font-size: 1.4em;">Taurus </span>
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
                    <li class="nav-item active">
                        <a class="nav-link" href="list-atendentes">
                          Atendentes
                        </a>
                    </li>
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
                    <li class="nav-item">
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
            <div id="" class="col-sm-12 p-0"> 
                <div id="mensagem__taurus" class="flex-column align-items-center justify-content-center bg-light" style=" height: 500px; display: flex;">
                    <?php

                                $curl = curl_init();

                                curl_setopt_array($curl, array(
                                  CURLOPT_URL => "https://api.taurusmulticanal.com.br/api/departments",
                                  CURLOPT_RETURNTRANSFER => true,
                                  CURLOPT_ENCODING => "",
                                  CURLOPT_MAXREDIRS => 10,
                                  CURLOPT_TIMEOUT => 30,
                                  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                  CURLOPT_CUSTOMREQUEST => "GET",
                                  CURLOPT_HTTPHEADER => array(
                                    "cache-control: no-cache",
                                    "postman-token: ca377dbc-ceff-241a-d909-543c9d287a99"
                                  ),
                                ));

                                $response = curl_exec($curl);
                                $err = curl_error($curl);

                                curl_close($curl);

                                if ($err) {
                                    echo "cURL Error #:" . $err;
                                } else {
                                    $resposta_licencas = json_decode($response);
                                    $dados_licenca = $resposta_licencas->data; 
                                }

                            ?>
                            <br> 
                            <?php $array_senhas = array("123mudar", "2545698", "CIC077228", "368kqie452", "10de10de", "789456", "okeuijd", "1a2d5e"); ?>
                            <?php for ($i=0; $i < count($dados_licenca); $i++) {  ?>
                                <?php if ($dados_licenca[$i]->license_id == $_SESSION['license_id']) { ?> 
                                        <div class="col-lg-4">
                                            <div class="card" style="padding: 10px;font-size: 14px;">
                                                <p style="margin-bottom: 0"><strong>Licença:</strong> <?=$dados_licenca[$i]->license_id?></p>
                                                <p style="margin-bottom: 0"><strong>ID Departamento:</strong> <?=$dados_licenca[$i]->id?></p>
                                                <p style="margin-bottom: 0"><strong>Nome departamento:</strong> <?=$dados_licenca[$i]->name?></p> 
                                            </div>
                                        </div> 
                                    <br>
                                <?php } ?>
                            <?php } ?> 
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