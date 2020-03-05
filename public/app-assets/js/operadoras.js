function CadastrarOperadora(){
	var operadora = $("#operadora").val();
    var identificador = $("#identificador").val();
    var acao = "CadastrarOperadora";

	if (operadora == '') {
        bootbox.alert("Preencha o campo Operadora");
        return false;

    }else if(identificador == ''){
        bootbox.alert("Preencha o campo Identificador");
        return false;

    }else{
		$.ajax({
    	  url: "/Dashboardv2/functions/operadoras.php",
          type: "POST",
          data:{operadora: operadora, identificador: identificador, acao: acao},  
          	success: function(resposta) {

		  		bootbox.dialog({
                    message: "Operadora cadastrada com sucesso!",
                    title: "Cadastro de Operadora",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                  	window.location.href = 'operadoras.php';
                                }
                            }
                    }
                });

		  	}
          });

	}

}
function EditarOperadora(id){
    var operadora = $("#operadora").val();
    var identificador = $("#identificador").val();
    var acao = "EditarOperadora";

    if (operadora == '') {
        bootbox.alert("Preencha o campo Operadora");
        return false;

    }else if(identificador == ''){
        bootbox.alert("Preencha o campo Identificador");
        return false;

    }else{
        $.ajax({
          url: "/Dashboardv2/functions/operadoras.php",
          type: "POST",
          data:{id: id, operadora: operadora, identificador: identificador, acao: acao},  
            success: function(resposta) {

                bootbox.dialog({
                    message: "Operadora alterada com sucesso!",
                    title: "Alteração da Operadora",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.href = 'operadoras.php';
                                }
                            }
                    }
                });

            }
          });

    }

}

function EditarStatusOperadora(ativo, id){
    var acao = 'EditarStatusOperadora';

    $.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: '/Dashboardv2/functions/operadoras.php',
        success: function(resposta){
            bootbox.dialog({
                message: "Status alterado com sucesso!",
                title: "Status da Operadora",
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


function ExcluirOperadora(id){
     bootbox.dialog({
        title: "Exclusão da Operadora",
        message: '<div class="row">'+
                    '<div class="col-md-12">'+
                        '<span>Deseja realmente excluir a Operadora?</span>'+
                    '</div></div>',
        buttons: {
            success: {
                label: "Excluir",
                className: "btn-success",
                callback: function(){
                    RemoverOperadora(id);
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
function RemoverOperadora(id){
    var acao = 'ExcluirOperadora';
 
    $.ajax({
 
        type: "POST",
        data: {id:id, acao:acao},
        url: '/Dashboardv2/functions/operadoras.php',
        success: function(resposta){
 
            if(resposta == 1){
 
                bootbox.dialog({
 
                    message: "Operadora excluída com sucesso.",
                    title: "Exclusão Operadora",
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
 
                bootbox.alert("Não foi possível excluir a Operadora.");
                $('.btn-salvar').prop('disabled',false);
 
            }
 
        }
 
    });
}