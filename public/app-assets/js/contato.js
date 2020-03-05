$("#cep").mask("00000-000");
$("#telefone").mask("(00) 0000-0000");
$("#celular").mask("(00) 00000-0000");


function CadastrarFace(id){
    var linkFace = $("#linkFace").val();
    var acao = 'CadastrarFace';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkFace: linkFace, acao: acao},  
            success: function(resposta) {

               swal({
                        title: "Ótimo trabalho!",
                        text: "Facebook cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarTT(id){
    var linkTT = $("#linkTT").val();
    var acao = 'CadastrarTT';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkTT: linkTT, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Twitter cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarInsta(id){
    var linkInsta = $("#linkInsta").val();
    var acao = 'CadastrarInsta';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkInsta: linkInsta, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Instagram cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarLinkedin(id){
    var linkLinkedin = $("#linkLinkedin").val();
    var acao = 'CadastrarLinkedin';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkLinkedin: linkLinkedin, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Linkedin cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarWhats(id){
    var linkWhats = $("#linkWhats").val();
    var acao = 'CadastrarWhats';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkWhats: linkWhats, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "WhatsApp cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarSkype(id){
    var linkSkype = $("#linkSkype").val();
    var acao = 'CadastrarSkype';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkSkype: linkSkype, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Skype cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarGooglePlay(id){
    var linkGooglePlay = $("#linkGooglePlay").val();
    var acao = 'CadastrarGooglePlay';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkGooglePlay: linkGooglePlay, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Google Play cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarAppStore(id){
    var linkAppStore = $("#linkAppStore").val();
    var acao = 'CadastrarAppStore';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkAppStore: linkAppStore, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "App Store cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function CadastrarCadastur(id){
    var linkCadastur = $("#linkCadastur").val();
    var acao = 'CadastrarCadastur';

    
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, linkCadastur: linkCadastur, acao: acao},  
            success: function(resposta) {
                swal({
                        title: "Ótimo trabalho!",
                        text: "Cadastur cadastrado com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'integracoes.php';
                   });

            }
        });
    
}

function VerificarSenha(id){
    var senhaAtual = $("#senhaAtual").val();
    var acao = 'VerificarSenha';

    if(senhaAtual == ''){
        bootbox.alert("Digite a senha atual.");
        return false;

    }else{
        $.ajax({
          url: "functions/contato.php",
          type: "POST",
          data:{id: id, senhaAtual: senhaAtual, acao: acao},  
            success: function(resposta) {
                if(resposta == 1){
                    $("#antigaSenha").removeClass("antigoCadastro");
                    $("#antigaSenha").addClass("novoCadastro");
                    $("#novaSenha").removeClass("novoCadastro");
                    $("#novaSenha").addClass("antigoCadastro");
                }else{
                    swal({
                    title: "Ops... Senha incorreta",
                    text: "Por favor, tente novamente",
                    imageUrl: "img/bonecomsg4.png",
                    imageSize: "120x120"
                                },function(){ 
                       return false;
                   });
                }

            }
        });
    }
}
function EditarSenha(id){
    var senhaNova = $("#senhaNova").val();
    var reptSenhaNova = $("#reptSenhaNova").val();
    var acao = 'EditarSenha';

    if(senhaNova == ''){
        bootbox.alert("Preencha o campo Senha");
        return false;

    }else if(senhaNova.length < 6){
        bootbox.alert("Senha no minímo com 6 caracteres.");
        return false;

    }else if(senhaNova != reptSenhaNova){
        bootbox.alert('As senhas não conferem, digite novamente.!!');
        return false;
    }else{
        $.ajax({
          url: "/Dashboardv2/functions/contato.php",
          type: "POST",
          data:{id: id, senhaNova: senhaNova, acao: acao},  
            success: function(resposta) {
                if(resposta == 1){
                   swal({
                        title: "Ótimo trabalho!",
                        text: "Senha alterada com sucesso!",
                        type: "success"
                    },function(){ 
                       location.href = 'minha-conta.php';
                   });
                }else{
                    bootbox.alert("Senha incorreta!");
                }

            }
        });
    }
}