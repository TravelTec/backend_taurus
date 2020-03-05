// ************
// * Autor: Raabe Sampaio
// * 09/10/2017
// * Função da página: exibir, totalizando, os emails que foram entregues, o total e a quantidade de bounces.
// ************

//PAGINA CONTATOS
// @Author: Márcio Chen



$(document).ready(function () {
    $('#acoesContatos').hide();
});


//Marca todos os checkbox
function marcardesmarcar(){
    $(".marcar").each(  function() {
        if ($(this).prop("checked")) {
            $(this).prop("checked", false);
            $('#acoesContatos').hide();
        }else{
            $(this).prop("checked", true);
            $('#acoesContatos').show();

        }
    });
}

//Exibe os botões caso 1 ou mais checkbox checados
function mostrarOpcoes(){

    if($('input:checkbox:checked').length == ''){
        $('#acoesContatos').hide();
            return false;
    }else{
        $('#acoesContatos').show();
            return false;
    }
}

function excluirSelecionados(lista){


    if($('input:checkbox:checked').length == ''){
        return false;
    }else{
        var someObj = {};
        someObj.contato = [];

        $(".marcar").each(function(){
            var $this = $(this);
            if($this.is(":checked")){
                someObj.contato.push($this.val());
            }
        });

        bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Contatos",
                        className: "btn-danger pull-left btnModal",
                        callback: function () {  
                        $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos excluindo os contatos selecionados.<br> Você será avisado quando a exclusão acabar.</h4>' });
                            $.ajax({
                                type: "POST",
                                data:{'contatos': someObj.contato, acao: 'excluirContatosSelecionados', lista:lista},
                                url: 'functions/newsletters.php',
                                success: function(resposta){

                $.unblockUI();   

                                    if(resposta == ''){
                                        swal({
                                            title: "Ops... Algo deu errado.",
                                            text: "Não foi possível excluir os contatos",
                                            type: "warning"
                                        },function(){ 
                                            location.reload();
                                        });                                        
                                    }else{
                                        swal({
                                            title: "Ótimo trabalho!",
                                            text: "Os contatos foram excluídos com sucesso!",
                                            type: "success"
                                        },function(){ 
                                            location.reload();
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
                
            });


        
    }

}


function segmentarContatosSelecionados(lista){


    if($('[name="seg[]"]:checked').length == ''){
        swal({
          title: 'Ops...',
          text: 'É necessário selecionar ao menos um segmento, para segmentar os contatos',
          imageUrl: "img/falha-envio.png",
          showConfirmButton: false,
          timer: 1200,
          imageSize: "120x120"
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer') {
              
            }
          }
        )
        return false;
    }else{

        if($('[name="check[]"]:checked').length == ''){
            return false;
        }else{
            var someObj = {};
            someObj.contato = [];

            $(".marcar").each(function(){
                var $this = $(this);
                if($this.is(":checked")){
                    someObj.contato.push($this.val());
                }
            });
        }

        var someSeg = {};
        someSeg.segmento = [];

        $(".segmentos").each(function(){
            var $this = $(this);
            if($this.is(":checked")){
                someSeg.segmento.push($this.attr("id"));
            }
        });

        $.ajax({
            type: "POST",
            data:{'contatos': someObj.contato, 'segmentos': someSeg.segmento, acao: 'segmentarContatosSelecionados', lista:lista},
            url: 'functions/newsletters.php',
            success: function(resposta){

                if(resposta== 0){
                    swal({
                        html: true,
                        title: "Contatos já segmentados",
                        text: "Todos os contatos selecionados já pertencem aos segmentos escolhidos",
                        type: "warning"
                        },function(){ 
                        location.href='assistente-marketing.php?id=cont';
                    });
                }else{
                    swal({
                        html: true,
                        title: "Ótimo trabalho!",
                        text: "<div class='col-sm-12'><div class='row'>Contatos segmentados com sucesso!<p style='color: red;'><strong>Contatos existentes no segmento não foram gravados</strong></p></div><div class='col-sm-12' style='text-align: left'><div class='row' style='margin-top: 20px;'><strong>Total de contatos gravados: </strong>"+resposta+" contatos</div>",
                        type: "success"
                        },function(){ 
                        location.href='assistente-marketing.php?id=cont';
                    });
                }

            }
        });


    }        
}

//FIM PAGINA CONTATOS



// MÁSCARAS DE TELEFONE


// FUNÇÃO QUE POSSUI REGEX PARA VALIDAR OS E-MAILS INSERIDOS
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};


/*  *******************************
    FUNÇÃO QUE GERA NOVA NEWSLETTER 
    *******************************
    * Variáveis:
    * Array com os roteiros que foram selecionados
    * Ação: gravarNewsletter
    * Arquivo final: functions/roteiros.php
*/
function mostraRoteiro(){
    var selecionadas = $('#roteirosNewsSelect').val();
    console.log(selecionadas);
    if(selecionadas == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário selecionar ao menos um roteiro para gerar uma newsletter.",
            type: "warning"
        });
    }else{
        var acao = 'gravarNewsletter';
        $.ajax({
            type: "POST",
            data:{'roteiros': selecionadas, acao: acao},
            url: 'functions/roteiros.php',
            success: function(resposta) {
                if(resposta != 0){
                    window.location.assign('roteiros-new-editar2.php?id='+resposta);
                }else{
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível realizar o cadastro.",
                        type: "warning"
                    });
                }
            }
        });
    }

}
/* ******************************** */

/* ******************************** */
function convertData(data){

    var antiga_data = data.split("/");
    var nova_data = antiga_data[2]+"-"+antiga_data[1]+"-"+antiga_data[0];

    return nova_data;

}
/* ******************************** */

/* ******************************** */
function voltaPagina2(){

    window.location.assign('cms-roteiros-geral.php');

}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE CADASTRA AS CONDIÇÕES GERAIS DE UMA NEWSLETTER
    *******************************
    * Variáveis:
    * Valor que foi digitado na caixa de texto 
    * Ação: gravarCondicoesGerais
    * Arquivo final: functions/roteiros.php
*/
function cadastrarCondicoesGeraisNews(){

    var makrup = $('#condicoesgerais').summernote('code');
    var acao = 'gravarCondicoesGerais';

    $.ajax({
        type: "POST",
        url: 'functions/roteiros.php',
        data: {makrup: makrup, acao:acao},
        success: function(resposta){
            if(resposta == 1){
                swal({
                    title: "Ótimo trabalho!",
                    text: "Condições gerais cadastradas com sucesso!",
                    type: "success"
                },function(){ 
                   location.href = 'minha-conta.php';
               });
            }else{
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }
        }
    });

}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE ENVIA O ROTEIRO PARA UM E-MAIL ESPECÍFICO
    *******************************
    * Variáveis:
    * E-mail informado como destinatário
    * ID do roteiro que será enviado
    * Ação: -
    * Arquivo final: functions/envioLocawebRoteiro.php
*/
function enviarRoteiroLocaweb(template){

    var emailRoteiro = $("#emailRoteiro").val();
    var id = $("#campo").val();

    $.ajax({
 
        type: "POST",
        data: {id:id, emailRoteiro:emailRoteiro, template:template},
        url: 'functions/envioLocawebRoteiro.php',
        success: function(resposta) {
            if(resposta == 1){ 
                swal({
                    title: "Ótimo trabalho!",
                    text: "Roteiro foi enviado com sucesso!",
                    type: "success"
                },
                function(){ 
                    location.href='cms-roteiros-geral.php';
                });
            }else{
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível enviar o roteiro.",
                    type: "warning"
                },
                function(){ 
                    location.href='cms-roteiros-geral.php';
                });
            }
        }
    });

}
/* ******************************* */

/*  *******************************
    FUNÇÃO QUE CADASTRA UM NOVO CONTATO EM UMA LISTA
    *******************************
    * Variáveis:
    * Informações pessoais: nome, e-mail, gênero, telefone, celular
    * Informações de preferência: array com os segmentos em que o contato será cadastrado
    * ID da lista em que o contato será cadastro
    * Ação: CadastrarContato
    * Arquivo final: functions/newsletters.php
*/
function CadastrarContato(){

    var nome = $("#nome").val();
    var email = $("#email").val();
    var empresa = $("#empresa").val();
    var genero = $("#genero").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var lista = $("#lista").val();
    var acao = "CadastrarContato";


    var getDomain = email.split('@');
    var getDomain2 = getDomain[1];

    var getDomain3 = getDomain2.split('.');

    var Domain = '@'+getDomain3[0];
    var Domain1 = getDomain3[0];

    var someObj = {};
    someObj.roteiro = [];

    var someObjN = {};
    someObjN.roteiroN = [];

    $("input:checkbox").each(function(){
        var $this = $(this);
        if($this.is(":checked")){
            someObj.roteiro.push($this.attr("id"));
        }else{
            someObjN.roteiroN.push($this.attr("id"));
        }
    });

    if(email == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário preencher o campo e-mail.",
            type: "warning"
        });
    }else if(!isValidEmailAddress(email)){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário digitar um e-mail válido.",
            type: "warning"
        });
    }else{
        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data:{acao: 'verificarDominio', Domain:Domain},
            success: function(resposta){

                if(resposta == 0){
                    $.ajax({
                        url: "functions/newsletters.php",
                        type: "POST",
                        data:{empresa:empresa, 'roteiros': someObj.roteiro, 'roteirosN': someObjN.roteiroN, lista: lista, nome: nome, email: email, genero:genero, telefone:telefone, celular:celular, acao: acao},  
                        success: function(resposta){
                            if(resposta == 2){
                                swal({
                                    title: "Ops... Algo deu errado.",
                                    text: "Não foi possível cadastrar o contato.",
                                    type: "warning"
                                },
                                function(){ 
                                    location.href='contatos.php?lista='+lista;
                                });
                            }else if(resposta == 3){
                                swal({
                                    title: "Bom trabalho!",
                                    text: "Porém, já existe um cadastro idêntico na lista principal. Contato foi inserido apenas no segmento escolhido.",
                                    type: "warning"
                                },
                                function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Ótimo trabalho!",
                                    text: "Contato cadastrado com sucesso!",
                                    type: "success"
                                },
                                function(){ 
                                    location.href='contatos.php?lista='+lista;
                                });
                            }
                        }
                    });
                }else{
                    $('#dominio').html(Domain);
                    $('#cadastroDominio').modal('show');
                }
            }
        });
    }

}

function cadastroSomenteContato(){

    var nome = $("#nome").val();
    var email = $("#email").val();
    var empresa = $("#empresa").val();
    var genero = $("#genero").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var lista = $("#lista").val();
    var acao = "CadastrarContato";


    var getDomain = email.split('@');
    var getDomain2 = getDomain[1];

    var getDomain3 = getDomain2.split('.');

    var Domain = '@'+getDomain3[0];
    var Domain1 = getDomain3[0];

    var someObj = {};
    someObj.roteiro = [];

    var someObjN = {};
    someObjN.roteiroN = [];

    $("input:checkbox").each(function(){
        var $this = $(this);
        if($this.is(":checked")){
            someObj.roteiro.push($this.attr("id"));
        }else{
            someObjN.roteiroN.push($this.attr("id"));
        }
    });

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data:{empresa:empresa, 'roteiros': someObj.roteiro, 'roteirosN': someObjN.roteiroN, lista: lista, nome: nome, email: email, genero:genero, telefone:telefone, celular:celular, acao: acao},  
        success: function(resposta) {
            $('#cadastroDominio').modal('hide');
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar o contato.",
                    type: "warning"
                },
                function(){ 
                    window.history.go(-1);
                });
            }else if(resposta == 3){
                swal({
                    title: "Bom trabalho!",
                    text: "Porém, já existe um cadastro idêntico na lista principal. Contato foi inserido apenas no segmento escolhido.",
                    type: "warning"
                },
                function(){ 
                    window.history.go(-1);
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Contato cadastrado com sucesso!",
                    type: "success"
                },
                function(){ 
                    window.history.go(-1);
                });
            }
        }
    });
}

function cadastroTodosDoDominio(){


    var nome = $("#nome").val();
    var email = $("#email").val();
    var empresa = $("#empresa").val();
    var genero = $("#genero").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var lista = $("#lista").val();
    var acao = "CadastrarContato";


    var getDomain = email.split('@');
    var getDomain2 = getDomain[1];

    var getDomain3 = getDomain2.split('.');

    var Domain = '@'+getDomain3[0];
    var Domain1 = getDomain3[0];

    var someObj = {};
    someObj.roteiro = [];

    var someObjN = {};
    someObjN.roteiroN = [];

    $("input:checkbox").each(function(){
        var $this = $(this);
        if($this.is(":checked")){
            someObj.roteiro.push($this.attr("id"));
        }else{
            someObjN.roteiroN.push($this.attr("id"));
        }
    }); 

    

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data:{empresa:empresa, 'roteiros': someObj.roteiro, 'roteirosN': someObjN.roteiroN, lista: lista, nome: nome, email: email, genero:genero, telefone:telefone, celular:celular, acao: 'cadastrarContatosDominio', Domain:Domain},  
        success: function(resposta){
            $('#cadastroDominio').modal('hide');
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar o contato.",
                    type: "warning"
                },
                function(){ 
                    window.history.go(-1);
                });
            }else if(resposta == 3){
                swal({
                    title: "Bom trabalho!",
                    text: "Porém, já existe um cadastro idêntico na lista principal. Contato e contatos do mesmo dominio foram inseridos apenas nos segmentos escolhidos.",
                    type: "warning"
                },
                function(){ 
                    window.history.go(-1);
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Contato cadastrado e contatos do mesmo dominio atribuidos aos mesmos segmentos selecionados",
                    type: "success"
                },
                function(){ 
                    window.history.go(-1);
                });
            }
        }
    });
}

function EdicaoContato(idContato, lista){
    var nome = $("#nome").val();
    var email = $("#email").val();
    var genero = $("#genero").val();
    var empresa = $("#empresa").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var lista = $("#lista").val();
    var acao = "AlterarContato";

    var getDomain = email.split('@');
    var getDomain2 = getDomain[1];

    var getDomain3 = getDomain2.split('.');

    var Domain = '@'+getDomain3[0];
    var Domain1 = getDomain3[0];

    var someObj = {};
    someObj.roteiro = [];

    var someObjN = {};
    someObjN.roteiroN = [];

    $("input:checkbox").each(function(){
        var $this = $(this);
        if($this.is(":checked")){
            someObj.roteiro.push($this.attr("id"));
        }else{
            someObjN.roteiroN.push($this.attr("id"));
        }
    });


    if(email == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário preencher o campo e-mail.",
            type: "warning"
        });
    }else if(!isValidEmailAddress(email)){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário digitar um e-mail válido.",
            type: "warning"
        });
    }else{
        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data:{acao: 'verificarDominio', Domain:Domain},
            success: function(resposta){

                if(resposta == 0){
                    $.ajax({
                        url: "functions/newsletters.php",
                        type: "POST",
                        data:{'roteirosN': someObjN.roteiroN, 'roteiros': someObj.roteiro, lista: lista, nome: nome, email: email, genero:genero, telefone:telefone, celular:celular, idContato: idContato, empresa:empresa, acao: acao},  
                        success: function(resposta) { 
                            if(resposta == 2){
                                swal({
                                title: "Ops... Algo deu errado.",
                                    text: "Não foi possível alterar os dados do contato.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Ótimo trabalho!",
                                    text: "Os dados do contato foram alterados com sucesso.",
                                    type: "success"
                                },function(){ 
                                    window.history.go(-1);
                                });
                            }
                        }
                    });
                }else{
                    $('#dominio').html(Domain);
                    $('#edicaoDominio').modal('show');
                }
            }
        });
        
    }
}



function edicaoSomenteContato(idContato, lista){
    $("#edicaoDominio").modal('hide');

    var nome = $("#nome").val();
    var email = $("#email").val();
    var genero = $("#genero").val();
    var empresa = $("#empresa").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var lista = $("#lista").val();
    var acao = "AlterarContato";

    var getDomain = email.split('@')+'';
    var getDomain2 = getDomain[1];

    var getDomain3 = getDomain2.split('.')+'';

    var Domain = '@'+getDomain3[0];
    var Domain1 = getDomain3[0];

    var someObj = {};
    someObj.roteiro = [];

    var someObjN = {};
    someObjN.roteiroN = [];

    $("input:checkbox").each(function(){
        var $this = $(this);
        if($this.is(":checked")){
            someObj.roteiro.push($this.attr("id"));
        }else{
            someObjN.roteiroN.push($this.attr("id"));
        }
    });

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data:{'roteirosN': someObjN.roteiroN, 'roteiros': someObj.roteiro, lista: lista, nome: nome, email: email, genero:genero, telefone:telefone, celular:celular, idContato: idContato, empresa:empresa, acao: acao},  
        success: function(resposta){
            $('#cadastroDominio').modal('hide');
            if(resposta == 2){
                swal({
                title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar os dados do contato.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Os dados do contato foram alterados com sucesso.",
                    type: "success"
                },function(){ 
                    window.history.go(-1);
                });
            }
        }
    });
}

