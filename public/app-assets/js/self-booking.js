function CadastrarSelf(){
    var apresentacao = $("#apresentacao").val();
    var nome = $("#nome").val();
    var imagem = $('#inputArquivoRoteiro')[0].files[0];
    var acao = 'CadastrarSelf';

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
            url: 'functions/self-booking.php',
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
       location.href='self-booking.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar o self-booking.",
                        type: "warning"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                 
                            }
            }
        });
    }
}

function CadastrarSelfAgencia(){
    var fornecedor = $('#fornecedor').val();

        if(fornecedor == '0'){
          bootbox.alert('Escolha um fornecedor');
                return false;
        }else if(fornecedor == '2'){
            var reserveID = $('#reserveID').val();
            var reserveFantasia = $('#reserveFantasia').val();
            var link = 'reserve.php';
            var urlSelf = 'reserve.php';
            var token = '';
          $.ajax({
          url: "functions/self-booking.php",
          type: "POST",
          data: {acao: 'CadastrarSelfAgencia', fornecedor: fornecedor, link: link, reserveID: reserveID, reserveFantasia: reserveFantasia,urlSelf: urlSelf, token: token},
          success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Self-Booking foi cadastrado com sucesso!",
                        type: "success"
                    },
                function(){ 
                   location.href='self-booking.php';
               }
               );
          }
        });
        }else{
            var reserveID = '0';
            var reserveFantasia = '0';
            var link = $('#link').val();
            var token = '';
            if(fornecedor == '1'){
              var urlSelf = 'reservaFacil.php';
            }else if(fornecedor == '3'){
              var urlSelf = 'wts.php';
            }else if(fornecedor == '4'){
              var urlSelf = 'tms.php';
            }else if(fornecedor == '5'){
              var urlSelf = 'tyllerSelf.php';
            }else if(fornecedor == '6'){
              var urlSelf = 'faturasSelf.php';
              var token =  $('#tokenFaturas').val();
            }else if(fornecedor == '10'){
              var urlSelf = 'wintourSelf.php';
            }else if(fornecedor == '11'){
              var urlSelf = 'sturSelf.php';
            }else if(fornecedor == '12'){
              var urlSelf = 'esferaSelf.php';
            }else if(fornecedor == '13'){
              var urlSelf = 'corpSelf.php';
            }
        $.ajax({
          url: "functions/self-booking.php",
          type: "POST",
          data: {acao: 'CadastrarSelfAgencia', fornecedor: fornecedor, link: link, reserveID: reserveID, reserveFantasia: reserveFantasia,urlSelf: urlSelf, token: token},
          success: function(resposta) {
               swal({
                        title: "Ótimo trabalho!",
                        text: "Self-Booking foi cadastrado com sucesso!",
                        type: "success"
                    },
                function(){ 
                   location.href='self-booking.php';
               }
               );
          }
        });

    }
}

function AlterarSelfAgencia(id){
    var fornecedor = $('#fornecedor').val();

        if(fornecedor == '0'){
          bootbox.alert('Escolha um fornecedor');
                return false;
        }else if(fornecedor == '2'){
            var reserveID = $('#reserveID').val();
            var reserveFantasia = $('#reserveFantasia').val();
            var link = 'reserve.php';
            var urlSelf = 'reserve.php';
            var token = '';
          $.ajax({
          url: "functions/self-booking.php",
          type: "POST",
          data: {acao: 'AlterarSelfAgencia', fornecedor: fornecedor, link: link, reserveID: reserveID, reserveFantasia: reserveFantasia,urlSelf: urlSelf, token: token,id:id},
          success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Self-Booking foi alterado com sucesso!",
                        type: "success"
                    },
                function(){ 
                   location.href='self-booking.php';
               }
               );
          }
        });
        }else{
            var reserveID = '0';
            var reserveFantasia = '0';
            var link = $('#link').val();
            var token = '';
            if(fornecedor == '1'){
              var urlSelf = 'reservaFacil.php';
            }else if(fornecedor == '3'){
              var urlSelf = 'wts.php';
            }else if(fornecedor == '4'){
              var urlSelf = 'tms.php';
            }else if(fornecedor == '5'){
              var urlSelf = 'tyllerSelf.php';
            }else if(fornecedor == '6'){
              var urlSelf = 'faturasSelf.php';
              var token =  $('#tokenFaturas').val();
            }else if(fornecedor == '10'){
              var urlSelf = 'wintourSelf.php';
            }else if(fornecedor == '11'){
              var urlSelf = 'sturSelf.php';
            }else if(fornecedor == '12'){
              var urlSelf = 'esferaSelf.php';
            }else if(fornecedor == '13'){
              var urlSelf = 'corpSelf.php';
            }
        $.ajax({
          url: "functions/self-booking.php",
          type: "POST",
          data: {acao: 'AlterarSelfAgencia', fornecedor: fornecedor, link: link, reserveID: reserveID, reserveFantasia: reserveFantasia,urlSelf: urlSelf, token: token,id:id},
          success: function(resposta) {
               swal({
                        title: "Ótimo trabalho!",
                        text: "Self-Booking foi alterado com sucesso!",
                        type: "success"
                    },
                function(){ 
                   location.href='self-booking.php';
               }
               );
          }
        });

    }
}

