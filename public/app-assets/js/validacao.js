

$('.e').hide();
$('.Ve').hide();
$('.Fe').hide();
$('.code').hide();

$('.C').hide();
$('.VC').hide();
$('.FC').hide();
$('.codC').hide();

$('.codj').hide();

$('.1Vj').hide();

$('.1Fj').hide(); 


//VALIDAÇÃO CODIGO EMAIL



  //ENVIAR CODIGO
  function emitirCodigoEmail(){

            var emailj = $("#email").val();


            $.ajax({
                type: 'POST',
                data: {emailj:emailj},
                url: 'functions/enviarCodigoConfirmacao.php',
                success: function(resposta){
                    $('.codigoEnviadoe').prop("value", resposta);
                    $('.code').slideDown();
                    $('.e').slideDown();
                    
                    if(resposta == '2'){
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível enviar o e-mail.",
                            type: "warning"
                            },function(){
                            
        
                            
                        });
                        
                    }else{
                        swal({
                            title: "E-mail Enviado!",
                            text: "Por Favor, insira o código de confirmação recebido",
                            imageUrl: "img/boneco.png",
                            imageSize: "120x120"
                            },function(){
                            
        
                            
                        });
                    }
                }
            });
        }


  //VERIFICAR CODIGO ENVIADO

    function verificarCodigo(id){
            var codigoV = document.getElementById('codigoEnviadoe').value;
            var codigo = document.getElementById('codigoe').value;

            var email = $("#email").val();
            var planoEscolhido = id;
            var conferirCodigo = document.getElementById('confe').value;
            var codigoEmail = $("#codigoe");

            if(codigo == codigoV){
                swal({
                  title: "Código verificado",
                  text: "Você será redirecionado ao cadastro de licença",
                  imageUrl: "img/bonecomsg1.png",
                  imageSize: "120x120"
                  },function(){
                  
                     $('#planmail').prop("value", planoEscolhido);
                    $('#emailmail').prop("value", email);

                    document.validaEmail.submit();
                  
              });
                
                
            }else{
                  swal({
                    title: 'Oh não!',
                    text: 'Código de confirmação inválido',
                    imageUrl: "img/falha-envio.png",
                    showConfirmButton: false,
                    timer: 1200,
                    imageSize: "120x120"
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                return false;
  
                
            }

        }





//FIM VALIDAÇÃO CODIGO EMAIL



//VALIDAÇÃO CÓDIGO SMS

function emitirCodigoCelular(){

          var celular = $('#celular').val();


          if(celular == ''){
                swal({
                  title: 'Oh não!',
                  text: 'Você esqueceu seu celular',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      
                    }
                  }
                )
              return false;
            }else{

            var celularF = document.getElementById('celular').value;
            var celular = celularF.replace(/[|(|)| |-]/gi, "");

            $.ajax({
                type: 'POST',
                data: {celular:celular}, 
                url: 'functions/enviarCodigoSMS.php',
                success: function(resposta){

                    var retorno = resposta.split("-");
                    var status_code = retorno[0];
                    var codigoV = retorno[1];


                    $('.codigoEnviadoC').prop("value", codigoV);
                    $('.codC').slideDown();

                    if(status_code == '000'){
                      swal({
                      title: "SMS Enviado!",
                      text: "Por Favor, aguarde e digite o código recebido",
                      imageUrl: "img/boneco.png",
                      imageSize: "120x120"
                      },function(){
                          
      
                          
                      });
                    }else{
                      swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível enviar o SMS.",
                            type: "warning"
                            },function(){
                            
        
                            
                        });
                    }

                }
            });
          }
        }



function verificarCodigoCelular(id){
            var codigoV = document.getElementById('codigoEnviadoC').value;
            var codigo = document.getElementById('codigoSMSC').value;
            

            var celular = $("#celular").val();
            var planoEscolhido = id;
            var conferirCodigo = document.getElementById('confC').value;
            var email = $("#email").val();

            if(codigo == codigoV){
                
                swal({
                  title: "Código verificado",
                  text: "Você será redirecionado ao cadastro de licença",
                  imageUrl: "img/bonecomsg1.png",
                  imageSize: "120x120"
                  },function(){
                  
                    $('.plan').prop("value", planoEscolhido);
                $('#emailcel').prop("value", email);
                $('#cel').prop("value", celular);

                document.validaCelular.submit();
                  
              });
                
            }else{
                swal({
                  title: 'Oh não!',
                  text: 'Código de confirmação inválido',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      
                    }
                  }
                )
              return false;

                
            }

        }



        function validarCelularServicos(id, tr){
            

            var celular = $("#celular").val();
            var planoEscolhido = id;
            var conferirCodigo = document.getElementById('confC').value;
            var email = $("#email").val();


            if(celular == ''){
                swal({
                  title: 'Oh não!',
                  text: 'Você esqueceu seu celular',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      
                    }
                  }
                )
              return false;
            }else if(conferirCodigo != 1){
              swal({
                  title: 'Oh não!',
                  text: 'Código de confirmação inválido',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      
                    }
                  }
                )
              return false;
            }else{
                
                $('.plan').prop("value", planoEscolhido);
                $('#emailcel').prop("value", email);
                $('#cel').prop("value", celular);

                window.location.href = 'servicosFinal.php?tr='+tr;
                        
                
            }
            
        }






// VERIFICAR SE EMAIL EXISTE


