 
function alterarDestaqueRoteiro(ativo, id){
	var acao = 'alterarDestaqueEdicao';
	$.ajax({
 
        type: "POST",
        data: {ativo:ativo,id:id, acao:acao},
        url: 'functions/roteiros.php',
        success: function(resposta){
 
            if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O destaque do roteiro foi alterado com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível alterar o destaque do roteiro.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
 
        }
 
    });


}

function deleteRoteiro(id){
    swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar roteiro",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'deletarRoteiro';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/roteiros.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O roteiro foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o roteiro.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
         
                }
         
            });
        }else {
                            swal("Cancelado", "Seu roteiro não será excluído!", "error");
                        }
    });
}


function deletarNivel1(id){
    swal({
        title: "Você tem certeza?",
        text: "Ao excluir este nível, você excluirá todos os roteiros e nível 2 ligados à ele!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar nível",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'deletarNivel1';     
            $.ajax({         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/roteiros.php',
                success: function(resposta){
                    if(resposta == 1){         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O nível foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });         
                    }else{         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o nível.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });         
                    }         
                }         
            });
        }else {
            swal("Cancelado", "Seu nível não será excluído!", "error");
        }
    });
}


function deletarNivel2(id){
    swal({
        title: "Você tem certeza?",
        text: "Ao excluir este nível, você excluirá todos os roteiros ligados à ele!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar nível",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'deletarNivel2';     
            $.ajax({         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/roteiros.php',
                success: function(resposta){
                    if(resposta == 1){         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O nível foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });         
                    }else{         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o nível.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });         
                    }         
                }         
            });
        }else {
            swal("Cancelado", "Seu nível não será excluído!", "error");
        }
    });
}

function ExcluirNewsletterRoteiros(id){
    swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar news",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'ExcluirNewsletterRoteiros';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/roteiros.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A newsletter foi excluída com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir a news.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
         
                }
         
            });
        }else {
                            swal("Cancelado", "A newsletter não será excluída!", "error");
                        }
    });
}

function insertGaleria(id){
    var imagem = $('#inputArquivo')[0].files[0];
    var acao = 'inserirGaleriaRoteiro';

    if($('input[type=file]').val() == ''){
        bootbox.alert('Necessário selecionar uma imagem.');
        return false;
    }else{
        var form_data = new FormData();

        form_data.append('arquivo', imagem);
        form_data.append('id', id);
        form_data.append('acao', acao);

        $.ajax({
            url: 'functions/roteiros.php',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                 if(resposta == 1){
                    swal({
                        title: "Ótimo trabalho!",
                        text: "A imagem foi cadastrada na galeria com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );
                }else{
     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar a imagem da galeria.",
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
}

function excluirGaleriaSeparada(galeria){
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
            var acao = 'excluirGaleriaSeparada';
     
            $.ajax({
         
                type: "POST",
                data: {galeria:galeria, acao:acao},
                url: 'functions/roteiros.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A imagem foi excluída com sucesso!",
                            type: "success"
                        },
                        function(){ 
       location.reload();
   }
                        );
         
                    }else{
                        
                        swal({title: "Ops... Algo deu errado.",text: "Não foi possível excluir a imagem.",type: "warning"},
                            function(){ 
                               location.reload();
                           }
                        );
         
                    }
         
                }
         
            });
        }else {
                            swal("Cancelado", "Sua imagem não será excluída!", "error");
                        }
    });
}