function edicaoTodosDoDominio(idContato){

    $('#edicaoDominio').modal('hide');

    var nome = $("#nome").val();
    var email = $("#email").val();
    var genero = $("#genero").val();
    var empresa = $("#empresa").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var lista = $("#lista").val();
    var acao = "AlterarContato";

    var getDomain = email.split('@');
    var getDomain2 = getDomain[1];

    var getDomain3 = getDomain2.split('.');

    var Domain = '@'+getDomain3[0];
    var Domain1 = getDomain3[0];

    var someObj = {};
    someObj.roteiro = [];

    var someObjN = {};
    someObjN.roteiroN = [];

    


    $("input:checkbox").each(function(){
        var $this = $(this);
        if($this.is(":checked")){
            someObj.roteiro.push($this.attr("id"));
        }else{
            someObjN.roteiroN.push($this.attr("id"));
        }
    }); 

    $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos realizando as alterações.<br> Você será avisado quando terminar.</h4>' });



    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data:{'roteirosN': someObjN.roteiroN, 'roteiros': someObj.roteiro, lista: lista, nome: nome, email: email, genero:genero, telefone:telefone, celular:celular, idContato: idContato, empresa:empresa, acao: 'alterarContatosDominio', Domain:Domain1},  
        success: function(resposta){
            $.unblockUI();

            if(resposta == 2){
                swal({
                title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar os dados do contato e atribuição de segmento dos contatos do dominio.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Os dados do contato e atribuição de segmento dos contatos do dominio foram alterados com sucesso",
                    type: "success"
                },function(){ 
                    window.history.go(-1);
                });
            }
        }
    });

}
/* ******************************* */

/*  *******************************
    FUNÇÃO QUE ENVIA UMA NEWSLETTER DE ROTEIROS PARA UM EMAIL ESPECÍFICO
    *******************************
    * Variáveis:
    * E-mail informado
    * ID da newsletter que será enviada
    * Ação: -
    * Arquivo final: functions/envioLocawebNews.php
*/
function enviarNewsLocaweb(){

    var emailNews = $("#emailNews").val();
    var id = $("#news").val();

    $.ajax({
        type: "POST",
        data: {id:id, emailNews:emailNews},
        url: 'functions/envioLocawebNews.php',
        success: function(resposta){
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado",
                    text: "Não conseguimos enviar a news.",
                    type: "warning"
                },function(){ 
                    $('#myModal').modal('hide');
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Enviamos a sua newsletter!",
                    type: "success"
                },function(){ 
                    $('#myModal').modal('hide');
                    location.reload();
                });
            }
        }
    });

}
/* ******************************* */

/*  *******************************
    FUNÇÃO QUE ENVIA UMA NEWSLETTER PARA UM EMAIL ESPECÍFICO
    *******************************
    * Variáveis:
    * E-mail informado
    * ID da newsletter que será enviada
    * Ação: -
    * Arquivo final: functions/envioLocawebNews.php
*/
function enviarNewsInfoLocaweb(){

    var emailNews = $("#emailNews").val();
    var id = $("#news").val();

    if(emailNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo e-mail não pode estar vazio.",
            type: "warning"
        });
    }else{

        $.ajax({
 
            type: "POST",
            data: {id:id, emailNews:emailNews},
            url: 'functions/envioLocawebNewsInfo.php',
            success: function(resposta){
                if(resposta == 1){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Enviamos a sua newsletter!",
                        imageUrl: "img/boneco.png"
                    },function(){ 
                        
                        location.reload();
                    });
                }else if(resposta == 3){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "OH NÃO!",
                        text: "SEM CRÉDITO! Adquira mais créditos.",
                        imageUrl: "img/semCredito.png"
                    },function(){ 
                        $('#comprarCreditos').modal('show');
                    });
                }else if(resposta == 2){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ops... Algo deu errado",
                        text: "Não conseguimos enviar sua newsletter",
                        imageUrl: "img/falha-envio.png"
                    },function(){ 
                        location.reload();
                    });
                }else{
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Enviamos a sua newsletter!",
                        imageUrl: "img/boneco.png"
                    },function(){ 
                        location.reload();
                    });
                }
            }
        });
    }

}

function enviarNewsRoteiroLocaweb(){
    var emailNews = $("#emailNews").val();
    var id = $("#news").val();

    if(emailNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo e-mail não pode estar vazio.",
            type: "warning"
        });
    }else{

        $.ajax({
 
            type: "POST",
            data: {id:id, emailNews:emailNews},
            url: 'functions/envioLocawebNews.php',
            success: function(resposta){
                if(resposta == 1){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Enviamos a sua newsletter!",
                        imageUrl: "img/boneco.png"
                    },function(){ 
                        
                        location.reload();
                    });
                }else if(resposta == 3){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "OH NÃO!",
                        text: "SEM CRÉDITO! Adquira mais créditos.",
                        imageUrl: "img/semCredito.png"
                    },function(){ 
                        $('#comprarCreditos').modal('show');
                    });
                }else if(resposta == 2){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ops... Algo deu errado",
                        text: "Não conseguimos enviar sua newsletter",
                        imageUrl: "img/falha-envio.png"
                    },function(){ 
                        location.reload();
                    });
                }else{
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Enviamos a sua newsletter!",
                        imageUrl: "img/boneco.png"
                    },function(){ 
                        location.reload();
                    });
                }
            }
        });
    }
}

function enviarNewsInfoLocawebAdm(){
    var emailNews = $("#emailNews").val();
    var id = $("#news").val();

    if(emailNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "O campo e-mail não pode estar vazio.",
            type: "warning"
        });
    }else{

        $.ajax({
 
            type: "POST",
            data: {id:id, emailNews:emailNews},
            url: 'functions/envioLocawebNewsInfoAdm.php',
            success: function(resposta){
                if(resposta == 1){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Enviamos a sua newsletter!",
                        imageUrl: "img/boneco.png"
                    },function(){ 
                        
                        location.reload();
                    });
                }else if(resposta == 3){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "OH NÃO!",
                        text: "SEM CRÉDITO! Adquira mais créditos.",
                        imageUrl: "img/semCredito.png"
                    },function(){ 
                        $('#comprarCreditos').modal('show');
                    });
                }else if(resposta == 2){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ops... Algo deu errado",
                        text: "Não conseguimos enviar sua newsletter",
                        imageUrl: "img/falha-envio.png"
                    },function(){ 
                        location.reload();
                    });
                }else{
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Enviamos a sua newsletter!",
                        imageUrl: "img/boneco.png"
                    },function(){ 
                        location.reload();
                    });
                }
            }
        });
    }
}
/* ******************************* */

/*  *******************************
    FUNÇÃO QUE IMPORTA CONTATOS PARA UMA LISTA 
    *******************************
    * Variáveis:
    * Arquivo .csv ou .txt recebido através do type file
    * ID da lista que receberá os contatos
    * Ação: ImportarContato
    * Arquivo final: functions/newsletters.php
*/
function VerificarTamanhoLista(lista){
    var arquivo = $("#listaContatos").val();
    var formato = arquivo.split(".");


    if(arquivo == "" || formato[1] != "csv" && formato[1] != "txt"){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Selecione um arquivo do tipo CSV ou TXT, para importação.",
            type: "error"
        });
    }else{
        var form = new FormData();
        form.append('arquivo', $("#listaContatos")[0].files[0]);
        form.append('lista', lista);
        form.append('acao', 'VerificarTamanhoLista');

        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data: form,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            success: function(resposta) { 

                if(resposta == 1){
                    swal({
                        html: true,
                        title: "Ops... Algo deu errado.",
                        text: "A sua lista contém mais que o limite aceito pelo sistema: <strong>5.000 contatos</strong>. Pedimos, por gentileza, que você faça a divisão da lista e tente novamente.",
                        type: "warning"
                        },function(){ 
                        window.location.reload();
                    });
                }else{
                    if(formato[1] == "csv"){
                        var form = new FormData();
                        form.append('arquivo', $("#listaContatos")[0].files[0]);
                        form.append('lista', lista);  

                        $.ajax({
                            url: "functions/ImportarContatos.php",
                            type: "POST",
                            data: form,
                            dataType: 'text',
                            cache: false,
                            contentType: false,
                            processData: false,
                            success: function(resposta) { 

                                alert(resposta);
                                
                                

                            }
                        });    
                    }else{
                        var form = new FormData();
                        form.append('arquivo', $("#listaContatos")[0].files[0]);
                        form.append('lista', lista);
                        form.append('acao', 'importarListaTXT');

                        $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos importando sua lista de contatos.<br> Você será avisado quando o envio terminar.</h4>' });


                        $.ajax({
                            url: "functions/newsletters.php",
                            type: "POST",
                            data: form,
                            dataType: 'text',
                            cache: false,
                            contentType: false,
                            processData: false,
                            success: function(resposta){
                                $.unblockUI();

                                $('#contatosLista').html(resposta);
                                $('#listaTXT').modal('show');
                            }
                        });
                    }
                }
                
                

            }
        });    
    }
}

function ImportarContatos(lista){

    
    var arquivo = $("#listaContatos").val();
    var formato = arquivo.split(".");

    if(arquivo == "" || formato[1] != "csv" && formato[1] != "txt"){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Selecione um arquivo do tipo CSV ou TXT, para importação.",
            type: "error"
        });
    }else{
 
        var form = new FormData();
        form.append('arquivo', $("#listaContatos")[0].files[0]);
        form.append('lista', lista);
        form.append('acao', 'ImportarContato');

        $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos importando sua lista de contatos.<br> Você será avisado quando o envio terminar.</h4>' });

        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data: form,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            success: function(resposta) {
                $.unblockUI();
                //se houve a importação = true
                var resp = resposta.indexOf("1") != -1;

                if(resposta != "0"){
                    swal({
                        html: true,
                        title: "Ótimo trabalho!",
                        text: "<div class='col-sm-12'><div class='row'>Contatos importados com sucesso!<p style='color: red;'><strong>Contatos existentes na lista principal não foram gravados</strong></p></div><div class='col-sm-12' style='text-align: left'><div class='row' style='margin-top: 20px;'><strong>Total de contatos gravados: </strong>"+resposta+" contatos",
                        type: "success"
                        },function(){ 
                        location.href='assistente-marketing.php#envioEmail';
                    });
                }else{
                    swal({
                        html: true,
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível realizar a importação.",
                        type: "warning"
                        },function(){ 
                        location.href='assistente-marketing.php#envioEmail';
                    });
                }
            }
        });    

    }
}



function gravarDadosListaTXT(lista){

    $('#listaTXT').modal('hide');
    $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos salvando sua lista de contatos em nosso banco de dados.<br> Você será avisado quando terminar.</h4>' });


    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {lista:lista, acao:'gravarContatosListaTXT'},
        dataType: 'text',
        success: function(resposta){
            $.unblockUI();

            if(resposta == 0){
                swal({
                    html: true,
                    title: "Contatos já existentes",
                    text: "Todos os contatos da lista importada já existem na lista principal",
                    type: "warning"
                    },function(){ 
                    location.href='assistente-marketing.php?id=cont';
                });
            }else{
                swal({
                    html: true,
                    title: "Ótimo trabalho!",
                    text: "<div class='col-sm-12'><div class='row'>Contatos importados com sucesso!<p style='color: red;'><strong>Contatos existentes na lista principal não foram gravados</strong></p></div><div class='col-sm-12' style='text-align: left'><div class='row' style='margin-top: 20px;'><strong>Total de contatos gravados: </strong>"+resposta+" contatos",
                    type: "success"
                    },function(){ 
                    location.href='assistente-marketing.php?id=cont';
                });
            }
        }
    });

}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE IMPORTA CONTATOS PARA UM SEGMENTO 
    *******************************
    * Variáveis:
    * Arquivo .csv ou .txt recebido através do type file
    * ID da lista que receberá os contatos
    * Ação: ImportarContato
    * Arquivo final: functions/newsletters.php
*/
function ImportarContatosSegmento(segmento){

    var arquivo = $("#listaContatos").val();
    var formato = arquivo.split(".");

    if(arquivo == "" || formato[1] != "csv" && formato[1] != "txt"){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Selecione um arquivo do tipo CSV ou TXT, para importação.",
            type: "error"
        });
    }else{
        var form = new FormData();
        form.append('arquivo', $("#listaContatos")[0].files[0]);
        form.append('segmento', segmento);
        form.append('acao', 'ImportarContatoSegmento');

        $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos importando sua lista de contatos.<br> Você será avisado quando o envio terminar.</h4>' });

        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data: form,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            success: function(resposta) {
                $.unblockUI();
                //se houve a importação = true
                var resp = resposta.indexOf("1") != -1;

                if(resposta != "0"){
                    swal({
                        html: true,
                        title: "Ótimo trabalho!",
                        text: "<div class='col-sm-12'><div class='row'>Contatos importados com sucesso!<p style='color: red;'><strong>Contatos existentes na lista principal não foram gravados</strong></p></div><div class='col-sm-12' style='text-align: left'><div class='row' style='margin-top: 20px;'><strong>Total de contatos gravados: </strong>"+resposta+" contatos",
                        type: "success"
                        },function(){ 
                        location.href='assistente-marketing.php#envioEmail';
                    });
                }else{
                    swal({
                        html: true,
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível realizar a importação.",
                        type: "warning"
                        },function(){ 
                        location.href='assistente-marketing.php#envioEmail';
                    });
                }
            }
        });    
    }
}

function gravarDadosSegmentoTXT(segmento){

    $('#listaTXT').modal('hide');
    var form = new FormData();
        form.append('arquivo', $("#listaContatos")[0].files[0]);
        form.append('segmento', segmento);
        form.append('acao', 'gravarContatosSegmentoTXT');

        $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos importando sua lista de contatos.<br> Você será avisado quando o envio terminar.</h4>' });

        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data: form,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            success: function(resposta) {

                var resp = resposta.split(' ');
                var prin = resp[0];
                var seg = resp[1];

                $.unblockUI();

                if(prin == 0 && seg == 0){
                    swal({
                        html: true,
                        title: "Contatos já existentes",
                        text: "Todos os contatos da lista importada já existem na lista principal e no segmento",
                        type: "warning"
                        },function(){ 
                        location.href='assistente-marketing.php?id=cont';
                    });
                }else{
                    swal({
                        html: true,
                        title: "Ótimo trabalho!",
                        text: "<div class='col-sm-12'><div class='row'>Contatos importados com sucesso!<p style='color: red;'><strong>Contatos existentes no segmento ou na lista principal não foram gravados</strong></p></div><div class='col-sm-12' style='text-align: left'><div class='row' style='margin-top: 20px;'><strong>Total de contatos gravados: </strong></div><div class='row' style='margin-top:10px;'><strong>Lista Principal: </strong>"+prin+" contatos</div><div class='row'><strong>Segmento: </strong>"+seg+" contatos</div>",
                        type: "success"
                        },function(){ 
                        location.href='assistente-marketing.php?id=cont';
                    });
                }

                


            }
        });

}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE VERIFICA A QUANTIDADE DE CREDITOS PARA O ENVIO PARA SEGMENTOS
    *******************************
    * Variáveis:
    * Licença, quantidade de emails válidos para o disparo
    * Ação: VerificarCreditos
    * Arquivo final: functions/newsletters.php
*/
function VerificarCreditosSegmentos(validos, roteiros, licenca, idNews){

    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var acao = 'VerificarCreditosSegmentos';

    $.ajax({
        type: "POST",
        data:{licenca:licenca, validos:validos, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 2){
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 3){
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                    type: "success"
                },function(){ 
                   window.location.href='functions/envioLocawebNewsInfoSegmento.php?roteiros='+roteiros+'&licenca='+licenca+'&id='+idNews;
                });
            }
        }
    });

}

function VerificarCreditosSegmentosAgendar(validos, roteiros, licenca, idNews){

    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var acao = 'VerificarCreditosSegmentosAgendar';

    $.ajax({
        type: "POST",
        data:{licenca:licenca, roteiros:roteiros, validos:validos, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                $('#myModal2').modal('hide');
                 $.ajax({
                        type: "POST",
                        data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                        url: 'functions/newsletters.php',
                        success: function(resposta){
                            swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
                        }
                    });
                
            }else if(resposta == 2){
                $('#myModal2').modal('hide');
                 $.ajax({
                        type: "POST",
                        data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                        url: 'functions/newsletters.php',
                        success: function(resposta){
                            swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
                        }
                    });
                
            }else if(resposta == 3){
                $('#myModal2').modal('hide');
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter está programada e será enviada",
                    type: "success"
                },function(){ 
                   window.location.href='functions/envioLocawebNewsInfoSegmentoAgendar.php?roteiros='+roteiros+'&licenca='+licenca+'&id='+idNews;
                });
            }else if(resposta == 4){

                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Parece que o segmento escolhido não possui contatos.",
                    type: "warning"
                },function(){ 
                    $.ajax({
                        type: "POST",
                        data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                        url: 'functions/newsletters.php',
                        success: function(resposta){
                            window.location.reload();
                        }
                    });
                });
                
            }
        }
    });

}

