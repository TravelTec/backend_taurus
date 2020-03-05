function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

function gravarConfiguracaoSMTP(){
	
	var nome = $("#nome").val();
	var email = $("#email").val();
	var emailLocaweb = $("#emailLocaweb").val();	
	var porta = $("#porta").val();
	var host = $("#servidor").val();	
	var autenticacao = $(".autenticacao:checked").val();
	var usuario = $("#usuario").val();
	var senha = $("#senha").val();
	var smtpid = $("#smtpid").val();
	
	if(nome == ''){
		bootbox.alert("Preencha o campo nome.");
		return false;
	}else if(email == ''){
		bootbox.alert("Preencha o campo e-mail.");
		return false;
	}else if(!isValidEmailAddress(email)){
		bootbox.alert("Informe um e-mail válido.");
		return false;
	}else if(porta == ''){
		bootbox.alert("Preencha o campo porta.");
		return false;
	}else if(host == ''){
		bootbox.alert("Preencha o campo servidor.");
		return false;
	}else if(usuario == ''){
		bootbox.alert("Preencha o campo usuario.");
		return false;
	}else if(senha == ''){
		bootbox.alert("Preencha o campo senha.");
		return false;
	}else{
		$.ajax({	
		type: 'POST',
		url: "functions/configuracao.php",
        data: {
        	    nome: nome,
        	    email: email,
        		porta: porta,
        		host: host,
        		autenticacao: autenticacao,
      		  	usuario: usuario,
    			senha: senha,
    			smtpid: smtpid,
      			acao: "gravarSMTP"
    		},
		success: function(resposta){
				
				bootbox.confirm(resposta, function() {
			
				 	window.location.reload();

				}); 

			}
	});	

	}

}

function gravarConfiguracaoSMTPLocaweb(){
	var nomeLW = $("#nomeLW").val();
	var tokenLW = $("#tokenLW").val();

	if(nomeLW == ''){
		bootbox.alert("Preencha o campo nome.");
		return false;
	}else if(tokenLW == ''){
		bootbox.alert("Preencha o campo token.");
		return false;
	}else{
		$.ajax({	
			type: 'POST',
			url: "functions/configuracao.php",
	        data: {
	        	    nomeLW: nomeLW,
	        	    tokenLW: tokenLW,
	      			acao: "gravarSMTPLocaweb"
	    		},
			success: function(resposta){
					
					bootbox.confirm(resposta, function() {
			
					 	window.location.reload();

					}); 

				}
		});	
	}
}


function askSendSMTPTest(){


	bootbox.prompt("Digite o E-mail para teste", function(email) {                
	  if (email === null) {                                             
	    console.log('Cancel');                              
	  } else {
	   		sendSMTPTest(email);                         
	  }
	});


}

