function buscarEndereco(base_url, cep, logradouro, numero, bairro, cidade, estado) {
    cep = cep.replace('-', '');

    if (/\d{8}/.test(cep)) {
        $j.getJSON(base_url + 'checkoutsimplificado/index/cep/numero/' + cep) // trocar URL e fazer server-side
            .done(function(endereco){
                document.getElementById(logradouro).value = endereco.logradouro;
                document.getElementById(bairro).value = endereco.bairro;
                document.getElementById(cidade).value = endereco.localidade;

                switch(endereco.uf) {
                    case "AC": document.getElementById(estado).value = 485; break;
                    case "AL": document.getElementById(estado).value = 486; break;
                    case "AP": document.getElementById(estado).value = 487; break;
                    case "AM": document.getElementById(estado).value = 488; break;
                    case "BA": document.getElementById(estado).value = 489; break;
                    case "CE": document.getElementById(estado).value = 490; break;
                    case "ES": document.getElementById(estado).value = 491; break;
                    case "GO": document.getElementById(estado).value = 492; break;
                    case "MA": document.getElementById(estado).value = 493; break;
                    case "MT": document.getElementById(estado).value = 494; break;
                    case "MS": document.getElementById(estado).value = 495; break;
                    case "MG": document.getElementById(estado).value = 496; break;
                    case "PA": document.getElementById(estado).value = 497; break;
                    case "PB": document.getElementById(estado).value = 498; break;
                    case "PR": document.getElementById(estado).value = 499; break;
                    case "PE": document.getElementById(estado).value = 500; break;
                    case "PI": document.getElementById(estado).value = 501; break;
                    case "RJ": document.getElementById(estado).value = 502; break;
                    case "RN": document.getElementById(estado).value = 503; break;
                    case "RS": document.getElementById(estado).value = 504; break;
                    case "RO": document.getElementById(estado).value = 505; break;
                    case "RR": document.getElementById(estado).value = 506; break;
                    case "SC": document.getElementById(estado).value = 507; break;
                    case "SP": document.getElementById(estado).value = 508; break;
                    case "SE": document.getElementById(estado).value = 509; break;
                    case "TO": document.getElementById(estado).value = 510; break;
                    case "DF": document.getElementById(estado).value = 511; break;
                }

                document.getElementById(numero).focus();
            });
    }
}

Validation.add('cpf', 'Por favor preencha um CPF válido', function(value) {
    value = value.replace(/[-\.]/g, '');

    if (value.length != 11 || 
        value == "00000000000" || value == "11111111111" || 
        value == "22222222222" || value == "33333333333" || 
        value == "44444444444" || value == "55555555555" || 
        value == "66666666666" || value == "77777777777" || 
        value == "88888888888" ||value == "99999999999") {
            return false;
        }

    var dv = value.substr(9,2);
    var value = value.substr(0,9);
    var i;
    var d1 = 0;
    var v = false;
    for (i = 0; i < 9; i++){
        d1 += value.charAt(i)*(10-i);
    }
    if (d1 == 0) {
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        return false;
    }
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += value.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        return false;
    }
    if (!v) {
        return true;
    }

});

