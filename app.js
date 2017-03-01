console.log('Aplicação iniciada');
//Bibliotecas:
var   connect = require('./app/connection.js')
    , fs = require('fs');
//Variavel:
//var url = 'https://gamdom.com/crash'
//, resultado = [];
console.log("Variaveis carregadas")
//console.log(connect(url, resultado));
    //console.log(connect(url));
fs.writeFile('resultado.json', JSON.stringify(result, null, 3), function(err) {
//        console.log('Json gerado');