function AlterarSelf(id){
    var apresentacao = $("#apresentacao").val();
    var nome = $("#nome").val();
    var imagemRoteiro = $('#inputArquivo').val();
    var acao = 'AlterarSelf';

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
            url: 'functions/self-booking.php',
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
                        text: "Self-Booking foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o self-booking.",
                        type: "warning"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                 
                            }
            }
        });
    }
}


function EditarStatusSelf(id, ativo){
    var acao = 'EditarStatusSelf';

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
        url: 'functions/self-booking.php',
        success: function(resposta){
            if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Status do self-booking foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o status do self-booking.",
                        type: "warning"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                 
                            }
    
        }
 
    });


}

function EditarDestaqueSelf(ativo, id){
    var valor = '';

    if(ativo == '1'){
        valor = 0;
    }else{
        valor = 1;
    }

    var acao = 'EditarDestaqueSelf';

    $.ajax({
 
        type: "POST",
        data: {id:id, valor:valor, acao:acao},
        url: '/Dashboardv2/functions/self-booking.php',
         success: function(resposta){
            if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "Status do self-booking foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível alterar o status do self-booking.",
                        type: "warning"
                    },
function(){ 
       location.href='self-booking.php';
   }
                    );
                 
                            }
    
        }
 
    });


}

function ExcluirSelf(id){
     bootbox.dialog({
        title: "Exclusão do Self Booking",
        message: '<div class="row">'+
                    '<div class="col-md-12">'+
                        '<span>Deseja realmente excluir?</span>'+
                    '</div></div>',
        buttons: {
            success: {
                label: "Excluir",
                className: "btn-success",
                callback: function(){
                    RemoverSelf(id);
                }
            },
            cancel: {
                label: "Cancelar",
                className: "btn-default",
                callback: function(){

                }
            }
        }
    });
}
function RemoverSelf(id){
    var acao = 'ExcluirSelf';
 
    $.ajax({
 
        type: "POST",
        data: {id:id, acao:acao},
        url: '/Dashboardv2/functions/self-booking.php',
        success: function(resposta){
 
            if(resposta == 1){
 
                bootbox.dialog({
 
                    message: "Self Booking excluído com sucesso.",
                    title: "Exclusão Self Booking",
                    buttons: {
                        main: {
                            label: "Fechar",
                            className: "btn-primary",
                            callback: function(){
                                window.location.reload();
                            }
                        }
                    }
 
                });
 
                $('.btn-salvar').prop('disabled',false);
 
            }else{
 
                bootbox.alert("Não foi possível excluir a Licença.");
                $('.btn-salvar').prop('disabled',false);
 
            }
 
        }
 
    });
}

function OcultarSelf(){
  var statusExibicao = 0;
  var acao = 'AlterarExibicaoSelf';

  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/self-booking.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição do Self-Booking foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição do Self-Booking.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExibirSelf(){
  var statusExibicao = '1';
  var acao = "AlterarExibicaoSelf";
  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/self-booking.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição do Self-Booking foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição do Self-Booking.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}


function OcultarSelfAgencia(selfID){
  var statusExibicao = 0;
  var acao = 'AlterarExibicaoSelfAgencia';

  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao,selfID:selfID},
        url: 'functions/self-booking.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição do Self-Booking foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição do Self-Booking.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExibirSelfAgencia(selfID){
  var statusExibicao = '1';
  var acao = "AlterarExibicaoSelfAgencia";
  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao,selfID:selfID},
        url: 'functions/self-booking.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição do Self-Booking foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição do Self-Booking.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExclusaoImagemSelfBooking(id){
    swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar logotipo    ",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'ExcluirImagemSelfBooking';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/self-booking.php',
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
        }else {
                            swal("Cancelado", "O logotipo não será excluído!", "error");
                        }
    });
}