function VerificarCreditosSegmentosAgendamento(validos, roteiros, licenca, idNews){

    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var acao = 'VerificarCreditosSegmentos';

    $.ajax({
        type: "POST",
        data:{licenca:licenca,idNews: idNews, validos:validos, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 2){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 3){
                $('#myModal2').modal('hide');
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter está programada e será enviada",
                    type: "success"
                },function(){ 
                    window.location.href='functions/envioLocawebNewsInfoSegmentoAgendamento.php?roteiros='+roteiros+'&licenca='+licenca+'&id='+idNews;
                    
                });
            }
        }
    });

}

function VerificarCreditosLista(idLista, licenca, idNews){

    $('.modal3').modal('hide');

    var licenca = $("#licenca").val();
    var validos = $("#validos").val();
    var acao = 'VerificarCreditosLista';

    if(validos == 0){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Parece que sua lista não possui contatos.",
            type: "warning"
        });
    }else{
        $.ajax({
            type: "POST",
            data:{licenca:licenca, validos:validos, acao: acao},
            url: 'functions/newsletters.php',
            success: function(resposta) {
                // se resposta = 1, não há créditos: disparo travado
                // se resposta = 2, há créditos mas não são suficientes: disparo travado
                // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
                if(resposta == 1){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "OH NÃO!",
                        text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
                        imageUrl: "img/semCredito.png",
                        showCancelButton: true,
                        confirmButtonColor: "#fff",
                        confirmButtonText: "Cancelar",
                        cancelButtonText: "Comprar Créditos",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function (isConfirm) {
                        if (isConfirm) {

                        }else {
                            $('#comprarCreditos').modal('show');
                        }
                    });
                }else if(resposta == 2){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "OH NÃO!",
                        text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
                        imageUrl: "img/semCredito.png",
                        showCancelButton: true,
                        confirmButtonColor: "#fff",
                        confirmButtonText: "Cancelar",
                        cancelButtonText: "Comprar Créditos",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function (isConfirm) {
                        if (isConfirm) {

                        }else {
                            $('#comprarCreditos').modal('show');
                        }
                    });
                }else if(resposta == 3){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                        type: "success"
                    },function(){ 
                       window.location.href='functions/envioLocawebNewsInfoUnico.php?roteiros='+idLista+'&licenca='+licenca+'&id='+idNews;
                    });
                }
            }
        });
    }

}

function VerificarCreditosListaAgendar(idLista, licenca, id, idNews){
    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var validos = $("#validos").val();
    var acao = 'VerificarCreditosLista';

    if(validos == 0){
        swal({
            title: "Ops... Algo deu errado.",
            text: "Parece que a lista escolhida não possui contatos.",
            type: "warning"
        },function(){ 
            $.ajax({
                type: "POST",
                data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                url: 'functions/newsletters.php',
                success: function(resposta){
                    window.location.reload();
                }
            });
        });
    }else{
        $.ajax({
            type: "POST",
            data:{licenca:licenca, validos:validos, acao: acao},
            url: 'functions/newsletters.php',
            success: function(resposta) {
                
                // se resposta = 1, não há créditos: disparo travado
                // se resposta = 2, há créditos mas não são suficientes: disparo travado
                // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
                if(resposta == 1){
                    $('#myModal2').modal('hide');
                    $.ajax({
                        type: "POST",
                        data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                        url: 'functions/newsletters.php',
                        success: function(resposta){
                            swal({
                        title: "OH NÃO!",
                        text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
                        imageUrl: "img/semCredito.png",
                        showCancelButton: true,
                        confirmButtonColor: "#fff",
                        confirmButtonText: "Cancelar",
                        cancelButtonText: "Comprar Créditos",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function (isConfirm) {
                        if (isConfirm) {
                            
                        }else {
                            $('#comprarCreditos').modal('show');
                        }
                    });
                        }
                    });
                    
                }else if(resposta == 2){
                    $('#myModal2').modal('hide');

                    $.ajax({
                type: "POST",
                data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                url: 'functions/newsletters.php',
                success: function(resposta){
                    swal({
                        title: "OH NÃO!",
                        text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
                        imageUrl: "img/semCredito.png",
                        showCancelButton: true,
                        confirmButtonColor: "#fff",
                        confirmButtonText: "Cancelar",
                        cancelButtonText: "Comprar Créditos",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function (isConfirm) {
                        if (isConfirm) {

                        }else {
                            $('#comprarCreditos').modal('show');
                        }
                    });
                }
            });
                    
                }else if(resposta == 3){
                    $('#myModal2').modal('hide');
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Agora é só aguardar. Sua newsletter está programada e será enviada!",
                        type: "success"
                    },function(){ 
                       window.location.href='functions/envioLocawebNewsInfoUnicoAgendar.php?roteiros='+idLista+'&licenca='+licenca+'&id='+idNews;
                    });
                }
            }
        });
    }
}

function VerificarCreditosListaAgendamento(idLista, licenca, id, idNews){
    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var validos = $("#validos").val();
    var acao = 'VerificarCreditosLista';

    $.ajax({
        type: "POST",
        data:{licenca:licenca,idNews: idNews, validos:validos, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 2){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 3){
                $('#myModal2').modal('hide');
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter está programada e será enviada!",
                    type: "success"
                },function(){ 

                        window.location.href='functions/envioLocawebNewsInfoUnicoAgendamento.php?roteiros='+idLista+'&licenca='+licenca+'&id='+idNews;
                   
                });
            }
        }
    });
}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE INFORMA OS ENVIOS DISPONÍVEIS: Segmentos OU Listas
    *******************************
    * Variáveis: -
    * Ação: -
    * Arquivo final: -
*/
function ExibirOpcoesListas(){
    $('#campanha').modal('hide');

    var idNews = $("#idNews").val();

    swal({
        title: "Envio para Listas",
        text: "Você pode escolher enviar para uma lista ou para os segmentos!",
        imageUrl: "img/boneco.png",
        showCancelButton: true,
        confirmButtonColor: "#1ab394",
        confirmButtonText: "Enviar para os segmentos",
        cancelButtonText: "Enviar para a lista",
        closeOnConfirm: true,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            ListarEmailSegmentosInfoMultiplo(idNews);
        }else {
            ListarEmailListasInfoUnico(idNews);
        }
    });

}

function ReenviarCampanha(idNews,nome, licenca){
    $('.modal1').modal('hide');
    $('.ExibirOpcoesListasT2').modal('hide');

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarSegmentos'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            var classe;
            if(listas[0]["listaID"] == null){
                classe = 'display:none;';
            }

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui segmentos disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    if(i == 3){
                        var aimeudeus = 'margin-top:-2%;';
                    }
                    var nome = item.nome;
                    var nm = nome.substring(0, 19);

                    options += "<div class='col-md-3' style='"+aimeudeus+";height:80px'><div class='checkbox'><label><input type='checkbox' id='"+item.listaID+"'><span class='cr2'><i class='cr-icon fa fa-check'></i></span></label></div><h3 style='color: #676a6c;text-transform:uppercase;font-size:12px'>"+nm+"</h3></div>";
                })
                bootbox.dialog({
                    className: 'modal2',
                    message: '<div class="row">'+
                                '<div class="col-md-4">'+
                                    '<img src="img/boneco.png" style="height:140px">'+
                                '</div>'+
                                '<div class="col-md-8" style="color:#fff">'+
                                    '<h3 class="modal-title" style="color:#1ab394;">Reenviar Campanha</h3><br>'+
                                    '<h3 class="modal-title" style="color:#a4a9a8;font-weight: 700;font-size: 22px;">'+nome+'</h3><br>'+
                                    '<div class="form-group">'+
                                        '<div class="i-checks" >'+
                                            '<p style="color: #636060;"> <input type="radio" value="1" name="a" id="tipoEnvio1b" onclick="habilitacao2()" checked> <i></i> Todos os seus contatos </p>'+
                                        '</div>'+
                                        '<div class="i-checks" style="'+classe+'">'+
                                            '<p style="color: #636060;"> <input type="radio" value="2" name="a" id="tipoEnvio2b" onclick="habilitacao2()"> <i></i> Segmento específico </p>'+
                                        '</div>'+
                                    '</div></div></div><div class="row"><div class="col-md-1"></div><div class="col-md-10">'+
                                    '<div  id="selectSegmentob" style="display:none"><div class="row" style="color:#fff">'+
                                    options+
                                    '</div><div class="col-md-1"></div></div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default btnModal",
                            callback: function () {

                            }
                        },
                        success: {
                            label: "Enviar",
                            className: "btn-primary pull-left btnModal",
                            callback: function () {
                                var valorRadio =$("input[name='a']:checked").val();
                                var roteiros = $('#selectSegmento').val();
                                if( valorRadio == '1'){
                                    ListarEmailListaUnico(idNews,licenca);
                                }else if(valorRadio == '2'){
                                     var someObj = {};
                                    someObj.roteiro = [];


                                if($('input:checkbox:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar ao menos um segmento para realizar o envio.",
                                        type: "warning"
                                    });
                                }else{
                                    $("input:checkbox").each(function(){
                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someObj.roteiro.push($this.attr("id"));
                                        }

                                        
                                    }); 
                                        
                                    console.log(someObj.roteiro);

                                    VerificarCreditosSegmentoUnicoC(someObj.roteiro, licenca, idNews);
                                    }                                 
                                } else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar um tipo de envio.",
                                        type: "warning"
                                    });
                                    return false;
                                }                                
                            }
                        }
                    }
                });
            }
        }
    });

}
function habilitacao(){
      if(document.getElementById('tipoEnvio1').checked == true){
        document.getElementById('selectSegmento').disabled = true;
      }else if(document.getElementById('tipoEnvio2').checked == true){
        document.getElementById('selectSegmento').disabled = false;
      }
}

function habilitacao2(){
      if(document.getElementById('tipoEnvio1b').checked == true){
        document.getElementById('selectSegmentob').style.display = "none";
      }else if(document.getElementById('tipoEnvio2b').checked == true){
        document.getElementById('selectSegmentob').style.display = "block";
      }
}


function habilitacaoNews(){
      if(document.getElementById('tipoNews1').checked == true){
        document.getElementById('selectNews').disabled = true;
      }else if(document.getElementById('tipoNews2').checked == true){
        document.getElementById('selectNews').disabled = false;
      }
}

function EnviarCampanha(idNews,nome, licenca){

    $('.modal1').modal('hide');
    $('.ExibirOpcoesListasT2').modal('hide');

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarSegmentos'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            var classe;
            if(listas[0]["listaID"] == null){
                classe = 'display:none;';
            }

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui segmentos disponíveis para o disparo.");                
            }else{
                if(listas[0]["listaID"] == null){
                    options = '';
                }else{
                    $.each(jQuery.parseJSON(resposta), function(i, item) {
                        if(i == 3){
                            var aimeudeus = 'margin-top:-2%;';
                        }
                        var nome = item.nome;
                        var nm = nome.substring(0, 19);

                        options += "<div class='col-md-3' style='"+aimeudeus+";height:80px'><div class='checkbox'><label><input type='checkbox' id='"+item.listaID+"'><span class='cr2'><i class='cr-icon fa fa-check'></i></span></label></div><h3 style='color: #676a6c;text-transform:uppercase;font-size:12px'>"+nm+"</h3></div>";
                    })
                }
                
                bootbox.dialog({
                    className: 'modal2',
                    message: '<div class="row">'+
                                '<div class="col-md-4">'+
                                    '<img src="img/boneco.png" style="height:140px">'+
                                '</div>'+
                                '<div class="col-md-8" style="color:#fff">'+
                                    '<h3 class="modal-title" style="color:#1ab394;">Criar Campanha</h3><br>'+
                                    '<h3 class="modal-title" style="color:#a4a9a8;font-weight: 700;font-size: 22px;">'+nome+'</h3><br>'+
                                    '<div class="form-group">'+
                                        '<div class="i-checks" >'+
                                            '<p style="color: #636060;"> <input type="radio" value="1" name="a" id="tipoEnvio1b" onclick="habilitacao2()" checked> <i></i> Todos os seus contatos </p>'+
                                        '</div>'+
                                        '<div class="i-checks" style="'+classe+'">'+
                                            '<p style="color: #636060;"> <input type="radio" value="2" name="a" id="tipoEnvio2b" onclick="habilitacao2()"> <i></i> Segmento específico </p>'+
                                        '</div>'+
                                    '</div></div></div><div class="row"><div class="col-md-12">'+
                                    '<div  id="selectSegmentob" style="display:none"><div class="row" style="color:#fff">'+
                                    options+
                                    '</div></div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default btnModal",
                            callback: function () {

                            }
                        },
                        success: {
                            label: "Enviar",
                            className: "btn-primary pull-left btnModal",
                            callback: function () {
                                var valorRadio =$("input[name='a']:checked").val();
                                var roteiros = $('#selectSegmento').val();
                                if( valorRadio == '1'){
                                    ListarEmailListaUnico(idNews,licenca);
                                }else if(valorRadio == '2'){
                                     var someObj = {};
                                    someObj.roteiro = [];


                                if($('input:checkbox:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar ao menos um segmento para realizar o envio.",
                                        type: "warning"
                                    });
                                }else{
                                    $("input:checkbox").each(function(){
                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someObj.roteiro.push($this.attr("id"));
                                        }

                                        
                                    }); 
                                        
                                    console.log(someObj.roteiro);

                                    VerificarCreditosSegmentoUnicoC(someObj.roteiro, licenca, idNews);
                                    }                                                                     
                                } else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar um tipo de envio.",
                                        type: "warning"
                                    });
                                }                                
                            }
                        }
                    }
                });
            }
        }
    });

}

function CriarNovaCampanha2(licenca){

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarNewsCampanha'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui newsletters disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    options += '<option value="'+item.listaID+','+item.nome+'">'+item.nome+'</option>';
                }) 

                bootbox.dialog({
                    message:  '<div class="row">'+
                                '<div class="col-md-4">'+
                                    '<img src="img/boneco.png" style="height:140px">'+
                                '</div>'+
                                '<div class="col-md-8">'+
                                    '<h3 class="modal-title" style="color:#1ab394;">Criar campanhas de e-mail marketing</h3><br>'+
                                    '<h3 class="modal-title" style="color:#a4a9a8;">Selecione se deseja criar uma campanha usando uma nova newsletter ou se deseja utilizar uma já lançada em outra campanha.</h3><br>'+
                                    '<div class="form-group">'+
                                        '<div class="i-checks" >'+
                                            '<p> <input type="radio" value="1" name="a" id="tipoNews1" onclick="habilitacaoNews()" checked> <i></i> Criar uma nova newsletter </p>'+
                                        '</div>'+
                                        '<div class="i-checks">'+
                                            '<p> <input type="radio" value="2" name="a" id="tipoNews2" onclick="habilitacaoNews()"> <i></i> Usar newsletter existente</p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<select class="form-control m-b" id="selectNews" disabled style="padding: 3px 0px 5px;">'+
                                        '<option value="">Selecione uma newsletter...</option>'+
                                        options+
                                    '</select>'+
                                        '<div id="divPrincipal"></div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default btnModal",
                            callback: function () {
                                
                            }
                        },
                        success: {
                            label: "Continuar",
                            className: "btn-primary pull-left btnModal",
                            callback: function () {
                                var valorRadio =$("input[name='a']:checked").val();
                                var news = $('#selectNews').val();
                                if( valorRadio == '1'){
                                    location.href='/Dashboardv2/Newsletters/app/index.html';
                                }else if(valorRadio == '2'){
                                    if(news == ''){
                                        swal({
                                            title: "Ops... Algo deu errado.",
                                            text: "É necessário selecionar uma newsletter.",
                                            type: "error"
                                        });
                                        return false;
                                    }else{
                                        var dadosNews = news.split(',');
                                        var idNews = dadosNews[0];
                                        var nome = dadosNews[1];
                                        ExibirOpcoesListasT2(idNews,nome, licenca);
                                    }                                    
                                } else{
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar um tipo de envio.",
                                        type: "warning"
                                    });
                                }                                
                            }
                        }
                    }
                });
            }
        }
    });

}

