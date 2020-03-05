$(document).ready(function() {

            $('.footable').footable();

            $('#date_added').datepicker({
                todayBtn: "linked",
                keyboardNavigation: true,
                forceParse: true,
                calendarWeeks: true,
                autoclose: true
            });

            $('#date_modified').datepicker({
                todayBtn: "linked",
                keyboardNavigation: true,
                forceParse: true,
                calendarWeeks: true,
                autoclose: true
            });

        });


        function escolherPlano(tipo){
            var Plano = tipo;


            if(Plano == 2){
                v1 = '0';
                v2 = '0';
                v3 = '0';
                v4 = '0';
                v5 = '10000';
                v6 = '22';
                v7 = '500';
                v8 = '50';
                v9 = '5';
                valor = 89;
                NomePlano = 'Nivel I';
            }else if(Plano == 3){
                v1 = '0';
                v2 = '0';
                v3 = '0';
                v4 = '0';
                v5 = '10000';
                v6 = '60';
                v7 = '1000';
                v8 = '50';
                v9 = '10';
                valor = 178;
                NomePlano = 'Nivel II';
            }else if(Plano == 4){
                v1 = '100';
                v2 = '0';
                v3 = '0';
                v4 = '130';
                v5 = '10000';
                v6 = '60';
                v7 = '5000';
                v8 = '130';
                v9 = '20';
                valor = 378;
                NomePlano = 'Nivel III';
            }

            

            swal({
              title: "Atualização de Plano",
              text: "Plano "+NomePlano+" escolhido!",
              imageUrl: "img/precos.png",
              imageSize: "120x120",
              showCancelButton: true,
              confirmButtonColor: "#1DC9A6",
              cancelButtonText: "Alterar Plano",
              confirmButtonText: "Confirmar",
              closeOnConfirm: false,
              closeOnCancel: true
            },
            function(isConfirm){
              if (isConfirm){
                $('.1').prop("value", v1);
                $('.2').prop("value", v2);
                $('.3').prop("value", v3);
                $('.4').prop("value", v4);
                $('.5').prop("value", v5);
                $('.6').prop("value", v6);
                $('.7').prop("value", v7);
                $('.8').prop("value", v8);
                $('.9').prop("value", v9);
                $('.11').prop("value", 0);
                $('.total').prop("value", valor);
                $('.plano').prop("value", NomePlano);
                
                alterarPlano(2);

              }else{
                
              }
            });

        }

        function incluirCreditosPlano(){
            if($('.total').val() == '0,00' || $('.total').val() == ' 0,00'){
                swal({
                  title: 'Ops...',
                  text: 'Você esqueceu de selecionar a quantidade de créditos desejada',
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
                swal({
                    html: true,
                    title: "Inclusão de créditos (Plano)",
                    text: "<div class='row' style='padding: 2px; margin-bottom: 10px; font-size: 17px;'>Deseja incluir essa quantidadede créditos em seu plano?</div><div class='row' style='font-size: 17px;padding: 2px;'>Caso tenha dúvidas <a onclick='duvidaAquisicao(1)' style='font-size: 18px; font-weight: 600'>Clique aqui</a></div>",
                    imageUrl: "img/financeiro.png",
                    imageSize: "120x120",
                    showCancelButton: true,
                    confirmButtonColor: "#1ab394",
                    confirmButtonText: "Confirmar",
                    cancelButtonText: "",
                    closeOnConfirm: false,
                    closeOnCancel: false, 
                    showLoaderOnConfirm: true
                }, function (isConfirm){
                    if (isConfirm) {
                        var d1 = $('.1').val();
                        var d2 = $('.2').val();
                        var d3 = $('.3').val();
                        var d4 = $('.4').val();
                        var d5 = $('.5').val();
                        var d6 = $('.6').val();
                        var d7 = $('.7').val();
                        var d8 = $('.8').val();
                        var d9 = $('.9').val();
                        var d10 = $('.11').val();
                        var total = parseFloat($('.total').val());

                        $.ajax({
                            type: 'POST',
                            data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                            url: 'functions/boletoSimples/incluirValorPlano(API).php',
                            success: function(resposta){

                                if(resposta == 1){
                                    swal({
                                        title: "Aquisição realizada",
                                        text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                        imageUrl: "img/precos.png",
                                        imageSize: "120x120"
                                        },function(){
                                            
                                            
                                    });
                                }else if(resposta == 2){
                                    $.ajax({
                                        type: 'POST',
                                        data: {total:total},
                                        url: 'functions/boletoSimples/cadastrarCliente(API).php',
                                        success: function(resposta){
                                            var tamanho = resposta.length;
                                            if(tamanho == 8 || tamanho == 10){
                                                $.ajax({
                                                    type: 'POST',
                                                    data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                                                    url: 'functions/incluirCreditosPlanoNovo.php',
                                                    success: function(resposta){

                                                        if(resposta == 1){
                                                            swal({
                                                                title: "Aquisição realizada",
                                                                text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                                                imageUrl: "img/precos.png",
                                                                imageSize: "120x120"
                                                                },function(){
                                                                    window.location.reaload();
                                                                    
                                                            });
                                                        }else if(resposta == 2){
                                                            $.ajax({
                                                                type: 'POST',
                                                                data: {total:total},
                                                                url: 'functions/boletoSimples/incluirValorPlano(API).php',
                                                                success: function(resposta){
                                                                    if(resposta == 1){
                                                                        
                                                                    }else{
                                                                        swal({
                                                                        title: "Aquisição não realizada",
                                                                        text: "Error: "+resposta+ "Por favor, tente novamente",
                                                                        imageUrl: "img/falha-envio.png",
                                                                        imageSize: "120x120"
                                                                        },function(){
                                                                            
                                                                           return false; 
                                                                            
                                                                        });
                                                                    }
                                                                }
                                                            });
                                                        }else if(resposta == 5){
                                                             setTimeout(function(){
                                                    
                                                               $.ajax({
                                                                type: 'POST',
                                                                data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                                                                url: 'functions/boletoSimples/incluirValorPlano(API).php',
                                                                success: function(resposta){
                                                                    if(resposta == 1){
                                                                        swal({
                                                                            title: "Aquisição realizada",
                                                                            text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                                                            imageUrl: "img/precos.png",
                                                                            imageSize: "120x120"
                                                                            },function(){
                                                                                window.location.reload();
                                                                                
                                                                        });
                                                                    }else if(resposta == 2){
                                                                        alert('criar assinatura');
                                                                    }else{
                                                                        swal({
                                                                        title: "Aquisição não realizada",
                                                                        text: "Error: "+resposta+ "Por favor, tente novamente",
                                                                        imageUrl: "img/falha-envio.png",
                                                                        imageSize: "120x120"
                                                                        },function(){
                                                                            
                                                                           return false; 
                                                                            
                                                                        });
                                                                    }
                                                                   
                                                                }
                                                            });
                                                           },15000);
                                                            
                                                        }else{
                                                            swal({
                                                            title: "Aquisição não realizada",
                                                            text: "Error: "+resposta+ "Por favor, tente novamente",
                                                            imageUrl: "img/falha-envio.png",
                                                            imageSize: "120x120"
                                                            },function(){
                                                                
                                                               return false; 
                                                                
                                                            });
                                                        }
                                                       
                                                    }
                                                });
                                            }else{
                                                swal({
                                                title: "Aquisição não realizada",
                                                text: "Error: "+resposta+ "Por favor, tente novamente",
                                                imageUrl: "img/falha-envio.png",
                                                imageSize: "120x120"
                                                },function(){
                                                    
                                                   return false; 
                                                    
                                                });
                                            }
                                        }
                                    });
                                }else if(resposta == 5){
                                     setTimeout(function(){
                            
                                       $.ajax({
                            type: 'POST',
                            data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                            url: 'functions/boletoSimples/incluirValorPlano(API).php',
                            success: function(resposta){

                                if(resposta == 1){
                                    swal({
                                        title: "Aquisição realizada",
                                        text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                        imageUrl: "img/precos.png",
                                        imageSize: "120x120"
                                        },function(){
                                            
                                            
                                    });
                                }else if(resposta == 2){
                                    $.ajax({
                                        type: 'POST',
                                        data: {total:total},
                                        url: 'functions/boletoSimples/cadastrarCliente(API).php',
                                        success: function(resposta){
                                            var tamanho = resposta.length;
                                            if(tamanho == 8 || tamanho == 10){
                                                $.ajax({
                                                    type: 'POST',
                                                    data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                                                    url: 'functions/incluirCreditosPlanoNovo.php',
                                                    success: function(resposta){

                                                        if(resposta == 1){
                                                            swal({
                                                                title: "Aquisição realizada",
                                                                text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                                                imageUrl: "img/precos.png",
                                                                imageSize: "120x120"
                                                                },function(){
                                                                    window.location.reaload();
                                                                    
                                                            });
                                                        }else if(resposta == 2){
                                                            $.ajax({
                                                                type: 'POST',
                                                                data: {total:total},
                                                                url: 'functions/boletoSimples/incluirValorPlano(API).php',
                                                                success: function(resposta){
                                                                    if(resposta == 1){
                                                                        
                                                                    }else{
                                                                        swal({
                                                                        title: "Aquisição não realizada",
                                                                        text: "Error: "+resposta+ "Por favor, tente novamente",
                                                                        imageUrl: "img/falha-envio.png",
                                                                        imageSize: "120x120"
                                                                        },function(){
                                                                            
                                                                           return false; 
                                                                            
                                                                        });
                                                                    }
                                                                }
                                                            });
                                                        }else if(resposta == 5){
                                                             setTimeout(function(){
                                                    
                                                               $.ajax({
                                                                type: 'POST',
                                                                data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                                                                url: 'functions/boletoSimples/incluirValorPlano(API).php',
                                                                success: function(resposta){
                                                                    if(resposta == 1){
                                                                        swal({
                                                                            title: "Aquisição realizada",
                                                                            text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                                                            imageUrl: "img/precos.png",
                                                                            imageSize: "120x120"
                                                                            },function(){
                                                                                window.location.reload();
                                                                                
                                                                        });
                                                                    }else if(resposta == 2){
                                                                        alert('criar assinatura');
                                                                    }else{
                                                                        swal({
                                                                        title: "Aquisição não realizada",
                                                                        text: "Error: "+resposta+ "Por favor, tente novamente",
                                                                        imageUrl: "img/falha-envio.png",
                                                                        imageSize: "120x120"
                                                                        },function(){
                                                                            
                                                                           return false; 
                                                                            
                                                                        });
                                                                    }
                                                                   
                                                                }
                                                            });
                                                           },15000);
                                                            
                                                        }else{
                                                            swal({
                                                            title: "Aquisição não realizada",
                                                            text: "Error: "+resposta+ "Por favor, tente novamente",
                                                            imageUrl: "img/falha-envio.png",
                                                            imageSize: "120x120"
                                                            },function(){
                                                                
                                                               return false; 
                                                                
                                                            });
                                                        }
                                                       
                                                    }
                                                });
                                            }else{
                                                swal({
                                                title: "Aquisição não realizada",
                                                text: "Error: "+resposta+ "Por favor, tente novamente",
                                                imageUrl: "img/falha-envio.png",
                                                imageSize: "120x120"
                                                },function(){
                                                    
                                                   return false; 
                                                    
                                                });
                                            }
                                        }
                                    });
                                }else if(resposta == 5){
                                     setTimeout(function(){
                            
                                       $.ajax({
                                        type: 'POST',
                                        data: {d1:d1,d2:d2,d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,total:total},
                                        url: 'functions/boletoSimples/incluirValorPlano(API).php',
                                        success: function(resposta){
                                            if(resposta == 1){
                                                swal({
                                                    title: "Aquisição realizada",
                                                    text: "Os créditos foram inclusos em seu plano, e já estão disponíveis",
                                                    imageUrl: "img/precos.png",
                                                    imageSize: "120x120"
                                                    },function(){
                                                        window.location.reload();
                                                        
                                                });
                                            }else{
                                                swal({
                                                title: "Aquisição não realizada",
                                                text: "Error: "+resposta+ "Por favor, tente novamente",
                                                imageUrl: "img/falha-envio.png",
                                                imageSize: "120x120"
                                                },function(){
                                                    
                                                   return false; 
                                                    
                                                });
                                            }
                                           
                                        }
                                    });
                                   },15000);
                                    
                                }else{
                                    swal({
                                    title: "Aquisição não realizada",
                                    text: "Error: "+resposta+ "Por favor, tente novamente",
                                    imageUrl: "img/falha-envio.png",
                                    imageSize: "120x120"
                                    },function(){
                                        
                                       return false; 
                                        
                                    });
                                }
                               
                            }
                        });
                                   },15000);
                                    
                                }else{
                                    swal({
                                    title: "Aquisição não realizada",
                                    text: "Error: "+resposta+ "Por favor, tente novamente",
                                    imageUrl: "img/falha-envio.png",
                                    imageSize: "120x120"
                                    },function(){
                                        
                                       return false; 
                                        
                                    });
                                }
                               
                            }
                        });

                       /*swal({
                          title: 'Ops...',
                          text: 'Este módulo ainda está sendo desenvolvido',
                          imageUrl: "img/config-menu.png",
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
                        return false;*/
                    }else{
                        swal("Comando cancelado", "Você voltará a sua área de compra", "error");
                    }
                });
            }
        }


        function incluirCreditosAdicionais(){

            if($('.total').val() == '0,00' || $('.total').val() == ' 0,00'){
                swal({
                  title: 'Ops...',
                  text: 'Você esqueceu de selecionar a quantidade de créditos desejada',
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

                  swal({
                      html: true,
                      title: 'Créditos adicionais',
                      text: "<div class='row' style='padding: 2px; margin-bottom: 10px; font-size: 17px;'>Para prosseguir clique em confirmar</div><div class='row' style='font-size: 17px;padding: 2px;'>Caso tenha dúvidas <a onclick='duvidaAquisicao(2)' style='font-size: 18px; font-weight: 600'>Clique aqui</a></div>",
                      imageUrl: "img/financeiro.png",
                      imageSize: "120x120",
                      showCancelButton: true,
                      closeOnConfirm: false,
                      confirmButtonColor: '#ffffff',
                      cancelButtonColor: '#1ab394',
                      confirmButtonText: 'Cancelar',
                      cancelButtonText: 'Confirmar'
                    }, function (isConfirm){
                    if (isConfirm){
                        swal("Comando cancelado", "Você voltará a sua área de compra", "error");
                    }else{
                        $("form[name='cart']").submit();
                    }
                });  
            }
            
        }


        function duvidaAquisicao(tipo){
            if(tipo == 1){
                swal({
                    html:true,
                    title: "Dúvida",
                    text: "<h4 align='justify' style='font-weight: 100; margin: 20px; font-size: 20px;'>      Ao incluir créditos adicionais a seu plano, a liberação é imediata, você passará a receber mensalmente a quantidade de créditos anterior + a quantidade que você incluir em seu plano.<br/><br/>     O valor total dos créditos adicionais será somado a sua mensalidade, que passará a ter um novo valor cobrado mensalmente.</h4>",
                    imageUrl: "img/bonecomsg15.png",
                    imageSize: "120x120"
                },function(){ 
                   return false;
               });
            }else if(tipo == 2){
                swal({
                    html:true,
                    title: "Dúvida",
                    text: "<h4 align='justify' style='font-weight: 100; margin: 20px; font-size: 20px;'>Ao adquirir créditos adicionais é necessário o pagamento imediato para a liberação, assim que o pagamento é identificado, os créditos ficarão dispostos para <strong>consumo</strong> até a sua data de vencimento.</h4>",
                    imageUrl: "img/bonecomsg15.png",
                    imageSize: "120x120"
                },function(){ 
                   return false;
               });

            }
        }


        //direta para esquerda
        String.prototype.right = function(){
            return this.substr(this.length-(arguments[0]==undefined?1:parseInt(arguments[0])),this.length);
        }

        //esquerda para direita
        String.prototype.left = function(){
            return this.substr(0,arguments[0]==undefined?1:parseInt(arguments[0]));
        }



        function alterarPlano(tipo){

         if(tipo == 1){

            var Valor = $('.perstotal').val();

            var Faturas = $('.persfat').val();
            var Boleto = $('.pers2via').val();
            var Relatorio = $('.persvendas').val();
            var Pesquisa = $('.perspesqs').val();
            var Marketing = $('.persmkt').val();
            var Postagem = $('.persptred').val();
            var Site = $('.site').val();
            var Roteiros = $('.persrt').val();
            var Galeria = $('.persgl').val();
            var Luademel = $('.persldm').val();

            //#1 Envio Faturas
            //#2 2 via boleto
            //#3 Relatorio de vendas
            //#4 Pesquisa satisfação
            //#5 Email Marketing
            //#6 Postagem Redes
            //#7 Acesso Site
            //#8 Roteiros
            //#9 Galeria
            //#10 Lua de mel
            //#11 Valor

            if(Valor == '0,00'){
                swal({
                  title: 'Ops...',
                  text: 'É necessário escolher ao menos alguma quantidade de créditos',
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
                swal({
                    html: true,
                    title: "Personalização de Plano",
                    text: "<div class='row' style='padding: 2px; margin-bottom: 10px; font-size: 17px;'>Deseja alterar seu plano?</div><div class='row' style='font-size: 17px;padding: 2px;'>Caso tenha dúvidas <a onclick='questionPP()' style='font-size: 18px; font-weight: 600'>Clique aqui</a></div>",
                    imageUrl: "img/boneco_lapis.png",
                    imageSize: "120x120",
                    showCancelButton: true,
                    confirmButtonColor: "#1ab394",
                    confirmButtonText: "Confirmar",
                    cancelButtonText: "",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm){
                    if (isConfirm){
                        $.ajax({
                            url: "functions/boletoSimples/editarAssinatura(API).php",
                            type: "POST",
                            data:{Valor:Valor},
                            success: function(resposta){
                                var retorno = resposta.split('@@');
                                var Nome = retorno[1];
                                var res = retorno[0];
                                if(res == 1){
                                    
                                    $.ajax({
                                        url: "functions/personalizarPlano.php",
                                        type: "POST",
                                        data: {Faturas:Faturas, Boleto:Boleto, Relatorio:Relatorio, Pesquisa:Pesquisa, Marketing:Marketing, Postagem:Postagem, Site:Site,
                                        Roteiros:Roteiros, Galeria:Galeria, Luademel:Luademel, Valor:Valor, Nome:Nome},
                                        success: function(resposta){
                                            if(resposta == 1){
                                                swal({
                                                title: "Ótimo trabalho!",
                                                text: "Plano alterado com sucesso",
                                                imageUrl: "img/config-menu.png",
                                                imageSize: "120x120"
                                                },function(){
                                                    
                                                    window.location.reload();
                                                    
                                                });
                                            }else{
                                               swal({
                                                  title: 'Error...',
                                                  text: ''+resposta,
                                                  imageUrl: "img/falha-envio.png",
                                                  imageSize: "120x120"
                                                });
                                            }
                                        }
                                    });
                                }else{
                                    swal({
                                    title: 'Error...',
                                    text: ''+resposta,
                                    imageUrl: "img/falha-envio.png",
                                    imageSize: "120x120"
                                    });
                                }
                            }
                        });
                    }else{
                        swal("Comando cancelado", "Você voltará a sua área de personalização", "error");
                    }
                });

            }    
        }else if(tipo == 2){
            var Valor = $('.total').val();

            var Faturas = $('.1').val();
            var Boleto = $('.2').val();
            var Relatorio = $('.3').val();
            var Pesquisa = $('.4').val();
            var Marketing = $('.5').val();
            var Postagem = $('.6').val();
            var Site = $('.7').val();
            var Roteiros = $('.8').val();
            var Galeria = $('.9').val();
            var Luademel = 0;


            swal({
                    html: true,
                    title: "Alteração de Plano",
                    text: "<div class='row' style='padding: 2px; margin-bottom: 10px; font-size: 17px;'>Deseja alterar seu plano?</div><div class='row' style='font-size: 17px;padding: 2px;'>Caso tenha dúvidas <a onclick='altPP()' style='font-size: 18px; font-weight: 600'>Clique aqui</a></div>",
                    imageUrl: "img/boneco_lapis.png",
                    imageSize: "120x120",
                    showCancelButton: true,
                    confirmButtonColor: "#1ab394",
                    confirmButtonText: "Confirmar",
                    cancelButtonText: "",
                    closeOnConfirm: false,
                    closeOnCancel: false,
                }, function (isConfirm){
                    if (isConfirm){
                        $.ajax({
                            url: "functions/boletoSimples/editarAssinatura(API).php",
                            type: "POST",
                            data:{Valor:Valor},
                            success: function(resposta){
                                var retorno = resposta.split('@@');
                                var Nome = 'Plano '+$('.plano').val();
                                var res = retorno[0];
                                if(res == 1){
                                    
                                    $.ajax({
                                        url: "functions/personalizarPlano.php",
                                        type: "POST",
                                        data: {Faturas:Faturas, Boleto:Boleto, Relatorio:Relatorio, Pesquisa:Pesquisa, Marketing:Marketing, Postagem:Postagem, Site:Site,
                                        Roteiros:Roteiros, Galeria:Galeria, Luademel:Luademel, Valor:Valor, Nome:Nome},
                                        success: function(resposta){
                                            if(resposta == 1){
                                                swal({
                                                title: "Ótimo trabalho!",
                                                text: "Plano alterado com sucesso",
                                                imageUrl: "img/config-menu.png",
                                                imageSize: "120x120"
                                                },function(){
                                                    
                                                    window.location.reload();
                                                    
                                                });
                                            }else{
                                               swal({
                                                  title: 'Error...',
                                                  text: ''+resposta,
                                                  imageUrl: "img/falha-envio.png",
                                                  imageSize: "120x120"
                                                });
                                            }
                                        }
                                    });
                                }else{
                                    swal({
                                    title: 'Error...',
                                    text: ''+resposta,
                                    imageUrl: "img/falha-envio.png",
                                    imageSize: "120x120"
                                    });
                                }
                            }
                        });
                    }else{
                        swal("Comando cancelado", "Você voltará a sua área de compra", "error");
                    }
                });

                 
        }
    }