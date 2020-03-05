
    function mostrarFornecedores(id_subcat){
        
    }

    
      function mostrarConfig(id){
            $('#f'+id).hide();
            $('#d'+id).hide();
            $('#c'+id).slideDown();
            $('#'+id).slideDown();

        }

        function ocultarConfig(id){
            $('#f'+id).slideDown();
            $('#c'+id).hide();
            $('#'+id).hide();

        }


        function gravarToken(id){

            var token = $('#tk'+id).val();
            var operadora = $('#op'+id).val();

            var acao = 'verificarToken';

            $.ajax({
            url: "functions/fornecedores.php",
            type: "POST",
            data:{operadora: operadora, acao: acao},  
              success: function(resposta){
                  if(resposta == 1){
                    swal({
                      title: "Você já estava conectado",
                      text: "Deseja alterar seus dados de conexão?",
                      type: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#DD6B55",
                      confirmButtonText: "Confirmar",
                      closeOnConfirm: false
                    },
                    function(){
                      var acao = 'alterarFornecedor';
                      $.ajax({
                      url: "functions/fornecedores.php",
                      type: "POST",
                      data:{token: token, operadora: operadora, acao: acao},  
                        success: function(resposta) {

                            swal({
                              title: "Ótimo Trabalho!",
                              text: "Token alterado com sucesso!",
                              imageUrl: "img/config-menu.png"
                              },function(){ 
                                $('#c'+id).hide();
                                $('#f'+id).show();
                                $('#'+id).hide();
                                $('#d'+id).slideDown();
                                window.location.reload();
                                
                              }
                            );

                        }
                      });
                    });

                  }else if(resposta == 2){
                    var acao = 'cadastrarFornecedor';
                      $.ajax({
                      url: "functions/fornecedores.php",
                      type: "POST",
                      data:{token: token, operadora: operadora, acao: acao},  
                        success: function(resposta) {

                            swal({
                              title: "Ótimo Trabalho!",
                              text: "Token gravado com sucesso!",
                              imageUrl: "img/config-menu.png"
                              },function(){ 
                                $('#c'+id).hide();
                                $('#f'+id).show();
                                $('#'+id).hide();
                                $('#d'+id).slideDown();
                                window.location.reload();
                                
                              }
                            );

                        }
                      });
                  }
                  

              }
            });

            
            

        }

        function desconectarFornecedor(id){
          swal({
            title: "Você tem certeza?",
            text: "Você não poderá desfazer essa ação!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, desconectar.",
            cancelButtonText: "Não, cancelar!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'DesconectarFornecedor';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/fornecedores.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Trabalho realizado.",
                            text: "O fornecedor foi desconectado.",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível desconectar o fornecedor.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
         
                }
         
            });
        }else {
                           swal("Cancelado", "O fornecedor não será desconectado.", "error");
                        }
    });
        }





    function CadastrarPersonalizacao(){
      var corPadrao = $("#corPadrao").val();
      var corRedes = $("#corRedes").val();
      var corFontes = $("#corFontes").val();
      var acao = "CadastrarPersonalizacao";
      var imagem = 0;

    if($('#imagem').is(":checked")){
        imagem = 1;
    }

        $.ajax({
          url: "functions/fornecedores.php",
          type: "POST",
          data:{corPadrao: corPadrao, corRedes: corRedes, corFontes: corFontes,imagem: imagem, acao: acao},  
            success: function(resposta) {

                bootbox.dialog({
                    message: "Personalização cadastrada com sucesso!",
                    title: "Cadastro de Personalização",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.reload();
                                }
                            }
                    }
                });

            }
          });
}

