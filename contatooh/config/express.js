//  config/express.js
var express = require('express');
// abaixo da variavel express declarada no topo do arquivo
var home = require('../app/routes/home');

module.exports = function(){
    var app = express();

    //  configuração de ambiente
    app.set('port',3000);

    //  middleware
    app.use(express.static('./public'));

    //  abaixo do middleware static
    app.set('view engine','ejs');
    app.set('views','.app/views');

    //  abaixo da configuração do ultimo middleware
    home(app);

    return app;
};
