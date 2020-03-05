//Script para mostrar o menu ao clicar no 3 pontos ao lado da caixa de pesquisa de conversa da overview.html
const troca = () => {
    $('#lista-conversas').toggle()
    $('#lista-configuracoes').toggle()
}

$('#botao__config').on('click', evento => troca())
$('#botao__voltar').on('click', event => troca())