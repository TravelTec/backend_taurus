$('#cnpj').mask('00.000.000/0000-00');
$('#cep').mask('00000-000');
$('#inscricao').mask('000.000.000.000');
$('#telefone').mask('(00) 0000-0000');
$('#celular').mask('(00) 00000-0000');
$('#numero').mask('00000');
$('#dataNasc').mask('00/00/0000');
$('#uf').mask('AA');
$('#validade').mask('00/00/0000');
$('#vencimento').mask('00');

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};


function buscarCEP(){
    var cep =  $("#cep").val().replace(/[^\d]+/g,'');
     //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#endereco").val("...");
                $("#cidade").val("...");
                $("#bairro").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#endereco").val(dados.logradouro);
                        $("#cidade").val(dados.localidade);
                        $("#bairro").val(dados.bairro);
                        $("#uf").val(dados.uf);
                      } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        bootbox.alert("CEP não encontrado.");
                    }
                });
            }
        } //end if.        
} 


function CadastrarLicenca(){
	var fantasia = $("#fantasia").val();
    var razao = $("#razao").val();
    var cnpj = $("#cnpj").val();
    var inscricao = $("#inscricao").val();
    var cep = $("#cep").val();
    var endereco = $("#endereco").val();
    var numero = $("#numero").val();
    var complemento = $("#complemento").val();
    var cidade = $("#cidade").val();
    var estado = $("#uf").val();
    var bairro = $("#bairro").val();
    var genero = $("#genero").val();
   	var nome = $("#nome").val();
    var dataNasc = $("#dataNasc").val();
    var telefone = $("#telefone").val();
    var email = $("#email").val();
    var senha = $("#senha").val();
    var rptsenha = $("#rptsenha").val();
    var acao = "CadastrarLicenca";

	if (fantasia == '') {
        bootbox.alert("Preencha o campo Fantasia");
        return false;

    }else if(razao == ''){
        bootbox.alert("Preencha o campo Razao");
        return false;

    }else if(cnpj == ''){
        bootbox.alert("Preencha o campo CNPJ");
        return false;

    }else if(cep == ''){
        bootbox.alert("Preencha o campo CEP");
        return false;

    }else if(endereco == ''){
        bootbox.alert("Preencha o campo Endereço");
        return false;

    }else if(cidade == ''){
        bootbox.alert("Preencha o campo Cidade");
        return false;

    }else if(estado == ''){
        bootbox.alert("Preencha o campo Estado");
        return false;

    }else if(nome == ''){
        bootbox.alert("Preencha o campo Nome");
        return false;

    }else if(dataNasc == ''){
        bootbox.alert("Preencha o campo Data de Nascimento");
        return false;

    }else if(telefone == ''){
        bootbox.alert("Preencha o campo Telefone");
        return false;

    }else if(email == ''){
        bootbox.alert("Preencha o campo E-mail");
        return false;

    }else if(!isValidEmailAddress(email)){
        bootbox.alert("Digite um endereço de E-mail válido.");
        return false;

    }else if(senha == ''){
        bootbox.alert("Preencha o campo Senha");
        return false;

    }else if(senha.length < 6){
        bootbox.alert("Senha no minímo com 6 caracteres.");
        return false;

    }else if(senha != rptsenha){
	    bootbox.alert('As senhas não conferem, digite novamente.!!');
	    return false;
	}else{
		$.ajax({
    	  url: "/Dashboardv2/functions/licencas.php",
          type: "POST",
          data:{fantasia: fantasia, razao: razao, cnpj: cnpj, inscricao: inscricao, cep: cep, 
            endereco: endereco, numero: numero, complemento: complemento, cidade: cidade, estado: estado, bairro: bairro, 
            genero: genero, nome: nome, dataNasc: dataNasc,telefone: telefone, email: email, senha: senha, acao: acao},  
          	success: function(resposta) {

		  		bootbox.dialog({
                    message: "Licença cadastrada com sucesso!",
                    title: "Cadastro de Licença",
                    buttons: {
                        success: {
                            label: "Voltar",
                                className: "btn-success",
                                callback: function() {
                                    window.location.href = 'licencas.php';
                                }
                            }
                    }
                });

		  	}
          });

	}

}

