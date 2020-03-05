$('#cnpj').mask('00.000.000/0000-0000');
$('#cpf').mask('000.000.000-00');

$('#cnpj2').mask('00.000.000/0000-0000');
$('#cpf2').mask('000.000.000-00');

$('#cnpj3').mask('00.000.000/0000-0000');
$('#cpf3').mask('000.000.000-00');    

$('#cnpjCampo').hide();
$('#cpfCampo').hide();

$('#cnpjCampo2').hide();
$('#cpfCampo2').hide();

$('#cnpjCampo3').hide();
$('#cpfCampo3').hide();

$('#2via').hide();
$('#reemissao').hide();
$('#cancelamento').hide();

function escolha(choice){
  if(choice == 1){
    $('#choice').hide();
    $('#cpfCampo').show();
  }else if(choice == 2){
    $('#choice').hide();
    $('#cnpjCampo').show();
  }else if(choice == 3){
    $('#choice2').hide();
    $('#cpfCampo2').show();
  }else if(choice == 4){
    $('#choice2').hide();
    $('#cnpjCampo2').show();
  }else if(choice == 5){
    $('#tipo').hide();
    $('#2via').show();
  }else if(choice == 6){
    $('#tipo').hide();
    $('#reemissao').show();
  }else if(choice == 7){
    $('#tipo').show();
    $('#2via').hide();
    $('#reemissao').hide();
    $('#cancelamento').hide();
  }else if(choice == 11){
    $('#choice3').hide();
    $('#cpfCampo3').show();
  }else if(choice == 12){
    $('#choice3').hide();
    $('#cnpjCampo3').show();
  }else if(choice == 16){
    $('#tipo').hide();
    $('#cancelamento').show();
  }
}



function voltar(){
  $('#cpfCampo').hide();
  $('#cnpjCampo').hide();
  $('#choice').show();
}

function voltar2(){
  $('#cpfCampo2').hide();
  $('#cnpjCampo2').hide();
  $('#choice2').show();
}

function voltar3(){
  $('#cpfCampo3').hide();
  $('#cnpjCampo3').hide();
  $('#choice3').show();
}


function buscarCPF(){
  var cpf = $('#cpf').val();
  var acao = 'buscarCPF'; 


            $.ajax({
               type:"POST",
               data:{cpf: cpf, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CPF não está cadastrado',
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
                    window.location.href = '2viaF.php?tr='+resposta;
                  }
               }
             });
   
  
  
}


function buscarCPFServicos(){
  var cpf = $('#cpf').val();
  var acao = 'buscarCPF'; 


            $.ajax({
               type:"POST",
               data:{cpf: cpf, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CPF não está cadastrado',
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
                    window.location.href = 'servicoValidacao.php?tr='+resposta;
                  }
               }
             });
   
  
  
}



function buscarCNPJ(){
  var cnpj = $('#cnpj').val();
  var acao = 'buscarCNPJ';  


            $.ajax({
               type:"POST",
               data:{cnpj: cnpj, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CNPJ não está cadastrado',
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
                    window.location.href = '2viaJ.php?tr='+resposta;
                  }
                
               }
             });

  

}


function buscarCPF2(){
  var cpf = $('#cpf2').val();
  var acao = 'buscarCPF'; 


            $.ajax({
               type:"POST",
               data:{cpf: cpf, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CPF não está cadastrado',
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
                    window.location.href = 'reemissaoF.php?tr='+resposta;
                  }
               }
             });
   
  
  
}

function buscarCNPJ2(){
  var cnpj = $('#cnpj2').val();
  var acao = 'buscarCNPJ';  


            $.ajax({
               type:"POST",
               data:{cnpj: cnpj, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CNPJ não está cadastrado',
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
                    window.location.href = 'reemissaoJ.php?tr='+resposta;
                  }
                
               }
             });

  

}


function buscarCPF3(){
  var cpf = $('#cpf3').val();
  var acao = 'buscarCPF'; 


            $.ajax({
               type:"POST",
               data:{cpf: cpf, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CPF não está cadastrado',
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
                    window.location.href = 'cancelamento.php?tr='+resposta;
                  }
               }
             });
   
  
  
}