function inserirDetalhes(id){
    var inclusoRoteiro = tinyMCE.get('inclusoRoteiro').getContent();
    var naoInclusoRoteiro = tinyMCE.get('naoInclusoRoteiro').getContent();
    var itinerario = tinyMCE.get('itinerario').getContent();
    var observacoes = tinyMCE.get('observacoes').getContent();

    var acao = 'inserirDetalhes';
        $.ajax({
            type: 'POST',
            url: 'functions/roteiros.php',
            data: {   id: id,
                      inclusoRoteiro: inclusoRoteiro, 
                      naoInclusoRoteiro: naoInclusoRoteiro,
                      itinerario: itinerario,
                      observacoes: observacoes,
                      acao: acao}, 
            success: function(resposta){
                 if(resposta == 1){
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Os detalhes do roteiro foram cadastrados com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );
                }else{
     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar os detalhes do roteiro.",
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
function gravarLamina(id){
    var form = new FormData();
    form.append('arquivo', $("#lamina")[0].files[0]);
    form.append('id', id);
    form.append('acao', 'gravarLamina');
    $.ajax({
          url: "functions/roteiros.php",
          type: "POST",
          data: form,
          dataType: 'text', 
          cache: false,
          contentType: false,
          processData: false,
          success: function(resposta) {
            if(resposta == 1){
            swal({
                title: "Ótimo trabalho!",
                text: "A lâmina do roteiro foi cadastrada com sucesso!",
                type: "success"
            },
            function(){ 
                location.reload();
            });
            }else{
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar a lâmina do roteiro.",
                    type: "warning"
                },
                function(){ 
                    location.reload();
                });
            }
        }
    });    
}

function atualizarRoteiroNOVO(id, template){
    var status  = 0;
    var destaque = 0;
    var tipoDetalhes = 0;
    var exibirVencido = 0;

    var selectNivel2= $('#selectNivel2').val();
    var nome = $('#nomeRoteiro').val();
    var validade = $('#validadeRoteiro').val();
    var inicio = $('#inicioRoteiro').val();
    var termino = $('#terminoRoteiro').val();
    if(template == 67 || template == 68){
        var saidaRoteiro = inicio+';'+termino;
    }else{
        var saidaRoteiro = $('#saidaRoteiro').val();
    }
    var preco = $('#valorRoteiro').val();
    var moeda = $('#moedaRoteiro').val();
    var precoDescritivo = $('#descritivoRoteiro').val();
    var descricao = $('#descricaoRoteiro').val();
    var imagemRoteiro = $('#inputArquivo').val();
    var imagem = $('#imagemdb').val();
    var imagemR = $('#imagemR').val();
    var hoteis = new Array();
    $("input[name='hotel[]']:checked").each(function()
    {
       hoteis.push( $(this).val());
    });
    var acao = 'atualizarRoteiro';


    if(preco == ''){
        preco = 0;
    }else{
        preco = preco;
    }

    if ($('#statusRoteiro').is(":checked")) {
        status = 1;
    }

    if ($('#destaqueRoteiro').is(":checked")) {
        destaque = 1;
    }

    if($('#textual').is(":checked")) {
        tipoDetalhes = 1;
    }else if($('#imagemDesc').is(":checked")) {
        tipoDetalhes = 2;
    }

    if($('#exibirVencido').is(":checked")) {
        exibirVencido = 1;
    }else{
        exibirVencido = 0;
    }

    if(imagem == 'https://homolog.taurusmulticanal.com.br/Dashboardv2/img/semfoto-local.png'){
        bootbox.alert('Necessário escolher uma imagem.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário digitar um Nome.');
    }else if(validade == ''){
        bootbox.alert('Necessário informar a validade.');
        return false;
    }else if(template == 67 || template == 68){
        if(inicio == ''){
            bootbox.alert('Necessário informar o inicio do roteiro.');
            return false;
        }else if(termino == ''){
            bootbox.alert('Necessário informar o término do roteiro.');
            return false;
        }
    }
    if(selectNivel2 == ''){
        bootbox.alert('Necessário escolher um nível.');
        return false;
    }else if(moeda == ''){
        bootbox.alert('Necessário informar a moeda.');
        return false;
    }else if(descricao == ''){
        bootbox.alert('Necessário informar uma descrição.');
        return false;
    }else{
        
        var form_data = new FormData();   

        form_data.append('imagem', imagem);
        form_data.append('selectNivel2', selectNivel2);
        form_data.append('status', status);
        form_data.append('destaque', destaque);
        form_data.append('tipoDetalhes', tipoDetalhes);
        form_data.append('nome', nome);
        form_data.append('validade', validade);
        form_data.append('saidaRoteiro', saidaRoteiro);
        form_data.append('preco', preco);
        form_data.append('precoDescritivo', precoDescritivo);
        form_data.append('descricao', descricao);
        form_data.append('id', id);
        form_data.append('moeda', moeda);
        form_data.append('hoteis', hoteis);
        form_data.append('exibirVencido', exibirVencido);
        form_data.append('acao', acao);

        $.ajax({        
            url: "functions/roteiros.php",
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
                    text: "O roteiro foi editado com sucesso!",
                    type: "success"
                },
                function(){ 
                    location.href='cms-roteiros-geral.php';
                });
                }else{         
                    swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível editar o roteiro.",
                    type: "warning"
                    },
                    function(){ 
                    });
                }
            }
        }); 
    }
}