function CadastrarConfiguracao(){
                var url = $('#url').val();
                var site = $('#site').val();

                /* CHECHBOX */
                var logotipo = 0;
                var telefone = 0;
                var redes = 0;
                var endereco = 0;

                if($('#logotipo').is(":checked")){
                    logotipo = 1;
                }
                if($('#telefone').is(":checked")){
                    telefone = 1;
                }
                if($('#redes').is(":checked")){
                    redes = 1;
                }
                if($('#endereco').is(":checked")){
                    endereco = 1;
                }
                /************/

                var acao = 'CadastrarConfiguracao';

                $.ajax({
                    type: "POST",
                    url: 'functions/fornecedores.php',
                    data: {url: url, site: site, logotipo: logotipo, telefone: telefone, redes: redes, endereco: endereco, acao: acao},
                    success: function(resposta){
                        if(resposta == 1){
                            bootbox.alert('Alterações realizadas com sucesso!');
                        }else{
                            bootbox.alert('Não foi possível atualizar, tente novamente.');
                        }
                    }
                });
            }

function CadastrarExibicao(){
      /* CHECHBOX */
      var agaxtur = 0;
      var costa = 0;
      var decolar = 0;
      var litoral = 0;
      var maktour = 0;
      var norw = 0;
      var newAge = 0;
      var princess = 0;
      var pullmantur = 0;
      var queens = 0;
      var rca = 0;
      var royal = 0;
      var shultz = 0;
      var trade = 0;
      var visual = 0;

      if($('#agaxtur').is(":checked")){
          agaxtur = 1;
      }
      if($('#costa').is(":checked")){
          costa = 1;
      }
      if($('#decolar').is(":checked")){
          decolar = 1;
      }
      if($('#litoral').is(":checked")){
          litoral = 1;
      }
      if($('#maktour').is(":checked")){
          maktour = 1;
      }
      if($('#norw').is(":checked")){
          norw = 1;
      }
      if($('#newAge').is(":checked")){
          newAge = 1;
      }
      if($('#princess').is(":checked")){
          princess = 1;
      }
      if($('#pullmantur').is(":checked")){
          pullmantur = 1;
      }
      if($('#queens').is(":checked")){
          queens = 1;
      }
      if($('#rca').is(":checked")){
          rca = 1;
      }
      if($('#royal').is(":checked")){
          royal = 1;
      }
      if($('#shultz').is(":checked")){
          shultz = 1;
      }
      if($('#trade').is(":checked")){
          trade = 1;
      }
      if($('#visual').is(":checked")){
          visual = 1;
      }
      /************/

      var acao = 'CadastrarExibicao';

      $.ajax({
          type: "POST",
          url: 'functions/fornecedores.php',
          data: {agaxtur: agaxtur, costa: costa, decolar: decolar, litoral: litoral, maktour: maktour, norw: norw, newAge: newAge, princess: princess, pullmantur: pullmantur, queens: queens, rca: rca, royal:royal, shultz: shultz, trade:trade, visual:visual, acao: acao},
          success: function(resposta){
              if(resposta == 1){
                  swal({
                    title: "Ótimo Trabalho!",
                    text: "Exibições alteradas com sucesso!",
                    imageUrl: "img/config-menu.png"
                    },function(){ 
                     location.reload();
                    }
                  );
              }else{
                  swal({
                    title: "Oh não!",
                    text: "Não foi possível alterar as exibições.",
                    imageUrl: "img/falha-envio.png"
                    },function(){ 
                     location.reload();
                    }
                  );
              }
          }
      });
  }



function EditarLink(id){
    var idLink = $("#idLink").val();
    var token = $("#token").val();
    var acao = "EditarLink";
        $.ajax({
          url: "functions/fornecedores.php",
          type: "POST",
          data:{id: id, idLink: idLink, token: token, acao: acao},  
            success: function(resposta) {

                bootbox.dialog({
                    message: "Link alterado com sucesso!",
                    title: "Alteração do Link",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.href = 'cms-links.php';
                                }
                            }
                    }
                });

            }
          });

}