function buscarCNPJ3(){
  var cnpj = $('#cnpj3').val();
  var acao = 'buscarCNPJ';  


            $.ajax({
               type:"POST",
               data:{cnpj: cnpj, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CNPJ não está cadastrado',
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
                    window.location.href = 'cancelamento.php?tr='+resposta;
                  }
                
               }
             });

  

}


function buscarCNPJServico(){
  var cnpj = $('#cnpj').val();
  var acao = 'buscarCNPJ';  


            $.ajax({
               type:"POST",
               data:{cnpj: cnpj, acao: acao},
               url:'functions/financeiro.php',
               success:function(resposta){
                  if(resposta == 0){
                    swal({
                        title: 'Ops...',
                        text: 'Este CNPJ não está cadastrado',
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
                    window.location.href = 'atualizacaoServico.php?tr='+resposta;
                  }
                
               }
             });

  

}

//VALIDAÇÃO CNPJ
    $('#cnpj').change(function(){
    CNPJ = $(this).val();
    if(!CNPJ){ return false;}
    erro = new String;
    if(CNPJ == "00.000.000/0000-00"){ erro += "CNPJ Inexistente\n\n";}
    CNPJ = CNPJ.replace(".","");
    CNPJ = CNPJ.replace(".","");
    CNPJ = CNPJ.replace("-","");
    CNPJ = CNPJ.replace("/","");

    var a = [];
    var b = new Number;
    var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    for(i=0; i<12; i++){
      a[i] = CNPJ.charAt(i);
      b += a[i] * c[i+1];
    }
    if((x = b % 11) < 2){
      a[12] = 0
    }else{
      a[12] = 11-x
    }
    b = 0;
    for(y=0; y<13; y++){
      b += (a[y] * c[y]);
    }
    if((x = b % 11) < 2){
      a[13] = 0;
    }else{
      a[13] = 11-x;
    }
    if((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){ erro +="CNPJ Inexistente";}
    if (erro.length > 0){
      $(this).val('');
      swal({
          title: 'Campo inválido',
          text: erro,
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
        setTimeout(function(){ $(this).focus()},50);
        return false;
              
    }
    return $(this);
  });


  //VALIDAÇÃO CPF

  function validate(){
        var value = $('#cpf').val();
        var cleanCPF = value.replace(/\.|\-|\s/g, ''),
            firstNineDigits = cleanCPF.substring(0, 9),
            checker = cleanCPF.substring(9, 11);

        if (cleanCPF.length !== 11) {
            return false;
        }

        // Checking if all digits are equal
        for (var i = 0; i < 10; i++) {
            if ('' + firstNineDigits + checker === Array(12).join(i)) {
                return false;
            }
        }

        var checker1 = calcChecker1(firstNineDigits);
        var checker2 = calcChecker2(firstNineDigits + '' + checker1);

        if (checker.toString() === checker1.toString() + checker2.toString()) {
            return false;
        } else {
            swal({
          title: 'Campo inválido',
          text: 'CPF Inexistente',
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
        }
    }

    function calcChecker1(firstNineDigits) {
        var sum = null;

        for (var j = 0; j < 9; ++j) {
            sum += firstNineDigits.toString().charAt(j) * (10 - j);
        }

        var lastSumChecker1 = sum % 11;
        var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;

        return checker1;
    }

    function calcChecker2(cpfWithChecker1) {
        var sum = null;

        for (var k = 0; k < 10; ++k) {
            sum += cpfWithChecker1.toString().charAt(k) * (11 - k);
        }

        var lastSumChecker2 = sum % 11;
        var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;

        return checker2;
    }



    function atualizarPlano(){
      $("#escolherPlano").modal('show');
    }


    function escolherPlano(tipo){

      if(tipo == 2){
        var Plano = 'Plano Nivel I'
        $('.planoNovo').prop("value", 2);
      }else if(tipo == 3){
        var Plano = 'Plano Nivel II'
        $('.planoNovo').prop("value", 3);
      }else if(tipo == 4){
        var Plano = 'Plano Nivel III'
        $('.planoNovo').prop("value", 4);
      }

      $(".nomePlano").html(Plano);

      $("#escolherPlano").modal('hide');
    }


    function segundaviaCPF(){

      var PlanoEscolhido = $('.planoNovo').val();
      var Licenca = $('.licenca').val();
      var email = $('.email').val();
      var nome = $('#nomef').val();
      var sobrenome = $('#sobrenome').val();
      var cpf = $('#cpf').val();
      var cep = $('.cep').val();
      var bairro = $('.bairro').val();
      var cidade = $('.cidade').val();
      var estado = $('.estado').val();
      var endereco = $('.endereco').val();
      var complemento = $('.complemento').val();
      var telefone = $('.telefone').val();
      var numero = $('.numero').val();
      var nomeCompleto = nome+' '+sobrenome;
      var Assinatura = $('.assinatura').val();
      var valor = $('.valor').val();
      var Pedido = Math.floor(Math.random() * 65536);
      var Plano = $('.plano').val();


      $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos gerando a 2ª via de sua fatura<br> Você será avisado quando estiver disponível</h4>' });
  
  
      $.ajax({
        url: 'functions/boletoSimples/emitirSegundaVia(API).php',
          type: 'POST',
          data: {CNPJ_CPF: cpf, Assinatura: Assinatura, Valor: valor, acao: 'getBoletoVencido'},
          success: function(resposta){
              var retornoid = resposta.split("-");

              var id = retornoid[0];


              if(resposta == ''){
                  $.unblockUI();

                  swal({
                    title: 'Ops...',
                    text: 'Não há registro de boleto vencido, entre em contato',
                    imageUrl: "img/bonecomsg15.png",
                    showConfirmButton: true,
                    confirmButtonColor: "#A80000",
                    imageSize: "120x120"
                  },function(){ 
                      window.location.href='financeiro.php';

                  });
                  
              }else{
                $.ajax({
                url: 'functions/boletoSimples/emitirSegundaVia(API).php',
                  type: 'POST',
                  data: {CNPJ_CPF: cpf, id: id, acao: 'gerarSegundaVia'},
                  success: function(resposta){
                      
                      if(resposta == ''){
                        $.unblockUI();

                        swal({
                            title: 'Ops...',
                            text: 'Não foi possivel emitir sua via, entre em contato',
                            imageUrl: "img/falha-envio.png",
                            showConfirmButton: false,
                            timer: 2000,
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
                        var retorno = resposta.split("-");
                        var url = retorno[0];
                        var boleto = retorno[1];


                        //PLANOS TAURUS DASHBOARD V2
                        if(Plano != 'Especifico' && Plano != 'Básico'){
                          $.ajax({
                            type: 'POST',
                            url: 'functions/renovacaoPlano.php',
                            data: {boleto: boleto, plano: PlanoEscolhido, valor: valor, solicitante: nomeCompleto, Licenca: Licenca, email: email},
                            success: function(resposta){

                              if(resposta == 1){

                                $.unblockUI();

                                      swal({
                                          html:true,
                                          title: 'Segunda via emitida!',
                                          text: 'Clique no link abaixo para baixar seu boleto<p><a target="_blank" href="'+url+'">Baixar Boleto</a>',
                                          imageUrl: "img/solicitacao.png",
                                          showConfirmButton: true,
                                          confirmButtonColor: "#A80000",
                                          imageSize: "120x120"
                                        },function(){ 
                                            window.location.href= url;

                                        });
                                  }else{

                                    $.unblockUI();

                                      swal({
                                      title: "Pedido não realizado",
                                      text: "Por favor, tente novamente",
                                      imageUrl: "img/falha-envio.png",
                                      imageSize: "120x120"
                                      },function(){
                                          
                                         return false; 
                                          
                                      });
                                  }
                               
                                
                            }
                        });

                         //PLANOS ESPECIFICOS 
                        }else{
                          $.unblockUI();
                            swal({
                                          html:true,
                                          title: 'Segunda via emitida!',
                                          text: 'Clique no link abaixo para baixar seu boleto<p><a target="_blank" href="'+url+'">Baixar Boleto</a>',
                                          imageUrl: "img/solicitacao.png",
                                          showConfirmButton: true,
                                          confirmButtonColor: "#A80000",
                                          imageSize: "120x120"
                                        },function(){ 
                                            window.location.href= url;

                                        });

                        }
                        
                      }

                  }
              });
              }

              
          }
      });
    }













  function segundaviaCNPJ(){

    $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos gerando a 2ª via de sua fatura<br> Você será avisado quando estiver disponível</h4>' });

      var PlanoEscolhido = $('.planoNovo').val();
      var Licenca = $('.licenca').val();
      var email = $('.email').val();
      var razao = $('#razao').val();
      var fantasia = $('#fantasia').val();
      var cnpj = $('#cnpj').val();
      var cep = $('.cep').val();
      var bairro = $('.bairro').val();
      var cidade = $('.cidade').val();
      var estado = $('.estado').val();
      var endereco = $('.endereco').val();
      var complemento = $('.complemento').val();
      var telefone = $('.telefone').val();
      var numero = $('.numero').val();
      var Assinatura = $('.assinatura').val();
      var valor = $('.valor').val();
      var Pedido = Math.floor(Math.random() * 65536);
      var Plano = $('.plano').val();


      
  
      $.ajax({
        url: 'functions/boletoSimples/emitirSegundaVia(API).php',
          type: 'POST',
          data: {CNPJ_CPF: cnpj, Assinatura: Assinatura, Valor: valor, acao: 'getBoletoVencido'},
          success: function(resposta){

              var retornoid = resposta.split("-");

              var id = retornoid[0];
              

           
              if(resposta == ''){

                  $.unblockUI();
                  swal({
                    title: 'Ops...',
                    text: 'Não há registro de boleto vencido, entre em contato',
                    imageUrl: "img/bonecomsg15.png",
                    showConfirmButton: true,
                    confirmButtonColor: "#A80000",
                    imageSize: "120x120"
                  },function(){ 
                      window.location.href='financeiro.php';

                  });
                  
              }else{
                $.ajax({
                url: 'functions/boletoSimples/emitirSegundaVia(API).php',
                  type: 'POST',
                  data: {CNPJ_CPF: cnpj, id: id, acao: 'gerarSegundaVia'},
                  success: function(resposta){
                  
                      if(resposta == ''){
                        $.unblockUI();

                        
                        swal({
                            title: 'Ops...',
                            text: 'Não foi possivel emitir sua via, entre em contato',
                            imageUrl: "img/falha-envio.png",
                            showConfirmButton: false,
                            timer: 2000,
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

                        var retorno = resposta.split("-");
                        var url = retorno[0];
                        var boleto = retorno[1];
                        var urlBoleto = retorno[2];

                        //PLANOS TAURUS DASHBOARD V2
                        if(Plano != 'Especifico' && Plano != 'Básico'){
                          $.ajax({
                            type: 'POST',
                            url: 'functions/renovacaoPlano.php',
                            data: {boleto: boleto, plano: PlanoEscolhido, valor: valor, solicitante: razao, Licenca: Licenca, email: email},
                            success: function(resposta){
                                
                                enviar2via(email, razao, valor, urlBoleto, url);
                               
                                
                            }
                        });

                         //PLANOS ESPECIFICOS 
                        }else{
                                enviar2via(email, razao, valor, urlBoleto, url);

                        }
                        
                      }

                  }
              });
              }

              
          }
      });
    }



 function reemissaoCPF(){

      var cpf = $('#cpf').val();
      var Assinatura = $('.assinatura').val();
      var valor = $('.valor').val();

  
      $.ajax({
        url: 'functions/boletoSimples/reemitirBoleto(API).php',
          type: 'POST',
          data: {CNPJ_CPF: cpf, Assinatura: Assinatura, Valor: valor},
          success: function(resposta){
              
              var retorno = resposta.split("-");
              var url = retorno[0];


              if(resposta == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Não há registro de boleto em aberto, entre em contato',
                    imageUrl: "img/bonecomsg15.png",
                    showConfirmButton: true,
                    confirmButtonColor: "#A80000",
                    imageSize: "120x120"
                  },function(){ 
                      window.location.href='financeiro.php';

                  });
                  
              }else{
                swal({
                    title: 'Ótimo Trabalho!',
                    text: 'Seu boleto foi gerado, clique para visualizar',
                    imageUrl: "img/bonecomsg3.png",
                    showConfirmButton: true,
                    confirmButtonText: "Visualizar",
                    confirmButtonColor: "#A80000",
                    imageSize: "120x120"
                  },function(){ 
                      window.location.href = url;

                  });
              }

              
          }
      });
    }



    function reemissaoCNPJ(){

      var cpf = $('#cnpj').val();
      var Assinatura = $('.assinatura').val();
      var valor = $('.valor').val();
  
      $.ajax({
        url: 'functions/boletoSimples/reemitirBoleto(API).php',
          type: 'POST',
          data: {CNPJ_CPF: cpf, Assinatura: Assinatura, Valor: valor},
          success: function(resposta){
              var retorno = resposta.split("-");
              var url = retorno[0];


              if(resposta == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Não há registro de boleto em aberto, entre em contato',
                    imageUrl: "img/bonecomsg15.png",
                    showConfirmButton: true,
                    confirmButtonColor: "#A80000",
                    imageSize: "120x120"
                  },function(){ 
                      window.location.href='financeiro.php';

                  });
                  
              }else{
                swal({
                    title: 'Ótimo Trabalho!',
                    text: 'Seu boleto foi gerado, clique para visualizar',
                    imageUrl: "img/bonecomsg3.png",
                    showConfirmButton: true,
                    confirmButtonText: "Visualizar",
                    confirmButtonColor: "#A80000",
                    imageSize: "120x120"
                  },function(){ 
                      window.location.href = url;

                  });
              }

              
          }
      });
    }



        //CANCELAMENTO DE LICENÇAS


        $('.VC').hide();
        $('.FC').hide();
        $('.codC').hide();
        $('#dadoslicenca').hide();
        $('#celular').mask('(00) 00000-0000');

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


                    

                    if(status_code == '000'){
                      $('.codigoEnviadoC').prop("value", codigoV);
                      $('.codC').slideDown();
                      swal({
                      title: "SMS Enviado",
                      text: "Por Favor, aguarde e digite o código recebido",
                      imageUrl: "img/bonecomsg9.png",
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


        function validarCelular(id){
            
            
            var codigoV = document.getElementById('codigoEnviadoC').value;
            var codigo = document.getElementById('codigoSMSC').value;
            var celular = $("#celular").val();
            var planoEscolhido = id;
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
            }else if(codigo != codigoV){
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


                swal({
                    title: "Cancelamento de licença",
                    text: "Código válido, prossiga para próxima etapa",
                    imageUrl: "img/bonecomsg1.png",
                    confirmButtonText: "Prosseguir",
                    confirmButtonColor: "#A80000",
                    imageSize: '120x120'
                },function(){ 
                    $('#codcelular').hide();
                    $('#dadoslicenca').show();
                });
                        
                
            }
            
        }



        //Gerar boleto de cancelamento

        function cancelamento(plano, id){

                var razao_nome = $('#razao_nome').val();
                var cnpj_cpf = $('#cnpj_cpf').val();
                var cep = $('#cepc').val();
                var endereco = $('#enderecoc').val();
                var numero = $('#numeroc').val();
                var complemento = $('#complementoc').val();
                var bairro = $('#bairroc').val();
                var cidade = $('#cidadec').val();
                var estado = $('#estadoc').val();
                var telefone = $('#telefonec').val();
                var email = $('#emailc').val();
                var valor = $('#valorc').val();
                var plano = $('#planoc').val();
                var customer = $('#clientec').val();

                swal({
                    title: "Você tem certeza?",
                    text: "Após cancelar seus serviços, todos os seus dados cadastrais e recursos ficarão inativos",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Sim, cancelar",
                    cancelButtonText: "Não, cancelar!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        if(plano == 'Básico' || valor == 0 || valor == '0,00' || valor == '0.00'){
                            var acao = 'CancelarLicenca';
   
                            $.ajax({
                                type: "POST",
                                data: {id:id},
                                url: 'functions/boletoSimples/deletarAssinatura(API).php',
                                success: function(resposta){
                                $.ajax({
                                    type: "POST",
                                    data: {id:id, acao:acao},
                                    url: 'functions/licencas.php',
                                    success: function(resposta){
                                            swal({
                                                title: "Sua licença foi cancelada",
                                                text: "Seus dados estão inativos",
                                                confirmButtonText: "Confirmar",
                                                imageSize: "120x120",
                                                imageUrl: "img/bonecomsg1.png"
                                                    },function(){
                                                    $.ajax({
                                                       type:"POST",
                                                       data:{val: 1},
                                                       url:'functions/deslogar.php',
                                                       success:function(){
                                                           window.location.href = 'login.php';
                                                       }
                                                     }); 
                                                        
                                           });
                                        }
                                    });
                                        
                         
                                }
                         
                            });
                        }else{
                            
                            

                            $.ajax({
                                type: "POST",
                                data: {customer: customer, plano: plano, email: email, valor: valor, telefone: telefone, cnpj_cpf: cnpj_cpf, Licenca: id},
                                url: 'functions/boletoSimples/gerarBoletoCancelamento(API).php',
                                success: function(resposta){
                                        if(resposta == 2){
                                            swal({
                                              title: 'Ops...',
                                              text: 'Não foi possivel realizar sua solicitação, tente novamente',
                                              imageUrl: "img/falha-envio.png",
                                              showConfirmButton: false,
                                              timer: 1800,
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
                                            enviarcancel(email, razao_nome, valor, resposta);
                                        }


                                    }
                                });
                        }

                    }else {
                        swal("Cancelado", "Sua licença não será cancelada!", "error");
                    }
                });

        }


        function question(tipo){
            if(tipo == 4){
                swal({
                    html:true,
                    title: "Dúvida",
                    text: "<h4 align='justify' style='font-weight: 100; margin: 20px; font-size: 20px;'>Para cancelar sua licença, você deve se autenticar pelo código SMS enviado para o seu celular cadastrado, após isso será gerado um boleto com o valor igual ao da ultima parcela, depois de pago, sua licença será cancelada.</h4>",
                    imageUrl: "img/bonecomsg15.png",
                    imageSize: "120x120"
                },function(){ 
                   return false;
               });

            }
        }


        function enviar2via(email, razao, valor, url, pdf){

              $.ajax({
                  type: 'POST',
                  data: {email:email, razao:razao, valor: valor, url: url},
                  url: 'functions/enviar2via.php',
                  success: function(resposta){
                      if(resposta == 1){

                        $.unblockUI();
                        

                        swal({
                            html:true,
                            title: 'Segunda via emitida!',
                            text: 'Você também recebeu em seu e-mail o boleto bancário<p><small>Se o boleto continuar vencido, aguarde um pouco e atualize a pagina</small>',
                            imageUrl: "img/solicitacao.png",
                            showConfirmButton: true,
                            confirmButtonColor: "#A80000",
                            confirmButtonText: "Visualizar Boleto",
                            imageSize: "120x120"
                          },function(){ 
                              window.location.href= url;

                          });
                        }else{

                          $.unblockUI();


                            swal({
                            html: true,
                            title: "Pedido não realizado",
                            text: "Por favor, tente novamente<p>Caso persista, entre em contato",
                            imageUrl: "img/falha-envio.png",
                            imageSize: "120x120"
                            },function(){
                                
                               return false; 
                                
                            });
                        }
                }
              });
          }


          function enviarcancel(email, razao, valor, url){

              $.ajax({
                  type: 'POST',
                  data: {email:email, razao:razao, valor: valor, url: url},
                  url: 'functions/enviarCancelamento.php',
                  success: function(resposta){
                      if(resposta == 1){
                        swal({
                          title: "Solicitação recebida",
                          text: "Para cancelar sua licença, efetue o pagamento",
                          confirmButtonText: "Visualizar Boleto",
                          imageSize: "120x120",
                          imageUrl: "img/bonecomsg12.png"
                              },function(){
                              window.location.href = url;    
                        });
                      }else{
                          swal({
                          html: true,
                          title: "Pedido não realizado",
                          text: "Por favor, tente novamente<p>Caso persista, entre em contato",
                          imageUrl: "img/falha-envio.png",
                          imageSize: "120x120"
                          },function(){
                              
                             return false; 
                              
                          });
                      }
                }
              });
          }