function DesconectarSelfBooking(id){
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
      var acao = 'DesconectarSelfBooking';     
      $.ajax({         
          type: "POST",
          data: {id:id, acao:acao},
          url: 'functions/self-booking.php',
          success: function(resposta){         
            if(resposta == 1){
              swal({
                title: "Desconectado!",
                text: "O self-booking foi desconectado com sucesso!",
                type: "success"
              },function(){ 
                location.reload();
              });         
            }else{         
              swal({
                title: "Ops... Algo deu errado.",
                text: "Não foi possível desconectar o self-booking.",
                type: "warning"
              },function(){ 
                location.reload();
              });         
            }         
          }         
        });
      }else {
        swal("Cancelado", "O logotipo não será excluído!", "error");
      }
    });
  }

function CadastrarCorporativo(){
  var nome = $('#tituloCorp').val();
  var imagem = $('#inputArquivo')[0].files[0];
  var descricao = $('#descricaoCorp').val();
  var acao = 'CadastrarCorporativo';

  if(nome == ''){
      bootbox.alert('Necessário digitar o título.');
      return false;
  }else if($('input[type=file]').val() == ''){
      bootbox.alert('Necessário selecionar uma capa.');
      return false;
  }else if(descricao == ''){
      bootbox.alert('Necessário informar uma descrição.');
      return false;
  }else{
    var form_data = new FormData();
    form_data.append('arquivo', imagem);
    form_data.append('nome', nome);
    form_data.append('descricao', descricao);
    form_data.append('acao', acao);
    $.ajax({
      url: 'functions/self-booking.php',
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: 'POST',
      success: function(resposta){
        swal({
          title: "Ótimo trabalho!",
          text: "Descritivo foi alterado com sucesso!",
          type: "success"
        },function(){ 
          location.href='self-booking.php';
        });
      }
    });
  }
}


function ExcluirImgCorp(){
swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar imagem",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'ExcluirImgCorp';
     
            $.ajax({
         
                type: "POST",
                data: {acao:acao},
                url: 'functions/self-booking.php',
                success: function(resposta){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A imagem foi excluída com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                }
         
            });
        }else {
                            swal("Cancelado", "Sua imagem não será excluída!", "error");
                        }
    });
}



function EditarCorp(){
   var nome = $('#tituloCorp').val();
   var descricao = $('#descricaoCorp').val();
   var imagemC = $('#inputArquivo1').val();
   var inputImg = imagemC.trim();
   var imagemCorp = $('#imagemC').val();
   var inputImg2 = imagemCorp.trim();
   var acao = 'EditarCorp';
   var imagem = $('#inputArquivo1')[0].files[0];
   if(nome == ''){
      bootbox.alert('Necessário digitar o título.');
      return false;
    }else if($('input[type=file]').val() == ''){
      bootbox.alert('Necessário selecionar uma capa.');
      return false;
    }else if(descricao == ''){
      bootbox.alert('Necessário informar uma descrição.');
      return false;
    }else{
    var form_data = new FormData(); 

    form_data.append('arquivo', imagem);
    form_data.append('nome', nome);
    form_data.append('descricao', descricao);
    form_data.append('acao', acao);

    $.ajax({     
      url: "functions/self-booking.php",
      dataType: 'text', 
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,                         
      type: 'POST',
      success: function(resposta){                 
        swal({
          title: "Ótimo trabalho!",
          text: "Corporativo foi alterado com sucesso!",
          type: "success"
        },function(){ 
          location.href='self-booking.php';
        });
      }
    });
  }
}


function EditarCorpComImagem(){
   var nome = $('#tituloCorp').val();
   var descricao = $('#descricaoCorp').val();
   var acao = 'EditarCorpComImagem';
   var imagem = $('#imagemC').val();
   var form_data = new FormData();  
  form_data.append('nome', nome);
  form_data.append('descricao', descricao);
  form_data.append('imagem', imagem);
  form_data.append('acao', acao);
  $.ajax({        
    url: "functions/self-booking.php",
    dataType: 'text', 
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,                         
    type: 'POST',
    success: function(resposta){
      swal({
        title: "Ótimo trabalho!",
        text: "Corporativo alterado com sucesso!",
        type: "success"
      },function(){ 
        location.href='self-booking.php';
      });
    }
  });
}

