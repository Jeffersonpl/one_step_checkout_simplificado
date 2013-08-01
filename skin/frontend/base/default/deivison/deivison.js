jQuery(document).ready(function($j) {

    $j('input[name*="postcode"]').attr('maxlength','8');

    $j('input[name*="telephone"]').keypress( function(e){
        if (e.keyCode >= 9){
            length = this.value.length;
            if (length == 0)
              this.value += "(";

            if (length == 3)
              this.value += ")";
            /*
            Testa para ver se o ddd começa com 11 e coloca maxlength para 14
                    exemplo: (11)95345-1234 que antes era assim (11)5345-1234
            */
            if(/(\(11\)9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])).+/i.test(this.value)){
                $j(this).attr('maxlength','14');
                if (length == 9)
                  this.value += "-";
            } else {
                $j(this).attr('maxlength','13');
                if (length == 8)
                  this.value += "-";
            }
        }
    });


    $j('input[name*="fax"]').keypress( function(e){
        if (e.keyCode >= 9){
            length = this.value.length;
            if (length == 0)
              this.value += "(";

            if (length == 3)
              this.value += ")";
            /*
            Testa para ver se o ddd começa com 11 e coloca maxlength para 14
                    exemplo: (11)95345-1234 que antes era assim (11)5345-1234
            */
            if(/(\(11\)9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])).+/i.test(this.value)){
                $j(this).attr('maxlength','14');
                if (length == 9)
                  this.value += "-";
            } else {
                $j(this).attr('maxlength','13');
                if (length == 8)
                  this.value += "-";
            }
        }
    });


    $j('input[name*="celular"]').keypress( function(e){
        if (e.keyCode >= 9){
            length = this.value.length;
            if (length == 0)
              this.value += "(";

            if (length == 3)
              this.value += ")";
            /*
            Testa para ver se o ddd começa com 11 e coloca maxlength para 14
                    exemplo: (11)95345-1234 que antes era assim (11)5345-1234
            */
            if(/(\(11\)9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])).+/i.test(this.value)){
                $j(this).attr('maxlength','14');
                if (length == 9)
                  this.value += "-";
            } else {
                $j(this).attr('maxlength','13');
                if (length == 8)
                  this.value += "-";
            }
        }
    });

});

    function buscarEndereco(cep) {
        if (/\d{8}/.test(cep)) {
            $j.getJSON('http://cep.correiocontrol.com.br/' + cep + '.json') // trocar URL e fazer server-side
                .done(function(endereco){
                    document.getElementById('street1').value = endereco.logradouro;
                    document.getElementById('street4').value = endereco.bairro;
                    document.getElementById('city').value = endereco.localidade;

                    // TODO: selecionar estado no select e definir region_id

                    switch(endereco.uf) {
                        case "AC": $j('#region_id').val(485); break;
                        case "AL": $j('#region_id').val(486); break;
                        case "AP": $j('#region_id').val(487); break;
                        case "AM": $j('#region_id').val(488); break;
                        case "BA": $j('#region_id').val(489); break;
                        case "CE": $j('#region_id').val(490); break;
                        case "ES": $j('#region_id').val(491); break;
                        case "GO": $j('#region_id').val(492); break;
                        case "MA": $j('#region_id').val(493); break;
                        case "MT": $j('#region_id').val(494); break;
                        case "MS": $j('#region_id').val(495); break;
                        case "MG": $j('#region_id').val(496); break;
                        case "PA": $j('#region_id').val(497); break;
                        case "PB": $j('#region_id').val(498); break;
                        case "PR": $j('#region_id').val(499); break;
                        case "PE": $j('#region_id').val(500); break;
                        case "PI": $j('#region_id').val(501); break;
                        case "RJ": $j('#region_id').val(502); break;
                        case "RN": $j('#region_id').val(503); break;
                        case "RS": $j('#region_id').val(504); break;
                        case "RO": $j('#region_id').val(505); break;
                        case "RR": $j('#region_id').val(506); break;
                        case "SC": $j('#region_id').val(507); break;
                        case "SP": $j('#region_id').val(508); break;
                        case "SE": $j('#region_id').val(509); break;
                        case "TO": $j('#region_id').val(510); break;
                        case "DF": $j('#region_id').val(511); break;
                    }

                    document.getElementById('street2').focus();
                });
        }

    }

/*  deivison 02
    FUNÇÃO QUE EXECUTA PASSO A PASSO DE ATUALIZAÇÃO DOS CAMPOS PAYMENTS E REVIEW
    -------------------------------------------------------------------------------------------------------------------------------
    Essa função foi feita para atualização dos valores, caso haja desconto para pagamentos específicos como 10% pagamento no boleto
    -------------------------------------------------------------------------------------------------------------------------------
    Métodos de atualiação
    'payment-method': 1,    <- Atualiza os meios de pagamentos
    'shipping-method': 1,   <- Atualiza os métodos de envio
    'review': 1             <- Atualiza o resumo da compra
*/
