/* CADASTRO BANNER PACOTES */
function CadastrarBanner(tipo){
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var link = $('#link').val();
    var acao = 'CadastrarBanner';

    if(tipo == '1'){
        var url = 'editar-banner.php';
    }else if(tipo == '2'){
        var url = 'editar-pacotes.php';
    }else if(tipo == '4'){
        var url = 'editar-parallax.php';
    }else{
        var url = 'editar-servicos.php';
    }

    if(alinhamento == ''){
        bootbox.alert('Necessário informar o alinhamento do texto.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{tipo: tipo,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link, acao: acao},  
            success: function(resposta) {

                swal({
                    title: "Ótimo trabalho!",
                    text: "Banner cadastrado com sucesso!",
                    imageUrl: "img/config-menu.png"
                    },function(){

                        window.location.href = url+''+resposta+'&edit=1';
                    });

            }
          });

    }
}


function CadastrarBannerPacotes(tipo){
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var acao = 'CadastrarBannerPacotes';
    var tipoLink = 0;

    if ($('#tipoLink').is(":checked")) {
        tipoLink = 'target="_blank"';
        alert(tipoLink);
    }

    var tipoInput = $("#tipoLink").val();
        if(tipoInput == '1'){
            var link = $('#linkProprio').val();
        }else if(tipoInput == '2'){
            var link = $('#pacotes').val();
        }else if(tipoInput == '3'){
            var link = $('#roteiros').val();
        }

    if(tipo == '1'){
        var url = 'editar-banner.php';
    }else if(tipo == '2'){
        var url = 'editar-pacotes.php';
    }else if(tipo == '4'){
        var url = 'editar-parallax.php';
    }else{
        var url = 'editar-servicos.php';
    }

    if(alinhamento == ''){
        bootbox.alert('Necessário informar o alinhamento do texto.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{tipo: tipo,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link,tipoLink:tipoLink, acao: acao},  
            success: function(resposta) {

                swal({
                    title: "Ótimo trabalho!",
                    text: "Banner cadastrado com sucesso!",
                    imageUrl: "img/config-menu.png"
                    },function(){

                        window.location.href = url+''+resposta+'&edit=1';
                    });

            }
          });

    }
}

/* CADASTRO BANNER PACOTES */
function CadastrarBannerPrincipal(tamanho){
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var link = $('#link').val();
    var acao = 'CadastrarBanner';
    var tipo = '1';
    var url = 'editar-banner.php';
    

    if(alinhamento == ''){
        bootbox.alert('Necessário informar o alinhamento do texto.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{tamanho:tamanho,tipo: tipo,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link, acao: acao},  
            success: function(resposta) {

                swal({
                    title: "Ótimo trabalho!",
                    text: "Banner cadastrado com sucesso!",
                    imageUrl: "img/config-menu.png"
                    },function(){

                        window.location.href = 'editar-banner.php'+resposta+'&edit=1';
                    });

            }
          });

    }
}

/* CADASTRO BANNER PACOTES */
function CadastrarParallax(){
    var tipo = $('#posicao').val();
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var link = $('#link').val();
    var acao = 'CadastrarBanner';

    if(tipo == '1'){
        var url = 'editar-banner.php';
    }else if(tipo == '2'){
        var url = 'editar-pacotes.php';
    }else if(tipo == '4' ||tipo == '5' || tipo == '6' || tipo == '7' || tipo == '8' || tipo == '9'){
        var url = 'editar-parallax.php';
    }else{
        var url = 'editar-servicos.php';
    }

    if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else if(tipo == ''){
        bootbox.alert('Necessário informar a posição.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{tipo: tipo,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link, acao: acao},  
            success: function(resposta) {

                swal({
                    title: "Ótimo trabalho!",
                    text: "Banner cadastrado com sucesso!",
                    imageUrl: "img/config-menu.png"
                    },function(){

                        window.location.href = url+''+resposta+'&edit=1';
                    });

            }
          });

    }
}


