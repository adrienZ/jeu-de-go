var get = function (id) {
    return document.getElementById(id);
}; //shorten document.getElementbyId()


var d = 9; // dimension du carrÃ©
var w; // w z  w2 z2 sont des variables qui vont m'aider Ã  vÃ©rifier les case aux alentours de la case actuelle
var w2;
var z;
var z2;
var a = 0;
var extract1;
var extract2;
var a2;
var b;
var marteau1 = 0;
var marteau2 = 0;
var numberObjet = 200;
var compteurJ2 = 0;
var compteurJ1 = 0;
var b2;
var tab1; // grille des valeurs courantes
var tab2; // grille temporaire
var joueur = 1;
var handi = 0;
var minusJ1;
var minusJ2;
var suicideuh = false;
var passe = 0;
var timerJ1 = 0;
var timerJ2 = 0;
var ballUse = false;
var audiobombe = new Audio(['../songs/bombe.mp3']);
var audiomarteau = new Audio(['../songs/marteau.mp3']);
var audioballe = new Audio(['../songs/balle.mp3']);
var audioup = new Audio(['../songs/UP.mp3']);



function timer(test) {

    if (test == 1) {
        clearInterval(minusJ2);


        minusJ1 = setInterval(function () {
            if (timerJ1 >= 0) {

                timerJ1--;
                if (timerJ1 == -1) {
                    min1--;
                    timerJ1 = 59;

                }
            }
        }, 1000);


    } else if (test == 2) {
        clearInterval(minusJ1);

        minusJ2 = setInterval(function () {
            if (timerJ2 >= 0) {

                timerJ2--;
                if (timerJ2 == -1) {
                    min2--;
                    timerJ2 = 59;

                }
            }
        }, 1000);

    }





}
var interval;
var min1 = 5;
var min2 = 5;

function time() {
    interval = setInterval(blabla, 1000);
}



function blabla() {
    if (timerJ1 > 9) {
        get('timerJ1').innerHTML = min1 + ' : ' + timerJ1;
    } else {
        get('timerJ1').innerHTML = min1 + ' : 0' + timerJ1;

    }
    if (timerJ2 > 9) {
        get('timerJ2').innerHTML = min2 + ' : ' + timerJ2;
    } else {
        get('timerJ2').innerHTML = min2 + ' : 0' + timerJ2;

    }
}

time();



function findepartie(){
    if(compteurJ2>compteurJ1){
   document.location.href='victoireJ2.html';
    }
    else if(compteurJ1>compteurJ2){
    document.location.href='victoireJ1.html';
    }
    else {
        document.location.href='victoireJ0.html';
    }

}

function passer() {
    passe++;
    if (joueur == 1) {
        joueur = 2;
    } else {
        joueur = 1;
    }
    if (passe == 2) {
        findepartie();
    }

}

