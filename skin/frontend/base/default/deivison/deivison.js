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

            $j('input[name*="celular"]').focus(function(){
              $j(this).val('');
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

            $j('input[name*="taxvat"]').blur( function(){

                v = $j(this).val();

                //para testar cnpj: 78.425.986/0036-15 ou 78425986003615

                //Remove tudo o que não é dígito
                v = v.replace(/\D/g,"");

                if (v.length <= 11) { //CPF

                    //Coloca um ponto entre o terceiro e o quarto dígitos
                    v=v.replace(/(\d{3})(\d)/,"$1.$2");

                    //Coloca um ponto entre o terceiro e o quarto dígitos
                    //de novo (para o segundo bloco de números)
                    v=v.replace(/(\d{3})(\d)/,"$1.$2");

                    //Coloca um hífen entre o terceiro e o quarto dígitos
                    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

                } else { //CNPJ

                    //Coloca ponto entre o segundo e o terceiro dígitos
                    v=v.replace(/^(\d{2})(\d)/,"$1.$2");

                    //Coloca ponto entre o quinto e o sexto dígitos
                    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");

                    //Coloca uma barra entre o oitavo e o nono dígitos
                    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");

                    //Coloca um hífen depois do bloco de quatro dígitos
                    v=v.replace(/(\d{4})(\d)/,"$1-$2");
                }

                $j(this).val(v);

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

        };

        /********************* Valida CPF e CNPJ *********************/

    	// Adicionar classe de validacao de cpf e cnpj ao Taxvat
    	//$j('#billing:taxvat"]').addClassName('validar_cpf'); //removido e colocado na mão

        function validaCPF(cpf,pType){
        	var cpf_filtrado = "", valor_1 = " ", valor_2 = " ", ch = "";
        	var valido = false;

        	for (i = 0; i < cpf.length; i++){
              ch = cpf.substring(i, i + 1);
            	if (ch >= "0" && ch <= "9"){
                	cpf_filtrado = cpf_filtrado.toString() + ch.toString()
                	valor_1 = valor_2;
                	valor_2 = ch;
        	    }
        	    if ((valor_1 != " ") && (!valido)) valido = !(valor_1 == valor_2);
        	}

        	if (!valido) cpf_filtrado = "12345678912";
        	if (cpf_filtrado.length < 11){
        	    for (i = 1; i <= (11 - cpf_filtrado.length); i++){cpf_filtrado = "0" + cpf_filtrado;}
        	}

        	if(pType <= 1){
        	    if ( ( cpf_filtrado.substring(9,11) == checkCPF( cpf_filtrado.substring(0,9) ) ) && ( cpf_filtrado.substring(11,12)=="") ){return true;}
        	}

        	if((pType == 2) || (pType == 0)){
            	if (cpf_filtrado.length >= 14){
            	    if ( cpf_filtrado.substring(12,14) == checkCNPJ( cpf_filtrado.substring(0,12) ) ){  return true;}
            	}
        	}

    	return false;
    	}



      	function checkCNPJ(vCNPJ){
      	var mControle = "";
      	var aTabCNPJ = new Array(5,4,3,2,9,8,7,6,5,4,3,2);
      	for (i = 1 ; i <= 2 ; i++){
        	mSoma = 0;
        	for (j = 0 ; j < vCNPJ.length ; j++)
        	mSoma = mSoma + (vCNPJ.substring(j,j+1) * aTabCNPJ[j]);
        	if (i == 2 ) mSoma = mSoma + ( 2 * mDigito );
        	mDigito = ( mSoma * 10 ) % 11;
        	if (mDigito == 10 ) mDigito = 0;
        	mControle1 = mControle ;
        	mControle = mDigito;
        	aTabCNPJ = new Array(6,5,4,3,2,9,8,7,6,5,4,3);
      	}

      	return( (mControle1 * 10) + mControle );
      	}



      	function checkCPF(vCPF){
      	var mControle = ""
      	var mContIni = 2, mContFim = 10, mDigito = 0;
      	for (j = 1 ; j <= 2 ; j++){
        	mSoma = 0;
        	for (i = mContIni ; i <= mContFim ; i++)
        	mSoma = mSoma + (vCPF.substring((i-j-1),(i-j)) * (mContFim + 1 + j - i));
        	if (j == 2 ) mSoma = mSoma + ( 2 * mDigito );
        	mDigito = ( mSoma * 10 ) % 11;
        	if (mDigito == 10) mDigito = 0;
        	mControle1 = mControle;
        	mControle = mDigito;
        	mContIni = 3;
        	mContFim = 11;
      	}

      	return( (mControle1 * 10) + mControle );
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