/* CADASTRO BANNER PACOTES */
function CadastrarVideo(){
    var tipo = '10';
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var link = $('#link').val();
    var acao = 'CadastrarBanner';

    if(tipo == '1'){
        var url = 'editar-banner.php';
    }else if(tipo == '2'){
        var url = 'editar-pacotes.php';
    }else if(tipo == '4' ||tipo == '5' || tipo == '6' || tipo == '7' || tipo == '8' || tipo == '9'){
        var url = 'editar-parallax.php';
    }else if(tipo == '10'){
        var url = 'edicao-banner.php';
    }else{
        var url = 'editar-servicos.php';
    }

    if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else if(tipo == ''){
        bootbox.alert('Necessário informar a posição.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{tipo: tipo,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link, acao: acao},  
            success: function(resposta) {

                swal({
                    title: "Ótimo trabalho!",
                    text: "Banner cadastrado com sucesso!",
                    imageUrl: "img/config-menu.png"
                    },function(){

                        window.location.href = url+''+resposta+'&edit=1';
                    });

            }
          });

    }
}


function EditarBanner(id){
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var link = $('#link').val();
    var acao = 'EditarBanner';

    if(alinhamento == ''){
        bootbox.alert('Necessário informar o alinhamento do texto.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{id: id,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link, acao: acao},  
            success: function(resposta) {
               swal({
                title: "Ótimo trabalho!",
                text: "Banner alterado com sucesso!",
                type: "success"
            },function(){ 
       location.reload();
   });
                    

            }
          });

    }
}


function EditarBannerPacotes(id){
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var link = $('#link').val();
    var tipoLink = 0;

    if ($('#tipoLink').is(":checked")) {
        tipoLink = 'target="_blank"';
    }

    var tipo = $("#tipoLink").val();
        if(tipo == '1'){
            var link = $('#linkProprio').val();
        }else if(tipo == '2'){
            var link = $('#pacotes').val();
        }else if(tipo == '3'){
            var link = $('#roteiros').val();
        }
    var acao = 'EditarPacotes';

    if(alinhamento == ''){
        bootbox.alert('Necessário informar o alinhamento do texto.');
        return false;
    }else if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{id: id,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link,tipoLink:tipoLink, acao: acao},  
            success: function(resposta) {
               swal({
                title: "Ótimo trabalho!",
                text: "Banner alterado com sucesso!",
                type: "success"
            },function(){ 
       location.reload();
   });
                    

            }
          });

    }
}


function EditarParallax(id){
    var alinhamento = $('#alinhamento').val();
    var nome = $('#nome').val();
    var titulo = $('#titulo').val();
    var chamada = $('#chamada').val();
    var subtitulo = $('#subtitulo').val();
    var tipo = $('#posicao').val();
    var link = $('#link').val();
    var acao = 'EditarParallax';

    if(nome == ''){
        bootbox.alert('Necessário informar um nome.');
        return false;
    }else if(tipo == ''){
        bootbox.alert('Necessário informar a posição.');
        return false;
    }else {
        $.ajax({
          url: "functions/banners.php",
          type: "POST",
          data:{id: id,alinhamento: alinhamento, nome: nome, titulo: titulo,chamada: chamada, subtitulo: subtitulo, link: link, tipo:tipo,acao: acao},  
            success: function(resposta) {
               swal({
                title: "Ótimo trabalho!",
                text: "Banner alterado com sucesso!",
                type: "success"
            },function(){ 
       location.reload();
   });
                    

            }
          });

    }
}

function EditarStatusBanner(ativo, id){
    var acao = 'EditarStatusBanner';

    $.ajax({
 
        type: "POST",
        data: {id:id, ativo:ativo, acao:acao},
        url: '/Dashboardv2/functions/banners.php',
        success: function(resposta){
            swal({
                title: "Ótimo trabalho!",
                text: "O status do banner foi alterado com sucesso!",
                type: "success"
            },function(){ 
       location.reload();
   });
    
        }
 
    });


}

