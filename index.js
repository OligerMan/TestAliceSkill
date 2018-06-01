var express = require('express');
var app = express();
var http = require('http').Server(app);


app.post('/alice-webhook', function(req, res){
    console.log(req.body.version);
    var ans = {
        version: '1.0',
        session: req.body.session,
        response: {
            text: 'kek',
            end_session: false
        }
    }
    res.send(ans);
});


var port = process.env.PORT || 5000;

http.listen(port, function(){
    console.log('listening on port ' + port);
});