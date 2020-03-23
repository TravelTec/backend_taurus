//Menu de configuraÃ§Ãµes

const navegacaoConfiguracao = container => {
    $('.container__config').hide()//Esconde qualquer outra tela de configuraÃ§Ã£o aberta
    $('#mensagem__taurus').hide()//Esconde mensagem da Taurus
    $(`.conversa`).hide()//Esconder todas as conversas

    $(`#${container}`).toggle()
}

$('#botao__atalhos').on('click', evento => navegacaoConfiguracao('container__atalhos'))
$('#botao__atalhos__detalhes__voltar').on('click', evento => navegacaoConfiguracao('container__atalhos'))
$('#botao__atalhos__detalhes__salvar').on('click', evento => navegacaoConfiguracao('container__atalhos'))
$('#botao__atalhos__voltar').on('click', evento => navegacaoConfiguracao('mensagem__taurus'))
$('#botao__atalhos__novo').on('click', evento => navegacaoConfiguracao('container__atalhos__detalhe'))
$('#botao__usuarios').on('click', evento => navegacaoConfiguracao('container__usuarios'))
$('#botao__usuarios__voltar').on('click', evento => navegacaoConfiguracao('mensagem__taurus'))
$('#botao__usuarios__novo').on('click', evento => navegacaoConfiguracao('container__usuarios__detalhe'))
$('#botao__usuarios__detalhe__voltar, #botao__usuarios__detalhe__salvar').on('click', evento => navegacaoConfiguracao('container__usuarios'))
$('#botao__finalizacoes, #botao__finalizacoes__detalhe__voltar, #botao__finalizacoes__detalhe__salvar').on('click', evento => navegacaoConfiguracao('container__finalizacoes'))
$('#botao__finalizacoes__voltar').on('click', evento => navegacaoConfiguracao('mensagem__taurus'))
$('#botao__finalizacoes__novo').on('click', evento => navegacaoConfiguracao('container__finalizacoes__detalhe'))
$('#botao__meuperfil, #botao__meuperfil__detalhe__voltar, #botao__meuperfil__detalhe__salvar').on('click', evento => navegacaoConfiguracao('container__meuperfil'))
$('#botao__meuperfil__voltar').on('click', evento => navegacaoConfiguracao('mensagem__taurus'))
$('#botao__meuperfil__editar').on('click', evento => navegacaoConfiguracao('container__meuperfil__detalhe'))
$('#botao__estancia, #botao__estancia__detalhe__voltar, #botao__estancia__detalhe__salvar').on('click', evento => navegacaoConfiguracao('container__estancia'))
$('#botao__estancia__novo').on('click', evento => navegacaoConfiguracao('container__estancia__detalhe'))
$('#botao__estancia__voltar').on('click', evento => navegacaoConfiguracao('mensagem__taurus'))
$('#botao__departamentos, #botao__departamentos__detalhe__voltar, #botao__departamentos__detalhe__salvar').on('click', evento => navegacaoConfiguracao('container__departamentos'))
$('#botao__departamentos__voltar').on('click', evento => navegacaoConfiguracao('mensagem__taurus'))
$('#botao__departamentos__novo').on('click', evento => navegacaoConfiguracao('container__departamentos__detalhe'))
//botao__departamentos__voltar