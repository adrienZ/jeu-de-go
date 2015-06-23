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

var passe = 0;
var timerJ1 = 15;
var timerJ2 = 15;

var audiobombe = new Audio(['songs/bombe.mp3'])
var audiomarteau = new Audio(['songs/marteau.mp3'])
var audioballe = new Audio(['songs/balle.mp3'])
var audioup = new Audio(['songs/UP.mp3'])


function timer(test) {
    
    if (test == 1) {
        clearInterval(minusJ2);
        
        
        minusJ1 = setInterval(function () {
            if (timerJ1 >= 0) {

                timerJ1--;
                if (timerJ1 == 0) {
                    console.log('loose1');
                    clearInterval(minusJ1);
                }
            }
        }, 1000);


    } else if (test==2){
        clearInterval(minusJ1);

        minusJ2 = setInterval(function () {
            if (timerJ2 >= 0) {

                timerJ2--;
                if (timerJ2 == 0) {
                    console.log('loose2');
                    clearInterval(minusJ2);
                }
            }
        }, 1000);

    }





}
var interval;

function time (){
    interval = setInterval( blabla, 1000);
}



function blabla() {
    get('timerJ1').innerHTML = '00 : ' + timerJ1;
    get('timerJ2').innerHTML = '00 : ' + timerJ2;

}

time();

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


function findepartie() {
    if (compteurJ2 > compteurJ1) {
        window.alert('Joueur 2 à gagné avec ' + compteurJ2 + ' points !');
    } else if (compteurJ1 > compteurJ2) {
        window.alert('Joueur 1 à gagné avec ' + compteurJ1 + ' points !');
    } else {
        window.alert('Egalité !');
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
                    document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick='modifier(this); verification(this);  '></td>")
                }

            }

            document.write("</tr>")





        }



        document.write('</table>');



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
    if (get("col_" + i + " line_" + j + " ").className == 'div3 animated rollIn' || get("col_" + i + " line_" + j + " ").className == 'div8' || get("col_" + i + " line_" + j + " ").className == 'div7' || get("col_" + i + " line_" + j + " ").className == 'div9') {
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

function verification(caser) {
    b = 1;
    var bonus = true;
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
                        if (tab2[i][j] >= 200) {
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
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
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
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
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
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
                            if (get("col_" + i + " line_" + j + " ").className == 'div8') {
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if (get("col_" + i + " line_" + j + " ").className == 'div7') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + g + " line_" + j + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + g + " line_" + j + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            } else if (get("col_" + i + " line_" + j + " ").className == 'div9') {
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        get("col_" + i + " line_" + g + " ").className = 'div3 animated rollIn';
                                    } else {
                                        get("col_" + i + " line_" + g + " ").className = 'div1 animated rollIn';
                                    }
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                            console.log(compteurJ1);
                        } else {
                            compteurJ2++;

                            console.log(compteurJ2);
                        }
                        if (bonus == true) {
                            get("col_" + i + " line_" + j + " ").className = 'div2';
                        } else {
                            bonus = true
                        };
                    }
                }
            }

        }

    }
    get("scoreJ1").innerHTML = 'Score : ' + compteurJ1;
    get("scoreJ2").innerHTML = 'Score : ' + compteurJ2;
    get("bonusJ2").innerHTML = "X " + marteau2;

    get("bonusJ1").innerHTML = "X " + marteau1;

}

function modifier(monID) //////////////////////////////////////////////
    {
        x = 0;

        if (joueur == 1) {
            document.querySelector('.ui#J1').className= 'ui currentP'
                        document.querySelector('.ui#J2').className= 'ui'

            minusJ1 = setInterval(function () {
                timerJ1--;
            }, 1000);
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
            document.querySelector('.ui#J2').className= 'ui currentP'
                        document.querySelector('.ui#J1').className= 'ui'
            minusJ2 = setInterval(function () {
                timerJ2--;
            }, 1000);
            if (monID.className == 'div2')

            {
                ApparitionObjet();
                joueur = 1;
                monID.className = 'div3 animated rollIn';
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
        var typeObjet = Math.ceil(Math.random() * 3);
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
        }

        tab2[popX][popY] = numberObjet;

        numberObjet++;
    }


}


function bomb(e) {


    for (i = 2; i <= 5; i++) {
        for (j = 2; j <= 5; j++) {
            if (get("col_" + i + " line_" + j + " ").className != 'div5') {
                get("col_" + i + " line_" + j + " ").className = 'div3 animated rollIn';
            }

        }
    }

}








//HUD