function VerificarCreditosSegmentoUnico(roteiros, licenca, idNews){

  
    var acao = 'VerificarCreditosSegmentoUnico';

    $.ajax({
        type: "POST",
        data:{roteiros: roteiros,licenca:licenca, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {

                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
            }else if(resposta == 2){
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        
                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
            }else if(resposta == 3){
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                    type: "success"
                },function(){ 
                   window.location.href='functions/envioLocawebNewsInfoSegmento.php?roteiros='+roteiros+'&licenca='+licenca+'&id='+idNews;
                });
            }else if(resposta == 4){
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Parece que seu segmento não possui contatos.",
                    type: "warning"
                });
            }
        }
    });

}

function VerificarCreditosSegmentoUnicoC(roteiros, licenca, idNews){

  
    var acao = 'VerificarCreditosSegmentoUnicoC';

    $.ajax({
        type: "POST",
        data:{roteiros: roteiros,licenca:licenca, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {

                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
            }else if(resposta == 2){
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        
                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
            }else if(resposta == 3){
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                    type: "success"
                },function(){ 
                   window.location.href='functions/envioLocawebNewsInfoSegmento.php?roteiros='+roteiros+'&licenca='+licenca+'&id='+idNews;
                });
            }else if(resposta == 4){
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Parece que seu segmento não possui contatos.",
                    type: "warning"
                });
            }
        }
    });

}

function ExibirOpcoesListasT2(idNews,nome, licenca){
        var nomeFinal = "'"+nome+"'";

            bootbox.dialog({
                    className: 'ExibirOpcoesListasT2',
                    message: '<div class="row text-center">'+
                            '<div class="col-lg-12"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700;font-size: 22px;"><img src="img/boneco.png" style="height:140px"><br>Campanha de e-mail marketing</h2><br>'+
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group"> <p style="padding-left: 30px;padding-right: 30px;text-align: justify;">Envie suas promoções e informações a toda a sua base de clientes quando precisar. De forma muito prática e simples, o Taurus Multicanal oferece um sistema de envio de e-mail marketing integrado. O que facilita em muito a sua vida, não precisando ficar controlando vários sistemas. Entrega confiável e com o melhor custo benefício do mercado. Confira.</p></div> ' +
                                    '</form>' +
                                    '<div class="row" style="margin-left:2%;margin-right:-2%"><div class="col-lg-6"><a onclick="EnviarCampanha('+idNews+','+nomeFinal+','+licenca+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px" class="botaoFechar">Enviar campanha</button></a></div><div class="col-lg-6"><a onclick="AgendarCampanha('+idNews+','+nomeFinal+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px">Agendar envio</button></a></div></div></div></div>',
                                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default btnModal",
                            callback: function () {

                            }
                        }
                    }
                });
}

function ExibirOpcoesListasT(idNews,nome, licenca){
    var nomeFinal = "'"+nome+"'";

    swal({
        title: "Ótimo trabalho!",
        text: "Deseja enviar agora para sua lista de contatos? Você também pode fazer isso a qualquer momento.",
        imageUrl: "img/boneco.png",
        showCancelButton: true,
        confirmButtonColor: "#fff",
        confirmButtonText: "Cancelar",
        cancelButtonText: "Enviar para meus contatos",
        closeOnConfirm: true,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            
        }else{
            bootbox.dialog({
                    onEscape: true,
                    backdrop: true,
                    className: 'modal1',
                    message: '<div class="row text-center">'+
                            '<div class="col-lg-12"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700;font-size: 22px;"><img src="img/boneco.png" style="height:140px"><br>Campanha de e-mail marketing</h2><br>'+
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group"> <p style="padding-left: 30px;padding-right: 30px;text-align: justify;">Envie suas promoções e informações a toda a sua base de clientes quando precisar. De forma muito prática e simples, o Taurus Multicanal oferece um sistema de envio de e-mail marketing integrado. O que facilita em muito a sua vida, não precisando ficar controlando vários sistemas. Entrega confiável e com o melhor custo benefício do mercado. Confira.</p></div> ' +
                                    '</form>' +
                                    '<div class="row" style="margin-left:2%;margin-right:-2%"><div class="col-lg-6"><a onclick="EnviarCampanha('+idNews+','+nomeFinal+','+licenca+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px" class="botaoFechar">Enviar campanha</button></a></div><div class="col-lg-6"><a onclick="AgendarCampanha('+idNews+','+nomeFinal+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px">Agendar envio</button></a></div></div></div></div>',
                                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default",
                            callback: function () {

                            }
                        }
                    },callback: function (result) {
                        setTimeout(function() { $('.modal1').modal('hide'); }, 100);
                    }
                });
        }
    });
}


/* ******************************** */

/*  *******************************
    FUNÇÃO QUE LISTA OS SEGMENTOS DISPONÍVEIS PARA O DISPARO
    *******************************
    * Variáveis:
    * Segmentos: vinda do arquivo 'funcions/newsletters.php'
    * Verificação se há segmentos disponíveis ou não
    * Ação: -
    * Arquivo final: functions/envioLocawebNewsInfoSegmento.php
*/
function ListarEmailSegmentosInfoMultiplo(idNews){

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarSegmentos'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui segmentos disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    options += "<div class='row'><div class='col-md-3'></div><div class='col-md-2'><div class='checkbox'><label><input type='checkbox' value='"+item.quantidade+"' id='"+item.listaID+"'><span class='cr2'><i class='cr-icon fa fa-check'></i></span></label></div></div><div class='col-md-6'><h3 style='margin-top:12px;color: #676a6c;text-transform:uppercase'>"+item.nome+"</h3></div></div>";
                })

                bootbox.dialog({
                    message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                            '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione um ou mais segmentos para realizar o envio:</h4></div><br>'+
                            '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group" style="color:#fff"> ' +
                                            options+
                                        '</div> ' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default",
                            callback: function () {
                                swal({
                                    title: "Cancelado!",
                                    text: "A news não será enviada!",
                                    type: "error"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        },
                        success: {
                            label: "Enviar",
                            className: "btn-primary pull-left",
                            callback: function () {
                                var idLista = $("#idLista").val();
                                var licenca = $("#licenca").val();
                                    
                                var someObj = {};
                                someObj.roteiro = [];

                                var someValue = {};
                                someValue.roteiro = [];

                                if($('input:checkbox:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar ao menos um segmento para realizar o envio.",
                                        type: "warning"
                                    });
                                }else{
                                    $("input:checkbox").each(function(){
                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someObj.roteiro.push($this.attr("id"));
                                        }

                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someValue.roteiro.push($this.attr("value"));
                                        }
                                    }); 
                                        
                                    console.log(someObj.roteiro);

                                    VerificarCreditosSegmentos(someValue.roteiro, someObj.roteiro, licenca, idNews);

                                }
                            }
                        }
                    }
                });
            }
        }
    });

}

function ListarEmailSegmentosInfoMultiplo2(idNews){

}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE LISTA AS LISTAS DISPONÍVEIS PARA O DISPARO
    *******************************
    * Variáveis:
    * Segmentos: vinda do arquivo 'funcions/newsletters.php'
    * Verificação se há segmentos disponíveis ou não
    * Ação: -
    * Arquivo final: functions/envioLocawebNewsInfoSegmento.php
*/
function ListarEmailListasInfoUnico(idNews){

    $.ajax({
        url: "functions/roteiros.php",
        type: "POST",
        data: {acao: 'ListarEmailsLista'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            $.each(listas, function(i, item) {
                options += "<option value='"+item.listaID+"'>"+item.nome+"</option>";
            })

            bootbox.dialog({
                message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione uma lista para realizar o envio:</h4></div><br>'+
                        '<div class="row">  ' +
                            '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-2 control-label" for="name"></label> ' +
                                        '<div class="col-md-8"> ' +
                                            '<select class="form-control input-md" id="idLista"> ' +
                                                '<option value="">Selecione...</option>'+
                                                options+
                                            '</select>' +
                                        '</div> ' +
                                    '</div>' +
                                '</form>'+
                            '</div>'+
                        ' </div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default btnModal",
                        callback: function () {
                            swal({
                                title: "Cancelado!",
                                text: "A news não será enviada!",
                                type: "error"
                            },function(){ 
                                location.reload();
                            });
                        }
                    },
                    success: {
                        label: "Enviar",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var idLista = $("#idLista").val();
                            var licenca = $("#licenca").val();   

                            VerificarCreditosLista(idLista, licenca, idNews); 
                                
                            
                        }
                    }
                }
            });
        }
    });

}

function ListarEmailListaUnico(idNews, licenca){
    $(".modal2").modal('hide');

    $.ajax({
        url: "functions/roteiros.php",
        type: "POST",
        data: {acao: 'ListarEmailsListaUnica'},
        success: function(resposta) {            
            var idLista = resposta;
            VerificarCreditosLista(idLista, licenca, idNews); 
        }
    });

} 

function ListarEmailListasInfoUnicoAgendar(idNews){
    $('.modal3').modal('hide');

    $.ajax({
        url: "functions/roteiros.php",
        type: "POST",
        data: {acao: 'ListarEmailsListaUnica'},
        success: function(resposta) {
            
                            var id = $("#idNews").val();
                            var idLista = resposta;
                            var licenca = $("#licenca").val();   

                            console.log(idLista);

                            VerificarCreditosListaAgendar(idLista, licenca, id, idNews); 
                            
        }
    });

}


function ListarEmailListasUnicoAgendar(idNews){

    $.ajax({
        url: "functions/roteiros.php",
        type: "POST",
        data: {acao: 'ListarEmailsLista'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            $.each(listas, function(i, item) {
                options += "<option value='"+item.listaID+"'>"+item.nome+"</option>";
            })

            bootbox.dialog({
                message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione uma lista para realizar o envio:</h4></div><br>'+
                        '<div class="row">  ' +
                            '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-2 control-label" for="name"></label> ' +
                                        '<div class="col-md-8"> ' +
                                            '<select class="form-control input-md" id="idLista"> ' +
                                                '<option value="">Selecione...</option>'+
                                                options+
                                            '</select>' +
                                        '</div> ' +
                                    '</div>' +
                                '</form>'+
                            '</div>'+
                        ' </div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default btnModal",
                        callback: function () {
                            swal({
                                title: "Cancelado!",
                                text: "A news não será enviada!",
                                type: "error"
                            },function(){ 
                                location.reload();
                            });
                        }
                    },
                    success: {
                        label: "Enviar",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var id = $("#idNews").val();
                            var idLista = $("#idLista").val();
                            var licenca = $("#licenca").val();   

                            VerificarCreditosListaAgendamento(idLista, licenca, id, idNews); 
                                
                            
                        }
                    }
                }
            });
        }
    });

}


function ListarEmailListasInfoUnicoAdmin(){
    $.ajax({
        url: "functions/roteiros.php",
        type: "POST",
        data: {acao: 'ListarEmailsLista'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            $.each(listas, function(i, item) {
                options += "<option value='"+item.listaID+"'>"+item.nome+"</option>";
            })

            bootbox.dialog({
                message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione uma lista para realizar o envio:</h4></div><br>'+
                        '<div class="row">  ' +
                            '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-2 control-label" for="name"></label> ' +
                                        '<div class="col-md-8"> ' +
                                            '<select class="form-control input-md" id="idLista"> ' +
                                                '<option value="">Selecione...</option>'+
                                                options+
                                            '</select>' +
                                        '</div> ' +
                                    '</div>' +
                                '</form>'+
                            '</div>'+
                        ' </div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default",
                        callback: function () {
                            swal({
                                title: "Cancelado!",
                                text: "A news não será enviada!",
                                type: "error"
                            },function(){ 
                                location.reload();
                            });
                        }
                    },
                    success: {
                        label: "Enviar",
                        className: "btn-primary pull-left",
                        callback: function () {
                            var id = $("#idNews").val();
                            var idLista = $("#idLista").val();
                            var licenca = $("#licenca").val();   

                            $('#myModal2').modal('hide');
                            swal({
                                title: "Ótimo trabalho!",
                                text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                                type: "success"
                            },function(){ 
                               window.location.href='functions/envioLocawebNewsInfoUnico.php?roteiros='+idLista+'&licenca='+licenca+'&id='+id;
                            });
                                
                            
                        }
                    }
                }
            });
        }
    });
}
/* ******************************** */

/*  *******************************
    FUNÇÃO QUE EXCLUI UMA NEWS
    *******************************
    * Variáveis:
    * Id da newsletter que será excluída
    * Ação: ExcluirNewsletterInformativa
    * Arquivo final: functions/newsletters.php
*/
function ExcluirNewsletterInformativa(id){

    bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Newsletter",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var acao = 'ExcluirNewsletterInformativa';
     
            $.ajax({
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/newsletters.php',
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
                        }
                    },
                }
                
            });

}
/*  ******************************* */

/*  *******************************
    FUNÇÃO QUE ATIVA/INATIVA UMA NEWSLETTER
    *******************************
    * Variáveis:
    * Id da newsletter que será alterada
    * Status: 1 ou 0
    * Ação: AlterarStatusInformativa
    * Arquivo final: functions/newsletters.php
*/
function AlterarStatusNewsInformativa(ativo, id){

    var acao = 'AlterarStatusInformativa';

    $.ajax({
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
            if(resposta == 1){
                swal({
                    title: "Ótimo trabalho!",
                    text: "O status da news foi alterado com sucesso!",
                    type: "success"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar o status da news.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
         
            }
        }
    });

} 
/*  ******************************* */

function SolicitarAutorizacao(idLista){
    var assuntoEmail = $("#assuntoSol").val();
    var mensagemEmail = $('#mensagemSol').summernote('code');

    if(assuntoEmail == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar um assunto para o e-mail.",
            type: "warning"
        });
    }else if(mensagemEmail == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar a mensagem do e-mail.",
            type: "warning"
        });
    }else{
        $.ajax({
            url: "functions/criarSolicitacaoAutorizacao.php",
            type: "POST",
            data: {assuntoEmail:assuntoEmail, mensagemEmail:mensagemEmail, idLista:idLista},
            success: function(resposta) {
                if(resposta == 1){
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Sua confirmação de cadastro será enviada em instantes e você será informado por e-mail.",
                        type: "success"
                    },function(){ 
                        location.href = 'assistente-marketing.php#news';
                    });
                }else{
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não conseguimos enviar a sua solicitação para autorização de cadastro.",
                        type: "warning"
                    },function(){ 
                       location.href = 'assistente-marketing.php#news';
                   });
                }
            }
        });
    }
}

function SolicitarAutorizacaoEdit(idLista, licenca){
    var assuntoEmail = $("#assuntoSol").val();
    var mensagemEmail = $('#mensagemSol').summernote('code');

    if(assuntoEmail == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar um assunto para o e-mail.",
            type: "warning"
        });
    }else if(mensagemEmail == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar a mensagem do e-mail.",
            type: "warning"
        });
    }else{
        $.ajax({
            url: "functions/editarSolicitacaoAutorizacao.php",
            type: "POST",
            data: {assuntoEmail:assuntoEmail, mensagemEmail:mensagemEmail, idLista:idLista, licenca:licenca},
            success: function(resposta) {
                if(resposta == 1){
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Sua confirmação de cadastro foi alterada com sucesso.",
                        type: "success"
                    },function(){ 
                        location.href = 'assistente-marketing.php#news';
                    });
                }else{
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não conseguimos editar a sua solicitação para autorização de cadastro.",
                        type: "warning"
                    },function(){ 
                       location.href = 'assistente-marketing.php#news';
                   });
                }
            }
        });
    }
}

function ImportarNews(token){
    var status = $("input[name=toporodp]:checked").val();
    var nomeNews = $("#nomeNews").val();
    var validadeNews = $('#validadeNews').val();
    var validadeData = validadeNews.split("/");
    var dia = validadeData[0];
    var mes = validadeData[1];
    var ano = validadeData[2];

    var dataAtual = new Date();
    var dd = dataAtual.getDate();
    var mm = dataAtual.getMonth()+1; //January é 0!
    var yyyy = dataAtual.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var dataAtual = dd+'/'+mm+'/'+yyyy;

    if($("input[name=toporodp]:checked").length == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário selecionar um tipo de testeira.",
            type: "warning"});
    }else if(nomeNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar um nome para a newsletter.",
            type: "warning"});
    }else if(validadeNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar uma validade para a newsletter.",
            type: "warning"});
    }else if(ano <= yyyy && mes <= mm && dia <= dd){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário colocar uma validade no mínimo com o dia de hoje. Hoje é: "+dataAtual,
            type: "warning"});
    }else{
        var form = new FormData();
        form.append('nomeNews', nomeNews);
        form.append('validadeNews', validadeNews);
        form.append('status', status);
        form.append('token', token);
        form.append('acao', 'GravarNewsPlugin');
                $.ajax({
              url: "functions/newsletters.php",
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
                            text: "Newsletter configurada com sucesso!",
                            imageUrl: "img/config-menu.png",
                            imageSize: "120x120"
                        },function(){ 
                           location.href = 'assistente-marketing.php#news';
                       });
         
                    }else{
         
                        swal({
                              title: 'Oh não!',
                              text: 'Não foi possivel configurar sua Newsletter, tente novamente',
                              imageUrl: "img/falha-envio.png",
                              showConfirmButton: false,
                              timer: 1200,
                              imageSize: "120x120"
                            }).then(
                              function () {},
                              // handling the promise rejection
                              function (dismiss) {
                                if (dismiss === 'timer') {
                                  
                                }
                              }
                            )
                            return false;
         
                    }
                }
            });

    }

}