function ExcluirBanner(id){
     swal({
        title: "Você tem certeza?",
        text: "Você não poderá desfazer essa ação!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, deletar banner",
        cancelButtonText: "Não, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            var acao = 'ExcluirBanner';
 
    $.ajax({
 
        type: "POST",
        data: {id:id, acao:acao},
        url: 'functions/banners.php',
        success: function(resposta){
                swal({
                title: "Ótimo trabalho!",
                text: "O banner foi excluído com sucesso!",
                type: "success"
            },function(){ 
       location.reload();
   });
 
        }
 
    });
        }else {
                            swal("Cancelado", "Seu banner não será excluído!", "error");
                        }
    });
}
function RemoverBanner(id){
    var acao = 'ExcluirBanner';
 
    $.ajax({
 
        type: "POST",
        data: {id:id, acao:acao},
        url: '/Dashboardv2/functions/banners.php',
        success: function(resposta){
                swal({
                title: "Ótimo trabalho!",
                text: "O banner foi excluído com sucesso!",
                type: "success"
            },function(){ 
       location.reload();
   });
 
        }
 
    });
}


function OcultarPacotes(){
                var status = 0;
                var acao = "StatusPacotes";
                $.ajax({

                    url: 'functions/banners.php',
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

function ExibirPacotes(){
                var status = 1;
                var acao = "StatusPacotes";
                $.ajax({

                    url: 'functions/banners.php',
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

            function EditarImagem(idBanner, tamanho){
                $("#divLoader").removeClass("mostrar-for").addClass("esconder-for");
                var imagemCapa = $image.cropper("getDataURL");
                var acao = 'EditarImagem';

                var form_data = new FormData();
                var blob = dataURLtoBlob(imagemCapa);

                form_data.append("arquivo", blob);
                form_data.append("idBanner", idBanner);
                form_data.append("tamanho", tamanho);
                form_data.append("acao", acao);

                $.ajax({
                    url: 'functions/banners.php',
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData: false,     
                    success: function(resposta){

                        if(resposta == 1){
                            
                            swal({
                            title: "Ótimo trabalho!",
                            text: "Imagem do banner cadastrada com sucesso!",
                            imageUrl: "img/config-menu.png",
                            showCancelButton: true,
                            confirmButtonColor: "#1ab394",
                            confirmButtonText: "Criar outro Banner",
                            cancelButtonText: "Voltar",
                            closeOnConfirm: true,
                            closeOnCancel: true
                             }, function (isConfirm) {
                                if (isConfirm) {
                                    location.href='cadastro-banner.php?tam='+tamanho;
                                }else {
                                    location.href='banners.php';
                                }
                            });
                        }else{
                            swal({
                            title: "Ops... Algo deu errado.",
                            text: resposta,
                            type: "warning"
                        });
                        }

                        
                    
                    }
                });
            }




            function EditarVideo2(idBanner, t){
                var imagemCapa = $('#inputImage').val();
                var acao = 'EditarVideo';

                var form_data = new FormData();
                var blob = dataURLtoBlob(imagemCapa);

                form_data.append("arquivo", blob);
                form_data.append("idBanner", idBanner);
                form_data.append("acao", acao);

                $.ajax({
                    url: 'functions/banners.php',
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function(resposta){

                     alert(resposta);

                        
                    
                    }
                });
            }


        function CadastrarVideo(){
                var nome = $('#nome').val();
                var titulo = $('#titulo').val();
                var tipo = '10';
                var acao = 'CadastrarVideo';
                var extensao = $("input[type=file]").val();
                var formato = extensao.split(".");


                if(nome == ''){
                    bootbox.alert('Necessário informar um nome.');
                    return false;
                }else if(titulo == ''){
                    bootbox.alert('Necessário informar um titulo.');
                    return false;
                }else if($("input[type=file]").val() == ""){
                    bootbox.alert('Necessário escolher um video.');
                    return false;
                }else if(formato[1] != "mp4"){
                    bootbox.alert('Necessário que o video tenha o formato MP4.');
                    return false;
                }else {
                var video = $('#arquivo')[0].files[0];
                var form_data = new FormData();
                form_data.append("nome", nome);
                form_data.append("titulo", titulo);
                form_data.append("tipo", tipo);
                form_data.append("arquivo", video);
                form_data.append("acao", acao);

                $.ajax({
                    url: 'functions/banners.php',
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function(resposta){
                        if(resposta == '1'){
                            swal({
                            title: "Ótimo trabalho!",
                            text: "Banner cadastrado com sucesso!",
                            imageUrl: "img/config-menu.png"
                            },function(){
                                 location.href = 'banners.php';
                            });
                        }else{
                            swal({
                            title: "Ops... Vídeo muito grande!",
                            text: "Suba vídeos de ate 6MB.",
                            type: "warning"
                            },
                            function(){ 
                            
                            });
                        }
                    }
                });
            }
        }

         function EdicaoVideo(id){
                var nome = $('#nome').val();
                var titulo = $('#titulo').val();
                var inputVideo = $('#inputVideo').val();
                var tipo = '10';
                var extensao = $("input[type=file]").val();
                var formato = extensao.split(".");
                var acao = 'EditarVideo';
                

                if(nome == ''){
                    bootbox.alert('Necessário informar um nome.');
                    return false;
                }else if(titulo == ''){
                    bootbox.alert('Necessário informar um titulo.');
                    return false;
                }else if(inputVideo == '' && $("input[type=file]").val() == ""){
                    bootbox.alert('Necessário escolher um video.');
                    return false;
                }else if(inputVideo != '' && $("input[type=file]").val() != ""){
                    if(formato[1] != "mp4"){
                        bootbox.alert('Necessário que o video tenha o formato MP4.');
                        return false;
                    }
                }else {
                var video = $('#arquivo')[0].files[0];
                
                var form_data = new FormData();
                form_data.append("id", id);
                form_data.append("nome", nome);
                form_data.append("titulo", titulo);
                form_data.append("tipo", tipo);
                form_data.append("inputVideo", inputVideo);
                form_data.append("arquivo", video);
                form_data.append("acao", acao);

                $.ajax({
                    url: 'functions/banners.php',
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function(resposta){
                         if(resposta == '1'){
                            swal({
                            title: "Ótimo trabalho!",
                            text: "Banner alterado com sucesso!",
                            imageUrl: "img/config-menu.png"
                            },function(){
                                 location.href = 'banners.php';
                            });
                        }else{
                            swal({
                            title: "Ops... Vídeo muito grande!",
                            text: "Suba vídeos de ate 6MB.",
                            type: "warning"
                            },
                            function(){ 
                            
                            });
                        }
                    }
                });
            }
        }


            function VerBannerPrincipal(tamanho){
                var acao = "VisualizarBannerPrincipal";
                if(tamanho == 1){
                    var nome = 'pequeno';
                    var link = 'cadastro-banner.php?tam=1';
                }else if(tamanho == 2){
                    var nome = 'médio';
                    var link = 'cadastro-banner.php?tam=2';
                }else if(tamanho == 3){
                    var nome = 'grande';
                    var link = 'cadastro-banner.php?tam=3';
                }
                
                $.ajax({

                    url: 'functions/banners.php',
                    data: {tamanho: tamanho,acao:acao},
                    type: 'POST',
                    success: function(resposta){
                        if(resposta == 1){
                        swal({
                            title: "COMO ASSIM!?",
                            text: "Você não possui banners no carrosel "+nome,
                            imageUrl: "img/falha-envio.png",
                            showCancelButton: true,
                            confirmButtonColor: "#1ab394",
                            confirmButtonText: "Incluir Banner",
                            cancelButtonText: "Cancelar",
                            closeOnConfirm: true,
                            closeOnCancel: true
                        }, function (isConfirm) {
                            if (isConfirm) {
                                location.href= link;
                            }
                        });
                        }else{
                        bootbox.dialog({
                            title: "Banner Principal",
                            message: resposta,
                            
                        });
                    }
                    }
                });
            } 

            function VisualizarBannerPacotes(){
                var acao = "VisualizarBannerPacotes";
                $.ajax({

                    url: '/Dashboardv2/functions/banners.php',
                    data: {acao:acao},
                    type: 'POST',
                    success: function(resposta){
                        if(resposta == 1){
                        swal({
                            title: "COMO ASSIM!?",
                            text: "Você não possui pacotes em destaque",
                            imageUrl: "img/falha-envio.png",
                            showCancelButton: true,
                            confirmButtonColor: "#1ab394",
                            confirmButtonText: "Cadastrar pacote",
                            cancelButtonText: "Cancelar",
                            closeOnConfirm: true,
                            closeOnCancel: true
                        }, function (isConfirm) {
                            if (isConfirm) {
                                location.href= 'cadastro-pacotes.php';
                            }
                        });
                        }else{
                        bootbox.dialog({
                            title: "Banner Pacotes",
                            message: resposta,
                            buttons: {
                                success: {
                                    label: "Voltar",
                                    className: "btn-gray btnmodal",
                                    callback: function () { 
                                          
                                    }
                                }
                                
                            }
                        });
                    }

                    }
                });
            }


    document.getElementById("statusPequeno").onchange = function () {
        var tamanhoBanner = 0;
        var acao = "CadastrarConfiguracao";
        if ($('#statusPequeno').is(":checked")) {
            tamanhoBanner = 1;
        }
        $.ajax({

                    url: 'functions/banners.php',
                    data: {tamanhoBanner:tamanhoBanner, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "Tamanho dos banners principais alterado com sucesso!",
                                        type: "success"
                                    },function(){ 
                           location.reload();
                       });
                                }else{
                     
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Não foi possível alterar o tamanho dos banners principais.",
                                        type: "warning"
                                    },function(){ 
                           location.reload();
                       });
                     
                                }

                    }

                });
    }
    document.getElementById("statusMedio").onchange = function () {
        var tamanhoBanner = 0;
        var acao = "CadastrarConfiguracao";
        if ($('#statusMedio').is(":checked")) {
            tamanhoBanner = 2;
        }
        $.ajax({

                    url: 'functions/banners.php',
                    data: {tamanhoBanner:tamanhoBanner, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "Tamanho dos banners principais alterado com sucesso!",
                                        type: "success"
                                    },function(){ 
                           location.reload();
                       });
                                }else{
                     
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Não foi possível alterar o tamanho dos banners principais.",
                                        type: "warning"
                                    },function(){ 
                           location.reload();
                       });
                     
                                }

                    }

                });
    }
    document.getElementById("statusGrande").onchange = function () {
        var tamanhoBanner = 0;
        var acao = "CadastrarConfiguracao";
        if ($('#statusGrande').is(":checked")) {
            tamanhoBanner = 3;
        }
        $.ajax({

                    url: 'functions/banners.php',
                    data: {tamanhoBanner:tamanhoBanner, acao:acao},
                    type: 'POST',
                    success: function(resposta){

                        if(resposta == 1){
                                    swal({
                                        title: "Ótimo trabalho!",
                                        text: "Tamanho dos banners principais alterado com sucesso!",
                                        type: "success"
                                    },function(){ 
                           location.reload();
                       });
                                }else{
                     
                                    swal({
                                        title: "Ops... Algo deu errado.",
                                        text: "Não foi possível alterar o tamanho dos banners principais.",
                                        type: "warning"
                                    },function(){ 
                           location.reload();
                       });
                     
                                }

                    }

                });
    }