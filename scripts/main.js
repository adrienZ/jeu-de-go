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
var compt=0;
var compteurJ2;
var compteurJ1;
var joueur=1;



function initialisation() //////////////////////////////////////////////
{
    tab1 = new Array(d); 
    tab2 = new Array(d);
    document.write('<table cellpadding="0" cellspacing="0">');
    for (var i = 0; i < d; i++) 
    {	
    	document.write("<tr id='ligne_"+i+"'>")
        tab1[i] = new Array(d); 
        tab2[i] = new Array(d);

        for (var j = 0; j < d; j++)
        {

            tab1[i][j] = 0;	
            tab2[i][j] = 0;

            
            document.write("<td id='col_"+i+" line_"+j+" ' class='div2'onclick=' modifier(this); coordonne(this); verification()'></td>")
            if(i==0 || i==8){
            	//Rogner 10 de height

            }
            if(j==0 || j==8){
            	//Rogner 10 de width
            }
        
        }

        document.write("</tr>")
        
       

         
       
    }
    
        	
        
 document.write('</table>');



} //////////////////////////////////////////////////
function verification(){
	
    for (var i = 0; i < d; i++) 
    {	
    	

        for (var j = 0; j < d; j++)
        {
        	if(i==8 && j==8){

        		if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

        	}
        		if(i==0 && j==8){

        		if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

        	}
        		if(i==8 && j==0){

        		if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

        	}
        		if(i==0 && j==0){

        		if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

        	}




        	if(i==8 && j+1<=d-1 && j-1>=0){


            if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div1' &&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div3' &&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }
        }

            if( i==0 && j+1<=d-1 && j-1>=0){


            if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div1' &&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div3' &&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

        	}
        	 //VERIF CASE ROUGE MIDDLE
           	if(i+1<=d-1 && i-1>=0 && j==8){

            if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div1'&&
            	
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div3'&&
            	
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }
        }
             //VERIF CASE ROUGE MIDDLE
           	if(i+1<=d-1 && i-1>=0 && j==0 ){

            if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div1' 
            	
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }
            
        }
            //VERIF CASE ROUGE MIDDLE
           	if(i+1<=d-1 && i-1>=0 && j+1<=d-1 && j-1>=0){

            if(	
            	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div1'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div1' &&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div1'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

            //VERIF CASE BLEU MIDDLE
             if(
             	
            	document.getElementById("col_"+i+" line_"+j+" ").className=='div1' &&
            	document.getElementById("col_"+(i+1)+" line_"+j+" ").className=='div3' &&
            	document.getElementById("col_"+(i-1)+" line_"+j+" ").className=='div3'&&
            	document.getElementById("col_"+i+" line_"+(j+1)+" ").className=='div3' &&
            	document.getElementById("col_"+i+" line_"+(j-1)+" ").className=='div3'
            	){

            	document.getElementById("col_"+i+" line_"+j+" ").className='div2'
            	compteurJ2=compteurJ2+1;

            }

        }
        }  
        }

}
function modifier(monID)  //////////////////////////////////////////////
{	
  if(joueur==1){
  	
  	
    if(monID.className=='div2') 

    {
        monID.className='div1';
        joueur=2;
    }
	 else 

    {
       

    }
   }
  else{
  	
  	
    if(monID.className=='div2') 

    {
    	joueur=1;
        monID.className='div3';
    }
	 else 

    {
       

    }
   }

}


