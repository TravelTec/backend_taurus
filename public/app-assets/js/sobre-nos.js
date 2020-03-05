 function CadastrarSobre(){
        var makrup = $('#sobrenos').summernote('code');
        var acao = 'CadastrarSobre';

        $.ajax({
            type: "POST",
            url: 'functions/sobre-nos.php',
            data: {makrup: makrup, acao: acao},
            success: function(resposta){
               if(resposta == 1){
                swal({
                    title: "Ótimo trabalho!",
                    text: "O sobre nós foi alterado com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar o sobre nós.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
        }
    });
}

document.getElementById("uploadBtn").onchange = function () {
            var imagem_galeria = $("#uploadBtn")[0].files[0];
            var acao = 'EditarFotoSobre';

            var form_data = new FormData();

            form_data.append('arquivo', imagem_galeria);
            form_data.append('acao', acao);

            
            $.ajax({

                url: '/Dashboardv2/functions/sobre-nos.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'POST',
                success: function(resposta){

                    window.location.reload();
                }

            });
        };

function OcultarSobreNos(){
  var statusExibicao = 0;
  var acao = 'AlterarExibicaoSobreNos';

  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/sobre-nos.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição do Sobre Nós foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição do Sobre Nós.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function ExibirSobreNos(){
  var statusExibicao = '1';
  var acao = "AlterarExibicaoSobreNos";
  $.ajax({
 
        type: "POST",
        data: {statusExibicao:statusExibicao, acao:acao},
        url: 'functions/sobre-nos.php',
        success: function(resposta){
 
            if(resposta == 1){
              swal({
                    title: "Ótimo trabalho!",
                    text: "Exibição do Sobre Nós foi alterada com sucesso!",
                    type: "success"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar a exibição do Sobre Nós.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}