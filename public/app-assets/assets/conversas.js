//Script para seleção de conversas a exibir
$(".contato").on("click", function(evento) {
    let contato = $(this) //Contato selecionado na lista de conversas
    let idContato = contato.attr('contato') //ID do contato associado ao elemento HTML

    $(`.conversa:not([contato=${idContato}])`).hide() //Esconde as conversas que não são desse contato
    $(`.conversa[contato=${idContato}]`).show()//Mostra a conversa do contato
    
    //Caso nenhuma conversa tenha sido selecionada previamente, esconde a mensagem inicial
    if($('#mensagem__taurus').is(":visible")) {
        $('#mensagem__taurus').hide()
    }

    //Scroll desce até o final da conversa
    $('.conversa__mensagens').animate({scrollTop: $('.conversa__mensagens')[0].scrollHeight}, 500);
})