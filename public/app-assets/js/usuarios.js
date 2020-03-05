$('#cnpj').mask('00.000.000/0000-00');
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');
$('#inscricao').mask('000.000.000.000');
$('#telefone').mask('(00)0000-0000');
$('#celular').mask('(00)00000-0000');
$('#numero').mask('00000');
$('#dataNasc').mask('00/00/0000');
$('#uf').mask('AA');

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function CadastrarUsuario(){
   	var genero = $("#genero").val();
   	var nome = $("#nome").val();
   	var cpf = $("#cpf").val();
   	var email = $("#email").val();
   	var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var dataNasc = $("#dataNasc").val();
    var senha = $("#senha").val();
    var rptsenha = $("#rptsenha").val();
    var empresa = $("#empresa").val();
    var tipo = $("#tipo").val();
    var acao = "CadastrarUsuarioSozinho";

	
    if(genero == ''){
         bootbox.alert("Escolha um Gênero");
         return false;

    }else if(nome == ''){
        bootbox.alert("Preencha o campo Nome");
        return false;

    }else if(cpf == ''){
        bootbox.alert("Preencha o campo CPF");
        return false;

    }else if(email == ''){
        bootbox.alert("Preencha o campo E-mail");
        return false;

    }else if(!isValidEmailAddress(email)){
        bootbox.alert("Digite um endereço de E-mail válido.");
        return false;

    }else if(telefone == ''){
        bootbox.alert("Preencha o campo Telefone");
        return false;

    }else if(empresa == ''){
        bootbox.alert("Relacione o usuário á uma empresa");
        return false;

    }else if(tipo == ''){
        bootbox.alert("Escolha o tipo do usuário");
        return false;

    }else if(empresa == ''){
        bootbox.alert("Escolha a empresa");
        return false;

    }else if(senha == ''){
         bootbox.alert("Preencha o campo Senha");
         return false;

    }else if(senha.length < 6){
         bootbox.alert("Campo Senha precisa ter no mínimo 6 caracteres");
         return false;

     }else if(rptsenha == ''){
         bootbox.alert("Preencha o campo Confirmação de Senha");
         return false;

     }else if(senha != rptsenha){
         bootbox.alert("As senhas precisam ser iguais");
         return false;

     }else{
		$.ajax({
    	  url: "functions/usuarios.php",
          type: "POST",
          data:{genero: genero, nome: nome,cpf: cpf, dataNasc: dataNasc,telefone: telefone, 
            celular:celular, email: email, acao: acao, empresa: empresa, tipo: tipo, senha:senha},  
          	success: function(resposta) {

                if(resposta == 1){
                    bootbox.dialog({
                    message: "Usuário cadastrado com sucesso!",
                    title: "Cadastro de Usuário",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.href = 'usuarios.php';
                                }
                            }
                    }
                });
                }else{
                    bootbox.dialog({
                    message: "Usuário não cadastro",
                    title: "Tente novamente",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.href = 'usuarios.php';
                                }
                            }
                    }
                });
                }
		  		

		  	}
          });

	}

}

