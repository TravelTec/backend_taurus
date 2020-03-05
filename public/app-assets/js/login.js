

function loginAdmin(){

	var usuario = $("#usuario").val();
	var senha = $("#senha").val();
	var acao = 1;



	if(usuario == ''){
	
		bootbox.alert("Digite o E-mail.");
		$("#usuario").focus();

	}else if(validateEmail(usuario) == false){

		bootbox.alert("Digite um E-mail válido.");
		$("#usuario").focus();

	}else if(senha == ''){
	
		bootbox.alert("Digite a Senha.");
		$("#senha").focus();
	
	}else{

	$('.btn-login').prop('disabled', true);

		$('#form-login').submit();



	}

}



function validateEmail(email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 if (reg.test(email)){
 return true; 
}else{
 return false;
 }
} 

function Deslogar(){
    bootbox.dialog({
      message: 'Deseja sair do Sistema ?',
      title: "Logout",
      buttons: {
        danger: {
          label: "Sair",
          className: "btn-danger",
          callback: function() {
         
             $.ajax({
               type:"POST",
               data:{val: 1},
               url:'functions/deslogar.php',
               success:function(){
                   window.location.href = 'login.php';
               }
             });
          }
        },
        sucess: {
          label: "Cancelar",
          className: "btn-sucess",
          callback: function() {
             
          }
        }
      }
    });
}



