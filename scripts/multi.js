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
var compteurJ2;
var compteurJ1;
var joueur = 1;
var handi = 0;
var $ = function (id) {
    return document.getElementById(id);
}; //shorten document.getElementbyId()




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
                    document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick=' modifier(this); verification(this); illegal(this); '></td>")
                }

            }

            document.write("</tr>")





        }



        document.write('</table>');



    } //////////////////////////////////////////////////

function liberte(i, j) {
        var liberte = 4;

        var $ = function (id) {
            return document.getElementById(id);
        }; //shorten document.getElementbyId()
     
        if ($("col_" + i + " line_" + j + " ").className == 'div1') {
            if ($("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
                liberte--;

            }
            if ($("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

                liberte--;

            }
            if ($("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
                liberte--;

            }
            if ($("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
                liberte--;

            }

        }
        if ($("col_" + i + " line_" + j + " ").className == 'div3') {
            if ($("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
                liberte--;

            }
            if ($("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

                liberte--;

            }
            if ($("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
                liberte--;

            }
            if ($("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
                liberte--;

            }
        }



            if ($("col_" + i + " line_" + j + " ").className == 'div4') {
                if ($("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
                    liberte--;

                }
                if ($("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

                    liberte--;

                }
                if ($("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
                    liberte--;

                }
                if ($("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
                    liberte--;

                }
            }


                if ($("col_" + i + " line_" + j + " ").className == 'div6') {
                    if ($("col_" + (i + 1) + " line_" + j + " ").className != 'div2') {
                        liberte--;

                    }
                    if ($("col_" + (i - 1) + " line_" + j + " ").className != 'div2') {

                        liberte--;

                    }
                    if ($("col_" + i + " line_" + (j - 1) + " ").className != 'div2') {
                        liberte--;

                    }
                    if ($("col_" + i + " line_" + (j + 1) + " ").className != 'div2') {
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
                c = 100;
                tab1 = new Array();

                //Creation tableau final

                for (var i = 1; i < d; i++) {
                    for (var j = 1; j < d; j++) {
                        if ($("col_" + i + " line_" + j + " ").className == 'div1') {

                            tab2[i][j] = b;

                            b++;

                        }
                        if ($("col_" + i + " line_" + j + " ").className == 'div3') {

                            tab2[i][j] = c;


                            c++;

                        }

                    }

                }


                // formation des groupes en changant le tableau final
                for (var i = 1; i < d; i++) {
                    for (var j = 1; j < d; j++) {

                        if ($("col_" + (i + 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                            tab2[i + 1][j] = tab2[i][j];

                        }

                        if ($("col_" + (i - 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                            tab2[i - 1][j] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j + 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                            tab2[i][j + 1] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j - 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                            tab2[i][j - 1] = tab2[i][j];

                        }

                    }
                    for (var j = d - 1; j > 1; j--) {
                        if ($("col_" + (i + 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                            tab2[i + 1][j] = tab2[i][j];

                        }

                        if ($("col_" + (i - 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                            tab2[i - 1][j] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j + 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                            tab2[i][j + 1] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j - 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                            tab2[i][j - 1] = tab2[i][j];

                        }

                    }
                }

                for (var i = d - 1; i > 1; i--) {
                    for (var j = d - 1; j > 1; j--) {
                        if ($("col_" + (i + 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                            tab2[i + 1][j] = tab2[i][j];

                        }

                        if ($("col_" + (i - 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                            tab2[i - 1][j] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j + 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                            tab2[i][j + 1] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j - 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

                            tab2[i][j - 1] = tab2[i][j];

                        }









                    }
                    for (var j = 1; j < d; j++) {
                        if ($("col_" + (i + 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i + 1][j] > tab2[i][j]) {

                            tab2[i + 1][j] = tab2[i][j];

                        }

                        if ($("col_" + (i - 1) + " line_" + j + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i - 1][j] > tab2[i][j]) {

                            tab2[i - 1][j] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j + 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j + 1] > tab2[i][j]) {

                            tab2[i][j + 1] = tab2[i][j];

                        }

                        if ($("col_" + i + " line_" + (j - 1) + " ").className == $("col_" + i + " line_" + j + " ").className && tab2[i][j - 1] > tab2[i][j]) {

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

                                    $("col_" + i + " line_" + j + " ").className = 'div2';
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

                                    $("col_" + i + " line_" + j + " ").className = 'div2';
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

                                    $("col_" + i + " line_" + j + " ").className = 'div2';
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

                                    $("col_" + i + " line_" + j + " ").className = 'div2';
                                }
                            }
                        }
                    }

                }
            }

            function modifier(monID) //////////////////////////////////////////////
                {
                    
                    switch (joueur) {

                    case 1:
                        if (monID.className == 'div2')

                        {
                            monID.className = 'div1';
                            if (handi <= 1) {
                                joueur = 2;
                            } else {
                                handi = handi - 1;
                                console.log(handi);

                            }
                        } else

                        {


                        }
                        break;

                    case 2:

                        if (monID.className == 'div2')

                        {
                            joueur = 3;
                            monID.className = 'div3';
                        } else

                        {


                        }
                        break;
                    case 3:

                        if (monID.className == 'div2')

                        {
                            joueur = 4;
                            monID.className = 'div4';
                        } else

                        {


                        }
                    case 4:

                        if (monID.className == 'div2')

                        {
                            joueur = 1;
                            monID.className = 'div6';
                        } else

                        {


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


                        if ((($("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || $("col_" + (i + 1) + " line_" + j + " ").className == 'div5') && ($("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || $("col_" + (i - 1) + " line_" + j + " ").className == 'div5') || // left and right
                                (($("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || $("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && ($("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || $("col_" + i + " line_" + (j - 1) + " ").className == 'div5')) || //top and bot
                                (($("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || $("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && ($("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || $("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //bot and right
                                (($("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || $("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && ($("col_" + (i + 1) + " line_" + j + " ").className == 'div3' || $("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //top and right                 
                                (($("col_" + i + " line_" + (j - 1) + " ").className == 'div3' || $("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && ($("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || $("col_" + (i - 1) + " line_" + j + " ").className == 'div5')) || //top and left
                                (($("col_" + i + " line_" + (j + 1) + " ").className == 'div3' || $("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && ($("col_" + (i - 1) + " line_" + j + " ").className == 'div3' || $("col_" + (i - 1) + " line_" + j + " ").className == 'div5'))) && //bot and left                 
                            $("col_" + i + " line_" + j + " ").className == 'div3') {

                            $("console").innerHTML = '<p> nope </p>';
                            setTimeout(function () {
                                $("console").innerHTML = '<p>  </p>';
                            }, 1500);
                        }


                        if ((($("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || $("col_" + (i + 1) + " line_" + j + " ").className == 'div5') && ($("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || $("col_" + (i - 1) + " line_" + j + " ").className == 'div5') || // left and right
                                (($("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || $("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && ($("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || $("col_" + i + " line_" + (j - 1) + " ").className == 'div5')) || //top and bot
                                (($("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || $("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && ($("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || $("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //bot and right
                                (($("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || $("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && ($("col_" + (i + 1) + " line_" + j + " ").className == 'div1' || $("col_" + (i + 1) + " line_" + j + " ").className == 'div5')) || //top and right                 
                                (($("col_" + i + " line_" + (j - 1) + " ").className == 'div1' || $("col_" + i + " line_" + (j - 1) + " ").className == 'div5') && ($("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || $("col_" + (i - 1) + " line_" + j + " ").className == 'div5')) || //top and left
                                (($("col_" + i + " line_" + (j + 1) + " ").className == 'div1' || $("col_" + i + " line_" + (j + 1) + " ").className == 'div5') && ($("col_" + (i - 1) + " line_" + j + " ").className == 'div1' || $("col_" + (i - 1) + " line_" + j + " ").className == 'div5'))) && //bot and left                 
                            $("col_" + i + " line_" + j + " ").className == 'div1') {

                            $("console").innerHTML = '<p> nope </p>';
                            setTimeout(function () {
                                $("console").innerHTML = '<p>  </p>';
                            }, 1500);
                        }
                    }
                }
            }


            function handicap(zizi) {

                var choix = (zizi.id)

                if (choix == 'non') {

                } else {
                    var Nhandi = window.prompt('Combien d\'handicap ?');
                    handi = parseInt(Nhandi);
                    return handi;

                }

                //    document.getElementsByClassName('handicap').style.display = 'none'
            }

