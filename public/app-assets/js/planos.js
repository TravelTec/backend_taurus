function escolherPlano(tipo){
	var Plano = tipo;


	if(Plano == 1){
		imagem = 2;
		NomePlano = 'Básico';
	}else if(Plano == 2){
		imagem = 2;
		NomePlano = 'Nível I';
	}else if(Plano == 3){
		imagem = 2;
		NomePlano = 'Nível II';
	}else if(Plano == 4){
		imagem = 2;
		NomePlano = 'Nível III';
	}

	location.href='infoEmail.php?c='+Plano;

	/*swal({
	  title: "Plano "+NomePlano+"!",
	  text: "Solicite agora mesmo a sua licença!",
	  imageUrl: "img/precos.png",
	  showCancelButton: true,
	  cancelButtonColor:  "#FF8C00",
	  cancelButtonText: "Solicitar!",
	  confirmButtonText: "Escolher outro Plano",
	  closeOnConfirm: true,
	  closeOnCancel: false,
      imageSize: "120x120"
	},
	function(isConfirm){
	  if (isConfirm){
	    	
	  }else{
	  	
	  }
	});*/

}


function enviarDuvida(){
	var msg = $('#msg').val();
	var email = $('#mail').val();
	var nome = $('#nome').val();
	var assunto = 'Dúvida de aquisição - Taurus Multicanal';

	if(nome == ''){
        swal({
		  title: 'Oh não!',
		  text: 'Você esqueceu seu nome',
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

    }else if(assunto == ''){
        swal({
		  title: 'Oh não!',
		  text: 'Você esqueceu o assunto',
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

    }else if (msg == ''){
        swal({
		  title: 'Oh não!',
		  text: 'Você não digitou a mensagem',
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

    }else if(email == ''){
        swal({
		  title: 'Oh não!',
		  text: 'Você esqueceu seu e-mail',
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

    }else if(!isValidEmailAddress(email)){
        swal({
		  title: 'Oh não!',
		  text: 'Seu e-mail não é válido',
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


	$.ajax({
          url: "functions/enviarDuvidaAquisicao.php",
          type: "POST",
          data:{msg: msg, email: email, assunto: assunto, nome: nome},
            success: function(resposta){
                if(resposta == 1){
                	swal({
                    title: "Mensagem enviada!",
                    text: "Sua dúvida foi recebida e está sendo analisada",
                    imageUrl: "img/solicitacao.png",
                  	imageSize: "120x120"
                    },function(){
                    	$('#myModal').hide();
                        window.location.reload();
                    });

                }else{
                    swal({
                        title: "Mensagem não enviada",
                        text: "Por favor, tente novamente "+resposta,
                        imageUrl: "img/falha-envio.png",
                  		imageSize: "120x120"
                        },function () {
                        
                    });

                } 

            }
  	});

	
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};