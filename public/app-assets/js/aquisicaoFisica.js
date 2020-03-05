
        $('#nascimentof').datepicker({
                todayBtn: "linked",
                keyboardNavigation: true,
                forceParse: true,
                calendarWeeks: true,
                autoclose: true,
                format: "dd/mm/yyyy"
            });

        $("#mobile").mask('(00) 00000-0000');

        $("#telefonef").mask('(00) 0000-0000');

        $('#nascimentof').mask('00/00/0000');


        $('#cepf').mask('00000-000');

        $('#cpf').mask('000.000.000-00');     


        $('.codf').hide();

        $('.1Vf').hide();

        $('.1Ff').hide();  

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



        function emitirCodigoF(){

            var celularF = document.getElementById('mobile').value;
            var celular = celularF.replace(/[|(|)| |-]/gi, "");

            $.ajax({
                type: 'POST',
                data: {celular:celular}, 
                url: 'functions/enviarCodigoSMS.php',
                success: function(codigo){
                    var codigoV = codigo;

                    $('.codigoEnviadof').prop("value", codigoV);
                    $('.codf').slideDown();

                    swal({
                    title: "SMS Enviado!",
                    text: "Por Favor, aguarde e digite o código recebido",
                    imageUrl: "img/boneco.png"
                    },function(){
                        
    
                        
                    });
                

                }
            });
        }

        function emitirCodigoEmail(){
            var emailj = $("#emailj").val();
            var nomef = $("#nomef").val();

            $.ajax({
                type: 'POST',
                data: {emailj:emailj, nomef:nomef},
                url: 'functions/enviarCodigoConfirmacao.php',
                success: function(resposta){
                    $('.codigoEnviadoj').prop("value", resposta);
                    $('.codj').slideDown();

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
                            text: "Por Favor, confirme o e-mail cadastrado.",
                            imageUrl: "img/boneco.png"
                            },function(){
                            
        
                            
                        });
                    }
                }
            });
        }

        function emitirCodigoEmailFisica(){
            var emailj = $("#emailf").val();
            var nomef = $("#nomej").val();

            $.ajax({
                type: 'POST',
                data: {emailj:emailj, nomef:nomef},
                url: 'functions/enviarCodigoConfirmacao.php',
                success: function(resposta){
                    $('.codigoEnviadof').prop("value", resposta);
                    $('.codf').slideDown();

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
                            text: "Por Favor, confirme o e-mail cadastrado.",
                            imageUrl: "img/boneco.png"
                            },function(){
                            
        
                            
                        });
                   
                }
            }
            });
        }

        function verificarCodigoF(){
            var codigoV = document.getElementById('codigoEnviadof').value;
            var codigo = document.getElementById('codigoSMSf').value;
            var codV = 'valido';
            var codF = 'invalido';

            if(codigo == codigoV){
                $('#conff').prop("value", '1');
                $('.1f').hide();
                $('.1Ff').hide();
                $('.codigovalidof').prop("value", codV);
                $('.1Vf').slideDown();
                
            }else{
                $('#conff').prop("value", '2');
                $('.1f').hide();
                $('.1Vf').hide();
                $('.codigovalidof').prop("value", codF);
                $('.1Ff').slideDown();
                
            }

        }
        

function addCoorF(cep)
{
    GMaps.geocode({
        address: cep,
        callback: function(results, status) {            
            if (status == 'OK') {
                var latlng = results[0].geometry.location;
                lat = latlng.lat();
                lng = latlng.lng();
                $("#latf").val(lat);
                $("#lngf").val(lng);

            }
        }
    })    
}  
        
        

        $(document).ready(function() {

            function limpa_formulário_cep() {
                // Limpa valores do formulário de cep.
                $("#ruaf").val("");
                $("#bairrof").val("");
                $("#cidadef").val("");
                $("#uff").val("");
                $("#ibgef").val("");
            }
            
            //Quando o campo cep perde o foco.
            $("#cepf").blur(function() {

                //Nova variável "cep" somente com dígitos.
                var cep = $(this).val().replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if(validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        $("#enderecof").val("...");
                        $("#cidadef").val("...");
                        $("#uff").val("...");
                        addCoorF(cep);
                        //Consulta o webservice viacep.com.br/
                        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                            if (!("erro" in dados)) {
                                //Atualiza os campos com os valores da consulta.
                                $("#enderecof").val(dados.logradouro);
                                $("#bairrof").val(dados.bairro);
                                $("#cidadef").val(dados.localidade);
                                $("#uff").val(dados.uf);
                            } //end if.
                            else {
                                //CEP pesquisado não foi encontrado.
                                limpa_formulário_cep();
                                bootbox.alert("CEP não encontrado.");
                            }
                        });
                    } //end if.
                    else {
                        //cep é inválido.
                        limpa_formulário_cep();
                        bootbox.alert("Formato de CEP inválido.");
                    }
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    limpa_formulário_cep();
                }
            });
        });