function ExcluirLink(id){

     swal({
        title: "Você tem certeza?",
        text: "Após confirmar, seu link cadastro será excluído.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Confirmar",
        closeOnConfirm: false
      },
      function(){
        var acao = 'ExcluirLink';
 
                    $.ajax({
                 
                        type: "POST",
                        data: {id:id, acao:acao},
                        url: 'functions/fornecedores.php',
                        success: function(resposta){
                 
                            if(resposta == 1){
                 
                                $('.btn-salvar').prop('disabled',false);

                                swal({
                                  title: "Deletado",
                                  text: "Seu link foi deletado com sucesso!",
                                  imageUrl: "img/config-menu.png"
                                  },function(){ 
                                   location.reload();
                                  }
                                );
                 
                                
                 
                            }else{
                 
                               
                                $('.btn-salvar').prop('disabled',false);

                                swal({
                                  title: "Falha ao deletar",
                                  text: "Por favor, tente novamente.",
                                  imageUrl: "img/falha-envio.png"
                                  },function(){ 
                                   location.reload();
                                  }
                                );
                 
                            }
                 
                        }
                 
                    });
        ;
      });

}

function CadastrarLink() {

            var operadora = $("#operadora").val();
            var token = $("#token").val();
            var acao = "CadastrarLink";
            var valorOperadora = $('option:selected').attr('nomeop');
            var identificador = $( "#operadora option:selected" ).text(); 
            identificador = identificador.charAt(0);

            if(operadora == 0){
                bootbox.alert("Necessário selecionar a operadora.");
            }else if(token == "" && operadora == 3){
                bootbox.alert("Necessário digitar o Token.");
            }else if(token == "" && operadora == 8){
                bootbox.alert("Necessário digitar o Token.");
            }else{

                $.ajax({
                      url: "functions/fornecedores.php",
                      type: "POST",
                      data: {operadora: operadora, token: token, identificador: identificador, valorOperadora: valorOperadora, acao: acao},
                      success: function(resposta) {

                            swal({
                                  title: "Ótimo trabalho!",
                                  text: "Link criado com sucesso!",
                                  imageUrl: "img/config-menu.png"
                                  },function(){ 
                                    window.location.href = 'cms-links.php';
                                  }
                            );

                        }
                    });

            }

        }

//PRIMARIO
function gravarLinks(){ 

    var links = "";
    
    $('input[type=checkbox]:checked').each(function () {
        links += ","+$(this).val();
    });

    $.ajax({    
        type: 'POST',
        url: "functions/fornecedores.php",
        data: {links:links, acao: 'get_token_operadora'},
        success: function(resposta){
            if(resposta == 1){
                $.ajax({    
                    type: 'POST',
                    url: "functions/fornecedores.php",
                    data: {links:links, acao: 'insert_links'},
            
                    success: function(resposta){
                            console.log(resposta);
                            swal({
                                    title: "Ótimo trabalho!",
                                    text: "Categorias de Operadoras gravadas!",                                  
                                    imageUrl: "img/config-menu.png"
                                },function(){ 
                                    location.reload();
                                }
                            );
                    }
                }); 
            }else{
                retorno = resposta.split("/");
                nomeOperadora = retorno[0];
                idOperadora = retorno[1];
                
                $('#nomeOperadora').html(nomeOperadora);
                $('#idOperadora').prop("value", idOperadora);
                $('#set_token_operadora').modal('show');
            }
        }
    }); 
    


}

//gravar token operadora
function set_token_operadora(){     
    id = $('#idOperadora').val();   
    token = $('#tokenOperadora').val();

    if(token == ''){
        swal({
            title: "Ops...",
            text: "Insira o token para prosseguir.",
            type: "info"
            },function(){ 
              return false;
            }
        );
    }else{
        $.ajax({    
            type: 'POST',
            url: "functions/fornecedores.php",
            data: {id:id, token:token, acao: 'set_token_operadora'},
    
            success: function(resposta){
                console.log(resposta);
                swal({
                    title: "Token cadastrado",
                    text: "Confirme para prosseguir",  
                    type: "success"
                    },function(){ 
                        gravarLinks();
                    }
                );
            }
        });
    }

}

function desmarcarTodos(){
    swal({
        title: "Você tem certeza?",
        text: "Todos os fornecedores escolhidos serão desmarcados",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, desmarcar",
        cancelButtonText: "Não, cancelar",
        closeOnCancel: true
    }, function (isConfirm){
        if (isConfirm){
            $('input[type=checkbox]:checked').each(function () {
                $(this).removeAttr("checked", false);
            });
        }else{     
            return false;
        }
    });
}


