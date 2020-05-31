const request = require('request');
const TDK = {}

TDK.search = (word,callback) => {
    request('https://sozluk.gov.tr/gts?ara='+encodeURIComponent(word), (error, response, body) => {
        return callback(error,body);
    });
}

module.exports = TDK;