function TestaCPF(strCPF) {
    TestaCPF = TestaCPF.replace(".", "");
    TestaCPF = TestaCPF.replace("-", "");
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000"){
        alert(0);
    }
    
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    
    if ((Resto == 10) || (Resto == 11)){
        Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(10, 11) ) ){
        alert(0);
    }else{
       alert(1);
    } 
    
}

    


function registrarLicencaFisica(){

    var inscricao = '0';
    var fantasia = $('#nomef').val();
    var razao = $('#sobrenome').val();
    var cnpj = $('#cpf').val();
    var cep = $('#cepf').val();
    var endereco = $('#enderecof').val();
    var numero = $('#numerof').val();
    var complemento = $('#complementof').val();
    var cidade = $('#cidadef').val();
    var bairro = $('#bairrof').val();
    var estado = $('#uff').val();
    var genero = $('#generof').val();
    var nome = $('#nomef').val();
    var dataNasc = $('#nascimentof').val();
    var telefone = $('#telefonef').val();
    var email = $('#emailf').val();
    var senha = $('#senhaf').val();
    var rptsenha = $('#rptsenhaf').val();
    var codigoSMS = $('#codigoSMSf').val();
    var celular = $('#mobile').val();
    var confirmacao = $('#conff').val();
    var Plano = $('#planoescolhido').val();
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    var tipoPagamento = $('input:radio[name=tipoPagamentoF]:checked').val();


    var Pedido = Math.floor(Math.random() * 65536);

    if(Plano == 2){
        var Valor = '89';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Nivel I';
    }else if(Plano == 3){
        var Valor = '178';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Nivel II';
    }else if(Plano == 4){
        var Valor = '378';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Nivel III';
    }


     $.ajax({
          url: "functions/cadastrarLicencaFisica.php",
          type: "POST",
          data:{inscricao: inscricao, fantasia: fantasia, razao: razao, cnpj: cnpj, cep: cep, 
          endereco: endereco, numero: numero, complemento: complemento, cidade: cidade, estado: estado, 
          genero: genero, nome: nome, dataNasc: dataNasc,telefone: telefone, email: email, senha: senha, 
          bairro: bairro, Plano: Plano, celular: celular, Pedido: Pedido, Valor: Valor, status: status, lat: lat, lng: lng},  
          success: function(resposta){
              if(resposta == 0){
                  swal({
                    title: 'Licença não cadastrada',
                    text: 'CPF já existe em nossa base de dados',
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
                  
              }else if(resposta == 1){
                  swal({
                    title: 'Licença não cadastrada',
                    text: 'Por favor, tente novamente',
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
                var Licenca = resposta;

                var nomeCompleto = fantasia+' '+razao;

                swal({
                  title: "Licença cadastrada com sucesso!",
                  text: ""+msg,
                  imageUrl: "img/config-menu.png"
                  },function(){
                      $.ajax({
                        url: "functions/boletoSimples/cadastrarCliente(API).php",
                        type: "POST",
                        data:{cnpj: cnpj, endereco: endereco, bairro: bairro, cidade: cidade,
                        estado: estado, razao: razao, cep: cep, 
                        email: email, numero: numero, complemento: complemento, telefone: telefone,Valor: Valor, Licenca: Licenca},
                        success: function(resposta){
                            var Lancamento = resposta;
                            //Boleto -> boleto simples
                            if(tipoPagamento == 1){
                              $.ajax({
                                type: 'POST',
                                url: 'functions/boletoSimples/gerarBoleto(API).php',
                                data: {valor: Valor, plano: nomePlano, Nome: nomeCompleto, CNPJ: cnpj, CEP: cep, Endereco: endereco, Numero: numero, Cidade: cidade, Estado: estado, 
                                    Telefone: telefone, Email: email, Bairro: bairro, Complemento: complemento},
                                success: function(resposta){
                                    var retorno = resposta.split("@");
                                    var url = retorno[0];
                                    var boleto = retorno[1];


                                    $.ajax({
                                      type: 'POST',
                                      url: 'functions/inserirCreditosAquisicaoPaga.php',
                                      data: {boleto: boleto, plano: Plano, valor: Valor, solicitante: nomeCompleto, Licenca: Licenca, email: email, Lancamento: Lancamento},
                                      success: function(resposta){
                                          if(resposta == 1){
                                              enviarEmaildeConfirmacaoBoleto2(email, nomeCompleto, Plano, Valor, boleto, url);
                                          }else{
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
                                }
                              });
                            //itau shopline
                            }else if(tipoPagamento == 2 || tipoPagamento == 3){
                                $.ajax({
                                      type: 'POST',
                                      url: 'functions/itauShopline/pagamentoLicencaFisica.php',
                                      data: {Plano: Plano, cnpj: cnpj, endereco: endereco, bairro: bairro, cidade: cidade,
                                              estado: estado, razao: razao, fantasia: fantasia, Valor: Valor, Pedido: Pedido, cep: cep, email: email, tipoPagamento: tipoPagamento, Licenca: Licenca, Lancamento: Lancamento},
                                      success: function(resposta){
                      
                                          if(resposta == 0){
                                            swal({
                                                title: "Pedido não realizado",
                                                text: "Por favor, tente novamente",
                                                imageUrl: "img/falha-envio.png",
                                                imageSize: "120x120"
                                                },function(){
                                                    
                                                   return false; 
                                                    
                                                });
                                          }else{

                                          $('#DC').prop("value", resposta);

                                          $.ajax({
                                              type: 'POST',
                                              url: 'functions/inserirCreditosAquisicaoPaga.php',
                                              data: {pedido: Pedido, plano: Plano, valor: Valor, solicitante: razao, Licenca: Licenca},
                                              success: function(resposta){

                                                  document.formSHOP.submit();
          
                                              }
                                          });
                                        }
                                      }
                                  });
                            }
                        }
                      });
                  });
              }
          }
    });
   
}


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function enviarEmaildeConfiguracao(email, nome, genero, razao){

    $.ajax({
        type: 'POST',
        data: {email:email, nome:nome, razao:razao, genero:genero},
        url: 'functions/enviarConfirmacaoLicenca.php',
        success: function(resposta){
            
                window.location.href = 'https://homolog.taurusmulticanal.com.br/Dashboardv2/configuracao.php';
           
        }
    });
}

function enviarEmaildeConfiguracao22(email, nome, genero){

    $.ajax({
        type: 'POST',
        data: {email:email, nome:nome, genero:genero},
        url: 'functions/enviarConfirmacaoLicenca.php',
        success: function(resposta){           
                document.formSHOP.submit();
            
        }
    });
}


function enviarEmaildeConfirmacaoBoleto2(email, razao, plano, valor, boleto, url){

                $.ajax({
                    type: 'POST',
                    data: {email:email, razao:razao, boleto: boleto, valor: valor, plano: plano, url: url},
                    url: 'functions/enviarConfirmacaoAquisicaoExterna.php',
                    success: function(resposta){
                        
                        window.location.href = 'licencaSolicitada.php?Boleto='+url;

                               

                        
                       
                    }
                });
            }


function validarCadastroFisico(){
    var inscricao = '0';
    var fantasia = $('#nomef').val();
    var razao = $('#sobrenome').val();
    var cnpj = $('#cpf').val();
    var cep = $('#cepf').val();
    var endereco = $('#enderecof').val();
    var numero = $('#numerof').val();
    var complemento = $('#complementof').val();
    var cidade = $('#cidadef').val();
    var bairro = $('#bairrof').val();
    var estado = $('#uff').val();
    var genero = $('#generof').val();
    var nome = $('#nomef').val();
    var dataNasc = $('#nascimentof').val();
    var telefone = $('#telefonef').val();
    var email = $('#emailf').val();
    var senha = $('#senhaf').val();
    var rptsenha = $('#rptsenhaf').val();
    var codigoSMS = $('#codigoSMSf').val();
    var celular = $('#mobile').val();
    var confirmacao = $('#conff').val();
    var Plano = $('#planoescolhido').val();
    var lat = $('#latf').val();
    var lng = $('#lngf').val();

    var Pedido = Math.floor(Math.random() * 65536);

    if(Plano == 1){
        var Valor = '0';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Básico';
    }else if(Plano == 2){
        var Valor = '89';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Nivel I';
    }else if(Plano == 3){
        var Valor = '178';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Nivel II';
    }else if(Plano == 4){
        var Valor = '378';
        var msg = 'Realize o pagamento para a liberação da licença';
        var nomePlano = 'Nivel III';
    }



    if (fantasia == '') {
        swal({
          title: 'Campo inválido',
          text: 'Nome',
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

    }else if(razao == ''){
        swal({
          title: 'Campo inválido',
          text: 'Sobrenome',
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

    }else if(cnpj == ''){
        swal({
          title: 'Campo inválido',
          text: 'CPF',
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

    }else if(telefone == ''){
        swal({
          title: 'Campo inválido',
          text: 'Telefone',
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

    }else if(cep == ''){
        swal({
          title: 'Campo inválido',
          text: 'CEP',
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

    }else if(endereco == ''){
        swal({
          title: 'Campo inválido',
          text: 'Endereço',
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

    }else if(cidade == ''){
        swal({
          title: 'Campo inválido',
          text: 'Cidade',
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

    }else if(estado == ''){
        swal({
          title: 'Campo inválido',
          text: 'Estado',
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

    }else if(nome == ''){
        swal({
          title: 'Campo inválido',
          text: 'Nome',
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

    }else if(dataNasc == ''){
        swal({
          title: 'Campo inválido',
          text: 'Data de Nascimento',
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

    }else if(celular == ''){
        swal({
          title: 'Campo inválido',
          text: 'Celular',
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
    }else if(email == ''){
        swal({
          title: 'Campo inválido',
          text: 'E-mail',
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

    }else if(!isValidEmailAddress(email)){
        swal({
          title: 'E-mail inválido',
          text: 'Insira um e-mail válido',
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

    }else if(senha == ''){
        swal({
          title: 'Campo inválido',
          text: 'Senha',
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
          title: 'Senha inválida',
          text: 'Tamanho mínimo 6 caracteres',
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

    }else if(senha != rptsenha){
        swal({
          title: 'Campo inválido',
          text: 'Confirmação de senha divergente',
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
    }else if(Plano == 1){
        var status = 1;
        $.ajax({
          url: "functions/cadastrarLicencaFisica.php",
          type: "POST",
          data:{fantasia: fantasia, razao: razao, cnpj: cnpj, inscricao: inscricao, cep: cep, 
            endereco: endereco, numero: numero, complemento: complemento, cidade: cidade, estado: estado, 
            genero: genero, nome: nome, dataNasc: dataNasc,telefone: telefone, email: email, senha: senha, 
            bairro: bairro, Plano: Plano, celular: celular, Pedido: Pedido, Valor: Valor, status: status, lat: lat, lng: lng},  
            success: function(resposta){
                if(resposta == 0){
                    swal({
                      title: 'Licença não cadastrada',
                      text: 'CNPJ já existe em nossa base de dados',
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
                    
                }else if(resposta == 1){
                    swal({
                      title: 'Licença não cadastrada',
                      text: 'Por favor, tente novamente',
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
                    swal({
                    title: "Licença cadastrada com sucesso!",
                    text: "Você receberá um e-mail com um tutorial de acesso para configuração básica.",
                    imageUrl: "img/config-menu.png"
                    },function(){
                        $.ajax({
                           type:"POST",
                           data:{emailDash: email, senhaDash: senha},
                           url:'functions/loginValidacao.php',
                           success:function(resposta){
                               enviarEmaildeConfiguracao(email, nome, genero, razao);
                           }
                          });
                        
                    });
                }

            }
          });
    }else{
      $('#pagamentoFisica').modal('show');
    }
}