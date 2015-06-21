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
var audiobombe = new Audio(['songs/bombe.mp3'])
var audiomarteau = new Audio (['songs/marteau.mp3'])
var audioballe = new Audio (['songs/balle.mp3'])
var audioup = new Audio (['songs/UP.mp3'])
var $ = function (id) {
    return document.getElementById(id);
}; //shorten document.getElementbyId()

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
                    document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick='modifier(this);   '></td>")
                }

            }

            document.write("</tr>")





        }



        document.write('</table>');



    } //////////////////////////////////////////////////

function liberte(i, j) {
    var liberte = 4;

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
    if ($("col_" + i + " line_" + j + " ").className == 'div3' || $("col_" + i + " line_" + j + " ").className == 'div7' || $("col_" + i + " line_" + j + " ").className == 'div8' || $("col_" + i + " line_" + j + " ").className == 'div9' || $("col_" + i + " line_" + j + " ").className == 'div10' || $("col_" + i + " line_" + j + " ").className == 'div11') {

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
    var bonus = true;
    
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
            if ($("col_" + i + " line_" + j + " ").className == 'div2') {
                tab2[i][j] = 0;
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
    var prio=false;


    ///VERIF CASE AUTOUR DE CELLE OU LON VIENT DE CLIQUER ////

    if (tab2[Icase + 1][Jcase] != 0) {
        if(tab2[Icase + 1][Jcase] == tab2[Icase][Jcase]){
            prio=true;
        }
        else{
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
             prio=false;
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase + 1][Jcase]) {
                        if (tab2[i][j] >= 200) {
                              if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';    

                                    }
                                }
                            }
                             }

                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }

                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                               handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }

                        if (bonus == true) {
                           
                           
                              jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                            
                        } else {
                            bonus = true
                        };
                    }
                }
            }
        }

    }
}

    if (tab2[Icase - 1][Jcase] != 0) {
        if(tab2[Icase - 1][Jcase] == tab2[Icase][Jcase]){
            prio=true;

        }
        else{
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
            prio=false;
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase - 1][Jcase]) {

                        if (tab2[i][j] >= 200) {
                             if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                }
                                }
                             }
                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }

                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                                handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                                 jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                           
                        } else {
                            bonus = true
                        };

                    }
                }
            }
        }
    }
    }

    if (tab2[Icase][Jcase + 1] != 0) {
        if(tab2[Icase][Jcase+1] == tab2[Icase][Jcase]){
            prio=true;
        }
        else {
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
             prio=false;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase][Jcase + 1]) {
                        if (tab2[i][j] >= 200) {
                             if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();

                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                }
                                }
                             }
                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }

                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                                handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                                 jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                            
                        } else {
                            bonus = true
                        };
                    }
                }
            }
        }
    }
    }

    if (tab2[Icase][Jcase - 1] != 0) {
        if(tab2[Icase][Jcase-1] == tab2[Icase][Jcase]){
            prio=true;

        }
        else{
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
             prio=false;
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase][Jcase - 1]) {
                        if (tab2[i][j] >= 200) {
                             if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                         if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                    }
                                }
                             }
                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }


                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                                handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
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
                                  jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                        } else {
                            bonus = true;
                        }
                    }
                }
            }

        }
    }
    
}