function coordonne(monID) /////////////////////////////////////////
{
    id=monID.id; // ici je donne Ã  la variable id l'id de la div selectionnÃ©e. monID.id renvoi une chaine de charactÃ¨re.

    var extract1 = id.indexOf("_",0); // le _ est le carctÃ¨re qui prÃ©cÃ¨de les valeur de i et de j lorsque j'ai initialisÃ© les id de mes div. 
    var extract2 = id.indexOf("_",5); // et donc je recherche leur position dans dans ma chaine de charactÃ¨re.
    extract1 = parseInt(id.substr(extract1+1,2)); // Ici les variables extract qui contenaient une chaine de charactÃ¨res vont recevoir mes valeur de i et de j
    extract2 = parseInt(id.substr(extract2+1,2)); 

    if (tab1[extract1][extract2]==false) // aprÃ¨s je regarde quelle est la valeur correspondante dans mon tableau et je l'inverse.
    {
        tab1[extract1][extract2]=1;	
    }
    else
    {
        tab1[extract1][extract2]=false;	
    }

    
} /////////////////////////////////////////////////////
function game()
{

		
		for (var i = 0; i < d; i++) //double boucle for avec i et j en paramètre pour parcourir mon tableau
		{
			
			for (var j = 0; j < d; j++)
			{
				// vérification cellules aux alentours (pas optimale la vérification peut être améliorée)

				// je vérifie si je suis sur les bord au niveau pour l'axe des abcisses
					if (i==0) // ma case actuelle est sur le bord du début du tableau 
					{
						w=0; 
						z=2;
					}
					else if (i==d-1) // ma case actuelle est sur le bord de fin du tableau 
					{
						w=-1;
						z=1;
					}
					else // ma case n'est pas sur les bords
					{
						w=-1;
						z=2;
					}
					// je vérifie si je suis sur les bord au niveau pour l'axe des ordonnées
					if (j==0) // ma case actuelle est sur le bord du début du tableau
					{
						w2=0;
						z2=2;
					}
					else if (j==d-1)// ma case actuelle est sur le bord de fin du tableau 
					{
						w2=-1;
						z2=1;
					}
					else // ma case n'est pas sur les bords
					{
						w2=-1;
						z2=2;
					}
					
					for (var x = w; x < z; x++) // grâce aux vérifications antérieures je sais quelle est l'intervalle des case à vérifier en fonction
						// de la posion de ma case
					{
						for (var y = w2; y < z2; y++) 
						{
							if(tab1[i+x][j+y]==true) // bien sur quand y et x vaudront zéro si ma case est vivante je vais la compter. Mais ce n'est pas un problème
							{
								compt++; 
							}
						}
					}

				// la je vais voir en fonction de mon compteur si ma cellule, nait, vie ou meurt
		
				if (compt==3) // Ici je gère deux cas : soit la cellule est vivante et a deux voisine
				//donc reste en vie, soit elle n'est pas encore vivante donc elle nait puisqu'elle a trois voisine
				{
					tab2[i][j] = true; // donc dans les deux cas la case aura une cellule vivante
				}
	
				else if (tab1[i][j]==true&&compt==4) // sinon si elle est en vie et que mon compteur me renvoi 4
					//cela signifie que ma cellule a trois voisine.
				{
					
						tab2[i][j]=true; // Elle reste donc en vie
					
				}
		
				else
				{
					tab2[i][j] = false; // il ne reste plus d'autre cas pour qu'une cellule soit en vit
				}// elle soit morte soit inexistante
				
				compt=0; // réinitialisation du compteur de cases aux alentours.

		
				
				
			}
		
		
				
		
		
			
		
		
		
		}
		
		
		for (var i = 0; i < d; i++) 
		{
			
		
			for (var j = 0; j < d; j++)
			{
				tab1[i][j]=tab2[i][j]; // permution des données de la grille des valeurs temporaire à la grille des valeurs actuelles
				var element = document.getElementById("col_"+i+" line_"+j+" "); // je récupère l'id de toutes mes div grâce au deux boucle for
				//et je regarde leur valeur correspondant dans mon tableau tab1
				if(tab1[i][j]==true) // et en fonction de ce qu'elle me renvoi je change le nom de classe de ma div et donc son apparence
				{
					element.className='div1';
					
				}
				else 
				{
					element.className='div2';

				}
	
			}

		
		}
}
    initialisation();