function initialisation() //////////////////////////////////////////////
    {
        tab1 = new Array();
        tab2 = new Array();

        document.write('<table cellpadding="0" cellspacing="0">');
        for (var i = 0; i <= d; i++) {
            document.write("<tr id='ligne_" + i + "'>")

            tab2[i] = new Array();

            for (var j = 0; j <= d; j++) {


                tab2[i][j] = 0;

                if (i == 0 || i == d || j == 0 || j == d) {
                    document.write("<td id='col_" + i + " line_" + j + " ' class='div5'</td>")
                }
                //                    else if (i == 1) {
                //
                //                    document.write("<td id='col_" + i + " line_" + j + " ' class='div2 top'</td>")
                //
                //}
                else {
                    document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick='modifier(this);   '></td>")
                }

            }

            document.write("</tr>")





        }



        document.write('</table>');



        if (theme == 1) {
            document.querySelector(".ui#J1 .head").style.background = 'url(img/MARIO.svg)';
            document.querySelector(".ui#J1 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J1 .name").innerHTML = 'MARIO';

        }
        if (theme == 2) {
            document.querySelector(".ui#J1 .head").style.background = 'url(img/pika.svg)';
            document.querySelector(".ui#J1 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J1 .name").innerHTML = 'PIKACHU';

        }
        if (theme == 3) {
            document.querySelector(".ui#J1 .head").style.background = 'url(img/sonic.svg)';
            document.querySelector(".ui#J1 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J1 .name").innerHTML = 'SONIC';

        }

        if (theme == 4) {
            document.querySelector(".ui#J1 .head").style.background = 'url(img/link.svg)';
            document.querySelector(".ui#J1 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J1 .name").innerHTML = 'LINK';

        }
        if (theme2 == 1) {
            document.querySelector(".ui#J2 .head").style.background = 'url(img/MARIO.svg)';
            document.querySelector(".ui#J2 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J2 .name").innerHTML = 'MARIO';


        }
        if (theme2 == 2) {
            document.querySelector(".ui#J2 .head").style.background = 'url(img/pika.svg)';
            document.querySelector(".ui#J2 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J2 .name").innerHTML = 'PIKACHU';

        }
        if (theme2 == 3) {
            document.querySelector(".ui#J2 .head").style.background = 'url(img/sonic.svg)';
            document.querySelector(".ui#J2 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J2 .name").innerHTML = 'SONIC';

        }
        if (theme2 == 4) {
            document.querySelector(".ui#J2 .head").style.background = 'url(img/link.svg)';
            document.querySelector(".ui#J2 .head").style.backgroundSize = 'cover';
            document.querySelector(".ui#J2 .name").innerHTML = 'LINK';

        }


    } //////////////////////////////////////////////////

