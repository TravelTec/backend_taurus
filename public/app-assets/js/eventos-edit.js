        $('#celular').mask('(00) 00000-0000');
        $('#data').mask('00/00/0000');
        $('#inicio').mask('00/00/0000');
        $('#termino').mask('00/00/0000');



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

        function alterarImagem(){

          var acao = 'EditarFoto';

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
                  var img = document.getElementById('eventofoto');
                  img.src = resposta;
                  $('#imagemdb').prop("value", resposta);
              }

          });
        }

        function editarEvento(idEvento){
            //Dados evento 
            var fotoevento = $('#imagemdb').val();
            var local = $('#local').val();
            var inicio = $('#inicio').val();
            var termino = $('#termino').val();
            var nome = $('#nomeevento').val();
            var site = $('#site').val();
            var termo = $('#termo').val();
            //Dados endereco
            var endereco = $('#endereco').val();
            var numero = $('#numero').val();
            var cidade = $('#cidade').val();
            var uf = $('#uf').val();
            var complemento = $('#complemento').val();
            var fulladdress = endereco+', '+cidade+', '+uf;
            var status = "";
            var info = $('#infoevento').summernote('code');


            if($('#status').is(':checked')){
              status = 1;
            }else{
              status = 0;
            }

            if(site == ''){
                site = ' ';
            }else if(termo == ''){
                termo = ' ';
            }


            if(nome == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Nome evento',
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
            }else if(local == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Local evento',
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
                  title: 'Campo inválido',
                  text: 'Data de inicio',
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
                  title: 'Campo inválido',
                  text: 'Data de término',
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
            }else if(numero == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Número de endereço',
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
            }else if(uf == ''){
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
            }else if(info.lentgh > 500){
                swal({
                  title: 'Campo inválido',
                  text: 'Anúncio evento contém mais do que 500 caracteres',
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
                            data: {termo:termo,idEvento:idEvento,info:info, site:site, status:status, fotoevento:fotoevento, local:local, inicio:inicio, 
                              termino:termino, endereco:endereco, numero:numero, nome:nome, cidade:cidade, uf:uf, complemento:complemento, latitude:latitude, longitude:longitude, acao: 'editarEvento'}, 
                            url: 'functions/reservas.php',
                            success: function(resposta){
              
                                if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "O evento foi editado com sucesso",
                                        imageUrl: 'img/bonecoFeliz.png',
                                        imageSize: '120x120'
                                    },function(){ 
                                       window.location.href = 'eventos.php';
                                   });
                                }else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Evento não editado, tente novamente",
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



        



    