
        $('#nascimentoj').datepicker({
                todayBtn: "linked",
                keyboardNavigation: true,
                forceParse: true,
                calendarWeeks: true,
                autoclose: true,
                format: "dd/mm/yyyy"
            });

        $("#celularj").mask('(00) 00000-0000');

        $("#telefonej").mask('(00) 0000-0000');

        $('#nascimentoj').mask('00/00/0000');

        $('#cnpjj').mask('00.000.000/0000-0000');

        $('#cepj').mask('00000-000');    


        $('.codj').hide();

        $('.1Vj').hide();

        $('.1Fj').hide();  

        function verificarCodigoNovo(){
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
                      window.location.href='atualizarSenha.php?email='+email;
                    }, 1600);
                
            }else{
                $('#confj').prop("value", '2');
                $('.1j').hide();
                $('.1Vj').hide();
                $('.codigovalidoj').prop("value", codF);
                $('.1Fj').slideDown();
                
            }

        }

        function emitirCodigo(){

            var celularF = document.getElementById('celularj').value;
            var celular = celularF.replace(/[|(|)| |-]/gi, "");

            if(celularF == ''){
                bootbox.alert('Por Favor, digite um número de celular');
            }else{

            }
            

            $.ajax({
                type: 'POST',
                data: {celular:celular}, 
                url: 'functions/enviarCodigoSMS.php',
                success: function(codigo){
                    var codigoV = codigo;

                    $('.codigoEnviadoj').prop("value", codigoV);
                    $('.codj').slideDown();

                    swal({
                    title: "SMS Enviado!",
                    text: "Por Favor, aguarde e digite o código recebido "+codigo,
                    imageUrl: "img/boneco.png"
                    },function(){
                        
                    
                        
                    });

                }
            });
        }

        function verificarCodigo(){
            var codigoV = document.getElementById('codigoEnviadoj').value;
            var codigo = document.getElementById('codigoSMSj').value;
            var codV = 'valido';
            var codF = 'invalido';

            if(codigo == codigoV){
                $('#confj').prop("value", '1');
                $('.1j').hide();
                $('.1Fj').hide();
                $('.codigovalidoj').prop("value", codV);
                $('.1Vj').slideDown();
                
            }else{
                $('#confj').prop("value", '2');
                $('.1j').hide();
                $('.1Vj').hide();
                $('.codigovalidoj').prop("value", codF);
                $('.1Fj').slideDown();
                
            }

        }
        
        

