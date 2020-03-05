      $('#dadosgaleria').hide();
      $('#dadoslocal').hide();
      $('#btn_edit').hide();
      $('#formularioCadastroApto').hide();
      $('#celular').mask('(00) 00000-0000');
      $('#cpf').mask('000.000.000-00');
      $('#data').mask('00/00/0000');
      $('#dataNasc1').mask('00/00/0000');
      $('#dataNasc2').mask('00/00/0000');
      $('#horario').mask('00:00h');
      $("#dDom").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
      $("#dSeg").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
      $("#dTer").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
      $("#dQua").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
      $("#dQui").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
      $("#dSex").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
      $("#dSab").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});      
      $("#vlrPadrao").maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});  
            
      $('#termino').datepicker({
        startView: 1,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        format: "dd/mm/yyyy"
      });

      $('#inicio').datepicker({
        startView: 1,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        format: "dd/mm/yyyy"
      });

      $('.dual_select').bootstrapDualListbox({
          selectorMinimalHeight: 160,
          nonSelectedListLabel: 'Disponíveis',
          selectedListLabel: 'Atribuidas',
          infoText: false
      });
        
     
      
      function mostrarFormularioCadastroApto(){
        $('#title_form').html('Formulário de Cadastro');
        $('#listaAptos').hide();
        $('#btn_edit').hide();
        $('#btn_cadastro_apto').hide();
        $('#btn_cad').show();
        $('#formularioCadastroApto').show();
      }

      function esconderFormularioCadastroApto(){
        $('#formularioCadastroApto').hide();
        $('#listaAptos').show();
        $('#btn_cadastro_apto').show();
      }

      function mostrarFormularioEdicaoApto(idApto){

        $.ajax({
          type: 'POST',
          data: {idApto:idApto, acao:'getDadosAptoEdicao'}, 
          url: 'functions/reservas.php',
          success: function(resposta){
            retorno = resposta.split(';');
            categoria = retorno[0];
            pax = retorno[1];
            minDiarias = retorno[2];
            bloqueio = retorno[3];
            dom = retorno[4];
            seg = retorno[5];
            ter = retorno[6];
            qua = retorno[7];
            qui = retorno[8];
            sex = retorno[9];
            sab = retorno[10];
            inicio = retorno[11];
            termino = retorno[12];

            if(dom == seg && dom == ter && dom == qua && dom == qui && dom == sex && dom == sab){
              $('#vlrPadrao').prop("value", dom);
            }else{
              $('#padrao').attr('checked', false);
              muda("$('#padrao')");
            }

            $('#idApto').prop("value", idApto);
            $('#categoria').prop("value", categoria);
            $('#pax').prop("value", pax);
            $('#mindiarias').prop("value", minDiarias);
            $('#inicio').prop("value", inicio);
            $('#termino').prop("value", termino);
            $('#qtddisps').prop("value", bloqueio);
            $('#dDom').prop("value", dom);
            $('#dSeg').prop("value", seg);
            $('#dTer').prop("value", ter);
            $('#dQua').prop("value", qua);
            $('#dQui').prop("value", qui);
            $('#dSex').prop("value", sex);
            $('#dSab').prop("value", sab);

            $('#title_form').html('Formulário de Edição');
            $('#listaAptos').hide();
            $('#btn_cad').hide();
            $('#btn_cadastro_apto').hide();
            $('#btn_edit').show();
            $('#formularioCadastroApto').show();
          }
        });
      }


      function editarApto(idHotel){

        var idApto = $('#idApto').val();
        var categoria = $('#categoria').val();
        var pax = $('#pax').val();
        //Minimo de diarias
        var min = $('#mindiarias').val();
        var inicio = $('#inicio').val();
        var termino = $('#termino').val();
        //Quantidade
        var quantidade = $('#qtddisps').val();
        //Esses são os valores de diárias por dia
        var dom = $('#dDom').val();
        var seg = $('#dSeg').val();
        var ter = $('#dTer').val();
        var qua = $('#dQua').val();
        var qui = $('#dQui').val();
        var sex = $('#dSex').val();
        var sab = $('#dSab').val();
  
  
        if(categoria == ''){
           swal({
            title: 'Ops...',
            text: 'Insira uma categoria',
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
        }else if(pax == '' || pax == 0){
          swal({
           title: 'Ops...',
           text: 'Quantidade de pax tem que ser maior que 0',
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
       }else if(pax > 3){
        swal({
         title: 'Ops...',
         text: 'Quantidade de pax tem que ser no máximo 3',
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
     }else if(inicio == ''){
          swal({
           title: 'Ops...',
           text: 'Insira a data de inicio',
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
       }else if(termino == ''){
        swal({
         title: 'Ops...',
         text: 'Insira a data de término',
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
     }else if(dom == '' || seg == '' || ter == '' || qua == '' || qui == '' || sex == '' || sab == ''){
           swal({
            title: 'Ops...',
            text: 'Você esqueceu o valor de alguma diária',
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
            data: {idApto:idApto,inicio:inicio,termino:termino,dom:dom,seg:seg,ter:ter,qua:qua,qui:qui,sex:sex,sab:sab,categoria:categoria, pax:pax, min:min, quantidade:quantidade, acao:'editarApto'}, 
            url: 'functions/reservas.php',
            success: function(resposta){
              console.log(resposta);
              if(resposta == 1){
                swal({
                  title: "Ótimo trabalho!",
                  text: "O apartamento foi editado com sucesso",
                  imageUrl: 'img/bonecoFeliz.png',
                  imageSize: '120x120'
                },function(){ 
                   window.location.href = 'editar-hotel.php?id='+idHotel;
                 });
              }else{
                swal({
                  title: "Ops... Algo deu errado.",
                  text: "Apartamento não editado, tente novamente",
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
  
  
      }


      function cadastrarApto(idHotel){

        var categoria = $('#categoria').val();
        var pax = $('#pax').val();
        //Minimo de diarias
        var min = $('#mindiarias').val();
        var inicio = $('#inicio').val();
        var termino = $('#termino').val();
        //Quantidade
        var quantidade = $('#qtddisps').val();
        //Esses são os valores de diárias por dia
        var dom = $('#dDom').val();
        var seg = $('#dSeg').val();
        var ter = $('#dTer').val();
        var qua = $('#dQua').val();
        var qui = $('#dQui').val();
        var sex = $('#dSex').val();
        var sab = $('#dSab').val();
  
  
        if(idHotel == ''){
           swal({
            title: 'Ops...',
            text: 'Selecione um hotel',
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
        }else if(categoria == ''){
           swal({
            title: 'Ops...',
            text: 'Insira uma categoria',
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
        }else if(pax == '' || pax == 0){
          swal({
           title: 'Ops...',
           text: 'Quantidade de pax tem que ser maior que 0',
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
       }else if(pax > 3){
        swal({
         title: 'Ops...',
         text: 'Quantidade de pax tem que ser no máximo 3',
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
     }else if(inicio == ''){
          swal({
           title: 'Ops...',
           text: 'Insira a data de inicio',
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
       }else if(termino == ''){
        swal({
         title: 'Ops...',
         text: 'Insira a data de término',
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
     }else if(dom == '' || seg == '' || ter == '' || qua == '' || qui == '' || sex == '' || sab == ''){
           swal({
            title: 'Ops...',
            text: 'Você esqueceu o valor de alguma diária',
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
            data: {inicio:inicio,termino:termino,dom:dom,seg:seg,ter:ter,qua:qua,qui:qui,sex:sex,sab:sab,categoria:categoria, idHotel:idHotel, pax:pax, min:min, quantidade:quantidade, acao:'CadastrarApto'}, 
            url: 'functions/reservas.php',
            success: function(resposta){
              console.log(resposta);
              if(resposta == 1){
                swal({
                  title: "Ótimo trabalho!",
                  text: "O apartamento foi cadastrado com sucesso",
                  imageUrl: 'img/bonecoFeliz.png',
                  imageSize: '120x120'
                },function(){ 
                   window.location.href = 'editar-hotel.php?id='+idHotel;
                 });
              }else{
                swal({
                  title: "Ops... Algo deu errado.",
                  text: "Apartamento não cadastrado, tente novamente",
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
  
  
      }


      function valorPadrao(){
        var valor = $('#vlrPadrao').val();
  
        $('#dDom').prop("value", valor);
        $('#dSeg').prop("value", valor);
        $('#dTer').prop("value", valor);
        $('#dQua').prop("value", valor);
        $('#dQui').prop("value", valor);
        $('#dSex').prop("value", valor);
        $('#dSab').prop("value", valor);
      }
  
      function muda(el) {
        document.getElementById('dDom').disabled = el.checked;
        document.getElementById('dSeg').disabled = el.checked;
        document.getElementById('dTer').disabled = el.checked;
        document.getElementById('dQua').disabled = el.checked;
        document.getElementById('dQui').disabled = el.checked;
        document.getElementById('dSex').disabled = el.checked;        
        document.getElementById('dSab').disabled = el.checked;        
        document.getElementById('dSab').disabled = el.checked;       
        document.getElementById('vlrPadrao').disabled = !el.checked;
      }

      
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

        function initMap() {
          var uluru = {lat: -25.363, lng: 131.044};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });
        }
  
          $(document).ready(function () {
              $('.i-checks').iCheck({
                  checkboxClass: 'icheckbox_square-green',
                  radioClass: 'iradio_square-green',
              });
          });
  
          $('.vote label i.fa').on('click mouseover',function(){
              // remove classe ativa de todas as estrelas
              $('.vote label i.fa').removeClass('active');
              // pegar o valor do input da estrela clicada
              var val = $(this).prev('input').val();
              //percorrer todas as estrelas
              $('.vote label i.fa').each(function(){
                  /* checar de o valor clicado é menor ou igual do input atual
                  *  se sim, adicionar classe active
                  */
                  var $input = $(this).prev('input');
                  if($input.val() <= val){
                      $(this).addClass('active');
                  }
              });
              $("#voto").html(val); // somente para teste
          });
          //Ao sair da div vote
          $('.vote').mouseleave(function(){
              //pegar o valor clicado
              var val = $(this).find('input:checked').val();
              //se nenhum foi clicado remover classe de todos
              if(val == undefined ){
                  $('.vote label i.fa').removeClass('active');
              } else { 
                  //percorrer todas as estrelas
                  $('.vote label i.fa').each(function(){
                      /* Testar o input atual do laço com o valor clicado
                      *  se maior, remover classe, senão adicionar classe
                      */
                      var $input = $(this).prev('input');
                      if($input.val() > val){
                          $(this).removeClass('active');
                      } else {
                          $(this).addClass('active');
                      }
                  });
              }
              $("#qtdestrela").prop("value", val); // somente para teste
          });
  
  
  
  
          function cadastrarHotel(){
              //Dados noivos 
              var fotohotel = $('#fotohotel').val();
              var nome = $('#nomehotel').val();
              var estrelas = $('#qtdestrela').val();
              var evento = $('#eventos').val();
              var taxas = $('#taxas').val();
              var taxaop = $('#taxaop').val();
              var iss = $('#iss').val();
              if($('#status').is(':checked')){
                status = 1;
              }else{
                status = 0;
              }
              //Dados
              var endereco = $('#endereco').val();
              var numero = $('#numero').val();
              var cidade = $('#cidade').val();
              var uf = $('#uf').val();
              var complemento = $('#complemento').val();
              var fulladdress = endereco+', '+cidade+', '+uf;
              var info = $('#info').summernote('code');
  
              if(nome == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Digite o nome do hotel',
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
              }else if(estrelas == '' || estrelas == '0'){
                  swal({
                    title: 'Ops...',
                    text: 'Classique o hotel (estrelas)',
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
              }else if(evento == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Selecione o evento',
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
              }else if(taxas == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Digite a porcentagem da taxa',
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
              }else if(iss == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Digite a porcentagem de ISS',
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
                    title: 'Ops...',
                    text: 'Digite o logradouro',
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
              }else if(numero == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Digite o número de endereço',
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
                    title: 'Ops...',
                    text: 'Digite a Cidade',
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
              }else if(uf == ''){
                  swal({
                    title: 'Ops...',
                    text: 'Digite o Estado (UF)',
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
              }else if(info.length > 1300){
                  swal({
                    title: 'Ops...',
                    text: 'Informações contém mais do que 1300 caracteres',
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
                              data: {info:info,status:status,acao: 'CadastrarHotel', fotohotel:fotohotel, nome:nome, estrelas:estrelas, evento:evento, endereco:endereco, numero:numero, cidade:cidade, uf:uf, complemento:complemento, latitude:latitude, longitude:longitude, taxas:taxas, taxaop:taxaop, iss:iss}, 
                              url: 'functions/reservas.php',
                              success: function(resposta){
                                console.log(resposta);
                                  if(resposta == 1){
                                      swal({
                                          title: "Ótimo trabalho!",
                                          text: "O hotel foi cadastrado com sucesso",
                                          imageUrl: 'img/bonecoFeliz.png',
                                          imageSize: '120x120'
                                      },function(){ 
                                         window.location.href = 'hoteis.php';
                                     });
                                  }else{
                                      swal({
                                          title: "Ops... Algo deu errado.",
                                          text: "Não foi possível cadastrar o hotel.",
                                          imageUrl: 'img/falha-envio.png',
                                          timer: 2000,
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

        $(document).ready(function () {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        });

        


  

        function alterarImagem(){
 
                
                var acao = 'EditarFoto';

                var input = 'logohotel';
                var imagem = $("#uploadBtn")[0].files[0];


                var form_data = new FormData();

                form_data.append('arquivo', imagem);
                form_data.append('acao', acao);

                
                $.ajax({

                    url: 'functions/reservas.php',
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'POST',
                    success: function(resposta){
                        var img = document.getElementById(input);
                        img.src = resposta.replace( /\s/g, '' );
                        $("#fotohotel").prop("value", resposta);
                    }

                });
        }


        function alterarImagemGaleria(){
 
                
          var acao = 'EditarFoto';

          var input = 'imgGaleria';
          var imagem = $("#uploadBtnGaleria")[0].files[0];


          var form_data = new FormData();

          form_data.append('arquivo', imagem);
          form_data.append('acao', acao);

          
          $.ajax({

              url: 'functions/reservas.php',
              dataType: 'text',
              cache: false,
              contentType: false,
              processData: false,
              data: form_data,
              type: 'POST',
              success: function(resposta){
                  var img = document.getElementById(input);
                  img.src = resposta.replace( /\s/g, '' );
                  $("#imgGaleriaSave").prop("value", resposta);
              }

          });
  }


  function atribuirInstalacao(){
    var selecionadas = $('#selecionadas').val();
    var id = $('#hotelAtribuido').val();

    if(selecionadas == ''){
      swal({
              title: "Você deseja continuar?",
              text: "O hotel não possuirá nenhuma instalação",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Sim, continuar",
              cancelButtonText: "Não, cancelar",
              closeOnConfirm: false,
              closeOnCancel: false
          }, function (isConfirm) {
              if (isConfirm){
                  $.ajax({
            type: 'POST',
            data: {id:id, selecionadas:selecionadas, acao: 'atribuirInstalacao', tipo:2}, 
            url: 'functions/reservas.php',
            success: function(resposta){
              
              if(resposta == ''){
                swal({
                                   title: "Instalações de hotel",
                                  text: "Instalação não atribuida ao hotel erro: "+resposta,
                                  imageUrl: "img/falha-envio.png",
                  imageSize: "120x120"
                                      },function(){ 
                                 location.reload();
                            });
                        }else{
                            swal({
                  title: "Instalações de hotel",
                  text: "O hotel não possui mais instalações",
                  imageUrl: "img/config-menu.png",
                  imageSize: "120x120"
                    },function(){ 
                  location.reload();
                             });
                        }					
                      }
          });
              }else{
                  swal({
            title: 'Cancelado',
            text: 'Nenhuma ação será executada',
            showConfirmButton: false,
            timer: 1500,
            type: "error"
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
    }else{
      $.ajax({
        type: 'POST',
        data: {id:id, selecionadas:selecionadas, acao: 'atribuirInstalacao', tipo:1}, 
        url: 'functions/reservas.php',
        success: function(resposta){
          if(resposta == ''){
            swal({
                               title: "Instalações de hotel",
                              text: "Instalação não atribuida ao hotel erro: "+resposta,
                              imageUrl: "img/falha-envio.png",
                  imageSize: "120x120"
                                  },function(){ 
                             location.reload();
                        });
                    }else{
                        swal({
              title: "Instalações de hotel",
              text: "Instalação atribuida ao hotel com sucesso!",
              imageUrl: "img/config-menu.png",
                  imageSize: "120x120"
                },function(){ 
              location.reload();
                         });
                    }					
                  }
      });
    }
  }

  function excluirImagemGaleria(id){
    swal({
          title: "Deleção de Imagem",
          text: "Deseja realmente deletar essa imagem?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Sim, deletar",
          cancelButtonText: "Não, cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
      }, function (isConfirm) {
          if (isConfirm) {
              var acao = 'excluirImagemGaleria';
     
                      $.ajax({
                        type: "POST",
                        data: {id:id, acao:acao},
                        url: 'functions/reservas.php',
                        success: function(resposta){
                            if(resposta == 1){
                              swal({
                                    title: "Deleção de Imagem",
                                    text: "A imagem foi deletada",
                                    imageUrl: "img/config-menu.png"
                                        },function(){ 
                                   location.reload();
                               });
                            }else{
                              swal({
                                    title: "Deleção de Imagem",
                                    text: "A imagem não foi deletada, erro: "+resposta,
                                    imageUrl: "img/falha-envio.png"
                                        },function(){ 
                                   location.reload();
                               });
                            }
                                
                            }
                        });
          }else{
              swal("Comando cancelado", "A imagem não será deletada!", "error");
          }
      });
  }


        

        function editarHotel(id){
            //Dados noivos 
            var fotohotel = $('#fotohotel').val();
            var nome = $('#nomehotel').val();
            var estrelas = $('#qtdestrela').val();
            var evento = $('#eventos').val();
            var taxas = $('#taxas').val();
            var taxaop = $('#taxaop').val();
            var iss = $('#iss').val();
            if($('#status').is(':checked')){
              status = 1;
            }else{
              status = 0;
            }
            
            //Dados casamento
            var endereco = $('#endereco').val();
            var numero = $('#numero').val();
            var cidade = $('#cidade').val();
            var uf = $('#uf').val();
            var complemento = $('#complemento').val();
            var fulladdress = endereco+', '+cidade+', '+uf;
            var info = $('#info').summernote('code');

            if(nome == ''){
                swal({
                  title: 'Ops...',
                  text: 'Digite o nome do hotel',
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
            }else if(estrelas == '' || estrelas == '0'){
                swal({
                  title: 'Ops...',
                  text: 'Classique o hotel (estrelas)',
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
            }else if(evento == ''){
                swal({
                  title: 'Ops...',
                  text: 'Selecione o evento',
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
            }else if(taxas == ''){
                swal({
                  title: 'Ops...',
                  text: 'Digite a porcentagem da taxa',
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
            }else if(iss == ''){
                swal({
                  title: 'Ops...',
                  text: 'Digite a porcentagem de ISS',
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
                  title: 'Ops...',
                  text: 'Digite o logradouro',
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
            }else if(numero == ''){
                swal({
                  title: 'Ops...',
                  text: 'Digite o número de endereço',
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
                  title: 'Ops...',
                  text: 'Digite a Cidade',
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
            }else if(uf == ''){
                swal({
                  title: 'Ops...',
                  text: 'Digite o Estado (UF)',
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
            }else if(info.length > 1300){
                swal({
                  title: 'Ops...',
                  text: 'Informações contém mais do que 1300 caracteres',
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
                            data: {info:info,id:id,status:status,acao: 'editarHotel', fotohotel:fotohotel, nome:nome, estrelas:estrelas, evento:evento, endereco:endereco, numero:numero, cidade:cidade, uf:uf, complemento:complemento, latitude:latitude, longitude:longitude, taxas:taxas, taxaop:taxaop, iss:iss}, 
                            url: 'functions/reservas.php',
                            success: function(resposta){
                                if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "O hotel foi editado com sucesso",
                                        imageUrl: 'img/bonecoFeliz.png',
                                        imageSize: '120x120'
                                    },function(){ 
                                       window.location.href = 'hoteis.php';
                                   });
                                }else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Não foi possível editar o hotel.",
                                        imageUrl: 'img/falha-envio.png',
                                        timer: 2000,
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