function EditarUsuario(id){
   	var genero = $("#genero").val();
   	var nome = $("#nome").val();
   	var cpf = '00000000000';
   	var email = $("#email").val();
   	var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var dataNasc = '00000000';
    var senha = $("#senha").val();
    var rptsenha = $("#rptsenha").val();
    var tipo = $("#tipo").val();
    var acao = "EditarUsuarioSozinho";

	
    if(genero == ''){
         bootbox.alert("Escolha um Gênero");
         return false;

    }else if(nome == ''){
        bootbox.alert("Preencha o campo Nome");
        return false;

    }else if(email == ''){
        bootbox.alert("Preencha o campo E-mail");
        return false;

    }else if(!isValidEmailAddress(email)){
        bootbox.alert("Digite um endereço de E-mail válido.");
        return false;

    }else if(telefone == ''){
        bootbox.alert("Preencha o campo Telefone");
        return false;

    }else if(senha == ''){
        bootbox.alert("Preencha o campo Nova Senha");
        return false;

    }else if(senha.length < 6){
         bootbox.alert("Campo Senha precisa ter no mínimo 6 caracteres");
         return false;

     }else if(rptsenha == ''){
         bootbox.alert("Preencha o campo Confirmação de Senha");
         return false;

     }else if(senha != rptsenha){
         bootbox.alert("As senhas precisam ser iguais");
         return false;

     }else{
		$.ajax({
    	  url: "functions/usuarios.php",
          type: "POST",
          data:{id: id, genero: genero, nome: nome,cpf: cpf, tipo:tipo, dataNasc: dataNasc,telefone: telefone, celular:celular, email: email, acao: acao},  
          	success: function(resposta) {

		  		bootbox.dialog({
                    message: "Usuário alterado com sucesso!",
                    title: "Edição do Usuário",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                  	window.location.href = 'usuarios.php';
                                }
                            }
                    }
                });

		  	}
          });

	}

}

function CadastrarUsuarioEmpresa(empresa){
    var genero = $("#genero").val();
    var nome = $("#nome").val();
    var cpf = $("#cpf").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var dataNasc = $("#dataNasc").val();
    var senha = $("#senha").val();
     var rptsenha = $("#rptsenha").val();
    var tipo = $("#tipo").val();
    var acao = "CadastrarEmpresaUsuario";

    if(genero == ''){
         bootbox.alert("Escolha um Gênero");
         return false;

    }else if(nome == ''){
         bootbox.alert("Preencha o campo Nome");
         return false;

    }else if(email == ''){
         bootbox.alert("Preencha o campo E-mail");
         return false;

    }else if(!isValidEmailAddress(email)){
         bootbox.alert("Digite um endereço de E-mail válido");
         return false;

    }else if(telefone == ''){
         bootbox.alert("Preencha o campo Telefone");
         return false;

    }else if(senha == ''){
         bootbox.alert("Preencha o campo Senha");
         return false;

    }else if(senha.length < 6){
         bootbox.alert("Campo Senha precisa ter no mínimo 6 caracteres");
         return false;

     }else if(rptsenha == ''){
         bootbox.alert("Preencha o campo Confirmação de Senha");
         return false;

     }else if(senha != rptsenha){
         bootbox.alert("As senhas precisam ser iguais");
         return false;

     }else{
        $.ajax({
          url: "/Dashboardv2/functions/usuarios.php",
          type: "POST",
          data:{empresa: empresa, genero: genero, nome: nome,cpf: cpf, tipo:tipo, dataNasc: dataNasc,telefone: telefone, celular:celular, email: email, senha:senha, acao: acao},  
            success: function(resposta) {

                bootbox.dialog({
                    message: "Usuário cadastrado com sucesso!",
                    title: "Cadastro do Usuário",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.href = 'usuarios.php';
                                }
                            }
                    }
                });

            }
          });

     }
}

function ExcluirUsuario(id){
	 bootbox.dialog({
        title: "Exclusão do Usuário",
        message: '<div class="row">'+
                    '<div class="col-md-12">'+
                        '<span>Deseja realmente excluir o Usuário?</span>'+
                    '</div></div>',
        buttons: {
            success: {
                label: "Excluir",
                className: "btn-success",
                callback: function(){
                    RemoverUsuario(id);
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
function RemoverUsuario(id){
	var acao = 'ExcluirUsuario';
 
    $.ajax({
 
        type: "POST",
        data: {id:id, acao:acao},
        url: 'functions/usuarios.php',
        success: function(resposta){

 			bootbox.dialog({
                    message: "Usuário excluido com sucesso!",
                    title: "Exclusão do Usuário",
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

function EditarStatusUsuario(ativo, id){
	var acao = 'EditarStatusUsuario';

	$.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: '/Dashboardv2/functions/usuarios.php',
        success: function(resposta){
            bootbox.dialog({
                message: "Status alterado com sucesso!",
                title: "Status do Usuário",
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