if(prio==true){

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
             prio=false;
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase + 1][Jcase]) {
                        if (tab2[i][j] >= 200) {
                              if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                }
                                }
                             }

                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }

                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                               handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }

                        if (bonus == true) {
                                 jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                            
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
            prio=false;
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase - 1][Jcase]) {

                        if (tab2[i][j] >= 200) {
                            if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                }
                                }
                             }
                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }

                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                                handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                                 jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                            
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
             prio=false;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase][Jcase + 1]) {
                        if (tab2[i][j] >= 200) {
                               if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){
                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                }
                                }
                             }
                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }

                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                                handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
                                }

                            }
                        }
                        if (tab2[i][j] >= 100 && tab2[i][j] < 200) {
                            compteurJ1++;

                        } else {
                            compteurJ2++;

                        }
                        if (bonus == true) {
                                 jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                          
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
             prio=false;
            NombreDePion = 0;
            compteurFalse = 0;
            for (var i = 1; i < d; i++) {
                for (var j = 1; j < d; j++) {
                    if (tab2[i][j] == tab2[Icase][Jcase - 1]) {
                        if (tab2[i][j] >= 200) { 
                              if ($("col_" + i + " line_" + j + " ").className == 'div11') {
                                audiobombe.play();
                                for (var g=i-1;g<=i+1;g++)
                                {
                                    for (var h=j-1;h<=j+1;h++){

                                        if ($("col_" + g + " line_" + h + " ").className!='div5'){
                                        $("col_" + g + " line_" + h + " ").className='div2';
                                    }
                                }
                                }
                             }  
                            if ($("col_" + i + " line_" + j + " ").className == 'div8') {
                                audiomarteau.play();
                                if (joueur == 1) {
                                    marteau1 = 2;
                                } else {
                                    marteau2 = 2;
                                }
                            } else if ($("col_" + i + " line_" + j + " ").className == 'div7') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + g + " line_" + j + " ").className = 'div3';
                                    } else {
                                        $("col_" + g + " line_" + j + " ").className = 'div1';
                                    }
                                }

                            } else if ($("col_" + i + " line_" + j + " ").className == 'div9') {
                                 audioup.play();
                                bonus = false;
                                for (var g = 1; g < 9; g++) {
                                    if (joueur == 1) {
                                        $("col_" + i + " line_" + g + " ").className = 'div3';
                                    } else {
                                        $("col_" + i + " line_" + g + " ").className = 'div1';
                                    }
                                }


                            }
                            else if($("col_" + i + " line_" + j + " ").className == 'div10'){
                                audioballe.play();
                                handi=handi+3;
                                if(joueur==1){
                                    joueur=2;
                                }
                                else {
                                    joueur=1;
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
                                 jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",0);
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").attr('class','div2');
                     
                   
                         
                        jQuery("#col_" + i + "\\ line_" + j + "\\ ").fadeTo("slow",2);
                               
                        } else {
                            bonus = true
                        };
                    }
                }
            }

            
    }
}

}

}