//INTERNO
function GravarLinks2(){ 

    var links = [];

    $( ".chk-links" ).each(function() {
        
        if($(this).is(':checked')){
            links.push($(this).val());
        }   
    });


            $.ajax({    
                    type: 'POST',
                    url: "functions/fornecedores.php",
                    data: {links:links, acao: 'GravarLinks2'},

                    success: function(resposta){
                            swal({
                                  title: "Ótimo trabalho!",
                                  text: "Categorias gerais gravadas!",
                                  imageUrl: "img/config-menu.png"
                                  },function(){ 
                                    location.reload();
                                  }
                            );
                    }
                }); 


}

// $(document).ready(function() {
//          var tipo = $("#fornecedor").val();

//        $('#tipo').attr("disabled", 'disabled');
//        $('#motor').attr("disabled", 'disabled');

//        if(tipo == 4){
//         $('#motor').removeAttr("disabled");
//        }
//     });

function permissaoSelect(){
    
    resetaCampos();
    var tipo = $("#fornecedor").val();
    
    if(tipo == 1){
        $('#tipo').val('5');
        $('#tipo').attr("disabled", 'disabled');
        $('#motor').attr("disabled", 'disabled'); 
        $("#link").addClass("mostrar-for").removeClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
    }else if(tipo == 2 || tipo == 3 || tipo == 4 || tipo == 5 || tipo == 15 || tipo == 16 || tipo == 23){
        $('#ip2').attr("disabled", 'disabled');
        $('#ip3').attr("disabled", 'disabled');
        $('#ip4').attr("disabled", 'disabled');
        $('#ip6').attr("disabled", 'disabled');
        $('#ip7').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
    }else if(tipo == 19 || tipo == 6 || tipo == 20 || tipo == 18 || tipo == 24 || tipo == 28){
        $('#ip1').attr("disabled", 'disabled');
        $('#ip3').attr("disabled", 'disabled');
        $('#ip4').attr("disabled", 'disabled');
        $('#ip6').attr("disabled", 'disabled');
        $('#ip7').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
    }else if(tipo == 7 || tipo == 8 || tipo == 9 || tipo == 21 || tipo == 25){
        $('#ip1').attr("disabled", 'disabled');
        $('#ip2').attr("disabled", 'disabled');
        $('#ip4').attr("disabled", 'disabled');
        $('#ip6').attr("disabled", 'disabled');
        $('#ip7').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL  
    }else if(tipo == 11 || tipo == 12 || tipo == 10 || tipo == 14 || tipo == 13 || tipo == 26 || tipo == 27){
        $('#ip1').attr("disabled", 'disabled');
        $('#ip2').attr("disabled", 'disabled');
        $('#ip3').attr("disabled", 'disabled');
        $('#ip6').attr("disabled", 'disabled');
        $('#ip7').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
    }else if(tipo == 29){
        $('#ip1').attr("disabled", 'disabled');
        $('#ip2').attr("disabled", 'disabled');
        $('#ip3').attr("disabled", 'disabled');
        $('#ip4').attr("disabled", 'disabled');
        $('#ip7').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
    }else if(tipo == 31){
        $('#ip1').attr("disabled", 'disabled');
        $('#ip2').attr("disabled", 'disabled');
        $('#ip3').attr("disabled", 'disabled');
        $('#ip4').attr("disabled", 'disabled');
        $('#ip7').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("mostrar-for").addClass("esconder-for"); //VOLTA P MENU GRANDE ORIGINAL
    }else if(tipo == 32){
        $('#ip1').attr("disabled", 'disabled');
        $('#ip2').attr("disabled", 'disabled');
        $('#ip3').attr("disabled", 'disabled');
        $('#ip4').attr("disabled", 'disabled');
        $('#ip6').attr("disabled", 'disabled');
        $("#formAgaxtur").removeClass("esconder-for").addClass("mostrar-for"); //VOLTA P MENU GRANDE ORIGINAL
    }

}