function ExcluirLicenca(id){

    swal({
        title: "Cancelamento da Licença",
        text: "Deseja realmente cancelar a Licença?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, cancelar licença",
        cancelButtonText: "Não, sair",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'ExcluirLicenca';
   

                        $.ajax({
                            type: "POST",
                            data: {id:id, acao:acao},
                            url: 'functions/licencas.php',
                            success: function(resposta){
                                    swal({
                                        title: "Cancelamento da Licença",
                                        text: "A Licença foi cancelada",
                                        imageUrl: "img/config-menu.png"
                                            },function(){ 
                                       location.reload();
                                   });
                                }
                            });
                                

        }else{
            swal("Comando cancelado", "A Licença não será cancelada!", "error");
        }
    });
}

function VerificarDominio(id){
    var dominio = $("#dominio").val();
    var acao = 'VerificarDominio';

    $.ajax({
          url: "functions/licencas.php",
          type: "POST",
          data:{dominio: dominio, acao: acao},  
            success: function(resposta) {

                    if(resposta == 1){
                        swal({
                            title: "Verificação realizada!",
                            text: "Domínio não consta em nossa base de dados!",
                            type: "success"
                            },function(){ 
                                SalvarInfoContato(id);
                        });
                    }else{
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Domínio não pode ser utilizado. Já consta em nossos registros.",
                            type: "warning"
                            });
                    }
                
                    

                

            }
          });
}





