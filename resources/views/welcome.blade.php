<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://blackrockdigital.github.io/startbootstrap-simple-sidebar/css/simple-sidebar.css">
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" type="text/css"> 

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            .padding-bloco-texto{
                padding: 0px 23px;
                color: #000;
            }

            .btn-test:hover{
                border: 2px solid #1ab394 !important;
                color: #1ab394 !important;
            }

            #sidebar-wrapper{
                float: left;  
  height:  100vh;
                overflow: auto;
            } 
        </style>
    </head>
    <body>
        <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Taurus Multicanal</div>
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">VISÃO GERAL</strong>
                <a href="#introducao-api" class="list-group-item list-group-item-action bg-light scrollSuave" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;">Introdução à API</a>  
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;">Autenticação</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;">Erros</a>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">LICENÇAS</strong>
                <a href="#listar-licencas" class="list-group-item list-group-item-action bg-light scrollSuave" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Listar licenças</a> 
                <a href="#buscar-licencas" class="list-group-item list-group-item-action bg-light scrollSuave" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Buscar licença</a>
                <a href="#criar-licencas" class="list-group-item list-group-item-action bg-light scrollSuave" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">POST</span> Criar licença</a>
                <a href="#excluir-licencas" class="list-group-item list-group-item-action bg-light scrollSuave" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">DELETE</span> Excluir licença</a>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">DEPARTAMENTOS</strong>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Listar departamentos</a> 
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Buscar departamento</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">POST</span> Criar departamento</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">DELETE</span> Excluir departamento</a>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">ATENDENTES</strong>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Listar atendentes</a> 
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Buscar atendente</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">POST</span> Criar atendente</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #23c6c8;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">PUT</span> Editar atendente</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">DELETE</span> Excluir atendente</a>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">MOTIVOS</strong>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Listar motivos</a> 
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Buscar motivo</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">POST</span> Criar motivo</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">DELETE</span> Excluir motivo</a>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">CONFIGURAÇÕES</strong>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Listar configurações</a> 
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Buscar configuração</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">POST</span> Criar configuração</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">DELETE</span> Excluir configuração</a>
            </a>
        </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <!-- <button class="btn btn-primary" id="menu-toggle">Esconder Menu</button> -->

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li> 
              </ul>
            </div> -->
        </nav>

      <div class="container-fluid" style="padding: 0">
        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">

                <div id="introducao-api">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Introdução à API</h2>
                    <hr style="border-top: 1px solid #f3f3f3">
                    <p class="padding-bloco-texto">Através da interface da api Taurus é possível conversar com o sistema e comandar todas as ações principais de gerenciamento.
                    <br><br>
                    Abaixo, descrição técnica da utilização base da api Taurus:
                        <br>
                        <ul>
                            <li>Modelo: REST</li>
                            <li>Resposta: JSON</li>
                            <li>Endereço base: <code>api.taurusmulticanal.com.br</code></li>
                            <li>Protocolo: Seguro, usar sempre <code>https://</code> como prefixo</li> 
                        </ul>
                    </p>
                </div>

            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <div id="autenticacao">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Autenticação</h2>
                    <hr style="border-top: 1px solid #f3f3f3">
                </div>

            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <div id="erros">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Erros</h2>
                    <hr style="border-top: 1px solid #f3f3f3">
                </div>

            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <div id="listar-licencas">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Listar licenças</h2>
                    <p class="padding-bloco-texto">
                        Retorna uma lista das licenças cadastradas em sua conta pela ordem de criação, da mais a menos recente.
                    </p>
                    <hr style="border-top: 1px solid #f3f3f3">
                    <p class="padding-bloco-texto" style="color:#7b7b7b !important">
                        <span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 10px">GET</span> https://api.taurusmulticanal.com.br/api/licenses
                    </p>
                    <ul class="nav nav-tabs" id="myTab" role="tablist" style="padding: 0 22px;border: none;background-color: #c1c1c1;height: 21px;">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">cURL</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Node</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Javascript</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Python</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="tab5-tab" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Ruby</a>
                        </li> 
                    </ul>
                    <div class="tab-content" id="myTabContent" style="padding: 0 22px;background-color: #d6d6d6;">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <div>
                                <code>
                                    curl --request GET \
                                    <br>
                                    <span style="position: relative;margin-left: 13px">--url https://api.taurusmulticanal.com.br/api/licenses</span>
                                </code> 
                            </div>
                        </div> 
                        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                var http = require("http");
                                <br><br>
                                var options = {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"method": "GET",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"hostname": "https://api.taurusmulticanal.com.br",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"port": "8000",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"path": "/api/licenses" </span>
                                    <br>
                                };
                                <br><br>
                                var req = http.request(options, function (res) {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">var chunks = [];</span>
                                    <br> <br>
                                    <span style="position: relative;margin-left: 13px">res.on("data", function (chunk) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">chunks.push(chunk);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                    <br> 
                                    <span style="position: relative;margin-left: 13px">res.on("end", function () {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">var body = Buffer.concat(chunks);</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(body.toString());</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                });
                                <br><br> 
                                req.end();
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                var data = null;
                                <br><br>
                                var xhr = new XMLHttpRequest();
                                <br>
                                xhr.withCredentials = true;
                                <br><br>
                                xhr.addEventListener("readystatechange", function () {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">if (this.readyState === 4) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(this.responseText);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">}</span>
                                    <br>
                                });
                                <br><br> 
                                xhr.open("GET", "https://api.taurusmulticanal.com.br/api/licenses");
                                <br> 
                                xhr.send(data);
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                import requests
                                <br><br>
                                url = "https://api.taurusmulticanal.com.br/api/licenses"
                                <br><br>
                                response = requests.request("GET", url)
                                <br><br>
                                print(response.text)
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                require 'uri'
                                <br>
                                require 'net/http'
                                <br><br>

                                url = URI("https://api.taurusmulticanal.com.br/api/licenses")
                                <br><br>

                                http = Net::HTTP.new(url.host, url.port)
                                <br>br

                                request = Net::HTTP::Get.new(url) 

                                response = http.request(request)
                                <br>
                                puts response.read_body
                            </code>
                        </div> 
                    </div>
                </div>

            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa;padding: 0px 15px 0px 0px;"> 
                <p class="padding-bloco-texto" style="color:#7b7b7b !important;padding: 7px 15px;background-color: #fff;margin-top: 134px;margin-bottom: 0px;border-top: 1px solid #f3f3f3;text-align: right;">
                    <button class="btn btn-light btn-test" style="background-color: #fff;border: 2px solid #eaeaea;"><i class="fas fa-search" style="font-size: 14px;"></i> Testar</button>
                </p> 
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <div id="buscar-licencas">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Buscar licença</h2>
                    <p class="padding-bloco-texto">
                        Retorna os dados de uma licença específica.
                    </p>
                    <hr style="border-top: 1px solid #f3f3f3">
                    <p class="padding-bloco-texto" style="color:#7b7b7b !important">
                        <span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 10px">GET</span> https://api.taurusmulticanal.com.br/api/licenses/<span style="color:#000;text-decoration: underline;">id</span>
                    </p>
                    <ul class="nav nav-tabs" id="tab-listar-licencas" role="tablist" style="padding: 0 22px;border: none;background-color: #c1c1c1;height: 21px;">
                        <li class="nav-item">
                            <a class="nav-link active" id="curl-listar-licencas-tab" data-toggle="tab" href="#curl-listar-licencas" role="tab" aria-controls="curl-listar" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">cURL</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="node-listar-licencas-tab" data-toggle="tab" href="#node-listar-licencas" role="tab" aria-controls="node-listar" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Node</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="js-listar-licencas-tab" data-toggle="tab" href="#js-listar-licencas" role="tab" aria-controls="js-listar-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Javascript</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="python-listar-licencas-tab" data-toggle="tab" href="#python-listar-licencas" role="tab" aria-controls="python-listar-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Python</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="ruby-listar-licencas-tab" data-toggle="tab" href="#ruby-listar-licencas" role="tab" aria-controls="ruby-listar-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Ruby</a>
                        </li> 
                    </ul>
                    <div class="tab-content" id="tab-listar-licencas-conteudo" style="padding: 0 22px;background-color: #d6d6d6;">
                        <div class="tab-pane fade show active" id="curl-listar-licencas" role="tabpanel" aria-labelledby="curl-listar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <div>
                                <code>
                                    curl --request GET \
                                    <br>
                                    <span style="position: relative;margin-left: 13px">--url https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd></span>
                                </code> 
                            </div>
                        </div> 
                        <div class="tab-pane fade" id="node-listar-licencas" role="tabpanel" aria-labelledby="node-listar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                var http = require("http");
                                <br><br>
                                var options = {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"method": "GET",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"hostname": "https://api.taurusmulticanal.com.br",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"port": "8000",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"path": "/api/licenses/<kbd>id</kbd>" </span>
                                    <br>
                                };
                                <br><br>
                                var req = http.request(options, function (res) {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">var chunks = [];</span>
                                    <br> <br>
                                    <span style="position: relative;margin-left: 13px">res.on("data", function (chunk) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">chunks.push(chunk);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                    <br> 
                                    <span style="position: relative;margin-left: 13px">res.on("end", function () {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">var body = Buffer.concat(chunks);</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(body.toString());</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                });
                                <br><br> 
                                req.end();
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="js-listar-licencas" role="tabpanel" aria-labelledby="js-listar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                var data = null;
                                <br><br>
                                var xhr = new XMLHttpRequest();
                                <br>
                                xhr.withCredentials = true;
                                <br><br>
                                xhr.addEventListener("readystatechange", function () {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">if (this.readyState === 4) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(this.responseText);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">}</span>
                                    <br>
                                });
                                <br><br> 
                                xhr.open("GET", "https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd>");
                                <br> 
                                xhr.send(data);
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="python-listar-licencas" role="tabpanel" aria-labelledby="python-listar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                import requests
                                <br><br>
                                url = "https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd>"
                                <br><br>
                                response = requests.request("GET", url)
                                <br><br>
                                print(response.text)
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="ruby-listar-licencas" role="tabpanel" aria-labelledby="ruby-listar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                require 'uri'
                                <br>
                                require 'net/http'
                                <br><br>

                                url = URI("https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd>")
                                <br><br>

                                http = Net::HTTP.new(url.host, url.port)
                                <br>br

                                request = Net::HTTP::Get.new(url) 

                                response = http.request(request)
                                <br>
                                puts response.read_body
                            </code>
                        </div> 
                    </div>
                </div>

            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <div id="criar-licencas">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Criar licença</h2>
                    <p class="padding-bloco-texto">
                        Cria uma nova licença.
                    </p>
                    <hr style="border-top: 1px solid #f3f3f3">
                    <p class="padding-bloco-texto" style="color:#7b7b7b !important">
                        <span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 10px">POST</span> https://api.taurusmulticanal.com.br/api/licenses
                    </p>

                    <ul class="nav nav-tabs" id="tab-criar-licencas" role="tablist" style="padding: 0 22px;border: none;background-color: #c1c1c1;height: 21px;">
                        <li class="nav-item">
                            <a class="nav-link active" id="curl-criar-licencas-tab" data-toggle="tab" href="#curl-criar-licencas" role="tab" aria-controls="curl-criar" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">cURL</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="node-criar-licencas-tab" data-toggle="tab" href="#node-criar-licencas" role="tab" aria-controls="node-criar" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Node</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="js-criar-licencas-tab" data-toggle="tab" href="#js-criar-licencas" role="tab" aria-controls="js-criar-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Javascript</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="python-criar-licencas-tab" data-toggle="tab" href="#python-criar-licencas" role="tab" aria-controls="python-criar-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Python</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="ruby-criar-licencas-tab" data-toggle="tab" href="#ruby-criar-licencas" role="tab" aria-controls="ruby-criar-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Ruby</a>
                        </li> 
                    </ul>
                    <div class="tab-content" id="tab-criar-licencas-conteudo" style="padding: 0 22px;background-color: #d6d6d6;">
                        <div class="tab-pane fade show active" id="curl-criar-licencas" role="tabpanel" aria-labelledby="curl-criar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 854px;"> 
                            <div>
                                <code>
                                    curl --request POST \
                                    <br>
                                    <span style="position: relative;margin-left: 13px">--url https://api.taurusmulticanal.com.br/api/licenses/</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">--data '{"signature":"00aa00aa00aa00aa","status":1,"contact":"Nome Contato", "email": "emailcontato@email.com", "cellphone": "11999999999", "cellphone": "11999999999", "credits":10.00}'</span>
                                </code> 
                            </div>
                        </div> 
                        <div class="tab-pane fade" id="node-criar-licencas" role="tabpanel" aria-labelledby="node-criar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 854px;"> 
                            <code>
                                var http = require("http");
                                <br><br>
                                var options = {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"method": "POST",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"hostname": "https://api.taurusmulticanal.com.br",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"port": "8000",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"path": "/api/licenses" </span>
                                    <br>
                                };
                                <br><br>
                                var req = http.request(options, function (res) {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">var chunks = [];</span>
                                    <br> <br>
                                    <span style="position: relative;margin-left: 13px">res.on("data", function (chunk) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">chunks.push(chunk);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                    <br> 
                                    <span style="position: relative;margin-left: 13px">res.on("end", function () {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">var body = Buffer.concat(chunks);</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(body.toString());</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                });
                                <br><br>
                                req.write(
                                    <br>
                                    <span style="position: relative;margin-left: 13px">JSON.stringify({ </span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">signature: '00aa00aa00aa00aa',</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">status: 1,</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">contact: 'Nome Contato',</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">email: 'emailcontato@email.com',</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">cellphone: '11999999999',</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">cellphone_app: '11999999999',</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">credits: 10 </span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">})</span>
                                    <br>
                                );
                                <br><br> 
                                req.end();
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="js-criar-licencas" role="tabpanel" aria-labelledby="js-criar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 854px;"> 
                            <code>
                                var data = JSON.stringify({
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"signature": "00aa00aa00aa00aa",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"status": 1,</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"contact": "Nome Contato",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"email": "emailcontato@email.com",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"cellphone": "11999999999",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"cellphone_app": "11999999999",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"credits": 10</span>
                                    <br>
                                });
                                <br><br>
                                var xhr = new XMLHttpRequest();
                                <br>
                                xhr.withCredentials = true;
                                <br><br>
                                xhr.addEventListener("readystatechange", function () {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">if (this.readyState === 4) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(this.responseText);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">}</span>
                                    <br>
                                });
                                <br><br> 
                                xhr.open("POST", "https://api.taurusmulticanal.com.br/api/licenses");
                                <br> 
                                xhr.send(data);
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="python-criar-licencas" role="tabpanel" aria-labelledby="python-criar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 854px;"> 
                            <code>
                                import requests
                                <br><br>
                                url = "https://api.taurusmulticanal.com.br/api/licenses"
                                <br><br>
                                payload = "{\"signature\":\"00aa00aa00aa00aa\",\"status\":1,\"contact\":\"Nome Contato\", \"email\":\"emailcontato@email.com\", \"cellphone\":\"11999999999\", \"cellphone_app\":\"11999999999\", \"credits\":10.00\n}"
                                <br><br>
                                response = requests.request("POST", url, data=payload)
                                <br><br>
                                print(response.text)
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="ruby-criar-licencas" role="tabpanel" aria-labelledby="ruby-criar-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 854px;"> 
                            <code>
                                require 'uri'
                                <br>
                                require 'net/http'
                                <br><br>

                                url = URI("https://api.taurusmulticanal.com.br/api/licenses")
                                <br><br>

                                http = Net::HTTP.new(url.host, url.port)
                                <br><br>

                                request = Net::HTTP::Post.new(url) 
                                <br><br>
                                request.body = "{\"signature\":\"00aa00aa00aa00aa\",\"status\":1,\"contact\":\"Nome Contato\", \"email\":\"emailcontato@email.com\", \"cellphone\":\"11999999999\", \"cellphone_app\":\"11999999999\", \"credits\":10.00\n}"
                                <br><br>

                                response = http.request(request)
                                <br><br>
                                puts response.read_body
                            </code>
                        </div> 
                    </div>
                </div>

            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <div id="excluir-licencas">
                    <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Excluir licença</h2>
                    <p class="padding-bloco-texto">
                        Exclui permanentemente uma licença cadastrada anteriormente.
                    </p>
                    <hr style="border-top: 1px solid #f3f3f3">
                    <p class="padding-bloco-texto" style="color:#7b7b7b !important">
                        <span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 10px">DELETE</span> https://api.taurusmulticanal.com.br/api/licenses/<span style="color:#000;text-decoration: underline;">id</span>
                    </p>
                    <ul class="nav nav-tabs" id="tab-excluir-licencas" role="tablist" style="padding: 0 22px;border: none;background-color: #c1c1c1;height: 21px;">
                        <li class="nav-item">
                            <a class="nav-link active" id="curl-excluir-licencas-tab" data-toggle="tab" href="#curl-excluir-licencas" role="tab" aria-controls="curl-excluir" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">cURL</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="node-excluir-licencas-tab" data-toggle="tab" href="#node-excluir-licencas" role="tab" aria-controls="node-excluir" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Node</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" id="js-excluir-licencas-tab" data-toggle="tab" href="#js-excluir-licencas" role="tab" aria-controls="js-excluir-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Javascript</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="python-excluir-licencas-tab" data-toggle="tab" href="#python-excluir-licencas" role="tab" aria-controls="python-excluir-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Python</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" id="ruby-excluir-licencas-tab" data-toggle="tab" href="#ruby-excluir-licencas" role="tab" aria-controls="ruby-excluir-licencas" aria-selected="true" style="font-size: 14px;padding: 0px 11px;border: none;background-color: #c1c1c1;color: #fff;">Ruby</a>
                        </li> 
                    </ul>
                    <div class="tab-content" id="tab-excluir-licencas-conteudo" style="padding: 0 22px;background-color: #d6d6d6;">
                        <div class="tab-pane fade show active" id="curl-excluir-licencas" role="tabpanel" aria-labelledby="curl-excluir-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <div>
                                <code>
                                    curl --request DELETE \
                                    <br>
                                    <span style="position: relative;margin-left: 13px">--url https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd></span>
                                </code> 
                            </div>
                        </div> 
                        <div class="tab-pane fade" id="node-excluir-licencas" role="tabpanel" aria-labelledby="node-excluir-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                var http = require("http");
                                <br><br>
                                var options = {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"method": "DELETE",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"hostname": "https://api.taurusmulticanal.com.br",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"port": "8000",</span>
                                    <br>
                                    <span style="position: relative;margin-left: 13px">"path": "/api/licenses/<kbd>id</kbd>" </span>
                                    <br>
                                };
                                <br><br>
                                var req = http.request(options, function (res) {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">var chunks = [];</span>
                                    <br> <br>
                                    <span style="position: relative;margin-left: 13px">res.on("data", function (chunk) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">chunks.push(chunk);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                    <br> 
                                    <span style="position: relative;margin-left: 13px">res.on("end", function () {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">var body = Buffer.concat(chunks);</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(body.toString());</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">});</span>
                                    <br>
                                });
                                <br><br> 
                                req.end();
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="js-excluir-licencas" role="tabpanel" aria-labelledby="js-excluir-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                var data = null;
                                <br><br>
                                var xhr = new XMLHttpRequest();
                                <br>
                                xhr.withCredentials = true;
                                <br><br>
                                xhr.addEventListener("readystatechange", function () {
                                    <br>
                                    <span style="position: relative;margin-left: 13px">if (this.readyState === 4) {</span>
                                        <br>
                                        <span style="position: relative;margin-left: 26px">console.log(this.responseText);</span>
                                        <br>
                                    <span style="position: relative;margin-left: 13px">}</span>
                                    <br>
                                });
                                <br><br> 
                                xhr.open("DELETE", "https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd>");
                                <br> 
                                xhr.send(data);
                                <br>
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="python-excluir-licencas" role="tabpanel" aria-labelledby="python-excluir-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                import requests
                                <br><br>
                                url = "https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd>"
                                <br><br>
                                response = requests.request("DELETE", url)
                                <br><br>
                                print(response.text)
                            </code>
                        </div> 
                        <div class="tab-pane fade" id="ruby-excluir-licencas" role="tabpanel" aria-labelledby="ruby-excluir-licencas-tab" style="padding: 0 22px;background-color: #d6d6d6;height: 566px;"> 
                            <code>
                                require 'uri'
                                <br>
                                require 'net/http'
                                <br><br>

                                url = URI("https://api.taurusmulticanal.com.br/api/licenses/<kbd>id</kbd>")
                                <br><br>

                                http = Net::HTTP.new(url.host, url.port)
                                <br>br

                                request = Net::HTTP::Delete.new(url) 

                                response = http.request(request)
                                <br>
                                puts response.read_body
                            </code>
                        </div> 
                    </div>
                </div>

            </div> 
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>

        </div>

        <div class="row">
            <div class="col-lg-8" style="border-right: 1px solid #ddd;padding-right: 0;">
                <hr>
            </div>
            <div class="col-lg-4" style="background-color: #f8f9fa">

            </div>
        </div>

      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div> 

    <script type="text/javascript" src="https://prova.montenegrodigital.com.br/servicos/demo/vendor/jquery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="https://prova.montenegrodigital.com.br/servicos/demo/vendor/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="https://prova.montenegrodigital.com.br/servicos/demo/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="https://prova.montenegrodigital.com.br/servicos/demo/vendor/bootstrap/js/bootstrap.min.js"></script>



  <!-- Menu Toggle Script -->
  <script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
  </script>
    </body>
</html>