function ImportarNewsConteudo(token){
    var status = 0;
    var nomeNews = $("#nomeNews").val();
    var validadeNews = $('#validadeNews').val();
    var validadeData = validadeNews.split("/");
    var dia = validadeData[0];
    var mes = validadeData[1];
    var ano = validadeData[2];

    var dataAtual = new Date();
    var dd = dataAtual.getDate();
    var mm = dataAtual.getMonth()+1; //January é 0!
    var yyyy = dataAtual.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var dataAtual = dd+'/'+mm+'/'+yyyy;

    if($('#toporodp').is(":checked")){
        status = 1;
    }
    if(nomeNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar um nome para a newsletter.",
            type: "warning"});
    }else if(validadeNews == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar uma validade para a newsletter.",
            type: "warning"});
    }else if(ano <= yyyy && mes <= mm && dia <= dd){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário colocar uma validade no mínimo com o dia de hoje. Hoje é: "+dataAtual,
            type: "warning"});
    }else{
        var form = new FormData();
        form.append('nomeNews', nomeNews);
        form.append('validadeNews', validadeNews);
        form.append('status', status);
        form.append('token', token);
        form.append('acao', 'GravarNewsPlugin');
                $.ajax({
              url: "functions/newsletters.php",
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
                            text: "Newsletter configurada com sucesso!",
                            imageUrl: "img/config-menu.png",
                            imageSize: "120x120"
                        },function(){ 
                           location.href = 'gerar-conteudo.php';
                       });
         
                    }else{
         
                        swal({
                              title: 'Oh não!',
                              text: 'Não foi possivel configurar sua Newsletter, tente novamente',
                              imageUrl: "img/falha-envio.png",
                              showConfirmButton: false,
                              timer: 1200,
                              imageSize: "120x120"
                            }).then(
                              function () {},
                              // handling the promise rejection
                              function (dismiss) {
                                if (dismiss === 'timer') {
                                  
                                }
                              }
                            )
                            return false;
         
                    }
                }
            });

    }
}

function ExcluirContato(id, email){
    swal({
        title: "Você tem certeza?",
        text: "O contato será excluído.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fff",
        confirmButtonText: "Cancelar",
        cancelButtonText: "Deletar",
        closeOnConfirm: true,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            
        }else{
            var acao = 'ExcluirContato';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, email:email, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
                    console.log(resposta);
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O contato foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o contato.",
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

function ExcluirContatoSegmentoT(email, id){
    bootbox.dialog({
                        className: 'modalContato',
                        message: '<div class="row">'+
                                '<div class="col-md-3">'+
                                    '<img src="img/boneco_12.png" style="height:140px">'+
                                '</div>'+
                                '<div class="col-md-9">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Exclusão de contato</h2><br>'+
                                    '<div class="form-group">'+
                                        '<p style="padding-left: 30px;padding-right: 30px;text-align: justify;margin-top: -7px;">Clique em um dos botões abaixo para excluir o contato apenas do segmento ou de todos os cadastros.</p>'+
                                    '</div>'+
                                    '<div class="row"><div class="col-lg-6"><a onclick="ExcluirContatoSegmento('+id+')"><button class="btn btn-danger" style="margin-bottom:7px">Excluir do Segmento</button></a></div><div class="col-lg-6"><a onclick="ExcluirContatoGeral(\''+email+'\')"><button class="btn btn-danger" style="margin-bottom:7px;margin-left: -8px !important;">Excluir da Lista de Contatos</button></a></div></div></div></div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            
                        }
                    }
                }
                
            });
}

function ExcluirContatoT(id, email){
    bootbox.dialog({
                        className: 'modalContato',
                        message: '<div class="row">'+
                                '<div class="col-md-3">'+
                                    '<img src="img/boneco_12.png" style="height:140px">'+
                                '</div>'+
                                '<div class="col-md-9">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Exclusão de contato</h2><br>'+
                                    '<div class="form-group">'+
                                        '<p style="padding-left: 30px;padding-right: 30px;text-align: justify;margin-top: -7px;">Clique em um dos botões abaixo para excluir o contato apenas da lista ou de todos os cadastros.</p>'+
                                    '</div>'+
                                    '<div class="row"><div class="col-lg-6"><a onclick="ExcluirContato('+id+')"><button class="btn btn-danger" style="margin-bottom:7px">Excluir da Lista</button></a></div><div class="col-lg-6"><a onclick="ExcluirContatoGeral(\''+email+'\')"><button class="btn btn-danger" style="margin-bottom:7px;margin-left: -8px !important;">Excluir da Lista de Contatos</button></a></div></div></div></div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            
                        }
                    }
                }
                
            });
}

function ExcluirContatoSegmento(id){
    $(".modalContato").modal('hide');
            var acao = 'ExcluirContatoSegmento';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O contato foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o contato.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });
         
                    }
         
                }
         
            });
}

function ExcluirContatoGeral(email){
    $(".modalContato").modal('hide');
            var acao = 'ExcluirContatoGeral';
     
            $.ajax({
         
                type: "POST",
                data: {email:email, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O contato foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o contato.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });
         
                    }
         
                }
         
            });
}

function AlterarStatusSegmento(id, ativo){
    swal({
        title: "Você tem certeza?",
        text: "O status do segmento será alterado.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1bb394",
        confirmButtonText: "Sim, alterar status",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'AlterarStatusSegmento';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, ativo:ativo, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O status do segmento foi alterado com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível alterar o status do segmento.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });
         
                    }
         
                }
         
            });
        }else {
            swal("Cancelado", "O status do segmento não será alterado!", "error");
        }
    });
}

function ReativarContato(id){
    swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, reativar contato",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'AtivarContato';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O contato foi reativado com sucesso!",
                            type: "success"
                        },function(){ 
                           location.reload();
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível reativar o contato.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });
         
                    }
         
                }
         
            });
        }else {
            swal("Cancelado", "Seu contato não será reativado!", "error");
        }
    });
}

function EditarContato(id){
    $.ajax({
          type: "POST",
          data:{id:id, acao: 'EditarContatoListar'},  
          url: 'functions/newsletters.php',
          success: function(resposta) {

                var json = $.parseJSON(resposta);

                var Nome = json.Nome;
                var Email = json.Email;
                var Telefone = json.Telefone;
                var Celular = json.Celular;

        bootbox.dialog({
                message: '<div class="row">  ' +
                    '<div class="col-md-12 text-center"> ' +
                    '<img src="img/bonecomsg11.png" style="margin:0 auto;height: 110px;">'+
                    '<br><h4 style="color:#1ab394">Você pode editar as seguintes informações do seu contato:</h4><br>'+
                    '<form class="form-horizontal"> ' +
                        '<div class="form-group"> ' +
                         '<div class="col-sm-6">' +
                         '<label for="">Nome:</label>' +
                         '<input type="text" class="form-control" placeholder="Nome Exemplo" id="nomeContato" value="'+Nome+'">' +
                         '</div>' +
                         '<div class="col-sm-6">' +
                         '<label for="">E-mail:</label>' +
                         '<input type="text" class="form-control" placeholder="email@exemplo.com" id="emailContato" value="'+Email+'">' +
                         '</div>' +
                         '</div>' +
                         '<div class="form-group"> ' +
                         '<div class="col-sm-6">' +
                         '<label for="">Telefone:</label>' +
                         '<input type="text" class="form-control" placeholder="(XX) XXXX-XXXX" id="telefone" value="'+Telefone+'">' +
                         '</div>' +
                         '<div class="col-sm-6">' +
                         '<label for="">Celular:</label>' +
                         '<input type="text" class="form-control" placeholder="(XX) XXXXX-XXXX" id="celular" value="'+Celular+'">' +
                         '</div>' +
                         '</div>' +

                    '</form> </div>  </div>',
                buttons: {
                    success: {
                        label: "Alterar Contato",
                        className: "btn-primary pull-left",
                        callback: function () { 
                            var nomeContato = $("#nomeContato").val();
                            var emailContato = $("#emailContato").val();
                            var telefone = $("#telefone").val();
                            var celular = $("#celular").val();
                            var acao = 'EditarContato';

                              $.ajax({
         
                                    type: "POST",
                                    data: {id:id, nomeContato:nomeContato, emailContato:emailContato, telefone:telefone, celular:celular, acao:acao},
                                    url: 'functions/newsletters.php',
                                    success: function(resposta){
                             
                                        if(resposta == 1){
                             
                                            swal({
                                                title: "Ótimo trabalho!",
                                                text: "O contato foi alterado com sucesso!",
                                                type: "success"
                                            },function(){ 
                                               location.reload();
                                           });
                             
                                        }else{
                             
                                            swal({
                                                title: "Ops... Algo deu errado.",
                                                text: "Não foi possível alterar o contato.",
                                                type: "warning"
                                            },function(){ 
                                               location.reload();
                                           });
                             
                                        }
                             
                                    }
                             
                                });
                        
                    }
                    },
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            swal("Cancelado", "Seu contato não será editado!", "error");
                        }
                    }
                }
            });
        }
        });
}

function EditarContatoSegmento(id, lista){

    $.ajax({
          type: "POST",
          data:{id:id, lista:lista, acao: 'EditarContatoSegmentoListar'},  
          url: 'functions/newsletters.php',
          success: function(resposta) {

                var json = $.parseJSON(resposta);

                var Nome = json.Nome;
                var Email = json.Email;
                var Telefone = json.Telefone;
                var Celular = json.Celular;

        bootbox.dialog({
                message: '<div class="row">  ' +
                    '<div class="col-md-12 text-center"> ' +
                    '<img src="img/bonecomsg11.png" style="margin:0 auto;height: 110px;">'+
                    '<br><h4 style="color:#1ab394">Você pode editar as seguintes informações do seu contato:</h4><br>'+
                    '<form class="form-horizontal"> ' +
                        '<div class="form-group"> ' +
                         '<div class="col-sm-6">' +
                         '<label for="">Nome:</label>' +
                         '<input type="text" class="form-control" placeholder="Nome Exemplo" id="nomeContato" value="'+Nome+'">' +
                         '</div>' +
                         '<div class="col-sm-6">' +
                         '<label for="">E-mail:</label>' +
                         '<input type="text" class="form-control" placeholder="email@exemplo.com" id="emailContato" value="'+Email+'">' +
                         '</div>' +
                         '</div>' +
                         '<div class="form-group"> ' +
                         '<div class="col-sm-6">' +
                         '<label for="">Telefone:</label>' +
                         '<input type="text" class="form-control" placeholder="(XX) XXXX-XXXX" id="telefone" value="'+Telefone+'">' +
                         '</div>' +
                         '<div class="col-sm-6">' +
                         '<label for="">Celular:</label>' +
                         '<input type="text" class="form-control" placeholder="(XX) XXXXX-XXXX" id="celular" value="'+Celular+'">' +
                         '</div>' +
                         '</div>' +

                    '</form> </div>  </div>',
                buttons: {
                    success: {
                        label: "Alterar Contato",
                        className: "btn-primary pull-left",
                        callback: function () { 
                            var nomeContato = $("#nomeContato").val();
                            var emailContato = $("#emailContato").val();
                            var telefone = $("#telefone").val();
                            var celular = $("#celular").val();
                            var acao = 'EditarContatoSegmento';

                              $.ajax({
         
                                    type: "POST",
                                    data: {id:id, lista:lista, nomeContato:nomeContato, emailContato:emailContato, telefone:telefone, celular:celular, acao:acao},
                                    url: 'functions/newsletters.php',
                                    success: function(resposta){
                             
                                        if(resposta == 1){
                             
                                            swal({
                                                title: "Ótimo trabalho!",
                                                text: "O contato foi alterado com sucesso!",
                                                type: "success"
                                            },function(){ 
                                               location.reload();
                                           });
                             
                                        }else{
                             
                                            swal({
                                                title: "Ops... Algo deu errado.",
                                                text: "Não foi possível alterar o contato.",
                                                type: "warning"
                                            },function(){ 
                                               location.reload();
                                           });
                             
                                        }
                             
                                    }
                             
                                });
                        
                    }
                    },
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default",
                        callback: function () {
                            swal("Cancelado", "Seu contato não será editado!", "error");
                        }
                    }
                }
            });
        }
        });
}

function ExcluirSegmento(id){
    bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Segmento",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var acao = 'ExcluirSegmento';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O segmento foi excluído com sucesso!",
                            type: "success"
                        },function(){ 
                           window.location.href='assistente-marketing.php?id=cont';
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir o segmento.",
                            type: "warning"
                        },function(){ 
                           window.location.href='assistente-marketing.php?id=cont';
                       });
         
                    }
         
                }
         
            });
                        }
                    },
                }
                
            });
} 

function ExcluirContatosLista(id){
    bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Contatos",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var acao = 'ExcluirContatosLista';
            
            $.ajax({
                
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){

         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "Os contatos foram excluídos com sucesso!",
                            type: "success"
                        },function(){ 
                           window.location.reload();
                       });
         
                   
                }
         
            });
                        }
                    },
                }
                
            });

} 



function ExcluirContatosSegmento(id, lista){
    

    bootbox.dialog({
                        className: 'modalContato',
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>'+
                                    '<div class="row"><div class="col-lg-6"><a onclick="ExcluirContatoS('+id+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px">Excluir do segmento</button></a></div><div class="col-lg-6"><a onclick="ExcluirContatoTodos(\''+id+'\',\''+lista+'\')"><button class="btn btn-primary btnModal" style="margin-bottom:7px;margin-left: -8px !important;">Excluir da Lista de Contatos</button></a></div></div></div></div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    }
                }
                
            });
} 

function ExcluirContatoTodos(id, lista){
            $(".modalContato").modal('hide');

            var acao = 'ExcluirContatoTodos';

            $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos excluindo os contatos do segmento e da lista principal.<br> Você será avisado quando a exclusão terminar.</h4>' });
            
            $.ajax({
                
                type: "POST",
                data: {id:id, lista:lista, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
                        $.unblockUI();

                        swal({
                            title: "Ótimo trabalho!",
                            text: "Todos os contatos foram excluídos!",
                            type: "success"
                        },function(){ 
                           window.location.reload();
                       });
         
                    
         
                }
         
            });
}

function ExcluirContatoS(id){
            $(".modalContato").hide();
            var acao = 'ExcluirContatosSegmentoS';
            
            $.ajax({
                
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
                    console.log(resposta);

                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "Os contatos foram excluídos com sucesso do segmento!",
                            type: "success"
                        },function(){ 
                           window.location.reload();
                       });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir os contatos do segmento.",
                            type: "warning"
                        },function(){ 
                            window.location.reload();
                       });
         
                    }
         
                }
         
            });

}


function ExcluirCampanha(campanha){

    bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Campanha",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var acao = 'ExcluirCampanha';
     
            $.ajax({
         
                type: "POST",
                data: {campanha:campanha, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A campanha foi excluída com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir a campanha.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
         
                }
         
            });  
                        }
                    },
                }
                
            });
}

function ExcluirLista(lista){
    bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Lista",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var acao = 'ExcluirLista';

                $.ajax({
                    type: "POST",
                    data: {lista:lista, acao:acao},
                    url: 'functions/newsletters.php',
                    success: function(resposta){
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A lista foi excluída com sucesso!",
                            type: "success"
                        },function(){ 
                            window.location.reload();
                        });
                    }
                });
                        }
                    },
                }
                
            });
}

function CadastrarListaEmail(){
    
    var nome = "NOSSOS CONTATOS";
    var acao = "CadastrarLista";

    $.ajax({
          url: "functions/newsletters.php",
          type: "POST",
          data:{nome: nome, acao: acao},  
            success: function(resposta) {

                if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A lista foi cadastrada com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível cadastrar a lista.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }

            }
          });
  
  
}

function CadastrarSegmentoLista(){

bootbox.dialog({
    message:'<div class="row text-center"><div class="col-lg-4"><img src="img/config-menu.png" style="height:140px"></div>'+
                            '<div class="col-lg-8"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Cadastro de segmento</h2><br>'+
                                    '<p style="padding-bottom: 15px;text-align: center;">Informe abaixo o novo nome do segmento:</p>' +
                                    '<p><input type="text" placeholder="SEGMENTO ANIVERSÁRIO" id="emailNews" class="form-control"></p></div></div></div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Cadastrar",
                        className: "btn-primary pull-left",
                        callback: function () {
                            var nome = $("#emailNews").val();

                            if(nome == ''){
                                swal({
                                                        title: "Ops... Algo deu errado.",
                                                        text: "O campo nome do segmento não pode ficar em branco.",
                                                        type: "error"
                                                    });
                            }else{
    var acao = "CadastrarSegmentoNew";

    $.ajax({
          url: "functions/newsletters.php",
          type: "POST",
          data:{nome: nome, acao: acao},  
            success: function(resposta) {

                if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O Segmento foi cadastrado com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível cadastrar o segmento.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }

            }
          });
                            }
                            
                        }
                    }
                }
});
}

