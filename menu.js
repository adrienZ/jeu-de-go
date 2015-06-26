var player = []; //choix des joueurs
var j = 1; // numéro du joueur
function change(e) {
    var test = e.id; //je récupère l'id de la div qui correspond au nom du perso 
        switch (test) {


        case 'mario':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/mario.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'pikachu':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/pika.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'yoshi':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/yoshi.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'samus':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/samus.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'link':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/link.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'bowser':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/bowser.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'luigi':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/luigi.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'donkeyKong':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/donkey-kong.png") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;
        case 'sonic':
            document.querySelector('.hero:nth-child(' + j + ')').style.background = 'url("images/sonic.svg") no-repeat center, white';
            document.querySelector('.hero:nth-child(' + j + ')').style.backgroundSize = 'contain';
            break;

        default:

        }
    
    // j'enregistre le choix des joueurs dans un tableau
        player[j] = test;
        
//incrémentation du numéro du joueur    
 j++;

}