function addCoorJ(cep)
{
    GMaps.geocode({
        address: cep,
        callback: function(results, status) {            
            if (status == 'OK') {
                var latlng = results[0].geometry.location;
                lat = latlng.lat();
                lng = latlng.lng();
                $("#latj").val(lat);
                $("#lngj").val(lng);

            }
        }
    })    
}  

        
        

        $(document).ready(function() {

            function limpa_formulário_cep() {
                // Limpa valores do formulário de cep.
                $("#ruaj").val("");
                $("#bairroj").val("");
                $("#cidadej").val("");
                $("#ufj").val("");
                $("#ibgej").val("");
            }
            
            //Quando o campo cep perde o foco.
            $("#cepj").blur(function() {

                //Nova variável "cep" somente com dígitos.
                var cep = $(this).val().replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if(validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        $("#enderecoj").val("...");
                        $("#cidadej").val("...");
                        $("#ufj").val("...");
                        addCoorJ(cep);
                        //Consulta o webservice viacep.com.br/
                        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                            if (!("erro" in dados)) {
                                //Atualiza os campos com os valores da consulta.
                                $("#enderecoj").val(dados.logradouro);
                                $("#bairroj").val(dados.bairro);
                                $("#cidadej").val(dados.localidade);
                                $("#ufj").val(dados.uf);
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

            //VALIDAÇÃO CNPJ
    $('#cnpjj').change(function(){
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

    


function registrarLicencaJuridica(){

    var fantasia = $('#fantasiaj').val();
    var razao = $('#razaoj').val();
    var cnpj = $('#cnpjj').val();
    var inscricao = $('#inscricaoj').val();
    var cep = $('#cepj').val();
    var endereco = $('#enderecoj').val();
    var numero = $('#numeroj').val();
    var complemento = $('#complementoj').val();
    var cidade = $('#cidadej').val();
    var bairro = $('#bairroj').val();
    var estado = $('#ufj').val();
    var genero = $('#generoj').val();
    var nome = $('#nomej').val();
    var dataNasc = $('#nascimentoj').val();
    var telefone = $('#telefonej').val();
    var email = $('#emailj').val();
    var senha = $('#senhaj').val();
    var rptsenha = $('#rptsenhaj').val();
    var codigoSMS = $('#codigoSMSj').val();
    var celular = $('#celularj').val();
    var confirmacao = $('#confj').val();
    var Plano = $('#planoescolhido').val();
    var lat = $('#latj').val();
    var lng = $('#lngj').val();

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


        var status = 2;
        var tipoPagamento = $('input:radio[name=tipoPagamentoJ]:checked').val();

        if(tipoPagamento == 4){
            swal({
              title: 'Campo inválido',
              text: 'Por favor, escolha o tipo de pagamento',
              imageUrl: "img/falha-envio.png",
              showConfirmButton: false,
              timer: 1800,
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
          url: "functions/cadastrarLicenca.php",
          type: "POST",
          data:{fantasia: fantasia, razao: razao, cnpj: cnpj, inscricao: inscricao, cep: cep, 
            endereco: endereco, numero: numero, complemento: complemento, cidade: cidade, estado: estado, 
            genero: genero, nome: nome, dataNasc: dataNasc,telefone: telefone, email: email, senha: senha, bairro: bairro, Plano: Plano, Pedido: Pedido, celular: celular, Valor: Valor,  status: status, lat: lat, lng: lng},  
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

    
            
                    var Licenca = resposta;


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
                                        data: {valor: Valor, plano: nomePlano, Nome: razao, CNPJ: cnpj, CEP: cep, Endereco: endereco, Numero: numero, Cidade: cidade, Estado: estado, 
                                            Telefone: telefone, Email: email, Bairro: bairro, Complemento: complemento},
                                        success: function(resposta){

                                            var retorno = resposta.split("@");
                                            var url = retorno[0];
                                            var boleto = retorno[1];

                                            $.ajax({
                                                type: 'POST',
                                                url: 'functions/inserirCreditosAquisicaoPaga.php',
                                                data: {boleto: boleto, plano: Plano, valor: Valor, solicitante: razao, Licenca: Licenca, Lancamento: Lancamento},
                                                success: function(resposta){
                                                    if(resposta == 1){
                                                      enviarEmaildeConfirmacaoBoleto(email, razao, Plano, Valor, boleto, url);  
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
                                        url: 'functions/itauShopline/pagamentoLicencaJuridico.php',
                                        data: {Plano: Plano, cnpj: cnpj, endereco: endereco, bairro: bairro, cidade: cidade,
                                                estado: estado, razao: razao, Valor: Valor, Pedido: Pedido, cep: cep, email: email, tipoPagamento: tipoPagamento, Licenca: Licenca, Lancamento: Lancamento},
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

}


function enviarEmaildeConfiguracao(email, nome, genero){

    $.ajax({
        type: 'POST',
        data: {email:email, nome:nome, genero:genero},
        url: 'functions/enviarConfirmacaoLicenca.php',
        success: function(resposta){
           
        }
    });
}



function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};


function enviarEmaildeConfirmacaoBoleto(email, razao, plano, valor, boleto, url){

                $.ajax({
                    type: 'POST',
                    data: {email:email, razao:razao, boleto: boleto, valor: valor, plano: plano, url: url},
                    url: 'functions/enviarConfirmacaoAquisicaoExterna.php',
                    success: function(resposta){
                          window.location.href = 'licencaSolicitada.php?Boleto='+url;

                    }
                });
            }



function validarCadastroJuridico(){
   var fantasia = $('#fantasiaj').val();
    var razao = $('#razaoj').val();
    var cnpj = $('#cnpjj').val();
    var inscricao = $('#inscricaoj').val();
    var cep = $('#cepj').val();
    var endereco = $('#enderecoj').val();
    var numero = $('#numeroj').val();
    var complemento = $('#complementoj').val();
    var cidade = $('#cidadej').val();
    var bairro = $('#bairroj').val();
    var estado = $('#ufj').val();
    var genero = $('#generoj').val();
    var nome = $('#nomej').val();
    var dataNasc = $('#nascimentoj').val();
    var telefone = $('#telefonej').val();
    var email = $('#emailj').val();
    var senha = $('#senhaj').val();
    var rptsenha = $('#rptsenhaj').val();
    var codigoSMS = $('#codigoSMSj').val();
    var celular = $('#celularj').val();
    var confirmacao = $('#confj').val();
    var Plano = $('#planoescolhido').val();
    var lat = $('#latj').val();
    var lng = $('#lngj').val();

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
          text: 'Fantasia',
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
          text: 'Razão Social',
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
          text: 'CNPJ',
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
          url: "functions/cadastrarLicenca.php",
          type: "POST",
          data:{fantasia: fantasia, razao: razao, cnpj: cnpj, inscricao: inscricao, cep: cep, 
            endereco: endereco, numero: numero, complemento: complemento, cidade: cidade, estado: estado, 
            genero: genero, nome: nome, dataNasc: dataNasc,telefone: telefone, email: email, senha: senha, bairro: bairro, Plano: Plano, Pedido: Pedido, Valor: Valor, celular: celular, status: status, lat:lat, lng: lng},  
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
                                enviarEmaildeConfiguracao(email, nome, genero);
                                window.open('configuracao.php');;
                               
                           }
                          });
                        
                    });
                } 

            }
          });
    }else{
      $('#pagamentoJuridico').modal('show');
    }
}