function resetaCampos(){

        $('#ip1').removeAttr("disabled");
        $('#ip2').removeAttr("disabled");
        $('#ip3').removeAttr("disabled");
        $('#ip4').removeAttr("disabled");
        $('#tipo').removeAttr("disabled");
        $('#motor').removeAttr("disabled");

}

function CadastrarMotorGlobal(){
  var apresentacao = $("#apresentacao").val();
    var nome = $("#nome").val();
    var imagem = $('#inputArquivoRoteiro')[0].files[0];
    var acao = 'CadastrarMotorGlobal';

    if($('#inputArquivoRoteiro').val() == '' ){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Necessário selecionar uma imagem.",
            type: "warning"
                
        });
    }else if(nome == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Nome não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(apresentacao == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Apresentação não pode ficar em branco.",
            type: "warning"
                
        });
    }else{
        var form_data = new FormData();

        form_data.append('arquivo', imagem);
        form_data.append('apresentacao', apresentacao);
        form_data.append('nome', nome);
        form_data.append('acao', acao);

        $.ajax({
            url: 'functions/fornecedores.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                                if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Self-Booking foi cadastrado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='motores.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar o self-booking.",
                        type: "warning"
                    },
function(){ 
       location.href='motores.php';
   }
                    );
                 
                            }
            }
        });
    }
}

function AlterarMotorGlobal(id){
  var apresentacao = $("#apresentacao").val();
    var nome = $("#nome").val();
    var imagemRoteiro = $('#inputArquivo').val();
    var acao = 'AlterarMotor';

    if($('#inputArquivoRoteiro').val() == '' ){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Necessário selecionar uma imagem.",
            type: "warning"
                
        });
    }else if(nome == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Nome não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(apresentacao == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Apresentação não pode ficar em branco.",
            type: "warning"
                
        });
    }else{
        var imagem = $('#inputArquivo')[0].files[0];

        var form_data = new FormData();

        form_data.append('arquivo', imagem);
        form_data.append('apresentacao', apresentacao);
        form_data.append('nome', nome);
        form_data.append('id', id);
        form_data.append('acao', acao);

        $.ajax({
            url: 'functions/fornecedores.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                                if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "O motor foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='motores.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o motor.",
                        type: "warning"
                    },
function(){ 
       location.href='motores.php';
   }
                    );
                 
                            }
            }
        });
    }
}

function CadastrarMotor(template){
  var titulo = $('#titulo').val();
  var descricao = $('#descricao').val();
  //icone do site
  var icone = $('#icone').val();

  // Se é motor, formulario, pacotes, outros
  var tipoLink = $('#tipoLink').val();

  //caso seja Agaxtur
  var nameMotor = $('#nameMotor').val();

  var destaque = 0;
  if($('#statusMotor').is(":checked")){
       var destaque = 1;
  }else{
     var destaque = 0;
  }
  if(template == 64 || template == 57){
      descricao = ' ';
  }
  var exibicao = 1;
  
  if(tipoLink == '1'){
    var linkMotor = $('#motor').val();
    var linkHttp = linkMotor.indexOf("http://");
    var linkHttps = linkMotor.indexOf("https://");
    if(linkHttp != 0 && linkHttps != 0){
      var motor = 'http://'+linkMotor;
    }else{
      var motor = linkMotor;
    }
    //qual o fornecedor do motor
    var fornecedor = $("#fornecedor").val();

    }else if(tipoLink == '2'){

      var motor = $('#pacotesOperadoras').val();
      var fornecedor = '36';

    }else if(tipoLink == '3'){

      var motor = '1';
      var fornecedor = $('#formulario').val();

    }else if(tipoLink == '4'){
      var motor = $('#motor').val();
    }
    if(nameMotor == "" && fornecedor == 32){
        bootbox.alert("Digite o name do Iframe.");
    }else if(icone == ''){
        bootbox.alert("Escolha um ícone.");
    }else if(titulo == ''){
        bootbox.alert("Digite um título.");
    }else if(descricao == ''){
      bootbox.alert("Digite uma descrição.");
    }else if(tipoLink == ''){
        bootbox.alert("Escolha um tipo de serviço.");
    }else{
    $.ajax({
        url: "functions/fornecedores.php",
        type: "POST",
        data: {acao: 'CadastrarMotor', tipo: tipoLink, fornecedor: fornecedor, motor: motor, icone: icone,titulo: titulo, descricao: descricao, nameMotor: nameMotor,destaque: destaque, exibicao: exibicao},
        success: function(resposta) {
            if(resposta == 1){                 
              swal({
                title: "Ótimo trabalho!",
                text: "O motor foi cadastrado com sucesso!",
                type: "success"
              },
              function(){ 
                location.href='motores.php';
              });
            }else if(resposta == 3){
              swal({
                title: "Ótimo trabalho!",
                text: "O motor foi alterado com sucesso!",
                type: "success"
              },
              function(){ 
                location.href='motores.php';
              });
            }else{                 
              swal({
                title: "Ops... Algo deu errado.",
                text: "Não foi possível alterar o motor.",
                type: "warning"
              },
              function(){ 
                location.href='motores.php';
              });                 
            }
          }
      });
    }
}


