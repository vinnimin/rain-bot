exports.require = function(link) {
    var request = require('request');
    var now = new Date;
    var codeHtml = 1;
    var result = {
        date : now.toString()
        , site : link
        //, html : html
        };
    request(link,codeHtml, function (error, response, html) {
    console.log(codeHtml+1);
        //fs.writeFile('resultado.json', JSON.stringify(result, null, 3), function(err) {});
    });
    
    
    return result
}