function EnviarEmailTeste(idNews, nome, licenca){
bootbox.dialog({
    message:'<div class="row text-center"><div class="col-lg-4"><img src="img/boneco.png" style="height:140px"></div>'+
                            '<div class="col-lg-8"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Enviar e-mail teste</h2><br>'+
                                    '<p style="padding-bottom: 15px;text-align: center;">Informe abaixo o e-mail que receberá sua newsletter:</p>' +
                                    '<p><input type="text" placeholder="teste@teste.com.br" id="emailNews" class="form-control"></p></div></div></div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Enviar",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var emailNews = $("#emailNews").val();

                            if(emailNews == ''){
                                swal({
                                    title: "Ops... Algo deu errado.",
                                    text: "É necessário informar um e-mail para o envio.",
                                    type: "error"
                                });
                                return false;
                            }else{
                               $.ajax({
 
                                type: "POST",
                                data: {idNews:idNews, emailNews:emailNews},
                                url: 'functions/envioLocawebNewsInfo.php',
                                success: function(resposta){
                                    if(resposta == 2){
                                        swal({
                                            title: "Ops... Algo deu errado",
                                            text: "Não conseguimos enviar sua newsletter",
                                            imageUrl: "img/falha-envio.png"
                                        },function(){ 
                                            location.reload();
                                        });
                                    }else{

                                        ExibirOpcoesListasT(idNews, nome, licenca);
                                    }
                                }
                            }); 
                            }
                            
                        }
                    }
                }
});
}


function OcultarNews(){
  var statusExibicao = 0;
  var acao = 'AlterarExibicaoNews';

  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição das Newsletters foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição das Newsletters.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExibirNews(){
  var statusExibicao = '1';
  var acao = "AlterarExibicaoNews";
  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição das Newsletters foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição das Newsletters.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function FiltrarRelatoriosPorDia(){
    var data1 = $("#data1").val();
    var data2 = $("#data2").val();

    var partesData = data1.split("/");
    var day = partesData[0];
    var mon = partesData[1];
    var yea = partesData[2];

    var partesData2 = data2.split("/");
    var day1 = partesData2[0];
    var mon1 = partesData2[1];
    var yea1 = partesData2[2];

    //window.location.href="assistente-marketing.php?data1="+data1+"&data2="+data2;
    var dataAtual = new Date();
    var dd = dataAtual.getDate();

    if(day == dd){
        var display = 'display:none';
        var text = 'Clique no botão abaixo para visualizar o relatório total. O relatório por campanha estará disponível em um dia útil.';
        var classe = 'float:right';
    }else{
        var display = 'display:block';
        var text = 'Clique em um dos botões abaixo para visualizar o relatório total ou por campanha.';
        var classe = '';
    }


    if(data1 == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário escolher uma data inicial para a busca.",
            type: "warning"
        });
    }else if(data2 == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário escolher uma data final para a busca.",
            type: "warning"
        });
    }else{
        $.ajax({
            url: "functions/newsletters.php",
            type: "POST",
            data: {data1:data1, data2:data2, acao: 'ListarCampanhasEnvioDia'},
            success: function(resposta) {
                if(resposta == 1){
                    window.location.href="assistente-marketing.php?data1="+data1+"&data2="+data2;
                }else{
                    bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-4">'+
                                    '<img src="img/boneco_lupa.png" style="height:140px">'+
                                '</div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Visualização do relatório</h2><br>'+
                                    '<div class="form-group">'+
                                        '<p style="padding-left: 30px;padding-right: 30px;text-align: justify;">'+text+'</p>'+
                                    '</div>'+
                                    '<div class="row"><div class="col-lg-6" style="'+display+'"><a onclick="MostrarCampanhasDisparadasDia('+day+','+mon+','+yea+','+day1+','+mon1+','+yea1+')"><button class="btn btn-primary" style="margin-bottom:7px">Relatório por campanha</button></a></div><div class="col-lg-6" style='+classe+'><a href="assistente-marketing.php?data1='+data1+'&data2='+data2+'&tipo=1"><button class="btn btn-primary" style="margin-bottom:7px;margin-left: 14px;">Relatório totalizado</button></a></div></div></div></div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            
                        }
                    }
                }
                
            });
        }
    }
});
    }
}



function MostrarCampanhasDisparadasDia(day, month, year, day1, month1, year1){
    var data1 = $("#data1").val();
    var data2 = $("#data2").val();
    $.ajax({
          url: "functions/newsletters.php",
          type: "POST",
          data: {day:day, month:month, year:year, day1:day1, month1:month1, year1:year1, acao: 'MostrarCampanhasDisparadasDia'},

          success: function(resposta) {

                var options;
                var listas = jQuery.parseJSON(resposta);

                $.each(listas, function(i, item) {
                    options += "<option value='"+item.nome+"'>"+item.nome+"</option>";
                })

        bootbox.dialog({
                message: '<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<div class="row"><div class="col-lg-4"></div><div class="col-lg-4"><img src="img/boneco_lupa.png" style="height:176px"></div></div><br><br>'+
           '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione uma newsletter, enviada no dia selecionado, para exibir o relatório:</h4></div><br>'+
                    '<form class="form-horizontal"> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-2 control-label" for="name">Newsletter</label> ' +
                    '<div class="col-md-10"> ' +
                    '<select class="form-control input-md" id="idSegmento"> ' +
                    '<option value="">Selecione...</option>'+
                    options+
                   '</select>' +
                    '</div> ' +
                    '</div>' +
                    '</form> </div>  </div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            swal({
                            title: "Cancelado!",
                            text: "O relatório não será exibido.",
                            type: "error"
                        },function(){ 
       location.reload();
   });
                        }
                    },
                    success: {
                        label: "Filtrar relatório",
                        className: "btn-primary pull-left",
                        callback: function () {
                            var segmento = $("#idSegmento").val();

                            BuscarRelatorioCampanha(data1, data2, segmento);
                        }
                    }
                }
            }
        );

        }


  });
}

function BuscarRelatorioCampanha(data1, data2, segmento){
    $.ajax({ 
        type: "POST",
        data: {segmento:segmento, acao:'BuscarRelatorioCampanha'},
        url: 'functions/newsletters.php',
        success: function(resposta){
            location.href="assistente-marketing.php?data1="+data1+"&data2="+data2+"&segmento="+segmento+"&tipo=2&idNews="+resposta;
        }
    });
    
}

function OpcoesImportacao(lista){
    // swal({
    //     title: "Importação de contatos",
    //     text: "Você pode escolher importar os contatos para sua lista ou para um segmento!",
    //     imageUrl: "img/bonecomsg9.png",
    //     showCancelButton: true,
    //     confirmButtonColor: "#1ab394",
    //     confirmButtonText: "Importar para um segmento",
    //     cancelButtonText: "Importar para a lista",
    //     closeOnConfirm: true,
    //     closeOnCancel: true
    // }, function (isConfirm) {
    //     if (isConfirm) {
    //         ExibirSegmentos();
    //     }else {
    //         location.href='importar-lista.php?lista='+lista
    //     }
    // });
    bootbox.dialog({
                    message: '<div class="row text-center"><img src="img/boneco_chave.png" style="height:156px"></div><br><br>'+
                            '<div class="row"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Importação de Contatos</h2></div><br>'+
                            '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group"> <p style="padding-left: 30px;padding-right: 30px;text-align: center;">Você pode escolher importar os contatos para sua lista ou para um segmento!</p></div> ' +
                                        '</div>' +
                                    '</form>' +
                                    '<div class="row text-center"><a onclick="ExibirSegmentos()"><button class="btn btn-primary" style="margin-bottom:7px">Importar para um segmento</button></a><br><a href="importar-lista.php?lista='+lista+'"><button class="btn btn-primary" style="margin-bottom:7px">Importar para a lista</button></a><br><a onclick="CancelarEnvioCampanha()"><button class="btn btn-danger">Cancelar</button></a></div>'+
                                '</div>' +
                            '</div>'
                });
}

function ExibirSegmentos(){
    $('#listas').modal('hide');

    $.ajax({
          url: "functions/newsletters.php",
          type: "POST",
          data: {acao: 'ListarSegmentos'},

          success: function(resposta) {

                var options;
                var listas = jQuery.parseJSON(resposta);

                $.each(listas, function(i, item) {
                    options += "<option value='"+item.listaID+"'>"+item.nome+"</option>";
                })

        bootbox.dialog({
                message: '<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<div class="row"><div class="col-lg-4"></div><div class="col-lg-4"><img src="img/boneco_chave.png"></div></div><br><br>'+
           '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione um segmento para realizar a importação:</h4></div><br>'+
                    '<form class="form-horizontal"> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-2 control-label" for="name">Segmento</label> ' +
                    '<div class="col-md-10"> ' +
                    '<select class="form-control input-md" id="idSegmento"> ' +
                    '<option value="">Selecione...</option>'+
                    options+
                   '</select>' +
                    '</div> ' +
                    '</div>' +
                    '</form> </div>  </div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            swal({
                            title: "Cancelado!",
                            text: "A lista não será importada!",
                            type: "error"
                        },function(){ 
       location.reload();
   });
                        }
                    },
                    success: {
                        label: "Importar",
                        className: "btn-primary pull-left",
                        callback: function () {
                            var segmento = $("#idSegmento").val();

                             location.href='importar-segmento.php?segmento='+segmento;
                        }
                    }
                }
            }
        );

        }


  });
}

function EditarSegmento(id){
bootbox.dialog({
    message:'<div class="row text-center"><div class="col-lg-4"><img src="img/config-menu.png" style="height:140px"></div>'+
                            '<div class="col-lg-8"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Edição de segmento</h2><br>'+
                                    '<p style="padding-bottom: 15px;text-align: center;">Informe abaixo o novo nome do segmento:</p>' +
                                    '<p><input type="text" placeholder="SEGMENTO ANIVERSÁRIO" id="emailNews" class="form-control"></p></div></div></div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Alterar",
                        className: "btn-primary pull-left",
                        callback: function () {
                            var nome = $("#emailNews").val();
    var acao = "AlterarSegmento";

                            if(nome == ''){
                                swal({
                                                        title: "Ops... Algo deu errado.",
                                                        text: "O campo nome do segmento não pode ficar em branco.",
                                                        type: "error"
                                                    });
                            }else{
                               $.ajax({
          url: "/Dashboardv2/functions/newsletters.php",
          type: "POST",
          data:{nome: nome, id:id, acao: acao},  
            success: function(resposta) {

                if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "O segmento foi alterado com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível alterar o segmento.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }

            }
          }); 
                            }
                            
                        }
                    }
                }
});
}

function CancelarEnvioCampanha(){
     $('#campanha2').modal('hide');
     $('#listas').modal('hide');
    swal({
                            title: "Cancelado!",
                            text: "A sua ação não será realizada.",
                            type: "error"
                        },function(){ 
       location.reload();
   });
}


function BootboxContent(nome,idNews){
    $('#campanha2').modal('hide');

    $('.ExibirOpcoesListasT2').modal('hide');
           var frm_str = '<div class="row">'+
                                '<div class="col-lg-3">'+
                                    '<img src="img/solicitacao.png">'+
                                '</div>'+
                                '<div class="col-lg-9">'+
                                    '<div class="col-lg-12">'+
                                        '<h4 class="modal-title" style="color:#1ab394;font-weight:700;margin-top: -3%;">Agende o envio da sua campanha</h4><br>'+
                                    '</div>'+
                                    '<div class="col-lg-12" style="margin-top: -4.6%;">'+
                                        '<label style="font-size: 24px;">'+nome+'</label><br>'+
                                    '</div>'+
                                    '<div class="col-lg-6">'+
                                        '<label for="date">Data</label>'+
                                        '<div class="input-group"><span class="input-group-addon"><i class="fa fa-calendar"></i></span><input id="date" class="date span2 form-control" placeholder="dd/mm/yyyy" type="text" name="date"></div>'+
                                    '</div>'+
                                    '<div class="col-lg-4" style="margin-left:-4%">'+
                                        '<label for="date">Horário</label>'+
                                        '<div class="input-group clockpicker" data-autoclose="true"><span class="input-group-addon"><span class="fa fa-clock-o"></span></span><input type="text" class="form-control" value="00:00" id="horarioAgendamento"></div>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="margin-top: 1%">'+
                                        '<br><a onclick="addHorario('+idNews+')" id="botaoHorario"><button class="btn btn-success">Agendar</button></a>'+
                                    '</div>'+
                                    '<br>'+
                                    '<div id="agendamentos" class="col-lg-12 esconderModal">'+
                                        '<br><label>Agendamento(s)</label><br>'+
                                        '<table id="grid" style="width:100%">'+
                                            '<tbody>'+
                                            '</tbody>'+
                                        '</table>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';

            var object = $('<div/>').html(frm_str).contents();

            object.find('.date').datepicker({
                format: 'dd/mm/yyyy',
                todayBtn: "linked",
                keyboardNavigation: false,
                forceParse: false,
                calendarWeeks: true,
                startDate: "0d",
                autoclose: true}).on('changeDate', function (ev) {
                   $(this).blur();
                   $(this).datepicker('hide');
            });

            object.find('.clockpicker').clockpicker();

             return object;
             return false;
        }

function addHorario(idNews){
        

        var dia = $("#date").val();
        var horario = $("#horarioAgendamento").val();

        if(dia == ''){
            swal({
                title: "Ops... Algo deu errado.",
                text: "É necessário escolher uma data.",
                type: "warning"
            });
        }else if(horario == ''){
            swal({
                title: "Ops... Algo deu errado.",
                text: "É necessário escolher um horário.",
                type: "warning"
            });
        }else{

        $("#agendamentos").addClass("mostrarModal").removeClass("esconderModal");
        $(".btn-primary").addClass("mostrarModal").removeClass("esconderModal");

            var $this = $( this );
            var tr = '<tr id="dados">'+
                '<td data-dt="'+dia+'" id="dataAgenda" style="width:28%">Dia '+dia+' </td>'+
                '<td data-hr="'+horario+'" class="data-hora" id="horarioAgenda"> - '+horario+'</td>'+
                '</tr>'
            $('#grid').find('tbody').append( tr );

            var hiddens = '<input type="hidden" name="date[]" value="'+dia+'" />'+
                '<input type="hidden" name="horarioAgendamento[]" value="'+horario+'" />'+

            $('#form_insert').find('fieldset').append( hiddens );


            $("#date").val("");
            $("#horarioAgendamento").val("00:00");

             $.ajax({ 
                type: "POST",
                data: {dia:dia, horario: horario,idNews: idNews, acao:'gravarCampanhaAgendada'},
                url: 'functions/newsletters.php',
            });
            return false;
        }
        
}


function VerificarCreditosAgendar(){
    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var validos = $("#validos").val();
    var idNews = $("#idNews").val();
    var acao = 'VerificarCreditos';

    $.ajax({
        type: "POST",
        data:{licenca:licenca, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            if(resposta > validos){
                swal({
                    title: "OH NÃO!",
                    text: "SEM CRÉDITO! Adquira mais créditos.",
                    imageUrl: "img/semCredito.png"
                },function(){ 
                    
                    $('#comprarCreditos').modal('show');
                });
            }else{
                AgendarCampanha(idNews);
                
                
            }
        }
    });
}

function AgendarCampanha(idNews,nome){
    $('#campanha2').modal('hide');
    $('.modal1').modal('hide');

    $('.ExibirOpcoesListasT2').modal('hide');

    bootbox.dialog({
        className: 'modal2',
        message: BootboxContent(nome,idNews),
        buttons: {
            cancel: {
                label: "Cancelar",
                className: "btn-default btnModal",
                callback: function () {
                       
                     $.ajax({
                                    type: "POST",
                                    data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                                    url: 'functions/newsletters.php'
                                });
                }
            },
            success: {
                label: "Continuar",
                className: "btn-primary pull-left esconderModal btnModal",
                callback: function () {
                ExibirListasAgendar(idNews);
                }
            }
        }
        
    });
}

function ExibirOpcoesListasAgendar(date, hora, idNews){
    $('#myModal2').modal('hide');
    swal({
        title: "Envio para Listas",
        text: "Você pode escolher enviar para uma lista ou para os segmentos!",
        imageUrl: "img/boneco.png",
        showCancelButton: true,
        confirmButtonColor: "#1ab394",
        confirmButtonText: "Enviar para os segmentos",
        cancelButtonText: "Enviar para a lista",
        closeOnConfirm: true,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            ListarEmailSegmentosInfoMultiploAgendar(date, hora, idNews);
        }else {
            ListarEmailListasInfoUnicoAgendar(date, hora, idNews);
        }
    });

}