function EditarMotor(id, template){
  var titulo = $('#titulo').val();
  var descricao = $('#descricao').val();
  //icone do site
  var icone = $('#icone').val();

  // Se é motor, formulario, pacotes, outros
  var tipoLink = $('#tipoLink').val();

  //caso seja Agaxtur
  var nameMotor = $('#nameMotor').val();

  var destaque = 0;
  if($('#statusMotor').is(":checked")){
       var destaque = 1;
  }else{
     var destaque = 0;
  }
  if(template == 64 || template == 57){
      descricao = ' ';
  }
  var exibicao = 1;
  
  if(tipoLink == '1'){
    var linkMotor = $('#motor').val();
    var linkHttp = linkMotor.indexOf("http://");
    var linkHttps = linkMotor.indexOf("https://");
    if(linkHttp != 0 && linkHttps != 0){
      var motor = 'http://'+linkMotor;
    }else{
      var motor = linkMotor;
    }
    //qual o fornecedor do motor
    var fornecedor = $("#fornecedor").val();

    }else if(tipoLink == '2'){

      var motor = $('#pacotesOperadoras').val();
      var fornecedor = '36';

    }else if(tipoLink == '3'){

      var motor = '1';
      var fornecedor = $('#formulario').val();

    }else if(tipoLink == '4'){
      var motor = $('#motor').val();
    }
    if(nameMotor == "" && fornecedor == 32){
        bootbox.alert("Digite o name do Iframe.");
    }else if(icone == ''){
        bootbox.alert("Escolha um ícone.");
    }else if(titulo == ''){
        bootbox.alert("Digite um título.");
    }else if(descricao == ''){
          bootbox.alert("Digite uma descrição.");
    }else if(tipoLink == ''){
        bootbox.alert("Escolha um tipo de serviço.");
    }else{
    $.ajax({
        url: "functions/fornecedores.php",
        type: "POST",
        data: {acao: 'EdicaoMotor',id: id, tipo: tipoLink, fornecedor: fornecedor, motor: motor, icone: icone,titulo: titulo, descricao: descricao, nameMotor: nameMotor,destaque: destaque, exibicao: exibicao},
        success: function(resposta) {
            if(resposta == 1){                 
              swal({
                title: "Ótimo trabalho!",
                text: "O motor foi alterado com sucesso!",
                type: "success"
              },
              function(){ 
                location.href='motores.php';
              });
            }else if(resposta == 3){
              swal({
                title: "Ótimo trabalho!",
                text: "O motor foi alterado com sucesso!",
                type: "success"
              },
              function(){ 
                location.href='motores.php';
              });
            }else{                 
              swal({
                title: "Ops... Algo deu errado.",
                text: "Não foi possível alterar o motor.",
                type: "warning"
              },
              function(){ 
                location.href='motores.php';
              });                 
            }
          }
      });
    }
}

