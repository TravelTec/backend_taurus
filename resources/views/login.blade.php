<?php  
    ini_set("display_errors", 1);
    ini_set("track_errors", 1);
    ini_set("html_errors", 1);
    error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>APP | Whatsapp</title>

        <link href="{{asset('app-assets/css/bootstrap.min.css')}}" rel="stylesheet"> 
        <link href="{{asset('app-assets/css/animate.css')}}" rel="stylesheet">
        <link href="{{asset('app-assets/css/style.css')}}" rel="stylesheet">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"> 
        <link href="{{asset('app-assets/css/plugins/sweetalert/sweetalert.css')}}" rel="stylesheet">   

        <style type="text/css">
            @media (max-width: 568px){
                #div-logo{
                    height: 50px !important;
                }
                #titulo-logo{
                    margin-top: -2px !important;
                    margin-bottom: 2px !important;
                }
                #logo{
                    max-height: 50px !important;
                }
                #div-lateral{
                    padding-right: 0px !important;
                }
                .footer{
                    position: relative !important;
                    margin-top: 17px !important;
                }
                .img01{
                    height: 100% !important;
                }
                .text-muted{
                    text-align: center !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #fbfbfb"> 
        <div class="container-fluid" style="background-color: #fff">   
            <div class="row text-center justify-content-center">
                <div class="col-lg-12 col-12" id="div-logo" style="padding: ;background: #2f4050;"> 
                    <h4 id="titulo-logo" style="float:left;color:#fff;margin-top: 15px;margin-bottom: 19px;"><a href="#"><img src="{{asset('app-assets/img/logo_taurus_direita.png')}}" class="img-fluid" id="logo" style="max-height: 76px"></a></h4> 
                </div>
            </div>
        </div>

        <div id="wrapper"> 
            <!-- Page Content -->
            <div class="container-fluid"> 
                <div class="row centered">
                    <div class="col-lg-6" id="div-lateral">
                        <img src="{{asset('app-assets/img/Lateral.png')}}" class="img01" style="border-radius: 1px;margin-left: -15px;margin-top: 0px;width: 105%;height: 476px">
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4 centered"> 
                        <h2 class="text-center">Acessar o Gerenciador<hr></h2>
                        <!-- <small><strong>Ainda não possui uma assinatura?</strong> <a href="cadastro-licenca.php">Adquira uma agora mesmo!</a></small>
                        <br> --><br>
                        <form>
                            <div class="form-group">
                                <label for="usr">Email </label>
                                <div class="input-group">
                                    <span class="input-group-addon" id="basic-addon1"><i class="fas fa-at"></i></span>
                                    <input type="text" class="form-control" placeholder="E-mail" aria-describedby="basic-addon1" id="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Senha </label>
                                <div class="input-group">
                                    <span class="input-group-addon" id="basic-addon1"><i class="fas fa-key"></i></span>
                                    <input type="password" class="form-control" placeholder="Senha" aria-describedby="basic-addon1" id="senha">
                                </div>
                            </div>
                            <a href="recuperar-senha.php"><small style="color: #30ace1;">Esqueceu sua senha?</small></a>
                            <hr>
                            <a href="#" onclick="RealizarLogin()"><button type="button" class="btn btn-primary" style="float: right;">Acessar sua conta</button></a>
                        </form>
                    </div>
                </div>
            </div> 
        </div> 

        <!-- FOOTER -->
        <footer class="footer" style="border-top: 4px solid #ddd">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-12 text-muted">
                        <span class="text-muted" style="float: right;">© Todos os direitos reservados - Desenvolvido pela Travel Tec</span>
                    </div>
                </div>
            </div>
        </footer>
        <!-- FIM FOOTER -->       

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="{{asset('app-assets/js/jquery-3.1.1.min.js')}}"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> 
        <script src="{{asset('app-assets/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('app-assets/js/bootbox.min.js')}}"></script>
        <script src="{{asset('app-assets/js/plugins/metisMenu/jquery.metisMenu.js')}}"></script>
        <script src="{{asset('app-assets/js/plugins/slimscroll/jquery.slimscroll.min.js')}}"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="{{asset('app-assets/js/inspinia.js')}}"></script>  
        <script src="{{asset('app-assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>  

        <script type="text/javascript"> 
            function RealizarLogin(){ 
                var email = $("#email").val();
                var senha = $("#senha").val(); 

                $(".btn").html("<img src='{{asset('app-assets/img/loading.gif')}}' style='height: 17px;padding: 0px 36px;'>");  

                $.ajax({ 
                    type: "POST",
                    data: {email:email, senha:senha},
                    url: "{{asset('app-assets/functions/verificar-dados-login.php')}}",
                    success: function(resposta){ 
                        if (resposta == 2) {
                            swal({
                                title: "Dados da licença não encontrados.",
                                text: "Entre em contato com o suporte do sistema.",
                                type: "warning"
                            });
                        }else{
                            var escrever = $.parseJSON(resposta); 

                            var dados_sessao_cliente = []; 

                            if (escrever[0]["dados_licenca"]["credits"] <= '0.00' || escrever[0]["dados_licenca"]["credits"] <= '0') {
                                swal({
                                    title: "Créditos insuficientes.",
                                    text: "Você não tem créditos suficientes para acessar a aplicação.",
                                    type: "warning"
                                });
                            }else if (escrever[0]["dados_licenca"]["status"] != 1) { 
                                swal({
                                    title: "Licença inativa.",
                                    text: "Entre em contato com o suporte do sistema.",
                                    type: "warning"
                                });
                            }else{

                                var dados_usuario = JSON.stringify({
                                    id_licenca: escrever[0]["dados_licenca"]["id"],
                                    status_licenca: escrever[0]["dados_licenca"]["status"],
                                    nome_licenca: escrever[0]["dados_licenca"]["contact"],
                                    email_licenca: escrever[0]["dados_licenca"]["email"],
                                    celular_licenca: escrever[0]["dados_licenca"]["cellphone"],
                                    celular_app: escrever[0]["dados_licenca"]["cellphone_app"],
                                    creditos: escrever[0]["dados_licenca"]["credits"],
                                    id_cliente: escrever[0]["client_id"],
                                    access_token: escrever[0]["access_token"]
                                });
                                dados_sessao_cliente.push(dados_usuario);
                                localStorage.setItem("dados_sessao_cliente", JSON.stringify(dados_sessao_cliente)); 

                                window.location.href = '/user';

                            }
                        } 
                    }
                });
            }
        </script>
    </body>
</html>