function excluirImgRoteiro(id){
    bootbox.dialog({
        title: "Exclusão da imagem do roteiro",
        message: '<div class="row">'+
                    '<div class="col-md-12">'+
                        '<span>Deseja realmente excluir a imagem do roteiro?</span>'+
                    '</div></div>',
        buttons: {
            success: {
                label: "Excluir",
                className: "btn-success",
                callback: function(){
                    var acao = 'excluirImgRoteiro';

                    $.ajax({
                 
                        type: "POST",
                        data: {id:id, acao:acao},
                        url: 'functions/roteiros.php',
                        success: function(resposta){
                 
                            if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "A imagem foi excluída com sucesso!",
                        type: "success"
                    },
function(){ 
       
       window.location.reload();
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível excluir a imagem do roteiro.",
                        type: "warning"
                    },
function(){ 
       location.href='cms-roteiros-geral.php';
   }
                    );
                 
                            }
                 
                        }
                 
                    });
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

function cadastrarRoteiro(template){
    var status = 0;
    var destaque = 0;
    var tipoDetalhes = 0;
    var exibirVencido = 0;
    var selectNivel2= $('#selectNivel2').val();
    var nome = $('#nomeRoteiro').val();
    var validade = $('#validadeRoteiro').val();
    var inicio = $('#inicioRoteiro').val();
    var termino = $('#terminoRoteiro').val();
    if(template == 67 || template == 68){
        var saidaRoteiro = inicio+';'+termino;
    }else{
        var saidaRoteiro = $('#saidaRoteiro').val();
    }
    var moeda = $('#moedaRoteiro').val();
    var valor = $('#valorRoteiro').val();
    var descritivo = $('#descritivoRoteiro').val();
    var imagem = $('#imagemdb').val();
    var descricao = $('#descricaoRoteiro').val();
    var acao = 'cadastrarNovoRoteiro';
    var hoteis = new Array();
    $("input[name='hotel[]']:checked").each(function()
    {
       hoteis.push( $(this).val());
    });

    if($('#statusRoteiro').is(":checked")) {
        status = 1;
    }

    if($('#statusRoteiro').is(":checked")) {
        status = 1;
    }

    if($('#exibirVencido').is(":checked")) {
        exibirVencido = 1;
    }else{
        exibirVencido = 0;
    }

    if($('#textual').is(":checked")) {
        tipoDetalhes = 1;
    }else if($('#imagemDesc').is(":checked")) {
        tipoDetalhes = 2;
    }

    if(imagem == 'https://homolog.taurusmulticanal.com.br/Dashboardv2/img/semfoto-local.png'){
        bootbox.alert('Necessário escolher uma imagem.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário digitar o nome.');
        return false;
    }else if(validade == ''){
        bootbox.alert('Necessário informar a validade.');
        return false;
    }else if(template == 67 || template == 68){
        if(inicio == ''){
            bootbox.alert('Necessário informar o inicio do roteiro.');
            return false;
        }else if(termino == ''){
            bootbox.alert('Necessário informar o término do roteiro.');
            return false;
        }
    }
    if(selectNivel2 == ''){
        bootbox.alert('Necessário escolher um nível.');
        return false;
    }else if(moeda == ''){
        bootbox.alert('Necessário informar a moeda.');
        return false;
    }else if($('#inputArquivoRoteiro').val() == ''){
        bootbox.alert('Necessário selecionar uma imagem.');
        return false;
    }else if(descricao == ''){
        bootbox.alert('Necessário informar uma descrição.');
        return false;
    }else{
        var form_data = new FormData();

        form_data.append('imagem', imagem);
        form_data.append('selectNivel2', selectNivel2);
        form_data.append('nome', nome);
        form_data.append('validade', validade);
        form_data.append('saidaRoteiro', saidaRoteiro);
        form_data.append('moeda', moeda);
        form_data.append('valor', valor);
        form_data.append('descritivo', descritivo);
        form_data.append('descricao', descricao);
        form_data.append('status', status);
        form_data.append('destaque', destaque);
        form_data.append('tipoDetalhes', tipoDetalhes);
        form_data.append('hoteis', hoteis);
        form_data.append('exibirVencido', exibirVencido);
        form_data.append('acao', acao);
        $.ajax({
            url: 'functions/roteiros.php',
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
                        text: "Roteiro foi cadastrado com sucesso!",
                        type: "success"
                    },
                    function(){ 
                       location.href='cms-roteiros-geral.php';
                    });
                }else{      
                    swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar o roteiro.",
                    type: "warning"
                    },
                    function(){ 
                    });
                }
            }
        });
    }
}