function ExibirListasAgendar(idNews){
    $('.modal2').modal('hide');
    // swal({
    //     title: "Envio para Listas",
    //     text: "Você pode escolher enviar para uma lista ou para os segmentos!",
    //     imageUrl: "img/boneco.png",
    //     showCancelButton: true,
    //     confirmButtonColor: "#1ab394",
    //     confirmButtonText: "Enviar para os segmentos",
    //     cancelButtonText: "Enviar para a lista",
    //     closeOnConfirm: true,
    //     closeOnCancel: true
    // }, function (isConfirm) {
    //     if (isConfirm) {
    //         ListarEmailSegmentosMultiploAgendar(idNews);
    //     }else {
    //         ListarEmailListasUnicoAgendar(idNews);
    //     }
    // });
    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'QuantidadeListarSegmentos2'},
        success: function(resposta) {
            if(resposta == 1){
                var estilo = 'display:none';
                var row = 'col-lg-12';
                var row2 = '';
                var text = 'Não há segmentos disponíveis para o disparo. Você pode enviar agora mesmo para todos os seus contatos!';
            }else{
                var estilo = 'display:block';
                var row = 'col-lg-6';
                var row2 = 'col-lg-6';
                var text = 'Você pode escolher enviar para uma lista ou para os segmentos!';
            }

            bootbox.dialog({ 
                    className: 'modal3',
                    message: '<div class="row">'+
                                '<div class="col-md-12 text-center">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700"><img src="img/boneco.png" style="height:140px;"></h2><br>'+
                                    '<div class="form-group">'+
                                        '<p style="padding-left: 30px;padding-right: 30px;text-align: justify;">Envie suas promoções e informações a toda a sua base de clientes quando precisar. De forma muito prática e simples, o Taurus Multicanal oferece um sistema de envio de e-mail marketing integrado. O que facilita em muito a sua vida, não precisando ficar controlando vários sistemas. Entrega confiável e com o melhor custo benefício do mercado. <br><br>'+text+'</p>'+
                                    '</div>'+
                                    '<div class="row" style="margin-left:2%;margin-right:-2%"><div class="'+row2+'" style="'+estilo+'"><a onclick="ListarEmailSegmentosInfoMultiploAgendar('+idNews+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px">Enviar para os segmentos</button></a></div><div class="'+row+'"><a onclick="ListarEmailListasInfoUnicoAgendar('+idNews+')"><button class="btn btn-primary btnModal" style="margin-bottom:7px;margin-left: 14px;">Enviar para a lista</button></a></div></div></div></div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default btnModal",
                            callback: function () {
                                $.ajax({
                                    type: "POST",
                                    data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                                    url: 'functions/newsletters.php'
                                });
                            }
                        }
                    }
    });
        }
    });

    
}


function ListarEmailSegmentosInfoMultiploAgendar(idNews){
    $('.modal3').modal('hide');

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarSegmentos'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui segmentos disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    options += "<div class='row'><div class='col-md-3'></div><div class='col-md-2'><div class='checkbox'><label><input type='checkbox' value='"+item.quantidade+"' id='"+item.listaID+"'><span class='cr2'><i class='cr-icon fa fa-check'></i></span></label></div></div><div class='col-md-6'><h3 style='margin-top:12px;color: #676a6c;text-transform:uppercase'>"+item.nome+"</h3></div></div>";
                })

                bootbox.dialog({
                    className: 'modal4',
                    message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                            '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione um ou mais segmentos para realizar o envio:</h4></div><br>'+
                            '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group" style="color:#fff"> ' +
                                            options+
                                        '</div> ' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default btnModal",
                            callback: function () {
                                $.ajax({
                                    type: "POST",
                                    data:{idNews:idNews, acao: 'ExcluirCampanhaAgendada'},
                                    url: 'functions/newsletters.php'
                                });
                            }
                        },
                        success: {
                            label: "Enviar",
                            className: "btn-primary pull-left btnModal",
                            callback: function () {
                                var idLista = $("#idLista").val();
                                var licenca = $("#licenca").val();
                                    
                                var someObj = {};
                                someObj.roteiro = [];

                                var someValue = {};
                                someValue.roteiro = [];

                                if($('input:checkbox:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar ao menos um segmento para realizar o envio.",
                                        type: "warning"
                                    });
                                }else{
                                    $("input:checkbox").each(function(){
                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someObj.roteiro.push($this.attr("id"));
                                        }

                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someValue.roteiro.push($this.attr("value"));
                                        }
                                    }); 
                                        
                                    console.log(idNews);

                                    VerificarCreditosSegmentosAgendar(someValue.roteiro, someObj.roteiro, licenca, idNews);

                                }
                            }
                        }
                    }
                });
            }
        }
    });

}


function ListarEmailSegmentosMultiploAgendar(idNews){

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarSegmentos'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui segmentos disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    options += "<div class='row'><div class='col-md-3'></div><div class='col-md-2'><div class='checkbox'><label><input type='checkbox' value='"+item.quantidade+"' id='"+item.listaID+"'><span class='cr2'><i class='cr-icon fa fa-check'></i></span></label></div></div><div class='col-md-6'><h3 style='margin-top:12px;color: #676a6c;text-transform:uppercase'>"+item.nome+"</h3></div></div>";
                })

                bootbox.dialog({
                    message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                            '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione um ou mais segmentos para realizar o envio:</h4></div><br>'+
                            '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group" style="color:#fff"> ' +
                                            options+
                                        '</div> ' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default",
                            callback: function () {
                                swal({
                                    title: "Cancelado!",
                                    text: "A news não será enviada!",
                                    type: "error"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        },
                        success: {
                            label: "Enviar",
                            className: "btn-primary pull-left",
                            callback: function () {
                                var id = $("#idNews").val();
                                var idLista = $("#idLista").val();
                                var licenca = $("#licenca").val();
                                    
                                var someObj = {};
                                someObj.roteiro = [];

                                var someValue = {};
                                someValue.roteiro = [];

                                if($('input:checkbox:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar ao menos um segmento para realizar o envio.",
                                        type: "warning"
                                    });
                                }else{
                                    $("input:checkbox").each(function(){
                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someObj.roteiro.push($this.attr("id"));
                                        }

                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someValue.roteiro.push($this.attr("value"));
                                        }
                                    }); 
                                    VerificarCreditosSegmentosAgendamento(someValue.roteiro, someObj.roteiro, licenca, idNews);

                                }
                            }
                        }
                    }
                });
            }
        }
    });

}


function ExibirOpcoesListasRoteiros(){
    $('#myModal2').modal('hide');
    swal({
        title: "Envio para Listas",
        text: "Você pode escolher enviar para uma lista ou para os segmentos!",
        imageUrl: "img/boneco.png",
        showCancelButton: true,
        confirmButtonColor: "#1ab394",
        confirmButtonText: "Enviar para os segmentos",
        cancelButtonText: "Enviar para a lista",
        closeOnConfirm: true,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            ListarEmailSegmentosInfoMultiploRoteiro();
        }else {
            ListarEmailListasRoteiro();
        }
    });

}

function ListarEmailListasRoteiro(){
    $.ajax({
        url: "functions/roteiros.php",
        type: "POST",
        data: {acao: 'ListarEmailsLista'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            $.each(listas, function(i, item) {
                options += "<option value='"+item.listaID+"'>"+item.nome+"</option>";
            })

            bootbox.dialog({
                message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione uma lista para realizar o envio:</h4></div><br>'+
                        '<div class="row">  ' +
                            '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-2 control-label" for="name"></label> ' +
                                        '<div class="col-md-8"> ' +
                                            '<select class="form-control input-md" id="idLista"> ' +
                                                '<option value="">Selecione...</option>'+
                                                options+
                                            '</select>' +
                                        '</div> ' +
                                    '</div>' +
                                '</form>'+
                            '</div>'+
                        ' </div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default",
                        callback: function () {
                            swal({
                                title: "Cancelado!",
                                text: "A news não será enviada!",
                                type: "error"
                            },function(){ 
                                location.reload();
                            });
                        }
                    },
                    success: {
                        label: "Enviar",
                        className: "btn-primary pull-left",
                        callback: function () {
                            var id = $("#news").val();
                            var idLista = $("#idLista").val();
                            var licenca = $("#licenca").val();   

                            VerificarCreditosListaRoteiro(idLista, licenca, id); 
                                
                            
                        }
                    }
                }
            });
        }
    });
}

function VerificarCreditosListaRoteiro(idLista, licenca, id){

    var licenca = $("#licenca").val();
    var validos = $("#validos").val();
    var acao = 'VerificarCreditosListaRoteiro';

    $.ajax({
        type: "POST",
        data:{idLista:idLista, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        

                        
                    }else{
                        $('#comprarCreditos').modal('show');
                    }
                });
            }else if(resposta == 2){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
                    imageUrl: "img/semCredito.png",
                    showCancelButton: true,
                    confirmButtonColor: "#fff",
                    confirmButtonText: "Cancelar",
                    cancelButtonText: "Comprar Créditos",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {

                        
                    }else {
                        $('#comprarCreditos').modal('show');
                    }
                });
            }else if(resposta == 3){
                $('#myModal2').modal('hide');
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                    type: "success"
                },function(){ 
                   window.location.href='functions/envioLocawebNewsMultiplo_old.php?roteiros='+idLista+'&licenca='+licenca+'&id='+id;
                });
            }
        }
    });
}

function ListarEmailSegmentosInfoMultiploRoteiro(){

    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarSegmentos'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui segmentos disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    options += "<div class='row'><div class='col-md-3'></div><div class='col-md-2'><label class='checkbox-inline'><input type='checkbox' value='"+item.quantidade+"' id='"+item.listaID+"' class='i-checks'></label></div><div class='col-md-6'><h3 style='margin-top:12px;color: #676a6c;text-transform:uppercase'>"+item.nome+"</h3></div></div>";
                })

                bootbox.dialog({
                    message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                            '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione um ou mais segmentos para realizar o envio:</h4></div><br>'+
                            '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group" style="color:#fff"> ' +
                                            options+
                                        '</div> ' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default",
                            callback: function () {
                                swal({
                                    title: "Cancelado!",
                                    text: "A news não será enviada!",
                                    type: "error"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        },
                        success: {
                            label: "Enviar",
                            className: "btn-primary pull-left",
                            callback: function () {
                                var id = $("#news").val();
                                var idLista = $("#idLista").val();
                                var licenca = $("#licenca").val();
                                    
                                var someObj = {};
                                someObj.roteiro = [];

                                var someValue = {};
                                someValue.roteiro = [];

                                if($('input:checkbox:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar ao menos um segmento para realizar o envio.",
                                        type: "warning"
                                    });
                                }else{
                                    $("input:checkbox").each(function(){
                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someObj.roteiro.push($this.attr("id"));
                                        }

                                        var $this = $(this);
                                        if($this.is(":checked")){
                                            someValue.roteiro.push($this.attr("value"));
                                        }
                                    }); 
                                        
                                    console.log(someObj.roteiro);

                                    VerificarCreditosSegmentosRoteiros(someValue.roteiro, someObj.roteiro, licenca, id);

                                }
                            }
                        }
                    }
                });
            }
        }
    });

}

function VerificarCreditosSegmentosRoteiros(validos, roteiros, licenca, id){

    $('#campanha').modal('hide');

    var licenca = $("#licenca").val();
    var acao = 'VerificarCreditosSegmentos';

    $.ajax({
        type: "POST",
        data:{licenca:licenca,idNews: id, validos:validos, acao: acao},
        url: 'functions/newsletters.php',
        success: function(resposta) {
            // se resposta = 1, não há créditos: disparo travado
            // se resposta = 2, há créditos mas não são suficientes: disparo travado
            // se resposta = 3, há créditos igual ou superior a quantidade pro envio: disparo liberado
            if(resposta == 1){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você está sem crédito! Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 2){
                $('#myModal2').modal('hide');
                swal({
                    title: "OH NÃO!",
                    text: "Você até possui créditos, mas não é o suficiente para o disparo. Clique em Comprar créditos, caso deseje realizar a compra.",
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

                    }
                });
            }else if(resposta == 3){
                $('#myModal2').modal('hide');
                swal({
                    title: "Ótimo trabalho!",
                    text: "Agora é só aguardar. Sua newsletter será enviada em instantes!",
                    type: "success"
                },function(){ 
                   window.location.href='functions/envioLocawebNewsInfoSegmentoRoteiros.php?roteiros='+roteiros+'&licenca='+licenca+'&id='+id;
                });
            }
        }
    });

}

function ExcluirImagemCapa(token, licenca){
    var acao = 'ExcluirImagemCapa';


        $.ajax({
        type: "POST",
        data: {token:token, licenca:licenca, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado",
                    text: "Não conseguimos excluir a imagem.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Excluímos a imagem de capa da newsletter!",
                    type: "success"
                },function(){ 
                    location.reload();
                });
            }
        }
    });
}

function atualizarNewsletterDetalhes(token, licenca){
    var acao = 'atualizarNewsletterDetalhes';
    var makrup = $('#condicoesgerais').summernote('code');
    var validade = convertData($('#validade').val());
    var nome = $('#nome').val();
    var alinhamento = $("#alinhamento").val();
    var titulo = $("#titulo").val();
    var subtitulo = $("#subtitulo").val();


        $.ajax({
        type: "POST",
        data: {token:token, licenca:licenca, makrup: makrup, validade: validade, nome: nome, alinhamento: alinhamento, titulo:titulo, subtitulo:subtitulo, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado",
                    text: "Não conseguimos cadastrar os detalhes da newsletter.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Cadastramos os detalhes da newsletter com sucesso!",
                    type: "success"
                },function(){ 
                    location.href='news_view.php?id='+token+'&Tkn='+Tkn;
                });
            }
        }
    });
}

function atualizarNewsletterDetalhesEdit(token, licenca){
    var acao = 'atualizarNewsletterDetalhes';
    var makrup = $('#condicoesgerais').summernote('code');
    var validade = convertData($('#validade').val());
    var nome = $('#nome').val();
    var alinhamento = $("#alinhamento").val();
    var titulo = $("#titulo").val();
    var subtitulo = $("#subtitulo").val();


        $.ajax({
        type: "POST",
        data: {token:token, licenca:licenca, makrup: makrup, validade: validade, nome: nome, alinhamento: alinhamento, titulo:titulo, subtitulo:subtitulo, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado",
                    text: "Não conseguimos cadastrar os detalhes da newsletter.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Cadastramos os detalhes da newsletter com sucesso!",
                    type: "success"
                },function(){ 
                    location.href='news_view.php?id='+token+'&Tkn='+Tkn;
                });
            }
        }
    });
}
function atualizarNewsletterChamadas(token, licenca){
    var Tkn = $("#Tkn").val();
    var acao = 'atualizarNewsletterChamadas';
    var titulo = $('#titulo').val();
    var subtitulo = $("#subtitulo").val();


        $.ajax({
        type: "POST",
        data: {token:token, licenca:licenca, titulo:titulo, subtitulo:subtitulo, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado",
                    text: "Não conseguimos cadastrar as chamadas da newsletter.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Cadastramos as chamadas da newsletter com sucesso!",
                    type: "success"
                },function(){ 
                    location.href='news_view.php?id='+token+'&Tkn='+Tkn;
                });
            }
        }
    });
}


function atualizarNewsletterChamadasEdit(token, licenca){
    var Tkn = $("#Tkn").val();
    var acao = 'atualizarNewsletterChamadas';
    var titulo = $('#titulo').val();
    var subtitulo = $("#subtitulo").val();


        $.ajax({
        type: "POST",
        data: {token:token, licenca:licenca, titulo:titulo, subtitulo:subtitulo, acao:acao},
        url: 'functions/newsletters.php',
        success: function(resposta){
            if(resposta == 2){
                swal({
                    title: "Ops... Algo deu errado",
                    text: "Não conseguimos cadastrar as chamadas da newsletter.",
                    type: "warning"
                },function(){ 
                    location.reload();
                });
            }else{
                swal({
                    title: "Ótimo trabalho!",
                    text: "Cadastramos as chamadas da newsletter com sucesso!",
                    type: "success"
                },function(){ 
                    location.href='news_view.php?id='+token+'&Tkn='+Tkn;
                });
            }
        }
    });
}

