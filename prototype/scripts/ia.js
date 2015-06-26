var d = 9; // dimension du carrÃ©
var w; // w z  w2 z2 sont des variables qui vont m'aider Ã  vÃ©rifier les case aux alentours de la case actuelle
var w2;
var z;
var z2;
var a = 0;
var a2;
var b;
var b2;
var tab1; // grille des valeurs courantes
var tab2; // grille temporaire
var compteurJ2 = 0;
var compteurJ1 = 0;
var joueur = 1;
var handi = 0;
var minusJ1;
var passe = 0;
var timerJ1 = 5;
var timerJ2 = 30;
var get = function (id) {
    return document.getElementById(id);
}; //shorten document.getElementbyId()



function passerIA() {
    passe++;

    if (passe == 2) {
        findepartie();
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


function liberte2(i, j) {
    var liberte2 = 4;

    if (get("col_" + i + " line_" + j + " ").className == 'div1') {
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

    }
    if (get("col_" + i + " line_" + j + " ").className == 'div3') {
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
    }

    return liberte2;





}


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
                    document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick='modifier(this);'></td>")
                }

            }

            document.write("</tr>")





        }



        document.write('</table>');



    } //////////////////////////////////////////////////

function liberte(i, j) {
    var liberte = 4;

    if (get("col_" + i + " line_" + j + " ").className == 'div1') {
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
    if (get("col_" + i + " line_" + j + " ").className == 'div3') {
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

function verificationIA(caser) {

    b = 1;
    c = 100;
    tab1 = new Array();
    var get = function (id) {
        return document.getElementById(id);
    }; //shorten document.getElementbyId()
    //Creation tableau final

    for (var i = 1; i < d; i++) {
        for (var j = 1; j < d; j++) {
            if (get("col_" + i + " line_" + j + " ").className == 'div1') {

                tab2[i][j] = b;

                b++;

            }
            if (get("col_" + i + " line_" + j + " ").className == 'div3') {

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




    var Icase = parseInt(caser.substr(4, 1));
    var Jcase = parseInt(caser.substr(11));



    ///VERIF CASE AUTOUR DE CELLE OU LON VIENT DE CLIQUER ////

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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';
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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';


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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';
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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }

                        get("col_" + i + " line_" + j + " ").className = 'div2';
                    }
                }
            }
        }

    }

    var myElements = document.querySelectorAll(".div1");
    console.log(myElements.length)
    for (var i = 0; i < myElements.length; i++) {
        if (theme == 1) {
            myElements[i].style.background = 'url(../img/MARIO.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        if (theme == 2) {
            myElements[i].style.background = 'url(../img/pika.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        if (theme == 3) {
            myElements[i].style.background = 'url(../img/link.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }

        if (theme == 4) {
            myElements[i].style.background = 'url(../img/samus.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        myElements[i].style.visibility = 'visible';
    }

    var myElements1 = document.querySelectorAll(".div3");
    console.log(myElements1.length)
    for (var i = 0; i < myElements1.length; i++) {
        if (theme2 == 1) {
            myElements1[i].style.background = 'url(../img/MARIO.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        if (theme2 == 2) {
            myElements1[i].style.background = 'url(../img/pika.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        if (theme2 == 3) {
            myElements1[i].style.background = 'url(../img/link.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }

        if (theme2 == 4) {
            myElements1[i].style.background = 'url(../img/samus.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        myElements1[i].style.visibility = 'visible';
    }

    var myElements2 = document.querySelectorAll(".div2");
    console.log(myElements2.length)
    for (var i = 0; i < myElements2.length; i++) {
        myElements2[i].style.background = '';

    }

}

function verification(caser) {
    b = 1;
    c = 100;
    tab1 = new Array();

    //Creation tableau final

    for (var i = 1; i < d; i++) {
        for (var j = 1; j < d; j++) {
            if (get("col_" + i + " line_" + j + " ").className == 'div1') {

                tab2[i][j] = b;

                b++;

            }
            if (get("col_" + i + " line_" + j + " ").className == 'div3') {

                tab2[i][j] = c;


                c++;

            }


            //            // suicide J2        
            //            if (get("col_" + i + " line_" + j + " ").className == 'div3' &&
            //                (get("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5') &&
            //                (get("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5') &&
            //                (get("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') &&
            //                (get("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5')
            //
            //            ) {
            //
            //                get("col_" + i + " line_" + j + " ").className = 'div2';
            //                console.log('suicide');
            //
            //
            //
            //                //suicide J1
            //            }
            //            if (get("col_" + i + " line_" + j + " ").className == 'div1' &&
            //                (get("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5') &&
            //                (get("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5') &&
            //                (get("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') &&
            //                (get("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5')
            //
            //            ) {
            //
            //                get("col_" + i + " line_" + j + " ").className = 'div2';
            //                console.log('suicide');
            //
            //
            //
            //
            //            }
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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;
                            console.log(compteurJ1);
                        } else {
                            compteurJ2++;
                            console.log(compteurJ2);
                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';
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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;
                            console.log(compteurJ1);
                        } else {
                            compteurJ2++;
                            console.log(compteurJ2);
                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';
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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;
                            console.log(compteurJ1);
                        } else {
                            compteurJ2++;
                            console.log(compteurJ2);
                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';
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
                        if (tab2[i][j] >= 100) {
                            compteurJ1++;
                            console.log(compteurJ1);
                        } else {
                            compteurJ2++;
                            console.log(compteurJ2);
                        }
                        get("col_" + i + " line_" + j + " ").className = 'div2';
                    }
                }
            }
        }

    }

    var myElements = document.querySelectorAll(".div1");
    console.log(myElements.length)
    for (var i = 0; i < myElements.length; i++) {
        if (theme == 1) {
            myElements[i].style.background = 'url(../img/MARIO.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        if (theme == 2) {
            myElements[i].style.background = 'url(../img/pika.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        if (theme == 3) {
            myElements[i].style.background = 'url(../img/link.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }

        if (theme == 4) {
            myElements[i].style.background = 'url(../img/samus.svg)';
            myElements[i].style.backgroundSize = 'cover';
        }
        myElements[i].style.visibility = 'visible';
    }

    var myElements1 = document.querySelectorAll(".div3");
    console.log(myElements1.length)
    for (var i = 0; i < myElements1.length; i++) {
        if (theme2 == 1) {
            myElements1[i].style.background = 'url(../img/MARIO.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        if (theme2 == 2) {
            myElements1[i].style.background = 'url(../img/pika.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        if (theme2 == 3) {
            myElements1[i].style.background = 'url(../img/link.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }

        if (theme2 == 4) {
            myElements1[i].style.background = 'url(../img/samus.svg)';
            myElements1[i].style.backgroundSize = 'cover';
        }
        myElements1[i].style.visibility = 'visible';
    }

    var myElements2 = document.querySelectorAll(".div2");
    console.log(myElements2.length)
    for (var i = 0; i < myElements2.length; i++) {
        myElements2[i].style.background = '';

    }



}

function modifier(monID) //////////////////////////////////////////////
    {
        passe = 0;
        setTimeout(function () {
            verification(monID)
        }, 500);




        if (monID.className == 'div2')

        {
            IA2(monID);
            monID.className = 'div1';
            document.getElementsByTagName("table")[0].style.pointerEvents = 'none';





        } else

        {


        }
    }

initialisation();




function save() {

    var data = new Array();
    for (var i = 0; i <= d; i++) {
        for (var j = 0; j <= d; j++) {
            var current = tab2[i][j];
            data.push(current);
            current = null;
            console.log(data)
        }
    }
    var blob = new Blob([data], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "array.txt");

}


function illegal(monID) {
    for (var i = 1; i < d; i++) {
        for (var j = 1; j < d; j++) {


            if (((get("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5') && (get("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5') || // left and right
                    ((get("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && (get("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5')) || //top and bot
                    ((get("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && (get("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //bot and right
                    ((get("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && (get("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //top and right                 
                    ((get("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && (get("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5')) || //top and left
                    ((get("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && (get("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5'))) && //bot and left                 
                get("col_" + i + " line_" + j + " ").className == 'div3') {

                get("console").innerHTML = '<p> nope </p>';
                setTimeout(function () {
                    get("console").innerHTML = '<p>  </p>';
                }, 1500);
            }


            if (((get("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5') && (get("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5') || // left and right
                    ((get("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && (get("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5')) || //top and bot
                    ((get("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && (get("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //bot and right
                    ((get("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && (get("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //top and right                 
                    ((get("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && (get("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5')) || //top and left
                    ((get("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || get("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && (get("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || get("col_" + (i - 1) + " line_" + j + " ").className == 'div5'))) && //bot and left                 
                get("col_" + i + " line_" + j + " ").className == 'div1') {

                get("console").innerHTML = '<p> nope </p>';
                setTimeout(function () {
                    get("console").innerHTML = '<p>  </p>';
                }, 1500);
            }
        }
    }
}




function IA(caser) {
    var possibilities = 0;
    var caseMoins = 1;
    var finrandom = 1;
    var yolo = caser.id;
    var Icase = parseInt(yolo.substr(4, 1));
    var Jcase = parseInt(yolo.substr(11));
    var get = function (id) {
        return document.getElementById(id);
    }; //shorten document.getElementbyId()
    if (get("col_" + [Icase] + " line_" + [Jcase] + " ").className != 'div2') {

    } else {

        do {
            if (get("col_" + [Icase - caseMoins] + " line_" + [Jcase] + " ").className == 'div2') {
                possibilities++;
            }
            if (get("col_" + [Icase + caseMoins] + " line_" + [Jcase] + " ").className == 'div2') {
                possibilities++;
            }
            if (get("col_" + [Icase] + " line_" + [Jcase - caseMoins] + " ").className == 'div2') {
                possibilities++;
            }
            if (get("col_" + [Icase] + " line_" + [Jcase + caseMoins] + " ").className == 'div2') {
                possibilities++;
            }
            if (possibilities > 0) {
                setTimeout(function () {
                    do {
                        document.getElementsByTagName("table")[0].style.pointerEvents = 'auto';

                        var random = Math.floor(Math.random() * 4) + 1;
                        switch (random) {
                        case 1:
                            if ((get("col_" + [Icase - caseMoins] + " line_" + [Jcase] + " ").className == 'div2')) {
                                get("col_" + [Icase - caseMoins] + " line_" + [Jcase] + " ").className = 'div3';

                                verificationIA("col_" + [Icase - caseMoins] + " line_" + [Jcase] + " ");
                                finrandom = 0;

                            }
                            break;
                        case 2:
                            if (get("col_" + [Icase + caseMoins] + " line_" + [Jcase] + " ").className == 'div2') {
                                get("col_" + [Icase + caseMoins] + " line_" + [Jcase] + " ").className = 'div3';
                                verificationIA("col_" + [Icase + caseMoins] + " line_" + [Jcase] + " ");
                                finrandom = 0;

                            }
                            break;
                        case 3:
                            if (get("col_" + [Icase] + " line_" + [Jcase - caseMoins] + " ").className == 'div2') {
                                get("col_" + [Icase] + " line_" + [Jcase - caseMoins] + " ").className = 'div3';
                                verificationIA("col_" + [Icase] + " line_" + [Jcase - caseMoins] + " ");
                                finrandom = 0;

                            }
                            break;
                        case 4:
                            if (get("col_" + [Icase] + " line_" + [Jcase + caseMoins] + " ").className == 'div2') {
                                get("col_" + [Icase] + " line_" + [Jcase + caseMoins] + " ").className = 'div3';
                                verificationIA("col_" + [Icase] + " line_" + [Jcase + caseMoins] + " ");
                                finrandom = 0;

                            }
                            break;
                        }


                    }
                    while (finrandom != 0);
                }, 1000);

            } else {
                caseMoins = caseMoins + 1;
            }
        }
        while (possibilities == 0);
    }

}

function IA2(caser) {
    setTimeout(function () {
        document.getElementsByTagName("table")[0].style.pointerEvents = 'auto';
    }, 2000);
    var possibilities = 0;
    var caseMoins = 1;
    var finrandom = 1;
    var yolo = caser.id;
    var Icase = parseInt(yolo.substr(4, 1));
    var Jcase = parseInt(yolo.substr(11));
    var get = function (id) {
        return document.getElementById(id);
    }; //shorten document.getElementbyId()
    var valider = false;
    if (get("col_" + [Icase] + " line_" + [Jcase] + " ").className != 'div2') {
        console.log('cookie');

    } else {
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                for (var j = 1; j < 9; j++) {
                    if (get("col_" + i + " line_" + j + " ").className == 'div1') {
                        var numL = liberte2(i, j);
                        if (numL == '1') {


                            if (get("col_" + (i + 1) + " line_" + j + " ").className == 'div2' &&
                                ((get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                    (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                    (get("col_" + (i + 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i + 2) + " line_" + j + " ").className != 'div5') ||
                                    (get("col_" + i + " line_" + j + " ").className != 'div1' && get("col_" + i + " line_" + j + " ").className != 'div5'))) {
                                get("col_" + (i + 1) + " line_" + j + " ").className = 'div3';
                                setTimeout(function () {
                                    verificationIA("col_" + (i + 1) + " line_" + j + " ");
                                }, 1000);

                                valider = true;
                                break;



                            } else if (get("col_" + (i - 1) + " line_" + j + " ").className == 'div2' &&
                                ((get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                    (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                    (get("col_" + (i) + " line_" + j + " ").className != 'div1' && get("col_" + (i) + " line_" + j + " ").className != 'div5') ||
                                    (get("col_" + (i - 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i - 2) + " line_" + j + " ").className != 'div5'))) {
                                get("col_" + (i - 1) + " line_" + j + " ").className = 'div3';
                                setTimeout(function () {
                                    verificationIA("col_" + (i - 1) + " line_" + j + " ");
                                }, 1000);
                                valider = true;
                                break;

                            } else if (get("col_" + (i) + " line_" + (j + 1) + " ").className == 'div2' &&
                                ((get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div5') ||
                                    (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                    (get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                    (get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5'))) {
                                get("col_" + i + " line_" + (j + 1) + " ").className = 'div3';
                                setTimeout(function () {
                                    verificationIA("col_" + i + " line_" + (j + 1) + " ");
                                }, 1000);
                                valider = true;
                                break;

                            } else if (get("col_" + (i) + " line_" + (j - 1) + " ").className == 'div2' &&
                                ((get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div5') ||
                                    (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                    (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                    (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5'))) {
                                get("col_" + i + " line_" + (j - 1) + " ").className = 'div3';
                                setTimeout(function () {
                                    verificationIA("col_" + i + " line_" + (j - 1) + " ");
                                }, 1000);
                                valider = true;
                                break;

                            }

                        }
                    }

                }
                if (valider == true) {
                    break;
                }
            }

            if (valider == false) {
                for (var i = 1; i < 9; i++) {
                    for (var j = 1; j < 9; j++) {
                        if (get("col_" + i + " line_" + j + " ").className == 'div1') {
                            var numL = liberte2(i, j);
                            if (numL == '2') {

                                if (get("col_" + (i + 1) + " line_" + j + " ").className == 'div2' &&
                                    ((get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i + 2) + " line_" + j + " ").className != 'div5') ||
                                        (get("col_" + i + " line_" + j + " ").className != 'div1' && get("col_" + i + " line_" + j + " ").className != 'div5'))) {
                                    get("col_" + (i + 1) + " line_" + j + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + (i + 1) + " line_" + j + " ");
                                    }, 1000);

                                    valider = true;
                                    break;



                                } else if (get("col_" + (i - 1) + " line_" + j + " ").className == 'div2' &&
                                    ((get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + j + " ").className != 'div1' && get("col_" + (i) + " line_" + j + " ").className != 'div5') ||
                                        (get("col_" + (i - 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i - 2) + " line_" + j + " ").className != 'div5'))) {
                                    get("col_" + (i - 1) + " line_" + j + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + (i - 1) + " line_" + j + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                } else if (get("col_" + (i) + " line_" + (j + 1) + " ").className == 'div2' &&
                                    ((get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5'))) {
                                    get("col_" + i + " line_" + (j + 1) + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + i + " line_" + (j + 1) + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                } else if (get("col_" + (i) + " line_" + (j - 1) + " ").className == 'div2' &&
                                    ((get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5'))) {
                                    get("col_" + i + " line_" + (j - 1) + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + i + " line_" + (j - 1) + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                }

                            }
                        }

                    }
                    if (valider == true) {
                        break;
                    }
                }

            }

            if (valider == false) {
                for (var i = 1; i < 9; i++) {
                    for (var j = 1; j < 9; j++) {
                        if (get("col_" + i + " line_" + j + " ").className == 'div1') {
                            var numL = liberte2(i, j);
                            if (numL == '3') {
                                if (get("col_" + (i + 1) + " line_" + j + " ").className == 'div2' &&
                                    ((get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i + 2) + " line_" + j + " ").className != 'div5') ||
                                        (get("col_" + i + " line_" + j + " ").className != 'div1' && get("col_" + i + " line_" + j + " ").className != 'div5'))) {
                                    get("col_" + (i + 1) + " line_" + j + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + (i + 1) + " line_" + j + " ");
                                    }, 1000);

                                    valider = true;
                                    break;



                                } else if (get("col_" + (i - 1) + " line_" + j + " ").className == 'div2' &&
                                    ((get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + j + " ").className != 'div1' && get("col_" + (i) + " line_" + j + " ").className != 'div5') ||
                                        (get("col_" + (i - 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i - 2) + " line_" + j + " ").className != 'div5'))) {

                                    get("col_" + (i - 1) + " line_" + j + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + (i - 1) + " line_" + j + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                } else if (get("col_" + (i) + " line_" + (j + 1) + " ").className == 'div2' &&
                                    ((get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5'))) {
                                    get("col_" + i + " line_" + (j + 1) + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + i + " line_" + (j + 1) + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                } else if (get("col_" + (i) + " line_" + (j - 1) + " ").className == 'div2' &&
                                    ((get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5'))) {
                                    get("col_" + i + " line_" + (j - 1) + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + i + " line_" + (j - 1) + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                }


                            }
                        }

                    }
                    if (valider == true) {
                        break;
                    }

                }
            }
            if (valider == false) {
                for (var i = 1; i < 9; i++) {
                    for (var j = 1; j < 9; j++) {
                        if (get("col_" + i + " line_" + j + " ").className == 'div1') {
                            var numL = liberte2(i, j);
                            if (numL == '4') {

                                if (get("col_" + (i + 1) + " line_" + j + " ").className == 'div2' &&
                                    ((get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i + 2) + " line_" + j + " ").className != 'div5') ||
                                        (get("col_" + i + " line_" + j + " ").className != 'div1' && get("col_" + i + " line_" + j + " ").className != 'div5'))) {
                                    get("col_" + (i + 1) + " line_" + j + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + (i + 1) + " line_" + j + " ");
                                    }, 1000);

                                    valider = true;
                                    break;



                                } else if (get("col_" + (i - 1) + " line_" + j + " ").className == 'div2' &&
                                    ((get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + j + " ").className != 'div1' && get("col_" + (i) + " line_" + j + " ").className != 'div5') ||
                                        (get("col_" + (i - 2) + " line_" + j + " ").className != 'div1' && get("col_" + (i - 2) + " line_" + j + " ").className != 'div5'))) {
                                    get("col_" + (i - 1) + " line_" + j + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + (i - 1) + " line_" + j + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                } else if (get("col_" + (i) + " line_" + (j + 1) + " ").className == 'div2' &&
                                    ((get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j + 2) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j + 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j + 1) + " ").className != 'div5'))) {
                                    get("col_" + i + " line_" + (j + 1) + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + i + " line_" + (j + 1) + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                } else if (get("col_" + (i) + " line_" + (j - 1) + " ").className == 'div2' &&
                                    ((get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j - 2) + " ").className != 'div5') ||
                                        (get("col_" + (i) + " line_" + (j) + " ").className != 'div1' && get("col_" + (i) + " line_" + (j) + " ").className != 'div5') ||
                                        (get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i - 1) + " line_" + (j - 1) + " ").className != 'div5') ||
                                        (get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div1' && get("col_" + (i + 1) + " line_" + (j - 1) + " ").className != 'div5'))) {
                                    get("col_" + i + " line_" + (j - 1) + " ").className = 'div3';
                                    setTimeout(function () {
                                        verificationIA("col_" + i + " line_" + (j - 1) + " ");
                                    }, 1000);
                                    valider = true;
                                    break;

                                }


                            }
                        }

                    }
                    if (valider == true) {
                        break;
                    }
                }
            }
            if (valider == false) {
                passerIA();
            }
        }, 500);
    }
}

function handicap(lol) {

    var choix = (lol.id)

    if (choix == 'oui') {
        var Nhandi = window.prompt('Combien d\'handicap ?');
        handi = parseInt(Nhandi);
        return handi;

    }
}