function EditarLicenca(usuario,licenca){
	var fantasia = $("#fantasia").val();
    var razao = $("#razao").val();
    var cnpj = $("#cnpj").val();
    var inscricao = $("#inscricao").val();
    var cep = $("#cep").val();
    var endereco = $("#endereco").val();
    var numero = $("#numero").val();
    var complemento = $("#complemento").val();
    var cidade = $("#cidade").val();
    var estado = $("#uf").val();
    var genero = $("#genero").val();
    var nome = $("#nome").val();
    var dataNasc = $("#dataNasc").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var email = $("#email").val();
    var bairro = $("#bairro").val();
    var dominio = $("#dominio").val();
    var acao = 'EditarLicenca';

	if (fantasia == '') {
        swal({
          title: 'Campo inválido',
          text: 'Nome',
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

    }else if(razao == ''){
        swal({
          title: 'Campo inválido',
          text: 'Sobrenome',
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

    }else if(cnpj == ''){
        swal({
          title: 'Campo inválido',
          text: 'CPF',
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

    }else if(telefone == ''){
        swal({
          title: 'Campo inválido',
          text: 'Telefone',
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

    }else if(cep == ''){
        swal({
          title: 'Campo inválido',
          text: 'CEP',
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

    }else if(estado == ''){
        swal({
          title: 'Campo inválido',
          text: 'Estado',
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

    }else if(nome == ''){
        swal({
          title: 'Campo inválido',
          text: 'Nome',
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

    }else if(dataNasc == ''){
        swal({
          title: 'Campo inválido',
          text: 'Data de Nascimento',
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

    }else if(celular == ''){
        swal({
          title: 'Campo inválido',
          text: 'Celular',
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
    }else if(email == ''){
        swal({
          title: 'Campo inválido',
          text: 'E-mail',
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

    }else if(!isValidEmailAddress(email)){
        swal({
          title: 'E-mail inválido',
          text: 'Insira um e-mail válido',
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
         swal({
        title: "Edição da Licença",
        text: "Deseja salvar as alterções?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, salvar",
        cancelButtonText: "Não, cancelar",
        closeOnConfirm: false,
        closeOnCancel: false
            }, function (isConfirm) {
                if(isConfirm){
                    $.ajax({
                      url: "functions/licencas.php",
                      type: "POST",
                      data:{fantasia: fantasia,razao:razao,cnpj:cnpj,inscricao: inscricao,cep:cep,endereco:endereco,numero:numero,complemento:complemento,cidade:cidade,estado:estado,
                            genero:genero,nome:nome,dataNasc:dataNasc,telefone:telefone,celular:celular,email:email,acao:acao,usuario:usuario,licenca:licenca,bairro:bairro, dominio:dominio},  
                        success: function(resposta) {
                            if(resposta == 1){
                                swal({
                                    title: "Edição de Licença",
                                    text: "A Licença foi editada!",
                                    imageUrl: "img/config-menu.png",
                                    imageSize: "120x120"
                                        },function(){ 
                                            window.location.href = "licencas.php";
                                });
                            }else{
                                swal({
                                    html: true,
                                    title: "Edição de Licença",
                                    text: "Ocorreu erro ao editar licença:<br>"+resposta,
                                    imageUrl: "img/falha-envio.png",
                                    imageSize: "120x120"
                                    },function(){
                                        
                                        
                                        
                                    });
                            }

                        }
                      });
                }else{
                    swal("Cancelado", "A Licença não será editada", "error");
                }
            });
		

	}

}




function EditarStatusLicencas(ativo, id){
	var acao = 'EditarStatusLicencas';

	$.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: '/Dashboardv2/functions/licencas.php',
        success: function(resposta){
            bootbox.dialog({
                message: "Status alterado com sucesso!",
                title: "Status da Licença",
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

function EditarEmpresa(id){
    var fantasia = $("#fantasia").val();
    var razao = $("#razao").val();
    var cnpj = $("#cnpj").val();
    var inscricao = $("#inscricao").val();
    var cep = $("#cep").val();
    var endereco = $("#endereco").val();
    var numero = $("#numero").val();
    var complemento = $("#complemento").val();
    var cidade = $("#cidade").val();
    var uf = $("#uf").val();
    var bairro = $("#bairro").val();
    var acao = "EditarEmpresa";

    if (fantasia == '') {
        swal({
                title: "Ops...",
                text: "Campo Fantasia não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });

    }else if(razao == ''){
        swal({
                title: "Ops...",
                text: "Campo Razão Social não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });

    }else if(cnpj == ''){
        swal({
                title: "Ops...",
                text: "Campo CNPJ não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });
    }else if(cep == ''){
        swal({
                title: "Ops...",
                text: "Campo CEP não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });
    }else if(endereco == ''){
        swal({
                title: "Ops...",
                text: "Campo Endereço não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });
    }else if(cidade == ''){
        swal({
                title: "Ops...",
                text: "Campo Cidade não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });

    }else if(bairro == ''){
        swal({
                title: "Ops...",
                text: "Campo Bairro não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });

    }else if(uf == ''){
        swal({
                title: "Ops...",
                text: "Campo UF não pode ficar em branco.",
                type: "warning"
            },function(){ 

        });

    }else{
        $.ajax({
          url: "/Dashboardv2/functions/empresas.php",
          type: "POST",
          data:{id: id, fantasia: fantasia, razao: razao, cnpj: cnpj, inscricao: inscricao, cep: cep, 
            endereco: endereco, numero: numero, complemento: complemento, cidade: cidade, uf: uf, bairro:bairro, acao: acao},  
            success: function(resposta) {

                
                    swal({
                            title: "Ótimo trabalho!",
                            text: "Dados da empresa foram alterados com sucesso!",
                            type: "success"
                        },function(){ 
                            location.reload();
                    });

                

            }
          });

    }

}

function SalvarInfoContato(id){
    var fantasia = $("#fantasia").val();
    var razao = $("#razao").val();
    var email = $("#email").val();
    var dominio = $("#dominio").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var cep = $("#cep").val();
    var endereco = $("#endereco").val();
    var numero = $("#numero").val();
    var complemento = $("#complemento").val();
    var bairro = $("#bairro").val();
    var cidade = $("#cidade").val();
    var estado = $("#uf").val();
    var telefone = $("#telefone").val();
    var celular = $("#celular").val();
    var maisContatos = $('#maisContatos').summernote('code');
    var acao = 'SalvarInfoContato';

    $.ajax({
 
        type: "POST",
        data: {id:id, fantasia: fantasia, razao: razao, email:email,dominio: dominio, latitude:latitude, longitude:longitude, cep:cep, endereco:endereco, numero:numero, complemento:complemento, bairro:bairro, cidade:cidade, estado:estado, telefone:telefone, celular:celular,maisContatos: maisContatos, acao:acao},
        url: '/Dashboardv2/functions/contato.php',
        success: function(resposta){

                if(resposta == 1){
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Seus dados foram cadastrados com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'dados-empresa.php';
                   });
                }else{
     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível cadastrar os dados.",
                        type: "warning"
                    },function(){ 
                   });
     
                }

        }
 
    });
}
