    $(document).ready(function (){
        var modelo = $("#modelo").val();
        //console.log(modelo);
        if(modelo == 2){
            var step = "#step27";
            var title = "<i class='fa fa-address-book'></i> Rodapé";
            var content = "Nesta etapa, você pode selecionar se deseja que, no final do seu site, sejam exibidos os itens: CNPJ da agência, as normas de proteção do Direito do Consumidor e as Condições Gerais (padrão) da sua agência para a aquisição de viagens. Item não obrigatório mas recomendado.";
            var placement = "top";
        }

        if(modelo != 64){
            var step1 = "#step29";
            var title1 = "<i class='fa fa-map-marker'></i> Roteiros";
            var content1 = "No sistema de roteiros você tem a possibilidade de criar viagens especiais, pensadas especialmente para o seu tipo de público. Escolha as melhores imagens, aposte em preços que caibam no bolso de qualquer pessoa e aguarde os contatos!";
            var placement1 = "top";

            var step2 = "#step30";
            var title2 = "<i class='fa fa-camera'></i> Galeria";
            var content2 = "Mostre aos seus clientes o quanto é bom viajar com a sua agência. Tire fotos das principais viagens, receba fotos dos seus próprios clientes e faça suas exibições da maneira que preferir. Você também pode colocar em destaque, para que as galerias sejam exibidas assim que o cliente entrar no seu site!";
            var placement2 = "top";
        }
    // Instance the tour
        var tourC = new Tour({
            storage: false,
            //debug: true,
    
            steps: [{

                    element: "#step17",
                    title: "<i class='fa fa-cogs'></i> Vamos aprender?",
                    content: "A partir de agora, você irá seguir um passo a passo entre as etapas de configuração do seu site. Caso reste alguma dúvida, você pode sempre verificar o manual disponível na mensagem de acesso.",
                    placement: "bottom",
                    backdrop: true,
                    backdropContainer: '#wrapper',
                    onShown: function (tourC){
                        $('body').addClass('tour-open')
                    },
                    onHidden: function (tourC){
                        $('body').removeClass('tour-close')
                    }
                },
                {
                    element: "#step18",
                    title: "<i class='fa fa-pencil'></i> Dados Cadastrais",
                    content: "Primeiro, você precisa preencher os dados de contato que serão exibidos no seu site.",
                    placement: "top",
                    backdrop: true,
                    backdropContainer: '#wrapper',
                    onShown: function (tourC){
                        $('body').addClass('tour-open')
                    },
                    onHidden: function (tourC){
                        $('body').removeClass('tour-close')
                    },
                    onNext: function (tourC){
                        window.location.href = 'dados-empresa.php?id=1';
                    }
                },
                {
                    element: "#step16",
                    title: " ",
                    content: " "
                }
                
            ]});

        // Initialize the tour
        
        $('.startTourC').click(function() {
            tourC.init();
            tourC.start();
            tourC.restart();
        });
        

    });