function validarLogin(){
    var usuario = $("#emailDash").val();
    var senha = $("#senhaDash").val();

    $.ajax({
           type:"POST",
           data:{emailDash: usuario, senhaDash: senha},
           url:'functions/loginValidacao.php',
           success:function(resposta){
             
                    if(resposta == 5){
                  //Falha login
                  swal({
                    title: 'Dados incorretos',
                    text: 'Por favor, digite dados válidos',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
               }else if(resposta == 2){
                  //Usuario Desativado
                  swal({
                    title: 'Usuário Desativado',
                    text: 'Por favor, entre em contato com o administrador',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
                  
               }else if(resposta == 3){
                  //Usuario Excluido
                  swal({
                    title: 'Usuário Excluído',
                    text: 'Por favor, entre em contato com o administrador',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
               }else if(resposta == 4){
                  //Nova Senha
                  swal({
                    title: 'Senha provisória',
                    text: 'Por favor, digite sua nova senha na próxima tela',
                    imageUrl: "img/bonecomsg1.png",
                    imageSize: "120x120"
                    },function(){
                      window.location.href = 'nova_senha.php?u='+usuario;
                    });

                  
               }else if(resposta == 6){
                  //Licença bloqueada
                  swal({
                    title: 'Acesso Indisponível',
                    text: 'Ainda estamos aguardando o pagamento de sua licença',
                    imageUrl: "img/solicitacao.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 3000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
                    

                  
               }else if(resposta == 7){
                  //Usuario Sem Créditos
                  swal({
                    title: 'Licença Sem Créditos',
                    text: 'Por favor, realize a aquisição de novos créditos',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  window.open('painel.php');
               }else if(resposta == 10){
                  //Usuario Sem Créditos
                  swal({
                        title: 'Acesso negado',
                        text: 'Seu plano básico expirou, aprimore seu plano',
                        imageUrl: "img/bonecomsg14.png",
                        imageSize: "120x120",
                        confirmButtonText: "Aprimorar Plano",
                        confirmButtonColor: "#1AB394"
                      },function(){
                            window.location.href = 'updateplano.php';
                        });
               }else if(resposta == 15){
                  //Usuario Sem Créditos
                  window.location.href = 'configuracao.php';
               }else if(resposta == 18){
                  //Usuario Sem Créditos
                  swal({
                        title: 'Licença Cancelada',
                        text: 'Entre em contato caso queira reativar seus serviços',
                        imageUrl: "img/bonecomsg4.png",
                        imageSize: "120x120",
                        confirmButtonColor: "#1AB394"
                      },function(){
                          return false;
                        });
               }else{
                  window.location.href = 'painel.php';
                     
               }
               
            
           }
         });
}


function validarLogin2(){
    var usuario = $("#emailDash").val();
    var senha = $("#senhaDash").val();

    $.ajax({
           type:"POST",
           data:{emailDash: usuario, senhaDash: senha},
           url:'functions/loginValidacao2.php',
           success:function(resposta){
                    if(resposta == 5){
                  //Falha login
                  swal({
                    title: 'Dados incorretos',
                    text: 'Por favor, digite dados válidos',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
               }else if(resposta == 2){
                  //Usuario Desativado
                  swal({
                    title: 'Usuário Desativado',
                    text: 'Por favor, entre em contato com o administrador',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
                  
               }else if(resposta == 3){
                  //Usuario Excluido
                  swal({
                    title: 'Usuário Excluído',
                    text: 'Por favor, entre em contato com o administrador',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
               }else if(resposta == 4){
                  //Nova Senha
                  swal({
                    title: 'Senha provisória',
                    text: 'Por favor, digite sua nova senha na próxima tela',
                    imageUrl: "img/bonecomsg1.png",
                    imageSize: "120x120"
                    },function(){
                      window.location.href = 'nova_senha.php?u='+usuario;
                    });

                  
               }else if(resposta == 6){
                  //Licença bloqueada
                  swal({
                    title: 'Acesso Indisponível',
                    text: 'Ainda estamos aguardando o pagamento de sua licença',
                    imageUrl: "img/solicitacao.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 3000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  return false;
                    

                  
               }else if(resposta == 7){
                  //Usuario Sem Créditos
                  swal({
                    title: 'Licença Sem Créditos',
                    text: 'Por favor, realize a aquisição de novos créditos',
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )
                  window.location.href = 'manual.php';
               }else if(resposta == 10){
                  //Usuario Sem Créditos
                  swal({
                        title: 'Acesso negado',
                        text: 'Seu plano básico expirou, aprimore seu plano',
                        imageUrl: "img/bonecomsg14.png",
                        imageSize: "120x120",
                        confirmButtonText: "Aprimorar Plano",
                        confirmButtonColor: "#1AB394"
                      },function(){
                            window.location.href = 'updateplano.php';
                        });
               }else if(resposta == 15){
                  //Usuario Sem Créditos
                  swal({
                        title: 'Plano Vencido',
                        text: 'Não identificamos seu pagamento, emita a segunda via',
                        imageUrl: "img/bonecomsg12.png",
                        imageSize: "120x120",
                        confirmButtonText: "Emitir 2ª Via",
                        confirmButtonColor: "#1AB394"
                      },function(){
                            window.location.href = 'financeiro.php';
                        });
               }else if(resposta == 18){
                  //Usuario Sem Créditos
                  swal({
                        title: 'Licença Cancelada',
                        text: 'Reative seus serviços clicando no botão abaixo',
                        imageUrl: "img/bonecomsg4.png",
                        imageSize: "120x120",
                        confirmButtonText: "Reativar Serviços",
                        confirmButtonColor: "#1AB394"
                      },function(){
                            window.location.href = 'servicos.php';
                        });
               }else{
                 window.location.href = 'manual.php';
                     
               }
               
            
           }
         });
}



function recuperarSenha(){
    var email = $("#emailSite").val();

    $.ajax({
     type:"POST",
     data:{emailSite: email},
     url:'functions/recuperarSenha.php',
     success:function(resposta){
        if(resposta == 1){

          swal({
                    title: 'E-mail não cadastrado',
                    text: 'Por favor, digite um e-mail existente',
                    imageUrl: "img/bonecomsg4.png",
                    showConfirmButton: false,
                    timer: 2000
                  }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                      if (dismiss === 'timer') {
                        
                      }
                    }
                  )

      }else{
          $("#recuperacao").modal('hide');
          swal({
            title: 'Senha recuperada',
            text: 'Enviamos uma senha provisória em seu e-mail!',
            imageUrl: "img/bonecomsg3.png"
            },function(){
              window.location.reload();
          });
        }
     }
   });
}



function novaSenha(){
  var email = $("#email").val();
  var senha = $("#senha").val();

  $.ajax({
     type:"POST",
     data:{email: email,senha: senha},
     url:'functions/atualizar_senha.php',
     success:function(resposta){
        if(resposta == 1){
          swal({
            title: 'Senha alterada!',
            text: 'Você será redirecionado ao Dashboard',
            imageUrl: "img/bonecomsg3.png"
            },function(){
                $.ajax({
                   type:"POST",
                   data:{emailDash: email, senhaDash: senha},
                   url:'functions/loginValidacao.php',
                   success:function(resposta){
                       window.location.href = 'dashboardv2.php';
                   }
                  });
                });
              }
      }
    
   });

}