function verificarEmail(id){

            var email = $("#emailInfo").val();
            var planoEscolhido = id;
            var codigo = $("#confCaptcha").val();


            if(email == ''){
                swal({
                  title: 'Oh não!',
                  text: 'Você esqueceu seu e-mail',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      
                    }
                  }
                )
              return false;
            }else if(codigo != 1){
                swal({
                  title: 'Oh não!',
                  text: 'Você esqueceu de completar o captcha',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      
                    }
                  }
                )
              return false;
            }else{
                var acao = 'VerificarExistenciaEmail';

                $.ajax({
 
                    type: "POST",
                    data: {email:email, acao:acao},
                    url: 'functions/licencas.php',
                    success: function(resposta){

                        var json = $.parseJSON(resposta);

                        var nome = json.Nome;

                        if(resposta == 2){
                            window.location.href='validacao.php?email='+email+'&c='+planoEscolhido;
                        }else{
                            
                            window.location.href='recuperarSenha.php?email='+email+'&nome='+nome;
                        }
                
                    }
             
                });
            }
        }



        function verificarCodigoResetSenha(){
            var codigoV = document.getElementById('codigoEnviadoj').value;
            var codigo = document.getElementById('codigoSMSj').value;
            var codV = 'valido';
            var codF = 'invalido';
            var email = document.getElementById('email').value;;

            if(codigo == codigoV){
                $('#confj').prop("value", '1');
                $('.1j').hide();
                $('.1Fj').hide();
                $('.codigovalidoj').prop("value", codV);
                $('.1Vj').slideDown();

                setTimeout(function() {
                      document.passarEmail.submit();
                    }, 1600);
                
            }else{
                $('#confj').prop("value", '2');
                $('.1j').hide();
                $('.1Vj').hide();
                $('.codigovalidoj').prop("value", codF);
                $('.1Fj').slideDown();
                
            }

        }


        function resetarSenha(email, nome){
            var emailj = email;
            var nomef = nome;

            $.ajax({
                type: 'POST',
                data: {emailj:emailj, nomef:nomef},
                url: 'functions/enviarCodigoRecuperacao.php',
                success: function(resposta){
                    var tk = resposta;

                    if(resposta == '2'){
                        swal({
                          title: 'Oh não!',
                          text: 'E-mail não enviado, tente novamente',
                          imageUrl: "img/falha-envio.png",
                          showConfirmButton: false,
                          timer: 1200,
                          imageSize: "120x120"
                        }).then(
                          function () {},
                          // handling the promise rejection
                          function (dismiss) {
                            if (dismiss === 'timer'){
                              
                            }
                          }
                        )
                            return false;
                        
                    }else{
                        swal({
                            title: "Código Enviado!",
                            text: "Por Favor, confirme o e-mail enviado.",
                            imageUrl: "img/boneco.png",
                            imageSize: "120x120"
                            },function(){
                            
                                $('#tk').prop("value", tk);
                                $('#email').prop("value", emailj);

                                document.passarToken.submit();
                        });
                    }
                }
            });
            
        }


function mudarSenha(){
    var senha = $("#senha").val();
    var csenha = $("#csenha").val();
    var email = $("#email").val();
    var rec = "";

    if(senha == ''){
        swal({
          title: 'Oh não!',
          text: 'Você não inseriu uma senha',
          imageUrl: "img/falha-envio.png",
          showConfirmButton: false,
          timer: 1500,
          imageSize: "120x120"
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer'){
              
            }
          }
        )
        return false;
    }else if(senha.length < 6){
        swal({
          title: 'Oh não!',
          text: 'Senha curta, tamanho mínimo 6 caracteres',
          imageUrl: "img/falha-envio.png",
          showConfirmButton: false,
          timer: 1500,
          imageSize: "120x120"
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer'){
              
            }
          }
        )
        return false;
    }else if(csenha == ''){
        swal({
          title: 'Oh não!',
          text: 'Você não confirmou sua senha',
          imageUrl: "img/falha-envio.png",
          showConfirmButton: false,
          timer: 1500,
          imageSize: "120x120"
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer'){
              
            }
          }
        )
        return false;
    }else if(senha != csenha){
        swal({
          title: 'Oh não!',
          text: 'Confirmação de senha inválida',
          imageUrl: "img/falha-envio.png",
          showConfirmButton: false,
          timer: 1500,
          imageSize: "120x120"
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer'){
              
            }
          }
        )
        return false;
    }else{
      $.ajax({
     type:"POST",
     data:{email: email, senha: senha, rec:rec},
     url:'functions/atualizar_senha.php',
     success:function(resposta){
        if(resposta == 1){
          swal({
            title: 'Senha recuperada!',
            text: 'Você será redirecionado ao Dashboard',
            imageUrl: "img/config-menu.png"
            },function(){
                $.ajax({
                   type:"POST",
                   data:{emailDash: email, senhaDash: senha},
                   url:'functions/loginValidacao.php',
                   success:function(resposta){
                       window.location.href = 'dashboardv2.php';
                   }
                  });
                });
              }else{
                swal({
                  title: 'Oh não!',
                  text: 'Não foi possível alterar sua senha, tente novamente',
                  imageUrl: "img/falha-envio.png",
                  showConfirmButton: false,
                  timer: 1200,
                  imageSize: "120x120"
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer'){
                      
                    }
                  }
                )
                    return false;
              }
      }
    
   });
        
    }
}

