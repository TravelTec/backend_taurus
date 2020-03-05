
 $(function() {
    $( ".datepicker" ).datepicker( {

    	minDate: 0,
    	dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','TerÃ§a','Quarta','Quinta','Sexta','SÃ¡bado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','SÃ¡b','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],

        onSelect: function (date) {
                var date2 = $('.datepicker').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('.datepicker2').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('.datepicker2').datepicker('option', 'minDate', date2);
        }
    
    });

    $( ".datepicker2" ).datepicker( {

        minDate: 0,
    	dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','TerÃ§a','Quarta','Quinta','Sexta','SÃ¡bado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','SÃ¡b','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],

        onClose: function () {
                var dt1 = $('.datepicker').datepicker('getDate');
                var dt2 = $('.datepicker2').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('.datepicker2').datepicker('option', 'minDate');
                    $('.datepicker2').datepicker('setDate', minDate);
                }
        }
    
    });



  });