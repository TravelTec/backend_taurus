function CadastrarCambio(){

            var valorDolar = $("#valorDolar").val();
            var dataDolar = $('#dataDolar').val();

            if(valorDolar == ''){
                bootbox.alert('Digite um valor.');
            }else if(dataDolar == ''){
                bootbox.alert('Digite uma data.');
            }else{
                
            $.ajax({
                  url: "functions/cambio.php",
                  type: "POST",
                  data: {valorDolar: valorDolar, dataDolar: dataDolar, acao: 'CadastrarCambio'},
                  success: function(resposta) {
                    if(resposta == 1){         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "Valor do câmbio alterado com sucesso!",
                            type: "success"
                        },function(){ 
                             location.reload();
                         });         
                    }else{         
                      swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível alterar o valor do câmbio.",
                            type: "warning"
                        },function(){ 
                           location.reload();
                       });         
                    }
                  }
                });
        }
    }