function enviarEmailTeste(){
	bootbox.dialog({
        title: "Teste de Envio",
        message: '<div class="row">'+
                    '<div class="col-md-12">'+
                        '<input class="form-control" type="text" id="emailLW" placeholder="Informe o e-mail">'+
                    '</div></div>',
        buttons: {
            success: {
                label: "Enviar",
                className: "btn-success",
                callback: function(){
                	var token = $("#tokenLW").val();
                    var email = $("#emailLW").val();

                    envioNoticiaLocaWeb(token, email);
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

function envioNoticiaLocaWeb(token, email){
    $.ajax({
 
        type: "POST",
        data: {token:token, email:email},
        url: 'functions/envioLocaweb.php',
        success: function(resposta){
               bootbox.alert(resposta);
        }
 
    });
}

function sendSMTPTest(email){

	var porta = $("#portaProprio").val();
	var host = $("#hostProprio").val();	
	var usuario = $("#usuProprio").val();
	var senha = $("#senhProprio").val();
	var sender = $("#usuProprio").val();

	//alert(porta+'+'+host+'+'+usuario+'+'+senha);
		$.ajax({	
		type: 'POST',
		url: "functions/configuracao.php",
        data: {
        		porta: porta,
        		host: host,
      		  	usuario: usuario,
    			senha: senha,
      		  	email: email,
      		  	sender: sender,
      			acao: "enviarTeste"
    		},
    		success: function(resposta){
    				bootbox.alert(resposta);
			}
    	});


}

function excluirServidorSMTP(id){
	bootbox.dialog({

		title: "Excluir Servidor SMTP",
		message: '<div class="row">'+
					'<div class="col-md-12">'+
						'<span>Deseja realmente excluir este servidor?</span>'+
					'</div>'+
				'</div>',
		buttons: {
			success: {
				label: "Excluir",
				className: "btn-danger",
				callback: function(){
					removerServidorSMTP(id);
				}
			},
			danger: {
				label: "Cancelar",
				className: "btn-default",
				callback: function(){

				}
			},
		}

	});
}

function removerServidorSMTP(id){

	$.ajax({

		type: "POST",
		data: {acao: "excluirServidorSMTP", id: id},
		url: "functions/configuracao.php",
		success: function(resposta){

			if(resposta == 1){
				bootbox.dialog({

					message: "O Servidor foi removido com sucesso!",
					title: "Remover Servidor",
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
				$('.btn-salvar').prop('disabled', false);
			}else{
				bootbox.alert("Não foi possível remover o servidor, tente novamente.");
                $('.btn-salvar').prop('disabled', false);
			}

		}

	});

}

function desconnectSMTP(id){
	bootbox.dialog({

		title: "Desconectar do Servidor SMTP",
		message: '<div class="row">'+
					'<div class="col-md-12">'+
						'<span>Deseja realmente se desconectar deste servidor?</span>'+
					'</div>'+
				'</div>',
		buttons: {
			success: {
				label: "Desconectar",
				className: "btn-danger",
				callback: function(){
					$.ajax({

						type: "POST",
						data: {acao: "desconnectSMTP", id: id},
						url: "functions/configuracao.php",
						success: function(resposta){

								bootbox.dialog({

									message: "O Servidor foi desconectado com sucesso!",
									title: "Desconectar Servidor",
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
								$('.btn-salvar').prop('disabled', false);
							

						}

					});
				}
			},
			danger: {
				label: "Cancelar",
				className: "btn-default",
				callback: function(){

				}
			},
		}

	});
}

function desconnectSMTPLWeb(id){
	bootbox.dialog({

		title: "Desconectar do Servidor SMTP da Locaweb",
		message: '<div class="row">'+
					'<div class="col-md-12">'+
						'<span>Deseja realmente se desconectar deste servidor?</span>'+
					'</div>'+
				'</div>',
		buttons: {
			success: {
				label: "Desconectar",
				className: "btn-danger",
				callback: function(){
					$.ajax({

						type: "POST",
						data: {acao: "desconnectSMTPLweb", id: id},
						url: "functions/configuracao.php",
						success: function(resposta){
								bootbox.dialog({

									message: "O Servidor foi desconectado com sucesso!",
									title: "Desconectar Servidor",
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
								$('.btn-salvar').prop('disabled', false);
							

						}

					});
				}
			},
			danger: {
				label: "Cancelar",
				className: "btn-default",
				callback: function(){

				}
			},
		}

	});
}

function gravarEscolhaSMTP(){
	var tipoSMTP = 0;

	if($('#locaweb').is(":checked")) {
        tipoSMTP = 1;
    }else if($('#proprio').is(":checked")) {
        tipoSMTP = 2;
    }

	if(tipoSMTP == ''){
		bootbox.alert('Necessário selecionar um tipo de SMTP.');
		return false;
	}else{
		$.ajax({

			type: "POST",
			data: {acao: "gravarEscolhaSMTP", tipoSMTP: tipoSMTP},
			url: "functions/configuracao.php",
			success: function(resposta){

					bootbox.dialog({
						message: "O Servidor foi escolhido com sucesso!",
						title: "Escolher Servidor de Envio",
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
					$('.btn-salvar').prop('disabled', false);
				
			}
		});
	}
}


function PausarouExcluirLicenca(id){

	var licenca = id;

	swal({
        title: "Pausar ou Excluir Licença",
        text: "Após confirmar, todos seus créditos serão perdidos e o seu site entra em manutenção, deseja continuar?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, pausar licença",
        cancelButtonText: "Não, cancelar",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            $.ajax({

				type: "POST",
				data: {id : id},
				url: "functions/cancelarLicenca.php",
				success: function(resposta){

					window.location.href = 'login.php?r='+resposta;
					
				}
			});
        }else{
            swal("Cancelado", "A Licença não será pausada", "error");
        }
    });
	

}

function SalvarConfigSeo(){
	var analytics = $("#analytics").val();
	var numero = $("#numeroAcompanhamento").val();
	var acao = "SalvarConfigSeo";

	$.ajax({
            type: "POST",
            url: 'functions/configuracao.php',
            data: {analytics:analytics, numero:numero, acao: acao},
            success: function(resposta){
               if(resposta == 1){
                swal({
                    title: "Ótimo trabalho!",
                    text: "O SEO foi cadastrado com sucesso!",
                    type: "success"
                },function(){ 
       				location.reload();
   				});
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar o SEO.",
                    type: "warning"
                },function(){ 
			       	location.reload();
			   	});
 
            }
        }
    });
}


function SalvarConfigSeoKey(){
	var metakey = $("#metakey").val();
	var metadesc = $("#metadesc").val();
	var tituloSite = $("#tituloSite").val();
	var autorSite = $("#autorSite").val();
	var categoriaSite = $("#categoriaSite").val();
	var contentLanguage = $("#contentLanguage").val();
	var contentType = $("#contentType").val();
	var generator = $("#generator").val();
	var robots = $("#robots").val();
	var geoRegion = $("#geoRegion").val();
	var googleBot = $("#googleBot").val();
	var languageSite = $("#languageSite").val();
	var ratting = $("#ratting").val();
	var revisitAfter = $("#revisitAfter").val();
	var acao = "SalvarConfigSeoKey";

	$.ajax({
            type: "POST",
            url: 'functions/configuracao.php',
            data: {
            		metakey:metakey, 
            		metadesc:metadesc,
            		tituloSite: tituloSite,
            		autorSite: autorSite,
            		categoriaSite: categoriaSite,
            		contentLanguage: contentLanguage,
            		contentType: contentType,
            		generator: generator,
            		robots: robots,
            		geoRegion: geoRegion,
            		googleBot: googleBot,
            		languageSite: languageSite,
            		ratting: ratting,
            		revisitAfter: revisitAfter,
            		acao: acao},
            success: function(resposta){
               if(resposta == 1){
                swal({
                    title: "Ótimo trabalho!",
                    text: "O SEO foi cadastrado com sucesso!",
                    type: "success"
                },function(){ 
       				location.reload();
   				});
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível cadastrar o SEO.",
                    type: "warning"
                },function(){ 
			       	location.reload();
			   	});
 
            }
        }
    });
}