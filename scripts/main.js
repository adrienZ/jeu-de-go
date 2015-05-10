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
var compt = 0;
var compteurJ2;
var compteurJ1;
var joueur = 1;



function initialisation() //////////////////////////////////////////////
    {
        tab1 = new Array(d);
        tab2 = new Array(d);
        document.write('<table cellpadding="0" cellspacing="0">');
        for (var i = 0; i < d; i++) {
            document.write("<tr id='ligne_" + i + "'>")
            tab1[i] = new Array(d);
            tab2[i] = new Array(d);

            for (var j = 0; j < d; j++) {

                tab1[i][j] = 0;
                tab2[i][j] = 0;


                document.write("<td id='col_" + i + " line_" + j + " ' class='div2'onclick=' modifier(this); coordonne(this); verification()'></td>")
                if (i == 0 || i == 8) {
                    //Rogner 10 de height

                }
                if (j == 0 || j == 8) {
                    //Rogner 10 de width
                }

            }

            document.write("</tr>")





        }



        document.write('</table>');



    } //////////////////////////////////////////////////
function verification() {
    //    var top = document.getElementById("col_" + (i - 1) + " line_" + j + " ");
    //    var bottom= document.getElementById("col_" + (i + 1) + " line_" + j + " ");    
    //    var left= document.getElementById("col_" + i + " line_" + (j - 1) + " ");
    //    var right = document.getElementById("col_" + i + " line_" + (j - 1) + " ");
    //    var element = document.getElementById("col_" + i + " line_" + j + " ");
        var $ = function( id ) { return document.getElementById( id ); }; //shorten document.getElementbyId()

    for (var i = 0; i < d; i++) {


        for (var j = 0; j < d; j++) {
            if (i == 8 && j == 8) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' && 
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1' 
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                else if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                } else {}

            }
            if (i == 0 && j == 8) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

            }
            if (i == 8 && j == 0) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

            }
            if (i == 0 && j == 0) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

            }




            if (i == 8 && j + 1 <= d - 1 && j - 1 >= 0) {


                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&

                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&

                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }
            }

            if (i == 0 && j + 1 <= d - 1 && j - 1 >= 0) {


                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&

                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&

                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

            }
            //VERIF CASE ROUGE MIDDLE
            if (i + 1 <= d - 1 && i - 1 >= 0 && j == 8) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&

                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&

                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }
            }
            //VERIF CASE ROUGE MIDDLE
            if (i + 1 <= d - 1 && i - 1 >= 0 && j == 0) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1'

                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

                //VERIF CASE BLEU MIDDLE
                if (

                    $("col_" + i + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div3' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div3'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

                }

            }
            //VERIF CASE ROUGE MIDDLE
            if (i + 1 <= d - 1 && i - 1 >= 0 && j + 1 <= d - 1 && j - 1 >= 0) {

                if (

                    $("col_" + i + " line_" + j + " ").className == 'div3' &&
                    $("col_" + (i + 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + (i - 1) + " line_" + j + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j + 1) + " ").className == 'div1' &&
                    $("col_" + i + " line_" + (j - 1) + " ").className == 'div1'
                ) {

                    $("col_" + i + " line_" + j + " ").className = 'div2'
                    compteurJ2 = compteurJ2 + 1;

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
                    compteurJ2 = compteurJ2 + 1;

                }

            }
        }
    }

}

function modifier(monID) //////////////////////////////////////////////
    {
        if (monID.className == 'div2') {
            if (joueur == 1) { monID.className = 'div1'; 
                              joueur = 2;}
            else { monID.className = 'div3';
                   joueur = 1;}
        } 
        else {}
    }


function coordonne(monID) /////////////////////////////////////////
    {
        id = monID.id;

        var extract1 = id.indexOf("_", 0); // le _ est le carctère qui précède les valeur de i et de j lorsque j'ai initialisé les id de mes div. 
        var extract2 = id.indexOf("_", 5); // et donc je recherche leur position dans dans ma chaine de charactère.
        extract1 = parseInt(id.substr(extract1 + 1, 2)); // Ici les variables extract qui contenaient une chaine de charactères vont recevoir mes valeur de i et de j
        extract2 = parseInt(id.substr(extract2 + 1, 2));
        

    } /////////////////////////////////////////////////////

initialisation();