function CadastrarNivel1(){
    var nome = $('#nomeNivel1').val();
    var imagem = $('#inputArquivo')[0].files[0];
    var descricao = $('#descricaoNivel1').val();
    var acao = 'CadastrarNivel1';

    if(nome == ''){
        bootbox.alert('Necessário digitar o nome.');
        return false;
    }else if($('input[type=file]').val() == ''){
        bootbox.alert('Necessário selecionar uma imagem.');
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
            url: 'functions/roteiros.php',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                                swal({
                        title: "Ótimo trabalho!",
                        text: "O nível 1 foi cadastrado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='cms-roteiros-geral.php';
   }
                    );
            }
        });
    }
}

function EditarNivel1(id){
     var nome = $('#nomeNivel1').val();
     var descricao = $('#descricaoNivel1').val();
     var imagemN = $('#inputArquivo1').val();
     var inputImg = imagemN.trim();
     var imagemNivel1 = $('#imagemN').val();
     var inputImg2 = imagemNivel1.trim();
     var acao = 'EditarNivel1';
     var imagem = $('#inputArquivo1')[0].files[0];
     
     var form_data = new FormData();   

    form_data.append('arquivo', imagem);
         form_data.append('nome', nome);
         form_data.append('descricao', descricao);
         form_data.append('id', id);
         form_data.append('acao', acao);

         $.ajax({        
            
                 url: "functions/roteiros.php",
                 dataType: 'text', 
                 cache: false,
                 contentType: false,
                 processData: false,
                 data: form_data,                         
                 type: 'POST',
                  success: function(resposta){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "O nível 1 foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );
            }
        });
    }


function EditarNivel1ComImagem(id){
     var nome = $('#nomeNivel1').val();
     var descricao = $('#descricaoNivel1').val();
     var acao = 'EditarNivel1ComImagem';
     var imagem = $('#imagemN').val();

     var form_data = new FormData();   

         form_data.append('nome', nome);
         form_data.append('descricao', descricao);
         form_data.append('imagem', imagem);
         form_data.append('id', id);
         form_data.append('acao', acao);

         $.ajax({        
            
                 url: "functions/roteiros.php",
                 dataType: 'text', 
                 cache: false,
                 contentType: false,
                 processData: false,
                 data: form_data,                         
                 type: 'POST',
                  success: function(resposta){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "O nível 1 foi alterado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );

            }
        });
    }



function EditarNivel2(id){
    var opcaoNivel1 = $('#opcaoNivel1').val();
    var nome = $('#nomeNivel2').val();
    var descricao = $('#descricaoNivel2').val();
    var imagemNivel2 = $('#inputArquivo').val();
    var inputImg = imagemNivel2.trim();
    var imagemNivel2 = $('#imagemNivel2').val();
    var inputImg2 = imagemNivel2.trim();
    var imagem = $('#inputArquivo')[0].files[0];
    var acao = 'EditarNivel2';


    if(opcaoNivel1 == ''){
        bootbox.alert('Necessário escolher um nível.');
    }else if(nome == ''){
        bootbox.alert('Necessário digitar um Nome.');
    }else if(inputImg == '' && inputImg2 == ''){
        bootbox.alert('Necessário selecionar uma capa para o roteiro.');
    }else if(descricao == ''){
        bootbox.alert('Necessário digitar uma descrição.');
    }else{
        
        var form_data = new FormData();   

        form_data.append('arquivo', imagem);
        form_data.append('opcaoNivel1', opcaoNivel1);
        form_data.append('nome', nome);
        form_data.append('descricao', descricao);
        form_data.append('id', id);
        form_data.append('acao', acao);
        $.ajax({        
            
                url: "functions/roteiros.php",
                dataType: 'text', 
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'POST',
                success: function(resposta){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "O nível 2 foi editado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );
                }
                
        }); 

    }
}

