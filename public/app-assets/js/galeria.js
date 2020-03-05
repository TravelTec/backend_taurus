function novoCadastroGaleria(){
	var status = 1;
	var nome_galeria = $("#nome_galeria").val();
	var acao = 'novoCadastroGaleria';

	if(nome_galeria == ''){
		bootbox.alert('Necessário informar um nome para a galeria.');
		$("#nome_galeria").focus();
	}else if($("input[type=file]").val() == ""){
		bootbox.alert('Necessário selecionar uma imagem para a galeria.');
		return false;
	}else{
		var imagem_galeria = $("#inputArquivo")[0].files[0];

		var form_data = new FormData();

		form_data.append('arquivo', imagem_galeria);
		form_data.append('status', status);
		form_data.append('nome_galeria', nome_galeria);
		form_data.append('acao', acao);

		$.ajax({

			url: 'functions/galeria.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			type: 'POST',
			success: function(resposta){
                swal({
                title: "Ótimo trabalho!",
                text: "Cadastramos a sua galeria!",
                type: "success"
            },function(){ 
            location.href = 'lista-galeria.php?galeria='+ resposta;
   });
			}

		});
	}
}

function ExcluirGaleria(id){
	swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar galeria",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'deletarGaleria';
     
            $.ajax({
         
                type: "POST",
                data: {id:id, acao:acao},
                url: 'functions/galeria.php',
                success: function(resposta){
         
                    if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "A galeria foi excluída com sucesso!",
                            type: "success"
                        },function(){ 
       location.reload();
   });
         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível excluir a galeria.",
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


function CadastrarImagemSubGaleria(galeriaID){
    var status = 1;
    var acao = 'CadastrarImagemSubGaleria';

    if($("input[type=file]").val() == ""){
       swal({
                title: "Ops... Algo deu errado.",
                text: "É necessário selecionar uma imagem para continuar.",
                type: "warning"
            });
    }else{
        var imagemGaleria = $("#imagemGaleria")[0].files[0];

        var form_data = new FormData();

        form_data.append('arquivo', imagemGaleria);
        form_data.append('status', status);
        form_data.append('galeriaID', galeriaID);
        form_data.append('acao', acao);

        $.ajax({

            url: 'functions/galeria.php',
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
                text: "Cadastramos a imagem!",
                type: "success"
            },function(){ 
       location.reload();
   });
            }else{
                swal({
                title: "Ops... Algo deu errado",
                text: "Não conseguimos cadastrar a imagem.",
                type: "warning"
            },function(){ 
       location.reload();
   });
            }
            }

        });
    }
}

function excluirImagemGaleria(galeriaID){
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
            var acao = 'deletarImagemGaleria';
     
            $.ajax({
         
                type: "POST",
                data: {galeriaID:galeriaID, acao:acao},
                url: 'functions/galeria.php',
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
                            text: "Não foi possível excluir a imagem galeria.",
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

function OcultarGaleria(){
                var status = 0;
                var acao = "ExibicaoGaleriaSite";
                $.ajax({

                    url: 'functions/galeria.php',
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

function ExibirGaleria(){
                var status = 1;
                var acao = "ExibicaoGaleriaSite";
                $.ajax({

                    url: 'functions/galeria.php',
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

function StatusGaleriaSite(status,id){
                var acao = "StatusGaleriaSite";
                $.ajax({

                    url: 'functions/galeria.php',
                    data: {status: status,id: id, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        swal({
                        title: "Ótimo trabalho!",
                        text: "Destaque alterado com sucesso!",
                        imageUrl: "img/config-menu.png"
                                    },function(){ 
                           location.reload();
                        });

                    }
                });
            }



function verificarCreditos(){
    $.ajax({
        type: "POST",
        data: {acao:'verificarCreditos'},
        url: 'functions/galeria.php',
        success: function(resposta){
            if(resposta == 1){
                window.location.href = 'cadastro-galeria.php';
            }else if(resposta == 0){
           
                swal({
                  title: "OH NÃO!",
                  text: "Você não possui créditos suficientes. Clique em Comprar créditos, caso deseje adquirir.",
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
                          location.href='galeria.php';
                        }
                });
           
              }

          }

    });
}