function modifier(monID) //////////////////////////////////////////////
    {
        x = 0;
        var yolo = monID.id;
        var Icase = parseInt(yolo.substr(4, 1));
        var Jcase = parseInt(yolo.substr(11));

        if (joueur == 1  
            &&( ($("col_" + (Icase+1)+ " line_" + Jcase + " ").className!='div3' && $("col_" + (Icase+1)+ " line_" + Jcase + " ").className!='div5') || ($("col_" + (Icase-1) + " line_" + Jcase + " ").className!='div3' && $("col_" + (Icase-1) + " line_" + Jcase + " ").className!='div5')  || ($("col_" + (Icase) + " line_" + (Jcase+1) + " ").className!='div3' && $("col_" + (Icase) + " line_" + (Jcase+1) + " ").className!='div5')  || ($("col_" + (Icase) + " line_" + (Jcase-1) + " ").className!='div3' && $("col_" + (Icase) + " line_" + (Jcase-1) + " ").className!='div5') )) {

            minusJ1 = setInterval(function () {
                timerJ1--;
            }, 1000);
            if (monID.className == 'div2')

            {
                ApparitionObjet();
               
                
                jQuery(monID).fadeTo("fast",0,function(){
                    jQuery(monID).attr('class','div1')
                     
                   
                });
                jQuery(monID).fadeTo("fast",1);
                
                
                
                
                
                if (handi <= 1) {
                    joueur = 2;
                } else {
                    handi = handi - 1;


                }
            } else

            {
                if (marteau2 != 0 && monID.className == 'div3') {
                    jQuery(monID).fadeTo("fast",0,function(){
                    jQuery(monID).attr('class','div1')
                     
                   
                });
                jQuery(monID).fadeTo("fast",1);
                    joueur = 2;
                    marteau2--;
                    ApparitionObjet();


                }

            }
        } else if(joueur == 2 &&( ($("col_" + (Icase+1)+ " line_" + Jcase + " ").className!='div1' && $("col_" + (Icase+1)+ " line_" + Jcase + " ").className!='div5') || ($("col_" + (Icase-1) + " line_" + Jcase + " ").className!='div1' && $("col_" + (Icase-1) + " line_" + Jcase + " ").className!='div5')  || ($("col_" + (Icase) + " line_" + (Jcase+1) + " ").className!='div1' && $("col_" + (Icase) + " line_" + (Jcase+1) + " ").className!='div5')  || ($("col_" + (Icase) + " line_" + (Jcase-1) + " ").className!='div1' && $("col_" + (Icase) + " line_" + (Jcase-1) + " ").className!='div5') )) {

            minusJ2 = setInterval(function () {
                timerJ2--;
            }, 1000);
            if (monID.className == 'div2')

            {
                ApparitionObjet();
                

                jQuery(monID).fadeTo("fast",0,function(){
                    jQuery(monID).attr('class','div3')
                     
                   
                });
                jQuery(monID).fadeTo("fast",1);
                
                if (handi <= 1) {
                    joueur = 1;
                } else {
                    handi = handi - 1;


                }
            } else

            {
                if (marteau1 != 0 && monID.className == 'div1') {
                    jQuery(monID).fadeTo("fast",0,function(){
                    jQuery(monID).attr('class','div3')
                     
                   
                });
                jQuery(monID).fadeTo("fast",1);
                    joueur = 1;
                    marteau1--;
                    ApparitionObjet();

                }

            }
        }
        
        setTimeout(function(){verification(monID)} ,500);
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
        while ($("col_" + popX + " line_" + popY + " ").className != 'div2');
        var typeObjet = Math.ceil(Math.random() * 5);
        if (($("col_" + (popX + 1) + " line_" + popY + " ").className == 'div2' || $("col_" + (popX + 1) + " line_" + popY + " ").className == 'div1' || $("col_" + (popX + 1) + " line_" + popY + " ").className == 'div3' || $("col_" + (popX + 1) + " line_" + popY + " ").className == 'div5')&&
            ($("col_" + (popX - 1) + " line_" + popY + " ").className == 'div2' || $("col_" + (popX - 1) + " line_" + popY + " ").className == 'div1' || $("col_" + (popX - 1) + " line_" + popY + " ").className == 'div3' || $("col_" + (popX - 1) + " line_" + popY + " ").className == 'div5') &&
            ($("col_" + (popX) + " line_" + (popY-1) + " ").className == 'div2' || $("col_" + (popX) + " line_" + (popY-1) + " ").className == 'div1' || $("col_" + (popX) + " line_" + (popY-1) + " ").className == 'div3' || $("col_" + (popX) + " line_" + (popY-1) + " ").className == 'div5') && 
            ($("col_" + (popX) + " line_" + (popY+1) + " ").className == 'div2' || $("col_" + (popX) + " line_" + (popY+1) + " ").className == 'div1' || $("col_" + (popX) + " line_" + (popY+1) + " ").className == 'div3' || $("col_" + (popX) + " line_" + (popY+1) + " ").className == 'div5')) {
            

        
        
        
        switch (typeObjet) {
        case 1:
                 
                        jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",0,function(){
                    jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").attr('class','div8') 
                    });
                 jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",1);

                break;

        case 2:
                jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",0,function(){
                    jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").attr('class','div7') 
                    });
                 jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",1);


            break;

        case 3:
                jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",0,function(){
                    jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").attr('class','div9') 
                    });
                 jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",1);


            break;
        
        case 4:
            jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",0,function(){
                    jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").attr('class','div10') 
                    });
                 jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",1);


             break;
        
        case 5:
           jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",0,function(){
                    jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").attr('class','div11') 
                    });
                 jQuery("#col_" + popX + "\\ line_" + popY + "\\ ").fadeTo("fast",1);


             break;
        }
        tab2[popX][popY] = numberObjet;

        numberObjet++;
    
    }

}

}

function SetCookie (name, value) {
    var argv=SetCookie.arguments;
    var argc=SetCookie.arguments.length;
    var expires=(argc > 2) ? argv[2] : null;
    var path=(argc > 3) ? argv[3] : null;
    var domain=(argc > 4) ? argv[4] : null;
    var secure=(argc > 5) ? argv[5] : false;
    document.cookie=name+"="+escape(value)+
        ((expires==null) ? "" : ("; expires="+expires.toGMTString()))+
        ((path==null) ? "" : ("; path="+path))+
        ((domain==null) ? "" : ("; domain="+domain))+
        ((secure==true) ? "; secure" : "");
}


function getCookieVal(offset) {
    var endstr=document.cookie.indexOf (";", offset);
    if (endstr==-1)
            endstr=document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
    var arg=name+"=";
    var alen=arg.length;
    var clen=document.cookie.length;
    var i=0;
    while (i<clen) {
        var j=i+alen;
        if (document.cookie.substring(i, j)==arg)
                        return getCookieVal (j);
                i=document.cookie.indexOf(" ",i)+1;
                        if (i==0) break;}
    return null;
}



function Mario(){
                theme=1;
                var pathname=location.pathname;
                var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
                var date_exp = new Date();
                date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
    // Ici on définit une durée de vie de 365 jours
                SetCookie("theme",theme,date_exp,myDomain);
                

}