function ExclusaoImagemMotor(id){
  swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Não, cancelar.",
        cancelButtonText: "Sim, deletar logotipo!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            

            swal("Cancelado", "O logotipo não será excluído!", "error");
        }else {
               var acao = 'ExcluirImagemMotor';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/fornecedores.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Imagem Excluída!",
                            text: "O logotipo foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o logotipo.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
         
                }
         
            });             
                        }
    });
}

function alterarStatusMotor(ativo, id){
    var acao = 'alterarStatusMotor';

    $.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: '/Dashboardv2/functions/fornecedores.php',
        success: function(resposta){
            bootbox.dialog({
                message: "Status alterado com sucesso!",
                title: "Status do Motor",
                buttons: {
                    success: {
                        label: "Voltar",
                            className: "btn-success",
                            callback: function() {
                                window.location.reload();
                            }
                        }
                }
            });
    
        }
 
    });


}

function OcultarServicos(){
  var statusExibicao = 0;
  var acao = 'AlterarExibicaoServicos';

  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/fornecedores.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição dos Serviços foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição dos Serviços.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function OcultarItemServicos(tipo){
  var statusExibicao = 0;
  var acao = 'AlterarExibicaoItemServicos';

  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao,tipo:tipo, acao:acao},
        url: 'functions/fornecedores.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExibirItemServicos(tipo){
  var statusExibicao = '1';
  var acao = "AlterarExibicaoItemServicos";
  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao,tipo: tipo, acao:acao},
        url: 'functions/fornecedores.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExibirServicos(){
  var statusExibicao = '1';
  var acao = "AlterarExibicaoServicos";
  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/fornecedores.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição dos Serviços foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição dos Serviços.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function CadastrarOperadora(){
    var operadora = $("#operadora").val();
    var identificador = $("#identificador").val();
    var tipoOperadora = $("#tipoOperadora").val();
    var apresentacao = $("#apresentacao").val();
    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var imagem = $('#inputArquivoRoteiro')[0].files[0];
    var acao = 'CadastrarOperadora';

    if($('#inputArquivoRoteiro').val() == '' ){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Necessário selecionar uma imagem.",
            type: "warning"
                
        });
    }else if(operadora == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Operadora não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(identificador == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Identificador não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(tipoOperadora == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Identificador não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(apresentacao == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Apresentação não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(nome == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Nome não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(email == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo E-mail não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(telefone == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Telefone não pode ficar em branco.",
            type: "warning"
                
        });
    }else{
        var form_data = new FormData();

        form_data.append('arquivo', imagem);
        form_data.append('operadora', operadora);
        form_data.append('identificador', identificador);
        form_data.append('tipoOperadora', tipoOperadora);
        form_data.append('apresentacao', apresentacao);
        form_data.append('nome', nome);
        form_data.append('email', email);
        form_data.append('telefone', telefone);
        form_data.append('acao', acao);

        $.ajax({
            url: 'functions/fornecedores.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                                if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Fornecedor foi cadastrado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='fornecedores.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar o fornecedor.",
                        type: "warning"
                    },
function(){ 
       location.href='fornecedores.php';
   }
                    );
                 
                            }
            }
        });
    }

}

