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
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;">Introdução à API</a>  
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;">Autenticação</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;">Erros</a>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
                <strong style="font-weight: 700">LICENÇAS</strong>
                <a href="#contact" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Listar licenças</a> 
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1ab394;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">GET</span> Buscar licença</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #1c84c6;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">POST</span> Criar licença</a>
                <a href="#" class="list-group-item list-group-item-action bg-light" style="color: #000;padding: 5px 21px 0px 21px;text-decoration: none;border-bottom: none;font-size: 14px;"><span style="background-color: #ed5565;padding: 3px 7px 1px 7px;font-size: 10px;color: #fff;border-radius: 13px;margin-right: 5px">DELETE</span> Excluir licença</a>
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

        <hr>

        <div id="autenticacao">
            <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Autenticação</h2>
            <hr style="border-top: 1px solid #f3f3f3">
        </div>

        <hr>

        <div id="erros">
            <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Erros</h2>
            <hr style="border-top: 1px solid #f3f3f3">
        </div>

        <hr>

        <div id="listar-licencas">
            <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Listar licenças</h2>
            <p class="padding-bloco-texto">
                Retorna uma lista das licenças cadastradas em sua conta pela ordem de criação, da mais à menos recente.
            </p>
            <hr style="border-top: 1px solid #f3f3f3">
        </div>

        <hr>

        <div id="buscar-licencas">
            <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Buscar licença</h2>
            <p class="padding-bloco-texto">
                Retorna os dados de uma licença específica.
            </p>
            <hr style="border-top: 1px solid #f3f3f3">
        </div>

        <hr>

        <div id="criar-licencas">
            <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Criar licença</h2>
            <p class="padding-bloco-texto">
                Cria uma nova licença.
            </p>
            <hr style="border-top: 1px solid #f3f3f3">
        </div>

        <hr>

        <div id="criar-licencas">
            <h2 class="mt-4 padding-bloco-texto" style="font-weight: 800">Excluir licença</h2>
            <p class="padding-bloco-texto">
                Exclui permanentemente uma licença cadastrada anteriormente.
            </p>
            <hr style="border-top: 1px solid #f3f3f3">
        </div>

      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div> 

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>



  <!-- Menu Toggle Script -->
  <script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
  </script>
    </body>
</html>
