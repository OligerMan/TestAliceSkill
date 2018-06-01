var express = require('express');
var app = express();
var http = require('http').Server(app);

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/alice-webhook', function(req, res){
    console.log('Yandex Dialogs version ' + req.body.version);
    var ans = {
        version: req.body.version,
        session: req.body.session,
        response: {
            text: req.body.request.command,
            end_session: false
        }
    }
    res.send(ans);
});


var port = process.env.PORT || 5000;

http.listen(port, function(){
    console.log('listening on port ' + port);
});