function EditarNivel2ComImagem(id){
    var opcaoNivel1 = $('#opcaoNivel1').val();
    var nome = $('#nomeNivel2').val();
    var descricao = $('#descricaoNivel2').val();
    var imagemNivel2 = $('#imagemNivel2').val();
    var acao = 'EditarNivel2ComImagem';

    if(opcaoNivel1 == ''){
        bootbox.alert('Necessário escolher um nível.');
    }else if(nome == ''){
        bootbox.alert('Necessário digitar um Nome.');
    }else if(descricao == ''){
        bootbox.alert('Necessário digitar uma descrição.');
    }else{
        
        var form_data = new FormData();   

        form_data.append('imagem', imagemNivel2);
        form_data.append('opcaoNivel1', opcaoNivel1);
        form_data.append('nome', nome);
        form_data.append('descricao', descricao);
        form_data.append('id', id);
        form_data.append('acao', acao);
        $.ajax({        
            
                url: "functions/roteiros.php",
                dataType: 'text', 
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'POST',
                success: function(resposta){
                                           swal({
                        title: "Ótimo trabalho!",
                        text: "O nível 2 foi editado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.reload();
   }
                    );
                }
                
        }); 

    }
}

function ExcluirImgNivel1(id){
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
            var acao = 'ExcluirImgNivel1';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/roteiros.php',
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
function ExcluirImgNivel2(id){
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
            var acao = 'ExcluirImgNivel2';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/roteiros.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
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
                            swal("Cancelado", "Sua imagem não será excluída!", "error");
                        }
    });
}

function alterarStatusEdicaoNivel1(ativo, id){
    var acao = 'AlterarStatusEdicaoNivel1';

    $.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: 'functions/roteiros.php',
        success: function(resposta){
 
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O status do nível foi alterado com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
 
        }
 
    });
}
function alterarStatusEdicaoNivel2(ativo, id){
    var acao = 'AlterarStatusEdicaoNivel2';

    $.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: 'functions/roteiros.php',
        success: function(resposta){
 
            if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O status do nível foi alterado com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível alterar o status do nível.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
 
        }
 
    });
}
function CadastrarNivel2(){
    var nome = $('#nomeNivel2').val();
    var imagem = $('#inputArquivoNivel2')[0].files[0];
    var descricao = $('#descricaoNivel2').val();
    var opcaoNivel1 = $('#opcaoNivel1').val();
    var acao = 'CadastrarNivel2';

    if(opcaoNivel1 == ''){
        bootbox.alert('Necessário escolher um nível superior.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário digitar o nome.');
        return false;
    }else if($('#inputArquivoNivel2').val() == ''){
        bootbox.alert('Necessário selecionar uma imagem.');
        return false;
    }else if(descricao == ''){
        bootbox.alert('Necessário informar uma descrição.');
        return false;
    }else{
        var form_data = new FormData();

        form_data.append('arquivo', imagem);
        form_data.append('opcaoNivel1', opcaoNivel1);
        form_data.append('nome', nome);
        form_data.append('descricao', descricao);
        form_data.append('acao', acao);

        $.ajax({
            url: 'functions/roteiros.php',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                if(resposta == 1){
                 
                                swal({
                        title: "Ótimo trabalho!",
                        text: "O nível 2 foi cadastrado com sucesso!",
                        type: "success"
                    },
function(){ 
       location.href='cms-roteiros-geral.php';
   }
                    );
                            }else{
                 
                                swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar o nível.",
                        type: "warning"
                    },
function(){ 
       
   }
                    );
                 
                            }
            }
        });
    }
}


