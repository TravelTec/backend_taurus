    /* CRÉDITOS ADQUIRIDOS */
    function VerMensagemCreditosAdquiridos(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg1.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">CRÉDITOS ADQUIRIDOS</p><p style="font-size:12px;font-family: Verdana;""><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Informamos que recebemos o seu pedido nº 9999 em 01/01/01 no valor de R$ 123,00 para aquisição de créditos a serem utilizados no Taurus Multicanal. Assim que a confirmação de pagamento for realizada pela instituição financeira, você receberá uma mensagem confirmando a liberação de créditos.<br><br> Agradecemos mais uma vez a você por utilizar os nossos serviços.<br /></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarMensagemCreditosAdquiridos(){
        var emailRoteiro = $("#emailRoteiro").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste1.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ADQUIRIDOS */

    /* CRÉDITOS LIBERADOS */
    function VerMensagemCreditosLiberados(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg3.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">CONFIRMAÇÃO DE CRÉDITOS ADQUIRIDOS</p><p style="font-size:12px;font-family: Verdana;""><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Informamos que recebemos o valor do seu pedido nº 9999 em 01/01/01 no valor de R$ 123,00 para aquisição de créditos. Esperamos que aproveite todas as funcionalidades de nosso sistema e se precisar de qualquer informação ou suporte, por favor entre em contato.<br><br> Agradecemos mais uma vez a você por utilizar os nossos serviços.<br /></p><p style="text-align:right;"><a href="#" style="width: 170px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Login</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarMensagemCreditosLiberados(){
        var emailRoteiro = $("#emailRoteiro2").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste2.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS LIBERADOS */

    /* CRÉDITOS LIBERADOS */
    function VerMensagemCreditosAcabando(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg2.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">SEUS CRÉDITOS ESTÃO ACABANDO</p><p style="font-size:12px;font-family: Verdana;""><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Seus créditos no Taurus Multicanal estão acabando. Chegamos a menos de 10% de saldo, o que pode deixar o sistema sem acesso aos seus usuários. Por favor, fique atento ao seu consumo para adquirir créditos antes que eles se esgotem por completo.<br /></p><p style="text-align:right;"><a href="#" style="width: 170px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Login</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarMensagemCreditosAcabando(){
        var emailRoteiro = $("#emailRoteiro3").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste3.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    /* CRÉDITOS ACABOU */
    function VerMensagemSemCreditos(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg4.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">CRÉDITOS FINALIZADOS</p><p style="font-size:12px;font-family: Verdana;"><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Seus créditos finalizaram e o acesso aos seus serviços será interrompido em (dia + 1). Por favor acesso a sua área de administrador e faça a aquisição de mais créditos, para continuar utilizando os nossos serviços. Se desejar, clique no botão abaixo para ir para nossa loja de créditos. </p><p style="text-align:right;"><a href="#" style="width: 243px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Acessar compra de créditos</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarMensagemSemCreditos(){
        var emailRoteiro = $("#emailRoteiro4").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste4.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    /* CRÉDITOS ACABOU */
    function SolicitacaonoSite(){

        bootbox.dialog({

            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p style="margin-bottom:30px"><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg10.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">SOLICITAÇÃO FEITA NO SITE</p><p style="font-size:12px;font-family: Verdana;"><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Acabamos de receber uma solicitação realizada no site. É importante dar uma resposta rápida ao usuário que está interessado em seus serviços. Clique no botão abaixo e veja o contato efetuado. Se você deseja habilitar mensagens por SMS, clique no botão Habilitar SMS.</p><p style="text-align:right;"><a href="#" style="width: 205px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Acessar área de contatos</a></p><p style="text-align:left;"><a href="#" style="width: 162px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float: left;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Habilitar SMS</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarSolicitacaonoSite(){
        var emailRoteiro = $("#emailRoteiro5").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste5.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    /* CRÉDITOS ACABOU */
    function LicencaCriada(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p style="margin-bottom:24px"><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg8.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">LICENÇA CRIADA COM SUCESSO</p><p style="font-size:12px;font-family: Verdana;"><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Sua licença no Taurus Multicanal foi criada com sucesso. Agora você já pode fazer a configuração do seu site, redes sociais e e-mail marketing. Para isso basta acessar sua licença e efetuar os procedimentos de configuração. Caso você deseje que sua licença seja configurada por nossa equipe, clique em contratar para solicitar esse serviço.</p><p style="text-align:right;"><a href="#" style="width: 205px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Configurar</a></p><p style="text-align:left;"><a href="#" style="width: 162px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float: left;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Contatar</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarLicencaCriada(){
        var emailRoteiro = $("#emailRoteiro6").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste6.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    /* CRÉDITOS ACABOU */
    function MensagemConfiguracao(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg7.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">MENSAGEM PARA CONFIGURAÇÃO</p><p style="font-size:12px;font-family: Verdana;"><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Você está recebendo um manual para poder configurar sua licença. Acesse o link abaixo e veja todas as dicas para você deixar o Taurus Multicanal do jeito que você deseja.<br /><br />Importante lembrar que as configurações podem ser alteradas a qualquer momento.</p><p style="text-align:right;"><a href="#" style="width: 170px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Ler Manual</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarMensagemConfiguracao(){
        var emailRoteiro = $("#emailRoteiro7").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste7.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    /* CRÉDITOS ACABOU */
    function LicencaBloqueada(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg5.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">LICENÇA BLOQUEADA</p><p style="font-size:12px;font-family: Verdana;""><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Infelizmente, depois de várias tentativas e contato, através de e-mail e SMS não conseguimos identificar o seu pagamento. Sua licença foi bloqueada e todos os serviços estão inacessíveis. <br /><br />Caso deseje restaurar os seus serviços, por favor, clique no botão abaixo para efetuar o seu pagamento. Após identificarmos o recebimento, liberaremos imediatamente o seu acesso.<br /></p><p style="text-align:right;"><a href="#" style="width: 170px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Efetuar Pagamento</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarLicencaBloqueada(){
        var emailRoteiro = $("#emailRoteiro8").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste8.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

        function NovasFuncionalidades(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p style="margin-bottom:30px"><br><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg9.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">INFORMATIVO DE NOVAS FUNCIONALIDADES</p><p style="font-size:12px;font-family: Verdana;""><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>É com grande satisfação que informamos que novas atualizações foram implantadas no Taurus Multicanal. Clique no botão Conhecer as Novidades e fique por dentro de tudo que preparamos para você e sua agência de viagens.<br /><br />Lembre-se que todos os nossos serviços são sobre o formato SaaS, ou seja, você só paga por aquilo que for usar.<br /></p><p style="text-align:right;"><a href="#" style="width: 215px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Conhecer as Novidades</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarNovasFuncionalidades(){
        var emailRoteiro = $("#emailRoteiro9").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste9.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    function PagamentoDisponivel(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p style="margin-bottom:24px"><br><br><br><br><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg6.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">AVISO DE PAGAMENTO DISPONÍVEL</p><p style="font-size:12px;font-family: Verdana;"><strong>Caro(a) Sr(a) (Nome)</strong> <br><br>Estamos enviando o acesso ao faturamento para o próximo período de uso do Taurus Multicanal. Clique no botão, Efetuar Pagamento, para que sua fatura seja exibida e você possa efetuar o pagamento através de cartão ou de boleto bancário. <br /><br /><b>Importante:</b> Sua nota-fiscal de serviços eletrônica será emitida logo após o pagamento ser identificado pelo nosso setor financeiro.<br /><br />Lembre-se que você pode acrescentar novos recursos a qualquer momento que desejar.</p><p style="text-align:right;"><a href="#" style="width: 205px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float:right;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Ver Histórico</a></p><p style="text-align:left;"><a href="#" style="width: 162px;line-height: 42px;text-align:center;display:block;color:#000000;text-decoration:none;float: left;border: 2px solid #ffcc00;background-color: #ffcc00;font-weight: bold;margin-bottom: 17px;font-family: verdana;">Efetuar Pagamento</a></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }
    function EnviarPagamentoDisponivel(){
        var emailRoteiro = $("#emailRoteiro10").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste10.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }
    /* FIM FUNÇÕES PARA CRÉDITOS ACABANDO */

    //EXIBIR DADOS DO DASHBOARD
    function VerDashboard(){

        bootbox.dialog({
            message: '<table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" bgcolorrgba(229, 229, 229, 0.35)" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logininho.png" style="display: block; width: 321px; height: 50px;" /></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr><td width="100" align="left" valign="top" ><p><br><br><br><br></p><img alt="" src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/bonecomsg1.png" style="display: block;width: 160px;height: 182px;margin: 18px;" /></td><td width="600" height="100" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;padding-right:20px;"><p><br></p><p style="font-size:20px;font-weight:bold;color: #4e7692;font-family: Verdana;">DADOS DASHBOARD DIÁRIO</p><p style="font-size:12px;font-family: Verdana;""><strong>Envio Newsletters: </strong>10<br><strong>Créditos consumidos: </strong>200<br><strong>E-mails não enviados: </strong>50<br><br><br><strong>COMPARATIVO COM O DIA ANTERIOR:</strong><br><br><strong>Envio Newsletters: </strong>10<br><strong>Créditos consumidos: </strong>200<br><strong>E-mails não enviados: </strong>50<br><br><br><strong>Houve um acréscimo de 5% em relação ao dia anterior.</strong></p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="EDEDED" style="background-color:#EDEDED"><tbody><tr valign="top"><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="400"><a href="http://www.montenegrodigital.com.br/category/novidades/" target="_blank" style="float:left;width:24px;height:24px;margin: 10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/blog.png" width="30" height="30" alt="blog" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.facebook.com/montenegrodigital/" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/facebook.png" width="30" height="30" alt="facebook" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://twitter.com/montenegro_ev" target="_blank" style="float:left; width:24px; height:24px; margin:10px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/twitter.png" width="30" height="30" alt="twitter" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://plus.google.com/108480749478917099492" target="_blank" style="float:left; width:24px; height:24px; margin:10px 16px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/googleplus.png" width="30" height="30" alt="google+" style="display:block; margin:0; border:0; background:#eeeeee;"></a><a href="https://www.youtube.com/channel/UCm5j_z10mug-zoam8JJXjZQ" target="_blank" style="float:left; width:24px; height:24px; margin:10px 0 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/youtube.png" width="30" height="30" alt="youtube" style="display:block; margin:0; border:0; background:#eeeeee;"></a></td><td width="26"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td><td width="114"><p style="margin:0; font-weight:bold; clear:both; font-size:12px; line-height:22px;"><a href="#" target="_blank" style="float:left; width:24px; height:34px; margin:6px 15px 10px 0;"><img src="http://homolog.taurusmulticanal.com.br/Dashboardv2/img/logo2.png" width="130" height="40" alt="facebook" style="display:block; margin:0; border:0;"></a></p></td><td width="30"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="650"><tbody><tr><td align="left" valign="top" bgcolor="4e7692" style="padding:0px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;"></td></tr></tbody></table><br /></td></tr></tbody></table>'
        });

    }

    function EnviarVisualizacaoDashboard(){
        var emailRoteiro = $("#emailRoteiro11").val();
        
        $.ajax({

            type: "POST",
            data: {emailRoteiro:emailRoteiro},
            url: 'functions/envioMensagemTeste11.php',
            success: function(resposta) {
                if(resposta == 1){
             
                    swal({
                        title: "Ótimo trabalho!",
                        text: "Mensagem teste foi enviada com sucesso!",
                        type: "success"
                    },
                        function(){ 
                           location.reload();
                        }
                    );
                }else{
                     
                    swal({
                        title: "Ops... Algo deu errado.",
                        text: "Não foi possível enviar a sua mensagem.",
                        type: "warning"
                    },
                        function(){ 
                            location.reload();
                        }
                    );
             
                }

            }

        });
    }