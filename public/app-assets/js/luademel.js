$('#menu').html('<button class="btn btn-primary" style="width: 120px;" onclick="exibir(1)"><i class="fa fa-heart" aria-hidden="true"></i>  Noivos</button> <button class="btn btn-primary" onclick="exibir(2)" style="width: 120px;" disabled><i class="fa fa-birthday-cake" aria-hidden="true"></i> Casamento</button> <button class="btn btn-primary"  onclick="exibir(3)" style="width: 120px;" disabled><i class="fa fa-gift" aria-hidden="true"></i> Cotas</button>');

        $('#dadosbancarios').hide();
        $('#dadoslocal').hide();

        $('#celular').mask('(00) 00000-0000');
        $('#cpf').mask('000.000.000-00');
        $('#data').mask('00/00/0000');
        $('#dataNasc1').mask('00/00/0000');
        $('#dataNasc2').mask('00/00/0000');
        $('#horario').mask('00:00h');

        $('.clockpicker').clockpicker();

        $('#dataNasc1').datepicker({
            startView: 2,
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            format: "dd/mm/yyyy"
        });

        $('#dataNasc2').datepicker({
            startView: 2,
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            format: "dd/mm/yyyy"
        });

        $('#data').datepicker({
            startView: 1,
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            format: "dd/mm/yyyy"
        });

        function exibir(step){
            if(step == 1){
                $('#dadoslocal').hide();
                $('#dadosbancarios').hide(); 
                $('#dadosnoivos').show();                                
            }else if(step == 2){
                $('#dadoslocal').show();
                $('#dadosbancarios').hide(); 
                $('#dadosnoivos').hide();                                
            }else if(step == 3){
                $('#dadoslocal').hide();
                $('#dadosbancarios').show(); 
                $('#dadosnoivos').hide();                                
            }
        }

        function etapa(step){
            if(step == 1){
                if($("#fotonoivoa1").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Selecione uma foto para o(a) noivo(a)',
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
                }else if($("#fotonoivoa2").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Selecione uma foto para o(a) noivo(a)',
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
                }else if($("#noivo1").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Digite o nome do(a) noivo(a)',
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
                }else if($("#noivo2").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Digite o nome do(a) noivo(a)',
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
                }else if($("#dataNasc1").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Data de nascimento',
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
                }else if($("#dataNasc2").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Data de nascimento',
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
                    $('#dadosnoivos').hide();
                    $('#dadoslocal').show();
                    $('#menu').html('<button class="btn btn-primary" style="width: 120px;" onclick="exibir(1)"><i class="fa fa-heart" aria-hidden="true"></i>  Noivos</button> <button class="btn btn-primary" onclick="exibir(2)" style="width: 120px;"><i class="fa fa-birthday-cake" aria-hidden="true"></i> Casamento</button> <button class="btn btn-primary"  onclick="exibir(3)" style="width: 120px;" disabled><i class="fa fa-gift" aria-hidden="true"></i> Cotas</button>');
                }
                
            }else if(step == 2){
                $('#dadoslocal').hide(); 
                $('#dadosnoivos').show();                                
            }else if(step == 3){
                if($("#fotolocal").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Foto do local',
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
                }else if($("#local").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Nome do local',
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
                }else if($("#data").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Data da cerimônia',
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
                }else if($("#horario").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Horário da cerimônia',
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
                }else if($("#cep").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Preencha o CEP',
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
                }else if($("#endereco").val() == ''){
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
                }else if($("#numero").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Numero',
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
                }else if($("#cidade").val() == ''){
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
                }else if($("#estado").val() == ''){
                    swal({
                      title: 'Campo inválido',
                      text: 'Estado (UF)',
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
                    $('#dadoslocal').hide();
                    $('#dadosbancarios').show(); 
                    $('#menu').html('<button class="btn btn-primary" style="width: 120px;" onclick="exibir(1)"><i class="fa fa-heart" aria-hidden="true"></i>  Noivos</button> <button class="btn btn-primary" onclick="exibir(2)" style="width: 120px;"><i class="fa fa-birthday-cake" aria-hidden="true"></i> Casamento</button> <button class="btn btn-primary"  onclick="exibir(3)" style="width: 120px;"><i class="fa fa-gift" aria-hidden="true"></i> Cotas</button>');
                }                                
            }else if(step == 4){
                $('#dadosbancarios').hide(); 
                $('#dadoslocal').show();                                
            }
        }


        function alterarImagem(noivo){
 
                
                var acao = 'EditarFotoNoivo';

                if(noivo == 1){
                    var input = 'noivoa1';
                    var imagem = $("#uploadBtn")[0].files[0];
                    var name = $("#fotonoivoa1");
                }else if(noivo == 2){
                    var input = 'noivoa2';
                    var imagem = $("#uploadBtn2")[0].files[0];
                    var name = $("#fotonoivoa2");
                }else if(noivo == 3){
                    var input = 'localfoto';
                    var imagem = $("#uploadBtn3")[0].files[0];
                    var name = $("#fotolocal");
                }


                var form_data = new FormData();

                form_data.append('arquivo', imagem);
                form_data.append('acao', acao);

                
                $.ajax({

                    url: 'functions/luademel.php',
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'POST',
                    success: function(resposta){
                        var img = document.getElementById(input);
                        img.src = resposta;
                        name.prop("value", resposta);
                    }

                });
        }

        $("#slider").ionRangeSlider({
            type: "single",
            min: 100,
            max: 1000,
            from: 100,
            step: 100,
            grid: false,
            prefix: "R$ ",
            onStart: function(){
                v = 100;
                atribuirValor(v);
            },
            onChange: function(data){
                v = data.from;
                atribuirValor(v);
            }
        });

        function atribuirValor(v){
            var v1 = v*1,
                v2 = v*2,
                v3 = v*3,
                v4 = v*4;

            $('#valorCota').prop("value", v);
            $('#valorCota1').prop("value", "R$ "+v1);
            $('#valorCota2').prop("value", "R$ "+v2);
            $('#valorCota3').prop("value", "R$ "+v3);
            $('#valorCota4').prop("value", "R$ "+v4);
        }


        $(document).ready(function() {

            function limpa_formulário_cep() {
                // Limpa valores do formulário de cep.
                $("#endereco").val("");
                $("#bairro").val("");
                $("#cidade").val("");
                $("#uf").val("");
                $("#ibgef").val("");
            }
            
            //Quando o campo cep perde o foco.
            $("#cep").blur(function() {

                //Nova variável "cep" somente com dígitos.
                var cep = $(this).val().replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if(validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        $("#endereco").val("...");
                        $("#cidade").val("...");
                        $("#uf").val("...");

                        //Consulta o webservice viacep.com.br/
                        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                            if (!("erro" in dados)) {
                                //Atualiza os campos com os valores da consulta.
                                $("#endereco").val(dados.logradouro);
                                $("#bairro").val(dados.bairro);
                                $("#cidade").val(dados.localidade);
                                $("#uf").val(dados.uf);
                            } //end if.
                            else {
                                //CEP pesquisado não foi encontrado.
                                limpa_formulário_cep();
                                swal({
                                  title: 'Campo inválido',
                                  text: 'CEP não encontrado',
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
                        });
                    } //end if.
                    else {
                        //cep é inválido.
                        limpa_formulário_cep();
                        swal({
                          title: 'Campo inválido',
                          text: 'Formato de CEP inválido',
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
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    limpa_formulário_cep();
                }
            });
        });

        function cadastrarNoivos(){

         $.ajax({
          type: "POST",
          data: {acao:'verificarCreditos'},
          url: 'functions/luademel.php',
          success: function(resposta){
              if(resposta == 1){
                  //Dados noivos 
                  var foto1 = $('#fotonoivoa1').val();
                  var nome1 = $('#noivo1').val();
                  var nascimento1 = $('#dataNasc1').val();
                  var foto2 = $('#fotonoivoa2').val();
                  var nome2 = $('#noivo2').val();
                  var nascimento2 = $('#dataNasc2').val();

                  //Dados casamento
                  var fotoLocal = $('#fotolocal').val();
                  var local = $('#local').val();
                  var data = $('#data').val();
                  var horario = $('#horario').val();
                  var cep = $('#cep').val();
                  var endereco = $('#endereco').val();
                  var numero = $('#numero').val();
                  var bairro = $('#bairro').val();
                  var cidade = $('#cidade').val();
                  var uf = $('#uf').val();
                  var complemento = $('#complemento').val();
                  var fulladdress = endereco+', '+numero+', '+cidade;
                  //Dados cotas e contato
                  var email = $('#email').val();
                  var celular = $('#celular').val();
                  var valorCota = $('#valorCota').val();
                  var banco = $('#banco').val();
                  var tipoConta = $('#tipoconta').val();
                  var conta = $('#conta').val();
                  var agencia = $('#agencia').val();
                  var titular = $('#nometitular').val();
                  var cpf = $('#cpf').val();

                  if(banco == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Banco',
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
                  }else if(tipoConta == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Tipo Conta',
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
                  }else if(agencia == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Agência',
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
                  }else if(conta == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Conta',
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
                  }else if(titular == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Titular',
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
                  }else if(cpf == ''){
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
                  }else if(!isValidEmailAddress(email) || email == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Email',
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
                  }else if(celular.length < 15 || celular == ''){
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
                  }else if(valorCota == ''){
                      swal({
                        title: 'Campo inválido',
                        text: 'Valor Cota',
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
                          type: 'POST',
                          data: {fulladdress:fulladdress}, 
                          url: 'functions/getGeolocation.php',
                          success: function(resposta){
                              var retorno = resposta.split("/");
                              var latitude = retorno[0];
                              var longitude = retorno[1];

                              $.ajax({
                                  type: 'POST',
                                  data: {fotoLocal:fotoLocal, local:local, data:data, horario:horario, cep:cep, endereco:endereco, numero:numero, bairro:bairro, cidade:cidade, uf:uf, complemento:complemento, latitude:latitude, longitude:longitude, nome1:nome1, nascimento1:nascimento1, foto1:foto1, nome2:nome2, nascimento2:nascimento2, foto2:foto2, banco:banco, agencia:agencia, tipoConta:tipoConta, conta:conta, titular:titular, cpf:cpf, email:email, celular:celular, valorCota:valorCota, acao: 'InserirCasamento'}, 
                                  url: 'functions/luademel.php',
                                  success: function(resposta){
                                      if(resposta == 1){
                                          swal({
                                              title: "Ótimo trabalho!",
                                              text: "Os noivos foram cadastrados com sucesso",
                                              imageUrl: 'img/bonecoFeliz.png',
                                              imageSize: '120x120'
                                          },function(){ 
                                             window.location.href = 'lua-de-mel.php';
                                         });
                                      }else{
                                          swal({
                                              title: "Ops... Algo deu errado.",
                                              text: "Noivos não cadastrados, tente novamente",
                                              imageUrl: 'img/falha-envio.png',
                                              timer: 1500,
                                              imageSize: '120x120'
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
                      });
                  }
              }else if(resposta == 0){
   
                  swal({
                      title: "OH NÃO!",
                      text: "Você não possui créditos suficientes. Clique em Comprar créditos, caso deseje adquirir.",
                      imageUrl: "img/semCredito.png",
                      showCancelButton: true,
                      confirmButtonColor: "#1ab394",
                      confirmButtonText: "Comprar Créditos",
                      cancelButtonText: "Cancelar",
                      closeOnConfirm: true,
                      closeOnCancel: true
                  }, function (isConfirm) {
                      if (isConfirm) {
                          $('#comprarCreditos').modal('show');
                      }else {
                          location.href='lua-de-mel.php';
                      }
                  });
           
              }
   
          }
   
        });

            
        }


        function editarNoivos(casamento){

            //Dados noivos 
            var foto1 = $('#fotonoivoa1').val();
            var nome1 = $('#noivo1').val();
            var nascimento1 = $('#dataNasc1').val();
            var foto2 = $('#fotonoivoa2').val();
            var nome2 = $('#noivo2').val();
            var nascimento2 = $('#dataNasc2').val();

            //Dados casamento
            var fotoLocal = $('#fotolocal').val();
            var local = $('#local').val();
            var data = $('#data').val();
            var horario = $('#horario').val();
            var cep = $('#cep').val();
            var endereco = $('#endereco').val();
            var numero = $('#numero').val();
            var bairro = $('#bairro').val();
            var cidade = $('#cidade').val();
            var uf = $('#uf').val();
            var complemento = $('#complemento').val();
            var fulladdress = endereco+', '+numero+', '+cidade;
            //Dados cotas e contato
            var email = $('#email').val();
            var celular = $('#celular').val();
            var valorCota = $('#valorCota').val();
            var banco = $('#banco').val();
            var tipoConta = $('#tipoconta').val();
            var conta = $('#conta').val();
            var agencia = $('#agencia').val();
            var titular = $('#nometitular').val();
            var cpf = $('#cpf').val();

            if(banco == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Banco',
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
            }else if(tipoConta == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Tipo Conta',
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
            }else if(agencia == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Agência',
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
            }else if(conta == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Conta',
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
            }else if(titular == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Titular',
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
            }else if(cpf == ''){
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
            }else if(!isValidEmailAddress(email) || email == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Email',
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
            }else if(celular.length < 15 || celular == ''){
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
            }else if(valorCota == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Valor Cota',
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
                    type: 'POST',
                    data: {fulladdress:fulladdress}, 
                    url: 'functions/getGeolocation.php',
                    success: function(resposta){
                        var retorno = resposta.split("/");
                        var latitude = retorno[0];
                        var longitude = retorno[1];

                        $.ajax({
                            type: 'POST',
                            data: {casamento:casamento, fotoLocal:fotoLocal, local:local, data:data, horario:horario, cep:cep, endereco:endereco, numero:numero, bairro:bairro, cidade:cidade, uf:uf, complemento:complemento, latitude:latitude, longitude:longitude, nome1:nome1, nascimento1:nascimento1, foto1:foto1, nome2:nome2, nascimento2:nascimento2, foto2:foto2, banco:banco, agencia:agencia, tipoConta:tipoConta, conta:conta, titular:titular, cpf:cpf, email:email, celular:celular, valorCota:valorCota, acao: 'editarNoivos'}, 
                            url: 'functions/luademel.php',
                            success: function(resposta){
                                if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "Os noivos foram alterados com sucesso",
                                        imageUrl: 'img/bonecoFeliz.png',
                                        imageSize: '120x120'
                                    },function(){ 
                                       window.location.href = 'lua-de-mel.php';
                                   });
                                }else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Noivos não alterados, tente novamente",
                                        imageUrl: 'img/falha-envio.png',
                                        timer: 1500,
                                        imageSize: '120x120'
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
                });
            }
        }


        function isValidEmailAddress(emailAddress){
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };



        function exibicao(casamento, status){
            $.ajax({
                type: 'POST',
                data: {casamento:casamento, status:status, acao: 'statusNoivos'}, 
                url: 'functions/luademel.php',
                success: function(resposta){
                    if(resposta == 1){
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O status de exibição foi alterado",
                            imageUrl: 'img/bonecoFeliz.png',
                            imageSize: '120x120'
                        },function(){ 
                           window.location.reload();
                       });
                    }else{
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Status de exibição não alterado, tente novamente",
                            imageUrl: 'img/falha-envio.png',
                            timer: 1500,
                            imageSize: '120x120'
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



        function excluir(casamento){
          swal({
              title: "Você tem certeza?",
              text: "Você não poderá desfazer essa ação!",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Sim, deletar noivos",
              cancelButtonText: "Não, cancelar!",
              closeOnConfirm: false,
              closeOnCancel: false
          }, function (isConfirm) {
              if (isConfirm) {
           
                  $.ajax({
               
                      type: "POST",
                      data: {casamento:casamento, acao:'deletarNoivos'},
                      url: 'functions/luademel.php',
                      success: function(resposta){
                          if(resposta == 1){
               
                              swal({
                                  title: "Ótimo trabalho!",
                                  text: "Os noivos foram excluídos com sucesso",
                                  imageUrl: 'img/bonecoFeliz.png',
                                  imageSize: '120x120'
                                                    },function(){ 
                                   location.reload();
                               });
               
                          }else{
               
                              swal({
                                  title: "Ops... Algo deu errado.",
                                  text: "Não foi possível excluir os noivos.",
                                  imageUrl: 'img/falha-envio.png',
                                  imageSize: '120x120'
                                  },function(){ 
                                   location.reload();
                               });
               
                          }
               
                      }
               
                  });
                          }else{
                            swal("Cancelado", "Os noivos não serão excluídos!", "error");
                          }
          });
      }


