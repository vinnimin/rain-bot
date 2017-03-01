module.exports = function() {
    var fs = require('fs');
    var url = 'https://gamdom.com/crash'
    var request = require('request');
    var now = new Date;
    request(url, function (error, response, html) {
        result = {
        date : now.toString()
        , site : url
        , html : html
        };
        console.log(result.html);
        fs.writeFile('resultado.json', JSON.stringify(result, null, 3), function(err) {});
    })
}