        $('#dadosbancarios').hide();
        $('#dadoslocal').hide();

        $('#celular').mask('(00) 00000-0000');
        $('#data').mask('00/00/0000');
        $('#inicio').mask('00/00/0000');
        $('#termino').mask('00/00/0000');

        $('#imgsave').hide();

		$('.dual_select').bootstrapDualListbox({
            selectorMinimalHeight: 160,
            nonSelectedListLabel: 'Disponíveis',
            selectedListLabel: 'Relacionados',
            infoText: false
        });


      function relacionarHoteis(id){

          $("#id_evento_hotel").prop("value", id);

          $.ajax({
            type: 'POST',
            data: {id:id, acao: 'mostrarHoteisAtribuicao'}, 
            url: 'functions/reservas.php',
            success: function(resposta){
              $('#selecionadas').html(resposta);
              $("#selecionadas").bootstrapDualListbox('refresh', true);
              $('#hoteis_evento').modal('show');
            }
          });


      }


      function salvarAlteracoesRelacaoHoteis(){
        var selecionadas = $('#selecionadas').val();
        var id = $('#id_evento_hotel').val();
    
        if(selecionadas == ''){
          swal({
                  title: "Você deseja continuar?",
                  text: "O evento não possuirá hotéis",
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
                data: {id:id, selecionadas:selecionadas, acao: 'atribuirHoteis', tipo:2}, 
                url: 'functions/reservas.php',
                success: function(resposta){
                  
                  if(resposta == ''){
                    swal({
                                       title: "Relacionar hotéis",
                                      text: "Hotéis não relacionados ao evento erro: "+resposta,
                                      imageUrl: "img/falha-envio.png",
                      imageSize: "120x120"
                                          },function(){ 
                                     location.reload();
                                });
                            }else{
                                swal({
                      title: "Relacionar hotéis",
                      text: "O evento não possui mais hotéis",
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
            data: {id:id, selecionadas:selecionadas, acao: 'atribuirHoteis', tipo:1}, 
            url: 'functions/reservas.php',
            success: function(resposta){
              
              if(resposta == ''){
                swal({
                                   title: "Relacionar hotéis",
                                  text: "Hotéis não relacionados ao evento erro: "+resposta,
                                  imageUrl: "img/falha-envio.png",
                      imageSize: "120x120"
                                      },function(){ 
                                 location.reload();
                            });
                        }else{
                            swal({
                  title: "Relacionar hotéis",
                  text: "Hotéis relacionados com sucesso!",
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
		
		function alterarPDF(){
			var pdf = $('#pdfEvento').val();
			var id = $('#idEventoPDF').val();
			$.ajax({

                url: 'functions/reservas.php',
                type: 'POST',
                data: {id:id,pdf:pdf,acao:'alterarPDF'},
                type: 'POST',
                success: function(resposta){
                    if(resposta == 1){
                        swal({
                              title: "PDF de Evento",
                              text: "Documento alterado com sucesso",
                              imageUrl: "img/config-menu.png",
                              imageSize: "120x120"
                                  },function(){ 
                             location.reload();
                         });
                      }else{
                        swal({
                               title: "PDF de Evento",
                              text: "Documento não alterado, erro: "+resposta,
                              imageUrl: "img/falha-envio.png",
                              imageSize: "120x120"
                                  },function(){ 
                             location.reload();
                         });
                      }
                }

            });

		}


        function escolherPDF(){
 
                
                var acao = 'PDF';

                var arquivo = $("#uploadBtnPDF")[0].files[0];


                var form_data = new FormData();

                form_data.append('arquivo', arquivo);
                form_data.append('acao', acao);

                swal({
                          title: "Por favor, aguarde!",
                          text: "Estamos gravando o PDF.",
                          imageUrl: 'img/solicitacao.png',
                          imageSize: '120x120',
                          showConfirmButton: false

                      });
                $.ajax({

                    url: 'functions/reservas.php',
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'POST',
                    success: function(resposta){
                      swal.close();
                      console.log(resposta);
                        $('#pdfEvento').prop("value", resposta);
                    }

                });
        }




		function excluirEvento(id){

        swal({
            title: "Exclusão de Evento",
            text: "Deseja realmente deletar o Evento?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, deletar",
            cancelButtonText: "Não, cancelar",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                var acao = 'ExcluirEvento';
       
                        $.ajax({
                          type: "POST",
                          data: {id:id, acao:acao},
                          url: 'functions/reservas.php',
                          success: function(resposta){
                              if(resposta == 1){
                                swal({
                                      title: "Exclusão de evento",
                                      text: "O evento foi deletado",
                                      imageUrl: "img/config-menu.png"
                                          },function(){ 
                                     location.reload();
                                 });
                              }else{
                                swal({
                                      title: "Exclusão de evento",
                                      text: "O evento não foi deletado, erro: "+resposta,
                                      imageUrl: "img/falha-envio.png"
                                          },function(){ 
                                     location.reload();
                                 });
                              }
                                  
                              }
                          });
            }else{
                swal("Comando cancelado", "O evento não será deletado!", "error");
            }
        });
    }

		function exibicaoEvento(id, status){
          $.ajax({
              type: 'POST',
              data: {id:id, status:status, acao: 'statusEvento'}, 
              url: 'functions/reservas.php',
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
                          text: "Status de exibição não alterado, erro: "+resposta,
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

      function destaqueEvento(id, status, param){

      	  if(param == 1){
      	  	var texto = 'está em destaque';
      	  }else{
      	  	var texto = 'não está mais em destaque';
      	  }
          $.ajax({
              type: 'POST',
              data: {id:id, status:status, acao: 'statusDestaque'}, 
              url: 'functions/reservas.php',
              success: function(resposta){
                  if(resposta == 1){
                      swal({
                          title: "Alteração de destaque",
                          text: "Este evento agora "+texto,
                          imageUrl: 'img/bonecoFeliz.png',
                          imageSize: '120x120'
                      },function(){ 
                         window.location.reload();
                     });
                  }else{
                      swal({
                          title: "Ops... Algo deu errado.",
                          text: "Status de destaque não alterado, erro: "+resposta,
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



		function exibicaoPDF(id, pdf){

			$('#idEventoPDF').prop("value", id);

			$('#pdfEvento').prop("value", pdf);

			$('#pdf').modal('show');
		}



		$(document).ready(function(){
			$('.eventos').DataTable({
				pageLength: 5,
				responsive: true,
				dom: '<"html5buttons"B>Bfrtip',
				buttons: [

				],
				"oLanguage": {
					"sSearch": "Pesquisar: "
				}

			});


		});





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

         function cadastrarEvento(){
            //Dados evento 
            var fotoevento = $('#imagemdb').val();
            var termo = $('#termo').val();
            var local = $('#local').val();
            var inicio = $('#inicio').val();
            var termino = $('#termino').val();
            var nome = $('#nomeevento').val();
            var site = $('#site').val();
            //Dados endereco
            var endereco = $('#endereco').val();
            var numero = $('#numero').val();
            var cidade = $('#cidade').val();
            var uf = $('#uf').val();
            var complemento = $('#complemento').val();
            var fulladdress = endereco+', '+cidade+', '+uf;
            var status = "";
            var info = $('#infoevento').summernote('code');
            var caracteres1 = $("#infoevento").text();
				    var caracteres = caracteres1.length;

            if(site == ''){
                site = ' ';
            }else if(termo == ''){
                termo = ' ';
            }


            if($('#status').is(':checked')){
              status = 1;
            }else{
              status = 0;
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
            }else if(caracteres.length > 500){
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
                            data: {termo:termo,info:info, site:site, status:status, fotoevento:fotoevento, local:local, inicio:inicio, 
                              termino:termino, endereco:endereco, numero:numero, nome:nome, cidade:cidade, uf:uf, complemento:complemento, latitude:latitude, longitude:longitude, acao: 'InserirEvento'}, 
                            url: 'functions/reservas.php',
                            success: function(resposta){
                                if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "O evento foi cadastrado com sucesso",
                                        imageUrl: 'img/bonecoFeliz.png',
                                        imageSize: '120x120'
                                    },function(){ 
                                       window.location.href = 'eventos.php';
                                   });
                                }else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Evento não cadastrado, erro: "+resposta,
                                        imageUrl: 'img/falha-envio.png',
                                        timer: 1500,
                                        imageSize: '120x120'
                                    });
                                    return false;
                                }

                            }
                        });

                    }
                });
            }
        }


        


        function editarEvento(idEvento){
            //Dados evento 
            var fotoevento = $('#imagemdb').val();
            var local = $('#local').val();
            var inicio = $('#inicio').val();
            var termino = $('#termino').val();
            var nome = $('#nomeevento').val();
            var site = $('#site').val();
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
            }else if(info == ''){
                swal({
                  title: 'Campo inválido',
                  text: 'Anúncio evento',
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
                            data: {idEvento:idEvento,info:info, site:site, status:status, fotoevento:fotoevento, local:local, inicio:inicio, 
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



        



    