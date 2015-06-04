var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');

//eval(fs.readfileSync('./scripts/main.js')+'');


// Chargement de la page index.html
app.get('/', function (req, res) {
    res.sendfile("./index.html");
});

app.get('/styles/style.css', function (req, res) {
    res.sendfile("./styles/style.css");
});

app.get('/scripts/main.js', function (req, res) {
    res.sendfile("./scripts/main.js");
});
app.get('/scripts/FileSaver.min.js', function (req, res) {
    res.sendfile("./scripts/FileSaver.min.js");
});

app.get('/fonts/Kanban.ttf', function (req, res) {
    res.sendfile("./fonts/Kanban.ttf");
});

app.get('/img/bg.jpg', function (req, res) {
    res.sendfile("./img/bg.jpg");
});

app.get('/img/wood2.png', function (req, res) {
    res.sendfile("./img/wood2.png");
});

app.get('/img/dot2.svg', function (req, res) {
    res.sendfile("./img/dot2.svg");
});

app.get('/img/captainAmerica.svg', function (req, res) {
    res.sendfile("./img/captainAmerica.svg");
});

app.get('/img/irondMan.svg', function (req, res) {
    res.sendfile("./img/irondMan.svg");
});




io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function (pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        date = new Date();
        message = ent.encode(message);
        socket.broadcast.emit('message', {
            h: date.getHours(),
            m: date.getMinutes(),
            pseudo: socket.pseudo,
            message: message,

        });
    });
});

var jsdom = require('jsdom');

jsdom.env({  
  html: "<html><body></body></html>",
  scripts: [
    'http://code.jquery.com/jquery-1.5.min.js'
  ]
,done : function (err, window) {
  var $ = window.jQuery;

  $('body').append("<div class='testing'>Hello World</div>");
  console.log($(".testing").text()); // outputs Hello World
}
});

io.sockets.on('player1clic')

var joueur = 1;

io.sockets.on('player1clic');
function modifier(monID) //////////////////////////////////////////////
    {
        x = 0;

        if (joueur == 1) {


            if (monID.className == 'div2')

            {
                
                monID.className = 'div1';
                    joueur = 2;
                console.log(joueur)
                } else {


                }
            } 
         else {


            if (monID.className == 'div2')

            {
                joueur = 1;
                monID.className = 'div3';
            } else

            {


            }
        }

    }


server.listen(8080);