function EditarOperadora(id){
    var operadora = $("#operadora").val();
    var identificador = $("#identificador").val();
    var tipoOperadora = $("#tipoOperadora").val();
    var apresentacao = $("#apresentacao").val();
    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var imagemRoteiro = $('#inputArquivo').val();
    var acao = 'EditarOperadora';

    var imagem = $('#inputArquivo')[0].files[0];

    if($('#inputArquivoRoteiro').val() == '' ){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Necessário selecionar uma imagem.",
            type: "warning"
                
        });
    }else if(operadora == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Operadora não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(identificador == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Identificador não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(tipoOperadora == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Identificador não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(apresentacao == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Apresentação não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(nome == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Nome não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(email == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo E-mail não pode ficar em branco.",
            type: "warning"
                
        });
    }else if(telefone == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo Telefone não pode ficar em branco.",
            type: "warning"
                
        });
    }else{
        var form_data = new FormData();

        form_data.append('arquivo', imagem);
        form_data.append('operadora', operadora);
        form_data.append('identificador', identificador);
        form_data.append('tipoOperadora', tipoOperadora);
        form_data.append('apresentacao', apresentacao);
        form_data.append('nome', nome);
        form_data.append('email', email);
        form_data.append('telefone', telefone);
        form_data.append('id', id);
        form_data.append('acao', acao);

        $.ajax({
            url: 'functions/fornecedores.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                                if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Fornecedor foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='fornecedores.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o fornecedor.",
                        type: "warning"
                    },
function(){ 
       location.href='fornecedores.php';
   }
                    );
                 
                            }
            }
        });
    }

}

function ExclusaoImagemFornecedor(id){
    swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar imagem    ",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'ExcluirImagemFornecedor';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/fornecedores.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Exclusão realizada!",
                            text: "A imagem foi excluída com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir a imagem.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
         
                }
         
            });
        }else {
                            swal("Cancelado", "A imagem não será excluída!", "error");
                        }
    });
}

function AlterarStatusFornecedor(id, valor){

                var acao = "AlterarStatusFornecedor";

                if (valor == '1') {
                    valor = 0;
                }else if(valor == '0'){
                  valor = 1;
                }
                
                

                $.ajax({

                    url: 'functions/fornecedores.php',
                    data: {valor:valor, id:id, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        if(resposta == 1){
                swal({
                    title: "Ótimo trabalho!",
                    text: "O status do fornecedor foi alterado com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar o status do fornecedor.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }

                    }

                });
}

function EditarStatusMotor(id, ativo){
    var acao = 'EditarStatusMotor';

    var valor = '';

    if(ativo == '1'){
        valor = 0;
    }else{
        valor = 1;
    }

    //alert(valor);

    $.ajax({
 
        type: "POST",
        data: {id:id, valor:valor, acao:acao},
        url: 'functions/fornecedores.php',
        success: function(resposta){
            if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Status do motor foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='motores.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o status do motor.",
                        type: "warning"
                    },
function(){ 
       location.href='motores.php';
   }
                    );
                 
                            }
    
        }
 
    });


}

function AlterarDestaqueMotor(id, ativo){
    var acao = 'AlterarDestaqueMotor';

    var valor = '';

    if(ativo == '1'){
        valor = 0;
    }else{
        valor = 1;
    }

    //alert(valor);

    $.ajax({
 
        type: "POST",
        data: {id:id, valor:valor, acao:acao},
        url: 'functions/fornecedores.php',
        success: function(resposta){
            if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Destaque do motor foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o destaque do motor.",
                        type: "warning"
                    },
function(){ 
       location.reload();
   }
                    );
                 
                            }
    
        }
 
    });


}


function ExcluirServico(id){

     swal({
        title: "Você tem certeza?",
        text: "Após confirmar, seu serviço cadastro será excluído.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Confirmar",
        closeOnConfirm: false
      },
      function(){
        var acao = 'ExcluirMotor';
 
                    $.ajax({
                 
                        type: "POST",
                        data: {id:id, acao:acao},
                        url: 'functions/fornecedores.php',
                        success: function(resposta){
                 
                            if(resposta == 1){
                 
                                $('.btn-salvar').prop('disabled',false);

                                swal({
                                  title: "Deletado",
                                  text: "Seu serviço foi deletado com sucesso!",
                                  imageUrl: "img/config-menu.png"
                                  },function(){ 
                                   location.reload();
                                  }
                                );
                 
                                
                 
                            }else{
                 
                               
                                $('.btn-salvar').prop('disabled',false);

                                swal({
                                  title: "Falha ao deletar",
                                  text: "Por favor, tente novamente.",
                                  imageUrl: "img/falha-envio.png"
                                  },function(){ 
                                   location.reload();
                                  }
                                );
                 
                            }
                 
                        }
                 
                    });
        ;
      });

}