function liberte(i, j) {
    var liberte = 4;

    if (get("col_" + i + " line_" + j + " ").className == 'div1 animated rollIn') {
        if (get("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
            liberte--;

        }
        if (get("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

            liberte--;

        }
        if (get("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
            liberte--;

        }
        if (get("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
            liberte--;

        }

    }
    if (get("col_" + i + " line_" + j + " ").className == 'div3 animated rollIn' || get("col_" + i + " line_" + j + " ").className == 'div8' || get("col_" + i + " line_" + j + " ").className == 'div7' || get("col_" + i + " line_" + j + " ").className == 'div9' || get("col_" + i + " line_" + j + " ").className == 'div10' || get("col_" + i + " line_" + j + " ").className == 'div11') {
        if (get("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
            liberte--;

        }
        if (get("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

            liberte--;

        }
        if (get("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
            liberte--;

        }
        if (get("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
            liberte--;

        }
    }

    if (liberte != 0) {
        return true;
    } else {
        return false;
    }




}

function libertes(i, j) {
    var libertes = 4;

    if (get("col_" + i + " line_" + j + " ").className == 'div1 animated rollIn') {

        if (get("col_" + (i + 1) + " line_" + j + " ").className == 'div5' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div3 animated rollIn') {
            libertes--;

        }
        if (get("col_" + (i - 1) + " line_" + j + " ").className == 'div5' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div3 animated rollIn') {

            libertes--;

        }
        if (get("col_" + i + " line_" + (j - 1) + " ").className == 'div5' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div3 animated rollIn') {
            libertes--;

        }
        if (get("col_" + i + " line_" + (j + 1) + " ").className == 'div5' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div3 animated rollIn') {
            libertes--;

        }

    }
    if (get("col_" + i + " line_" + j + " ").className == 'div3 animated rollIn') {

        if (get("col_" + (i + 1) + " line_" + j + " ").className == 'div5' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div1 animated rollIn') {
            libertes--;

        }
        if (get("col_" + (i - 1) + " line_" + j + " ").className == 'div5' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div1 animated rollIn') {

            libertes--;

        }
        if (get("col_" + i + " line_" + (j - 1) + " ").className == 'div5' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div1 animated rollIn') {
            libertes--;

        }
        if (get("col_" + i + " line_" + (j + 1) + " ").className == 'div5' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div1 animated rollIn') {
            libertes--;

        }

    }


    if (libertes != 0) {
        return true;
    } else {
        return false;
    }




}

function verification(caser) {
    b = 1;
    var bonus = true;
    suicideuh = false;
    c = 100;
    tab1 = new Array();

    //Creation tableau final

    for (var i = 1; i < d; i++) {
        for (var j = 1; j < d; j++) {
            if (get("col_" + i + " line_" + j + " ").className == 'div1 animated rollIn') {

                tab2[i][j] = b;

                b++;


            }
            if (get("col_" + i + " line_" + j + " ").className == 'div3 animated rollIn') {

                tab2[i][j] = c;


                c++;

            }
            if (get("col_" + i + " line_" + j + " ").className == 'div2') {
                tab2[i][j] = 0;
            }

        }
    }


    // formation des groupes en changant le tableau final
    for (var i = 1; i < d; i++) {
        for (var j = 1; j < d; j++) {

            if (get("col_" + (i + 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                tab2[i + 1][j] = tab2[i][j];

            }

            if (get("col_" + (i - 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                tab2[i - 1][j] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j + 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                tab2[i][j + 1] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j - 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                tab2[i][j - 1] = tab2[i][j];

            }

        }
        for (var j = d - 1; j > 1; j--) {
            if (get("col_" + (i + 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                tab2[i + 1][j] = tab2[i][j];

            }

            if (get("col_" + (i - 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                tab2[i - 1][j] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j + 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                tab2[i][j + 1] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j - 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                tab2[i][j - 1] = tab2[i][j];

            }

        }
    }

    for (var i = d - 1; i > 1; i--) {
        for (var j = d - 1; j > 1; j--) {
            if (get("col_" + (i + 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                tab2[i + 1][j] = tab2[i][j];

            }

            if (get("col_" + (i - 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                tab2[i - 1][j] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j + 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                tab2[i][j + 1] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j - 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                tab2[i][j - 1] = tab2[i][j];

            }









        }
        for (var j = 1; j < d; j++) {
            if (get("col_" + (i + 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                tab2[i + 1][j] = tab2[i][j];

            }

            if (get("col_" + (i - 1) + " line_" + j + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                tab2[i - 1][j] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j + 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                tab2[i][j + 1] = tab2[i][j];

            }

            if (get("col_" + i + " line_" + (j - 1) + " ").className == get("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                tab2[i][j - 1] = tab2[i][j];

            }
        }

    }



    var yolo = caser.id;
    var Icase = parseInt(yolo.substr(4, 1));
    var Jcase = parseInt(yolo.substr(11));


    ///VERIF CASE AUTOUR DE CELLE OU LON VIENT DE CLIQUER ////

    if (libertes(Icase, Jcase) == false) {

        suicideuh = true;


    }
    if (tab2[Icase + 1][Jcase] != 0) {
        var NombreDePion = 0;
        var compteurFalse = 0;
        for (var i = 1; i < d; i++) {
            for (var j = 1; j < d; j++) {
                if (tab2[i][j] == tab2[Icase + 1][Jcase]) {
                    NombreDePion++;
                    liberte(i, j);
                    if (liberte(i, j) == true) {

                        break;

                    }
                    if (liberte(i, j) == false) {
                        compteurFalse++;


                    }
                }
            }
        }

        if (compteurFalse == NombreDePion) {
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase + 1][Jcase]) {
                        if (tab2[i][j] >= 200) {
                            if (get("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g = i - 1; g <= i + 1; g++) {
                                    for (var h = j - 1; h <= j + 1; h++) {
                                        if (get("col_" + g + " line_" + h + " ").className != 'div5') {
                                            get("col_" + g + " line_" + h + " ").className = 'div2';

                                        }
                                    }
                                }
                            }
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {

                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div10') {
                                audioballe.play();
                                handi = handi + 3;
                                if (joueur == 1) {
                                    joueur = 2;
                                } else {
                                    joueur = 1;
                                }

                            }
                        }

                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }

                        if (bonus == true) {
                            get("col_" + i + " line_" + j + " ").className = 'div2';
                            suicideuh = false;
                        } else {
                            bonus = true
                        };
                    }
                }
            }
        }

    }

    if (tab2[Icase - 1][Jcase] != 0) {
        var NombreDePion = 0;
        var compteurFalse = 0;
        for (var i = 1; i < d; i++) {
            for (var j = 1; j < d; j++) {

                if (tab2[i][j] == tab2[Icase - 1][Jcase]) {
                    NombreDePion++;
                    liberte(i, j);
                    if (liberte(i, j) == true) {

                        break;

                    }
                    if (liberte(i, j) == false) {
                        compteurFalse++;


                    }
                }
            }
        }

        if (compteurFalse == NombreDePion) {
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase - 1][Jcase]) {
                        if (tab2[i][j] >= 200) {
                            if (get("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g = i - 1; g <= i + 1; g++) {
                                    for (var h = j - 1; h <= j + 1; h++) {
                                        if (get("col_" + g + " line_" + h + " ").className != 'div5') {
                                            get("col_" + g + " line_" + h + " ").className = 'div2';

                                        }
                                    }
                                }
                            }
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {

                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div10') {
                                audioballe.play();
                                handi = handi + 3;
                                if (joueur == 1) {
                                    joueur = 2;
                                } else {
                                    joueur = 1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                            get("col_" + i + " line_" + j + " ").className = 'div2';
                            suicideuh = false;

                        } else {
                            bonus = true
                        };

                    }
                }
            }
        }

    }

    if (tab2[Icase][Jcase + 1] != 0) {
        var NombreDePion = 0;
        var compteurFalse = 0;
        for (var i = 1; i < d; i++) {
            for (var j = 1; j < d; j++) {


                if (tab2[i][j] == tab2[Icase][Jcase + 1]) {
                    NombreDePion++;
                    liberte(i, j);

                    if (liberte(i, j) == true) {


                        break;

                    }
                    if (liberte(i, j) == false) {

                        compteurFalse++;


                    }
                }
            }
        }

        if (compteurFalse == NombreDePion) {

            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase][Jcase + 1]) {
                        if (tab2[i][j] >= 200) {
                            if (get("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g = i - 1; g <= i + 1; g++) {
                                    for (var h = j - 1; h <= j + 1; h++) {
                                        if (get("col_" + g + " line_" + h + " ").className != 'div5') {
                                            get("col_" + g + " line_" + h + " ").className = 'div2';

                                        }
                                    }
                                }
                            }
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {

                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div10') {
                                audioballe.play();
                                handi = handi + 3;
                                if (joueur == 1) {
                                    joueur = 2;
                                } else {
                                    joueur = 1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                            get("col_" + i + " line_" + j + " ").className = 'div2';
                            suicideuh = false;

                        } else {
                            bonus = true
                        };
                    }
                }
            }
        }

    }

    if (tab2[Icase][Jcase - 1] != 0) {
        var NombreDePion = 0;
        var compteurFalse = 0;
        for (var i = 1; i < d; i++) {
            for (var j = 1; j < d; j++) {

                if (tab2[i][j] == tab2[Icase][Jcase - 1]) {
                    NombreDePion++;
                    liberte(i, j);
                    if (liberte(i, j) == true) {

                        break;

                    }
                    if (liberte(i, j) == false) {
                        compteurFalse++;


                    }
                }
            }
        }


        if (compteurFalse == NombreDePion) {
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase][Jcase - 1]) {
                        if (tab2[i][j] >= 200) {
                            if (get("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g = i - 1; g <= i + 1; g++) {
                                    for (var h = j - 1; h <= j + 1; h++) {
                                        if (get("col_" + g + " line_" + h + " ").className != 'div5') {
                                            get("col_" + g + " line_" + h + " ").className = 'div2';

                                        }
                                    }
                                }
                            }
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {

                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div10') {
                                audioballe.play();
                                handi = handi + 3;
                                if (joueur == 1) {
                                    joueur = 2;
                                } else {
                                    joueur = 1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                            get("col_" + i + " line_" + j + " ").className = 'div2';
                            suicideuh = false;

                        } else {
                            bonus = true
                        };
                    }
                }
            }

        }

        if (suicideuh == true) {

            get("col_" + Icase + " line_" + Jcase + " ").className = 'div2';
            window.alert('sucide');
            if (handi > 1) {
                handi++
            }
            if (joueur == 1) {

                joueur = 2;
            } else {
                joueur = 1;

            }
        }
    }
    get("scoreJ1").innerHTML = 'Score : ' + '<span>' + compteurJ1 + '</span>';
    get("scoreJ2").innerHTML = 'Score : ' + '<span>' + compteurJ2 + '</span>';
    get("bonusJ2M").innerHTML = "X " + marteau2;
    get("bonusJ1M").innerHTML = "X " + marteau1;
    if (joueur == 1) {

        get("bonusJ1B").innerHTML = "X " + handi;
        if (handi == 1 && ballUse == false) {
            ballUse = true;
            if (handi == 1 && ballUse == true) {
                get("bonusJ1B").innerHTML = "X 0";
                ballUse = false;
            }
        }

        if (joueur == 2) {
            get("bonusJ2B").innerHTML = "X " + handi;
            if (handi == 1 && ballUse == false) {
                ballUse = true;
            }
            if (handi == 1 && ballUse == true) {
                get("bonusJ2B").innerHTML = "X 0";
                ballUse = false;
            }
        }
    }
    var myElements = document.querySelectorAll(".div1");
    for (var i = 0; i < myElements.length; i++) {
        if (theme == 1) {
            myElements[i].style.background = 'url(img/MARIO.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        if (theme == 2) {
            myElements[i].style.background = 'url(img/pika.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        if (theme == 3) {
            myElements[i].style.background = 'url(img/sonic.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }

        if (theme == 4) {
            myElements[i].style.background = 'url(img/link.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        myElements[i].style.visibility = 'visible';
    }

    var myElements1 = document.querySelectorAll(".div3");
    for (var i = 0; i < myElements1.length; i++) {
        if (theme2 == 1) {
            myElements1[i].style.background = 'url(img/MARIO.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        if (theme2 == 2) {
            myElements1[i].style.background = 'url(img/pika.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        if (theme2 == 3) {
            myElements1[i].style.background = 'url(img/sonic.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }

        if (theme2 == 4) {
            myElements1[i].style.background = 'url(img/link.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        myElements1[i].style.visibility = 'visible';
    }

    var myElements2 = document.querySelectorAll(".div2");
    for (var i = 0; i < myElements2.length; i++) {
        myElements2[i].style.background = '';

    }
}


function modifier(monID) //////////////////////////////////////////////
    {
        x = 0;

        if (joueur == 1) {
            document.querySelector('.ui#J2 header').className = 'currentP';
            document.querySelector('.ui#J1 header').className = '';


            if (monID.className == 'div2')

            {
                ApparitionObjet();

                monID.className = 'div1 animated rollIn';
                if (handi <= 1) {
                    joueur = 2;
                } else {
                    handi = handi - 1;


                }
            } else

            {
                if (marteau2 != 0) {
                    monID.className = 'div1 animated rollIn';
                    joueur = 2;
                    marteau2--;
                    ApparitionObjet();


                }

            }
        } else {
            document.querySelector('.ui#J1 header').className = 'currentP';
            document.querySelector('.ui#J2 header').className = '';

            if (monID.className == 'div2')

            {
                ApparitionObjet();

                monID.className = 'div3 animated rollIn';
                if (handi <= 1) {
                    joueur = 1;
                } else {
                    handi = handi - 1;


                }
            } else

            {
                if (marteau1 != 0) {
                    monID.className = 'div3 animated rollIn';
                    joueur = 1;
                    marteau1--;
                    ApparitionObjet();

                }

            }
        }

        timer(joueur);

        setTimeout(function () {
            verification(monID)
        }, 500);;
    }


initialisation();




function save() {

    var data = new Array();
    for (var i = 0; i <= d; i++) {
        for (var j = 0; j <= d; j++) {
            var current = tab2[i][j];
            data.push(current);
            current = null;
        }
    }
    var blob = new Blob([data], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "array.txt");

}





function handicap(lol) {

    var choix = (lol.id)

    if (choix == 'oui') {
        var Nhandi = window.prompt('Combien d\'handicap ?');
        handi = parseInt(Nhandi);
        return handi;

    }
}









// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    //do your stuff!
} else {
    alert('The File APIs are not fully supported by your browser.');
}

function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];

    if (!f) {
        alert("Failed to load file");
    } else if (!file.type.match('text.*')) {
        alert(f.name + " is not a valid text file.");
    } else {
        var r = new FileReader();
        //proceed with read…
    }
}



function ApparitionObjet() {

    var chanceObjet = Math.ceil(Math.random() * 10);
    if (chanceObjet <= 1) {
        do {
            var popX = Math.ceil(Math.random() * 10) - 1;
            var popY = Math.ceil(Math.random() * 10) - 1;
        }
        while (get("col_" + popX + " line_" + popY + " ").className != 'div2');
        var typeObjet = Math.ceil(Math.random() * 5);
        if ((get("col_" + (popX + 1) + " line_" + popY + " ").className == 'div2' || get("col_" + (popX + 1) + " line_" + popY + " ").className == 'div1' || get("col_" + (popX + 1) + " line_" + popY + " ").className == 'div3' || get("col_" + (popX + 1) + " line_" + popY + " ").className == 'div5') &&
            (get("col_" + (popX - 1) + " line_" + popY + " ").className == 'div2' || get("col_" + (popX - 1) + " line_" + popY + " ").className == 'div1' || get("col_" + (popX - 1) + " line_" + popY + " ").className == 'div3' || get("col_" + (popX - 1) + " line_" + popY + " ").className == 'div5') &&
            (get("col_" + (popX) + " line_" + (popY - 1) + " ").className == 'div2' || get("col_" + (popX) + " line_" + (popY - 1) + " ").className == 'div1' || get("col_" + (popX) + " line_" + (popY - 1) + " ").className == 'div3' || get("col_" + (popX) + " line_" + (popY - 1) + " ").className == 'div5') &&
            (get("col_" + (popX) + " line_" + (popY + 1) + " ").className == 'div2' || get("col_" + (popX) + " line_" + (popY + 1) + " ").className == 'div1' || get("col_" + (popX) + " line_" + (popY + 1) + " ").className == 'div3' || get("col_" + (popX) + " line_" + (popY + 1) + " ").className == 'div5')) {

            var possible = liberteObjet(popX, popY);

            if (possible == '0') {

            }
            switch (typeObjet) {
            case 1:
                get("col_" + popX + " line_" + popY + " ").className = 'div8';
                break;

            case 2:
                get("col_" + popX + " line_" + popY + " ").className = 'div7';
                break;

            case 3:
                get("col_" + popX + " line_" + popY + " ").className = 'div9';
                break;
            case 4:
                get("col_" + popX + " line_" + popY + " ").className = 'div10';

                break;

            case 5:
                get("col_" + popX + " line_" + popY + " ").className = 'div11';
                break;
            }

            tab2[popX][popY] = numberObjet;

            numberObjet++;
        }



    }
}

function liberteObjet(i, j) {
    var liberte2 = 4;
    if (get("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
        liberte2--;

    }
    if (get("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

        liberte2--;

    }
    if (get("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
        liberte2--;

    }
    if (get("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
        liberte2--;

    }
    return liberte2;

}






//HUD