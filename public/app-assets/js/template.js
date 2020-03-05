
function CadastrarCorTemplate(){
    var template = $("#template").val();
    var cor = $("#corTemplate").val();
	var acao = 'CadastrarCorTemplate';
    var corMenu = $("#corMenu").val();

    if(template == 0){
        bootbox.alert("Escolha um template.");
        return false;
    }else if(cor == '0'){
        bootbox.alert("Escolha uma cor.");
        return false;
    }
    if(cor == 'yellow.css'){
        hex1 = 'CCB617'; //faixa do saiba mais 
        hex2 = 'A39112'; //botao
        hex3 = 'EBD11A;'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = 'FFE31C'; //titulos blocos
        hex5 = 'BFAA15'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = 'CCB617'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'blue.css'){
        hex1 = '233D69'; //faixa do saiba mais 
        hex2 = '305592'; //botao
        hex3 = '3C6AB6'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '4376C9'; //titulos blocos
        hex5 = '365FA3'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '233D69'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'cinza.css'){
        hex1 = '495B69'; //faixa do saiba mais 
        hex2 = '6F899E'; //botao
        hex3 = '88A9C2'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '86A6BF'; //titulos blocos
        hex5 = '5F768F'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '495B69'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'orange.css'){
        hex1 = 'AD6217'; //faixa do saiba mais 
        hex2 = 'D17722'; //botao
        hex3 = 'FF9122'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = 'FA8E21'; //titulos blocos
        hex5 = 'C9721B'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = 'AD6217'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'light.css'){
        hex1 = '4FAFC2'; //faixa do saiba mais 
        hex2 = '408F9E'; //botao
        hex3 = '54BBCF'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '5DCDE3'; //titulos blocos
        hex5 = '58C4D9'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '4FAFC2'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'coffee.css'){
        hex1 = '7A3A05'; //faixa do saiba mais 
        hex2 = '562904'; //botao
        hex3 = 'B15407'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '904506'; //titulos blocos
        hex5 = '914506'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '7A3A05'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'black.css'){
        hex1 = '000000'; //faixa do saiba mais 
        hex2 = '373737'; //botao
        hex3 = '656565'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '454547'; //titulos blocos
        hex5 = '232324'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '000000'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'pink.css'){
        hex1 = 'A019A3'; //faixa do saiba mais 
        hex2 = 'D421D9'; //botao
        hex3 = 'FA27FF'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = 'CD20D1'; //titulos blocos
        hex5 = 'F727FC'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = 'A019A3'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'purple.css'){
        hex1 = '8B15D1'; //faixa do saiba mais 
        hex2 = '6D11A3'; //botao
        hex3 = 'AA1AFF'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = 'A81AFC'; //titulos blocos
        hex5 = '530D7D'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '8B15D1 '; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'sea-green.css'){
        hex1 = '83A918'; //faixa do saiba mais 
        hex2 = '5F7D0C'; //botao
        hex3 = 'ACE315'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '7CA30F'; //titulos blocos
        hex5 = 'A4D41E'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '83A918'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'green.css'){
        hex1 = '077B22'; //faixa do saiba mais 
        hex2 = '03330E'; //botao
        hex3 = '099E2C'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '06621B'; //titulos blocos
        hex5 = '055016'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '077B22'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else if(cor == 'red.php'){
        hex1 = '4F0700'; //faixa do saiba mais 
        hex2 = 'a0382b'; //botao
        hex3 = 'C24F4F'; //botao:hover,icones, formularios,linhas em cima e embaixo dos titulos
        hex4 = '8C1405'; //titulos blocos
        hex5 = '881709'; //blocos roteiros
        if(corMenu == '2'){
            hex6 = '4F0700'; //menu
        }else if(corMenu ==  '1'){
            hex6 = 'fff'; //menu
        }
    }else{
        hex1 = ''; //menu e faixa do saiba mais 
        hex2 = ''; //botao
        hex3 = ''//botao:hover,icones, formualrios,linhas em cima e embaixo dos titulos
        hex4 = ''; //titulos blocos
        hex5 = ''; //blocos roteiros
        hex6 = ''; //menu
    }
	$.ajax({
 
        type: "POST",
        data: {template :template,cor: 'cores.php',hex1: hex1,hex2: hex2,hex3: hex3,hex4: hex4,hex5: hex5,hex6: hex6, acao:acao},
        url: 'functions/template.php',
        success: function(resposta){
 
            if(resposta == 1){
            	swal({
                    title: "Ótimo trabalho!",
                    text: "Template configurado com sucesso!",
                    imageUrl: "img/config-menu.png"
                },function(){ 
       location.reload();
   });
            }else{
 
                swal({
                    title: "Ops... Algo deu errado.",
                    text: "Não foi possível alterar o template.",
                    type: "warning"
                },function(){ 
       location.reload();
   });
 
            }
 
        }
 
    });


}

function EditarFaixaTemplate(tipo){
    var textoFaixa = $('#textoFaixa').val();
    var acao = 'EditarFaixaTemplate';
    $.ajax({
 
        type: "POST",
        data: {tipo:tipo,textoFaixa: textoFaixa, acao:acao},
        url: 'functions/template.php',
        success: function(resposta){
 
            if(resposta == 1){
         
                        swal({
                            title: "Ótimo trabalho!",
                            text: "Texto da faixa alterado com sucesso!",
                            type: "success"
                        },function(){ 
                           location.href='configuracao-faixa.php';
                       });         
                    }else{
         
                        swal({
                            title: "Ops... Algo deu errado.",
                            text: "Não foi possível alterar o texto da Faixa.",
                            type: "warning"
                        },function(){ 
       location.reload();
   });
         
                    }
 
        }
 
    });


}