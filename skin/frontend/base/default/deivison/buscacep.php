<?

$cep = $_GET['cep'];

// validacao ...

$endereco = 'http://cep.correiocontrol.com.br/' . $cep . '.json';

$ch = curl_init($endereco);
curl_setopt ($ch, CURLOPT_POST, 0);
curl_setopt ($ch, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec ($ch);

// fazer de/para e pegar ID do estado p/ colocar no JSON?

switch ( $dados['uf'] ){
    case "AC": $uf = 'Acre'; $estado = 1; $num = 485; break;
    case "AL": $uf = 'Alagoas'; $estado = 2; $num = 486; break;
    case "AP": $uf = 'Amapa'; $estado = 3; $num = 487; break;
    case "AM": $uf = 'Amazonas'; $estado = 4; $num = 488; break;
    case "BA": $uf = 'Bahia'; $estado = 5; $num = 489; break;
    case "CE": $uf = 'Ceara'; $estado = 6; $num = 490; break;
    case "ES": $uf = 'Espirito Santo'; $estado = 6; $num = 491; break;
    case "GO": $uf = 'Goias'; $estado = 7; $num = 492; break;
    case "MA": $uf = 'Maranhao'; $estado = 8; $num = 493; break;
    case "MT": $uf = 'Mato Grosso'; $estado = 10; $num = 494; break;
    case "MS": $uf = 'Mato Grosso do Sul'; $estado = 11; $num = 495; break;
    case "MG": $uf = 'Minas Gerais'; $estado = 12; $num = 496; break;
    case "PA": $uf = 'Para'; $estado = 13; $num = 497; break;
    case "PB": $uf = 'Paraiba'; $estado = 14; $num = 498; break;
    case "PR": $uf = 'Parana'; $estado = 15; $num = 499; break;
    case "PE": $uf = 'Pernambuco'; $estado = 16; $num = 500; break;
    case "PI": $uf = 'Piaui'; $estado = 17; $num = 501; break;
    case "RJ": $uf = 'Rio de Janeiro'; $estado = 18; $num = 502; break;
    case "RN": $uf = 'Rio Grande do Norte'; $estado = 19; $num = 503; break;
    case "RS": $uf = 'Rio Grande do Sul'; $estado = 20; $num = 504; break;
    case "RO": $uf = 'Rondonia'; $estado = 21; $num = 505; break;
    case "RR": $uf = 'Roraima'; $estado = 22; $num = 506; break;
    case "SC": $uf = 'Santa Catarina'; $estado = 23; $num = 507; break;
    case "SP": $uf = 'Sao Paulo'; $estado = 24; $num = 508; break;
    case "SE": $uf = 'Sergipe'; $estado = 25; $num = 509; break;
    case "TO": $uf = 'Tocantins'; $estado = 26; $num = 510; break;
    case "DF": $uf = 'Distrito Federal'; $estado = 27; $num = 511; break;
}
$texto = $dados['logradouro'].":".$dados['bairro'].":".$dados['cidade'].":".$uf.":".$num.":".$estado.";";

?>