function shareTwitter(id,licenca){
    if(licenca == '457'){
        var Roteiro = '/roteiro/';
    }else if(licenca == '413'){
        var Roteiro = '/roteiroInfo.php?roteiro=';
    }else{
        var Roteiro = '/roteiroNovo/';
    }
    var idRoteiro = id;
    var acao = 'consultarCreditos';

    $.ajax({
            url: 'functions/roteiros.php',
            data: {acao:acao},
            type: 'POST',
            success: function(resposta){
                if(resposta == 2){
                    swal({
                        title: "OH NÃO!",
                        text: "SEM CRÉDITO! Adquira mais créditos.",
                        imageUrl: "img/semCredito.png"
                    },function(){ 
                    
                    $('#comprarCreditos').modal('show');
                });
                }else if(resposta == 1){
                    var acao = 'consumirCredito';
                    $.ajax({
                        url: 'functions/roteiros.php',
                        data: {acao:acao},
                        type: 'POST',
                        success: function(resposta){
                            if(resposta == 1){
                                swal({
                                        title: "Tweet liberado!",
                                        text: "Estamos te redirecionando para tela de compartilhamento",
                                        imageUrl: "img/bonecomsg3.png"
                                    },function(){
                                        var acao = 'getDomain';
                                        $.ajax({
                                        type: "POST",
                                        data: {acao:acao},
                                        url: 'functions/roteiros.php',
                                        success: function(resposta){
                                        
                                            window.open('https://twitter.com/intent/tweet?url=http://'+resposta+Roteiro+idRoteiro);
                                 
                                        }
                                 
                                    });
                                        
                                });
                                
                            }else if(resposta == 2){
                                swal({
                                    title: "Ops... Algo deu errado",
                                    text: "Não conseguimos tweetar seu roteiro.",
                                    imageUrl: "img/falha-envio.png"
                                },function(){ 
                                    $('#myModal').modal('hide');
                                    location.reload();
                                });

                            }
                            
                        }
                    });
                }
                
            }
        });
    
}


function shareFacebook(id,licenca){
    if(licenca == '457'){
        var Roteiro = '/roteiro/';
    }else if(licenca == '413'){
        var Roteiro = '/roteiroInfo.php?roteiro=';
    }else{
        var Roteiro = '/roteiroNovo/';
    }
    var idRoteiro = id;
    var acao = 'consultarCreditos';

    $.ajax({
            url: 'functions/roteiros.php',
            data: {acao:acao},
            type: 'POST',
            success: function(resposta){
                if(resposta == 2){
                    swal({
                        title: "OH NÃO!",
                        text: "SEM CRÉDITO! Adquira mais créditos.",
                        imageUrl: "img/semCredito.png"
                    },function(){ 
                    
                    $('#comprarCreditos').modal('show');
                });
                }else if(resposta == 1){
                    var acao = 'consumirCredito';
                    $.ajax({
                        url: 'functions/roteiros.php',
                        data: {acao:acao},
                        type: 'POST',
                        success: function(resposta){
                            if(resposta == 1){
                                swal({
                                        title: "Post liberado!",
                                        text: "Estamos te redirecionando para tela de compartilhamento",
                                        imageUrl: "img/bonecomsg3.png"
                                    },function(){
                                        var acao = 'getDomain';
                                        $.ajax({
                                        type: "POST",
                                        data: {acao:acao},
                                        url: 'functions/roteiros.php',
                                        success: function(resposta){
                                        
                                            window.open('https://www.facebook.com/sharer/sharer.php?app_id=901063133371801&kid_directed_site=0&sdk=joey&u=http://'+resposta+Roteiro+idRoteiro);
                                 
                                        }
                                 
                                    });
                                        
                                });
                                
                            }else if(resposta == 2){
                                swal({
                                    title: "Ops... Algo deu errado",
                                    text: "Não conseguimos tweetar seu roteiro.",
                                    imageUrl: "img/falha-envio.png"
                                },function(){ 
                                    $('#myModal').modal('hide');
                                    location.reload();
                                });

                            }
                            
                        }
                    });
                }
                
            }
        });
    
}

function OcultarRoteiro(){
                var status = 0;
                var acao = "ExibicaoRoteirosSite";
                $.ajax({

                    url: 'functions/roteiros.php',
                    data: {status: status, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        swal({
                        title: "Ótimo trabalho!",
                        text: "Exibição configurada com sucesso!",
                        imageUrl: "img/config-menu.png"
                                    },function(){ 
                           location.reload();
                        });

                    }
                });
            }
function ExibirRoteiro(){
                var status = 1;
                var acao = "ExibicaoRoteirosSite";
                $.ajax({

                    url: 'functions/roteiros.php',
                    data: {status: status, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        swal({
                        title: "Ótimo trabalho!",
                        text: "Exibição configurada com sucesso!",
                        imageUrl: "img/config-menu.png"
                                    },function(){ 
                           location.reload();
                        });

                    }
                });
            }


        function alterarImagemRoteiro(){

          var acao = 'EditarFotoRoteiro';

          var imagem = $("#uploadBtn")[0].files[0];    


          var form_data = new FormData();

          form_data.append('arquivo', imagem);
          form_data.append('acao', acao);

          
          $.ajax({

              url: 'functions/roteiros.php',
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