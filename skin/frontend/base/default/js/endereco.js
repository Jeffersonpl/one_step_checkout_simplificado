function buscarEndereco(cep, logradouro, numero, bairro, cidade, estado) {
    cep = cep.replace('-', '');
    if (/\d{8}/.test(cep)) {
        $j.getJSON('http://cep.correiocontrol.com.br/' + cep + '.json') // trocar URL e fazer server-side
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