function CriarNovaCampanha(){
    $.ajax({
        url: "functions/newsletters.php",
        type: "POST",
        data: {acao: 'ListarNewsCampanha'},
        success: function(resposta) {
            var options;
            var listas = jQuery.parseJSON(resposta);

            if(listas == '' || listas == ' '){
                bootbox.alert("Você não possui newsletters disponíveis para o disparo.");                
            }else{
                $.each(listas, function(i, item) {
                    options += "<div class='row'><div class='col-md-3'></div><div class='col-md-1'><div class='i-checks'><label> <input type='radio' value='"+item.listaID+"' name='a'> <i></i></label></div></div><div class='col-md-6'> <h4 style='color:#1ab394;text-transform:uppercase'>"+item.nome+"</h4><input type='hidden' value='"+item.nome+"' id='nomeNews'> </div></div>";
                })

                bootbox.dialog({
                    message: '<div class="row text-center"><img src="img/bonecomsg9.png"></div><br><br>'+
                            '<div class="row"><h4 class="modal-title text-center" style="color:#1ab394;font-weight:700">Selecione uma newsletter para criar sua campanha:</h4></div><br>'+
                            '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                    '<form class="form-horizontal"> ' +
                                        '<div class="form-group" style="color:#fff"> ' +
                                            options+
                                        '</div> ' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>',
                    buttons: {
                        cancel: {
                            label: "Cancelar",
                            className: "btn-default",
                            callback: function () {
                                swal({
                                    title: "Cancelado!",
                                    text: "A campanha não será criada!",
                                    type: "error"
                                },function(){ 
                                    location.reload();
                                });
                            }
                        },
                        success: {
                            label: "Continuar",
                            className: "btn-primary pull-left",
                            callback: function () {
                                var id = $("#news").val();
                                var idLista = $("#idLista").val();
                                var licenca = $("#licenca").val();
                                var nome = $("#nomeNews").val();
                                    
                                var someObj = {};
                                someObj.roteiro = [];

                                var someValue = {};
                                someValue.roteiro = [];

                                if($('input:radio:checked').length == ''){
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "É necessário selecionar uma newsletter para criar a campanha.",
                                        type: "warning"
                                    });
                                }else{
                                    var idNews = $('input:radio:checked').val();

                                    ExibirOpcoesListasT2(idNews,nome, licenca);

                                }
                            }
                        }
                    }
                });
            }
        }
    });
}

function InformarDadosDenuncia(){
    var email = $("#email").val();
    var data = $("#data").val();
    var nome = $("#nome").val();
    var acao = "FlagDenuncia";

    if(data == ''){
        swal({
            title: "Ops... Algo deu errado",
            text: "É necessário informar a data da denúncia.",
            type: "warning"
        });
    }else if(email == ''){
        swal({
            title: "Ops... Algo deu errado",
            text: "É necessário informar o e-mail.",
            type: "warning"
        });
    }else if(nome == ''){
        swal({
            title: "Ops... Algo deu errado",
            text: "É necessário informar o nome da campanha.",
            type: "warning"
        });
    }else{
        $.ajax({
            type: "POST",
            data:{email:email, acao: 'VerificarExisteEmail'},
            url: 'functions/newsletters.php',
            success: function(resposta) {
                if(resposta == 1){
                    swal({
                        title: "Hmmm... Já fizemos isso.",
                        text: "Esse e-mail já foi denunciado antes e os disparos não são mais realizados.",
                        imageUrl: "img/boneco-2.png"
                    },function(){ 
                        location.reload();
                    });
                }else if(resposta == 3){
                    swal({
                        title: "Hmmm... Você tem certeza?",
                        text: "Esse e-mail não consta na nossa base de dados. Pode ter sido excluído.",
                        imageUrl: "img/falha-envio.png"
                    },function(){ 
                        location.reload();
                    });
                }else{
                    $.ajax({
                        type: "POST",
                        data: {email:email, nome:nome, data:data, acao:"FlagDenuncia"},
                        url: 'functions/newsletters.php',
                        success: function(resposta){
                            if(resposta == 2){
                                swal({
                                    title: "Ops... Algo deu errado",
                                    text: "Não conseguimos alterar o status do e-mail.",
                                    type: "warning"
                                },function(){ 
                                    location.reload();
                                });
                            }else{
                                swal({
                                    title: "Ótimo trabalho!",
                                    text: "Alteramos o status do e-mail. Uma mensagem será enviada para o remetente informando da denúncia.",
                                    type: "success"
                                },function(){ 
                                    location.href = 'functions/enviarMensagemDenunciaEMKT.php?nome='+nome+'&email='+email;
                                });
                            }
                        }
                    });
                }
            }
        });
    }
}

function FiltrarRelatoriosPorDiaAdmin(){
    var data1 = $("#data1").val();
    var data2 = $("#data2").val();

    //window.location.href="assistente-marketing.php?data1="+data1+"&data2="+data2;
    if(data1 == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário escolher uma data inicial para a busca.",
            type: "warning"
        });
    }else if(data2 == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário escolher uma data final para a busca.",
            type: "warning"
        });
    }else{
        window.location.href="controle-dash.php?data1="+data1+"&data2="+data2;         
    }
}



        

        function ExcluirImagemTesteira(id, tipo){
            bootbox.dialog({
                        message: '<div class="row">'+
                                '<div class="col-md-2"></div>'+
                                '<div class="col-md-8">'+
                                    '<h2 class="modal-title text-center" style="color:#ed5565;font-weight:700"><img src="img/img-danger.png" style="margin: 0 auto"></h2><br>'+
                                    '<div class="form-group" style="margin-top: -11%;">'+
                                        '<h2 class="modal-title text-center" style="color: #575757e0;font-size: 30px;text-align: center;font-weight: 600;text-transform: none;position: relative;margin: 25px 0;padding: 0;line-height: 40px;display: block;">Você tem certeza?</h2><p style="    color: #797979;font-size: 16px;text-align: center !important;font-weight: 300;position: relative;text-align: inherit;float: none;margin: 0;padding: 0;line-height: normal;">Você não poderá desfazer essa ação.</p>'+
                                    '</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Excluir Testeira",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            var acao = 'ExcluirTesteira';
     
            $.ajax({
                type: "POST",
                data: {id:id, tipo:tipo, acao:acao},
                url: 'functions/newsletters.php',
                success: function(resposta){
                    if(resposta == 1){
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A imagem da testeira com sucesso!",
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
                        }
                    },
                }
                
            });
        }

        function TotalizarResultados(id, nome, email){
            bootbox.dialog({
                         message: '<div class="row">'+
                                '<div class="col-md-12 text-center">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700"><img src="img/boneco_lupa.png" style="height:140px;"></h2><br>'+
                                    '<div class="form-group"><p style="padding-left: 30px;padding-right: 30px;/* text-align: justify; */"></p><h3 style="color: #1ab394;">Totalize os resultados do envio da sua campanha de maneira rápida!</h3>Confirme os dados da campanha a ser totalizada:<p></p></div>'+
                                    '<div class="row" style="margin-left:2%;margin-right:-2%"><strong>Nome da campanha: </strong>'+nome+'<br><strong>E-mail utilizado:</strong> '+email+'</div>'+
                                '</div>'+
                              '</div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Totalizar Resultados",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            $.blockUI({ message: '<br><img src="img/solicitacao.png" /><br><br> <h2 style="color: #2f4050;"><strong>Por favor, aguarde...</strong></h2><h4>Estamos contabilizando os resultados.<br> Você será avisado quando a totalização acabar.</h4>' });
                            $.ajax({
                                type: "POST",
                                data: {id:id, nome:nome, email:email},
                                url: 'functions/totalizarResultadosManual.php',
                                success: function(resposta){
                                    $.unblockUI();
                                    var listas = jQuery.parseJSON(resposta);

                                    if(resposta == 2){
                                        bootbox.dialog({
                    message: '<div class="row">'+
                                '<div class="col-md-12 text-center">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700"><img src="img/bonecomsg4.png" style="height:140px;"></h2><br>'+
                                    '<div class="form-group"><p style="padding-left: 30px;padding-right: 30px;/* text-align: justify; */"></p><h3 style="color: #1ab394;">Ops... Algo deu errado.</h3><p>Não conseguimos atualizar os dados da campanha selecionada.</p></div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Voltar",
                            className: "btn-default",
                            callback: function () {
                                window.location.reload();
                            }
                        }
                    }
                });
                                    }else{
                                        if(listas[3] == 0){
                                            var aberturas = 'Nosso servidor não contabilizou aberturas.';
                                        }else{
                                            var aberturas = listas[3];
                                        }

                                        bootbox.dialog({
                    message: '<div class="row">'+
                                '<div class="col-md-12 text-center">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700"><img src="img/boneco_lupa.png" style="height:140px;"></h2><br>'+
                                    '<div class="form-group"><p style="padding-left: 30px;padding-right: 30px;/* text-align: justify; */"></p><h3 style="color: #1ab394;">Dados atualizados com sucesso!</h3>Confira abaixo as novas informações da campanha:<p></p></div>'+
                                    '<div class="row" style="margin-left:2%;margin-right:-2%"><strong>Nome da campanha: </strong>'+nome+'<br><strong>Total de envios:</strong> '+listas[0]+'<br><strong>Envios válidos:</strong> '+listas[2]+'<br><strong>Aberturas:</strong> '+aberturas+'<br><strong>E-mails inválidos:</strong> '+listas[1]+'</div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Voltar",
                            className: "btn-default",
                            callback: function () {
                                window.location.reload();
                            }
                        }
                    }
                });
                                    }
                                }
                            }); 
                        }
                    },
                }
                
            });
        }

        function GerarLink(idEnvio, nome){
            bootbox.dialog({
                className: 'modalLink',
    message:'<div class="row text-center"><div class="col-lg-4"><img src="img/boneco-2.png" style="height:140px"></div>'+
                            '<div class="col-lg-8"><h2 class="modal-title text-center" style="color:#1ab394;font-weight:700">Gerar Link Google</h2><br>'+
                                    '<p style="text-align: center;">Informe abaixo o link que deseja adicionar a sua campanha:</p>' +
                                    '<p><input type="text" placeholder="www.site.com.br/campanha" id="linkAcompanhamento" class="form-control"></p></div></div></div>',
                buttons: {
                    cancel: {
                        label: "Cancelar",
                        className: "btn-default pull-right btnModal",
                        callback: function () {
                            
                        }
                    },
                    success: {
                        label: "Gerar Link",
                        className: "btn-primary pull-left btnModal",
                        callback: function () {
                            
                            var link = $("#linkAcompanhamento").val();

                            if(link == ''){
                                swal({
                                    title: "Ops... Algo deu errado.",
                                    text: "É necessário informar um link.",
                                    type: "warning"
                                });
                                return false;
                            }else{
                                $(".modalLink").hide();
                                bootbox.dialog({
                    message: '<div class="row">'+
                                '<div class="col-md-12 text-center">'+
                                    '<h2 class="modal-title text-center" style="color:#1ab394;font-weight:700"><img src="img/boneco-2.png" style="height:140px;"></h2><br>'+
                                    '<div class="form-group"><p style="padding-left: 30px;padding-right: 30px;/* text-align: justify; */"></p><h3 style="color: #1ab394;">Link gerado com sucesso!</h3>Confira:<p></p></div>'+
                                    '<div class="row" style="margin-left:2%;margin-right:-2%;word-wrap: break-word;"><strong>Link: </strong><p>'+link+'?utm_source=newsletter4&utm_medium=email&utm_campaign='+escape(nome)+'</p></div>'+
                                '</div>'+
                              '</div>',
                    buttons: {
                        cancel: {
                            label: "Voltar",
                            className: "btn-default",
                            callback: function () {
                                window.location.reload();
                            }
                        }
                    }
                });
                            }

                        }
                    }
                }
});
        }

function BuscarContato(){
    var contato = $("#contatoSearch").val();
    var acao = 'BuscarContatoEspecifico';

    if(contato == ''){
        swal({
            title: "Ops... Algo deu errado.",
            text: "É necessário informar um e-mail para a busca.",
            type: "warning"
        });
    }else{

        $.ajax({
            type: "POST",
            data: {contato:contato, acao:'BuscarContatoEspecifico'},
            url: 'functions/newsletters.php',
            success: function(resposta){

                var json = $.parseJSON(resposta);

                var ID_Contato = json.ID_Contato;
                var ID_Status = json.ID_Status;
                var Bounce = json.Bounce;
                var DescricaoBounce = json.DescricaoBounce;
                var Empresa = json.Empresa;
                var ID_Lista = json.ID_Lista;

                if(json.Nome == null){
                    var Nome = '';
                }else{
                   var Nome = json.Nome; 
                }

                var Email = json.Email;

                if(json.Telefone == null){
                    var Telefone = '';
                }else{
                   var Telefone = json.Telefone; 
                }

                if(json.Celular == null){
                    var Celular = '';
                }else{
                   var Celular = json.Celular;
                }

                var div = '';

                if(ID_Status == '1'){

                    if(Bounce == '1'){
                        var status = '<button class="btn btn-default btn-xs" type="button">Inválido</button>';
                        var botoes = "<div class='col-lg-4'><a style='color:#5E5E5E' href='edicao-contato.php?id="+ID_Contato+"&lista="+ID_Lista+"'><button class='btn btn-info '>Editar</button></a></div>"+
                        "<div class='col-lg-4'>"+div+"</div>"+
                        "<div class='col-lg-4'><a style='color:#5E5E5E' onclick='ExcluirContato(\""+ID_Contato+","+Email+")'><button class='btn btn-danger'>Excluir</button></a></div>";
                    }else if(Bounce == '2'){
                        var status = '<button class="btn btn-danger btn-xs" type="button">Denúncia</button>';
                        var botoes = "<div class='col-lg-4'><a style='color:#5E5E5E' href='edicao-contato.php?id="+ID_Contato+"&lista="+ID_Lista+"'><button class='btn btn-info '>Editar</button></a></div>"+
                        "<div class='col-lg-4'>"+div+"</div>"+
                        "<div class='col-lg-4'><a style='color:#5E5E5E' onclick='ExcluirContato(\""+ID_Contato+","+Email+")'><button class='btn btn-danger'>Excluir</button></a></div>";
                    }else{
                        var status = '<button class="btn btn-primary btn-xs" type="button">Válido</button>';
                        var botoes = "<div class='col-lg-4'><a style='color:#5E5E5E' href='edicao-contato.php?id="+ID_Contato+"&lista="+ID_Lista+"'><button class='btn btn-info '>Editar</button></a></div>"+
                        "<div class='col-lg-4'>"+div+"</div>"+
                        "<div class='col-lg-4'><a style='color:#5E5E5E' onclick='ExcluirContato(\""+ID_Contato+","+Email+")'><button class='btn btn-danger'>Excluir</button></a></div>";
                    }
                    
                }else if(ID_Status == '2'){
                    var status = '<button class="btn btn-warning btn-xs" type="button">Descadastrado</button>';

                    var div = '<a onclick=ReativarContato("'+ID_Contato+'")><button class="btn btn-success" type="button">Reativar</button></a>';
                    var botoes = "<div class='col-lg-4'><a style='color:#5E5E5E' href='edicao-contato.php?id="+ID_Contato+"&lista="+ID_Lista+"'><button class='btn btn-info '>Editar</button></a></div>"+
                        "<div class='col-lg-4'>"+div+"</div>"+
                        "<div class='col-lg-4'><a style='color:#5E5E5E' onclick='ExcluirContato(\""+ID_Contato+","+Email+")'><button class='btn btn-danger'>Excluir</button></a></div>";
                }else if(ID_Status == '9'){
                    var status = '<button class="btn btn-info btn-xs" type="button">Não confirmado</button>';
                    var botoes = "<div class='col-lg-4'><a style='color:#5E5E5E' href='edicao-contato.php?id="+ID_Contato+"&lista="+ID_Lista+"'><button class='btn btn-info '>Editar</button></a></div>"+
                        "<div class='col-lg-4'>"+div+"</div>"+
                        "<div class='col-lg-4'><a style='color:#5E5E5E' onclick='ExcluirContato(\""+ID_Contato+","+Email+")'><button class='btn btn-danger'>Excluir</button></a></div>";
                }else if(ID_Status == '4'){
                    var status = '<button class="btn btn-danger btn-xs" type="button">Removido</button>';
                    var botoes = '';
                } 

                bootbox.dialog({
                    message: '<div class="row">  ' +
                        '<div class="col-md-12 text-center"> ' +
                        '<h3 style="color:#1ab394">Confira abaixo os dados do contato buscado:</h3><br>'+
                        '<div class="row">'+
                        '<div class="col-lg-3"><h4>Status</h4> '+status+'</div>'+ 
                        '<div class="col-lg-2"><h4>Nome</h4> '+Nome+'</div>'+
                        '<div class="col-lg-4"><h4>Email</h4> '+Email+'</div>'+
                        '<div class="col-lg-3"><h4>Telefone</h4> '+Telefone+'</div>'+ 
                        '</div>'+
                        '<div class="row"><div class="col-lg-12"><hr></div></div>'+
                        '<div class="row">'+botoes+
                        '</div>'+
                        ' </div>  </div>' 
                     
                });
            }
        }); 

    }
}