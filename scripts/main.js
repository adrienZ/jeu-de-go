var d = 9; // dimension du carrÃ©
var tab1; // grille des valeurs courantes
var compteurJ2;
var compteurJ1;
var joueur = 1;


function initialisation() //////////////////////////////////////////////
    {
        tab1 = new Array(d);
        document.write('<table cellpadding="0" cellspacing="0">');
        for (var i = 0; i < d; i++) {
            document.write("<tr id='ligne_" + i + "'>")
            tab1[i] = new Array(d);

            for (var j = 0; j < d; j++) {

                tab1[i][j] = 0;
                document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick=' modifier(this); coordonne(this); verification(this)'></td>")
            }
            document.write("</tr>")
        }
        document.write('</table>');
    } //////////////////////////////////////////////////

function coordonne(monID) /////////////////////////////////////////
    {
        id = monID.id;
        extract1 = id.indexOf("_", 0);
        extract2 = id.indexOf("_", 5);
        extract1 = parseInt(id.substr(extract1 + 1, 2)); // Ici les variables extract qui contenaient une chaine de charactÃ¨res vont recevoir mes valeur de i et de j
        extract2 = parseInt(id.substr(extract2 + 1, 2));
        console.log(extract1 + " " + extract2 + " ");


    } /////////////////////////////////////////////////////
function verification(e) {
    var $ = function (id) {return document.getElementById(id);}; //shorten document.getElementbyId()

    for (var i = 0; i < d; i++) {

        for (var j = 0; j < d; j++) {


            switch (i) {
            case 8:
                switch (j) {
                case i:
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    else if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    } else {}
                    break;

                case 0:
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;
                        
                    }
                    break;

                default:
                };

                if (j + 1 <= d - 1 && j - 1 >= 0) {
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&

                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&

                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                }
            case 0:
                switch (j) {
                case i:
                    
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }
                    break;

                case 8:
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }
                    break;

                default:
                };

                if (j + 1 <= d - 1 && j - 1 >= 0) {
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&

                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&

                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                }

            }
            switch (j) {
            case 8:
                if (i + 1 <= d - 1 && i - 1 >= 0) {
                    
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&

                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&

                        $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }
                }
            case 0:
                if (i + 1 <= d - 1 && i - 1 >= 0) {
                    
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div1'

                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }

                    //VERIF CASE BLEU MIDDLE
                    if (

                        $("col_" + i + " line_" + j + " ").className == 'div1' &&
                        $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                        $("col_" + i + " line_" + (j + 1) + " ").className == 'div3'
                    ) {

                        $("col_" + i + " line_" + j + " ").className = 'div2'
                        compteurJ2++;

                    }
                }

            }
            if (i + 1 <= d - 1 && i - 1 >= 0 && j + 1 <= d - 1 && j - 1 >= 0) {
                
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2++;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2++;

                }

            }
        }
    }
}

function modifier(monID) //////////////////////////////////////////////
    {
        for (var i = 0; i < d; i++) {


            for (var j = 0; j < d; j++) {
                if (monID.className == 'div2') {
                    if (joueur == 1) {
                        monID.className = 'div1';
                        joueur = 2;
                        tab1[i][j] = 1;

                    } else if (joueur == 2) {
                        monID.className = 'div3';
                        joueur = 1;
                        tab1[i][j] = 2;
                    }

                } else {}

            }
        }
    }

initialisation();
// Votre code ici