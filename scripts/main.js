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
// Ce qu'il faut faire,c'est reperé ou l'on clique,on analyse ce qu'il y a autour. Si autour il ya un enemi,on regarde son tab2 pour voir si il appartient a un groupe. Si oui, alors regarder pour ce groupe et faire une vérif de chaque liberté.




function initialisation() //////////////////////////////////////////////
{
    tab1 = new Array();
    tab2 = new Array(); 
    
    document.write('<table cellpadding="0" cellspacing="0">');
    for (var i = 0; i <= d; i++) 
    {	
    	document.write("<tr id='ligne_"+i+"'>")
       
       	tab2[i] = new Array(); 

        for (var j = 0; j <= d; j++)
        {

            
            tab2[i][j] = 0;
            
            if(i==0 || i==d || j==0 || j==d){
            document.write("<td id='col_"+i+" line_"+j+" ' class='div5'</td>")
        	}
        	else{
            document.write("<td id='col_"+i+" line_"+j+" ' class='div2'onclick=' modifier(this); verification(this)'></td>")
            }
        
        }

        document.write("</tr>")
        
       

         
       
    }
    
        	
        
 document.write('</table>');



} //////////////////////////////////////////////////

function liberte(i,j){
    var liberte=4;
    
     var $ = function (id) {return document.getElementById(id);}; //shorten document.getElementbyId()
    if($("col_" + i +" line_" + j +" ").className =='div1'){
        if( $("col_" + (i+1) +" line_" + j +" ").className =='div3' || $("col_" + (i+1) +" line_" + j +" ").className =='div5' || $("col_" + (i+1) +" line_" + j +" ").className =='div1' ){
                    liberte--;
                    
                }
        if( $("col_" + (i-1) +" line_" + j +" ").className =='div3' || $("col_" + (i-1) +" line_" + j +" ").className =='div5' || $("col_" + (i-1) +" line_" + j +" ").className =='div1' ){
                    liberte--;
                    
                }
        if( $("col_" + i +" line_" + (j-1) +" ").className =='div3' || $("col_" + i +" line_" + (j-1) +" ").className =='div5' || $("col_" + i +" line_" + (j-1) +" ").className =='div1'){
                    liberte--;
                    
                }
        if( $("col_" + i +" line_" + (j+1) +" ").className =='div3' || $("col_" + i +" line_" + (j+1) +" ").className =='div5' || $("col_" + i +" line_" + (j+1) +" ").className =='div1'){
                    liberte--;
                    
                }
        
            }
        if($("col_" + i +" line_" + j +" ").className =='div3'){
        if( $("col_" + (i+1) +" line_" + j +" ").className =='div1' || $("col_" + (i+1) +" line_" + j +" ").className =='div5' || $("col_" + (i+1) +" line_" + j +" ").className =='div3' ){
                    liberte--;
                    
                }
        if( $("col_" + (i-1) +" line_" + j +" ").className =='div1' || $("col_" + (i-1) +" line_" + j +" ").className =='div5' || $("col_" + (i-1) +" line_" + j +" ").className =='div3' ){
                    liberte--;
                    
                }
        if( $("col_" + i +" line_" + (j-1) +" ").className =='div1' || $("col_" + i +" line_" + (j-1) +" ").className =='div5' || $("col_" + i +" line_" + (j-1) +" ").className =='div3' ){
                    liberte--;
                    
                }
        if( $("col_" + i +" line_" + (j+1) +" ").className =='div1' || $("col_" + i +" line_" + (j+1) +" ").className =='div5' || $("col_" + i +" line_" + (j+1)     +" ").className =='div3' ){
                    liberte--;
                    
                }
       
        }

    if(liberte!=0){
        return true;
    }
    else {
        return false;
    }

                
    

}
function verification(caser){
    b=1;
    c=100;
    tab1 = new Array();
    var $ = function (id) {return document.getElementById(id);}; //shorten document.getElementbyId()
    //Creation tableau final

    for (var i=1;i<d;i++){
        for (var j=1;j<d;j++){
            if( $("col_" + i +" line_" + j +" ").className =='div1')
                    {
                            
                            tab2[i][j]= b;
                            
                            b++;
                            
                    }
            if( $("col_" + i +" line_" + j +" ").className =='div3')
                    {

                        tab2[i][j]=c;
                        

                        c++;

                    }

    }
    
    }
    
    
    // formation des groupes en changant le tableau final
    for (var i=1;i<d;i++){
        for (var j=1;j<d;j++){

                if( $("col_" + (i+1) +" line_" + j +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i+1][j]=tab2[i][j] ;
                   
                }

                if( $("col_" + (i-1) +" line_" + j +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i-1][j]=tab2[i][j] ;
                  
                }

                if( $("col_" + i +" line_" + (j+1) +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i][j+1]=tab2[i][j] ;
                    
                }
    
                if( $("col_" + i +" line_" + (j-1) +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i][j-1]=tab2[i][j] ;
                    
                }


                 if( $("col_" + (i+1) +" line_" + (j-1) +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i+1][j-1]=tab2[i][j] ;
                    
                }

                 if( $("col_" + (i-1) +" line_" + (j-1) +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i-1][j-1]=tab2[i][j] ;
                    
                }

                 if( $("col_" + (i+1) +" line_" + (j+1) +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i+1][j+1]=tab2[i][j] ;
                    
                }

                 if( $("col_" + (i-1) +" line_" + (j+1) +" ").className == $("col_" + i +" line_" + j +" ").className){
                    
                    tab2[i-1][j+1]=tab2[i][j] ;
                    
                }






               


    }
}
     
                   
                
    var yolo=caser.id;
    var Icase=parseInt(yolo.substr(4,1));
    var Jcase=parseInt(yolo.substr(11));
    
    
    ///VERIF CASE AUTOUR DE CELLE OU LON VIENT DE CLIQUER ////

        if(tab2[Icase+1][Jcase]!=0){
            var NombreDePion=0;
            var compteurFalse=0;
        for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){
                if(tab2[i][j]== tab2[Icase+1][Jcase]){
                NombreDePion++;
                liberte(i,j);
                if(liberte(i,j)==true){
                
                    break;
                
                }
                if (liberte(i,j)==false) {
                    compteurFalse++;
                

            }
        }
        }
        }
        
        if(compteurFalse==NombreDePion){
            NombreDePion=0;
            compteurFalse=0;
            for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){
                if(tab2[i][j]== tab2[Icase+1][Jcase]){
                    console.log('bijour');
                    $("col_" + i +" line_" + j +" ").className='div2';
                }
            }
            }
        }

    }
    
     if(tab2[Icase-1][Jcase]!=0){
        var NombreDePion=0;
                var compteurFalse=0;
        for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){

                if(tab2[i][j]== tab2[Icase-1][Jcase]){
                NombreDePion++;
                liberte(i,j);
                if(liberte(i,j)==true){
                
                    break;
                
                }
                if (liberte(i,j)==false) {
                    compteurFalse++;
                

            }
        }
        }
        }
        
        if(compteurFalse==NombreDePion){
            NombreDePion=0;
            compteurFalse=0;
            for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){
                if(tab2[i][j]== tab2[Icase-1][Jcase]){
                    console.log('bijour2');
                    $("col_" + i +" line_" + j +" ").className='div2';
                }
            }
            }
        }

    }

     if(tab2[Icase][Jcase+1]!=0){
                var NombreDePion=0;
                var compteurFalse=0;
        for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){
                

                if(tab2[i][j]== tab2[Icase][Jcase+1]){
                NombreDePion++;
                liberte(i,j);
                
                if(liberte(i,j)==true){

                
                    break;
                
                }
                if (liberte(i,j)==false){
                    
                    compteurFalse++;
                

            }
        }
        }
        }
        
        if(compteurFalse==NombreDePion){
            
            for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){
                if(tab2[i][j]== tab2[Icase][Jcase+1]){
                    console.log('bijour3');
                    $("col_" + i +" line_" + j +" ").className='div2';
                }
            }
            }
        }

    }

     if(tab2[Icase][Jcase-1]!=0){
        var NombreDePion=0;
                var compteurFalse=0;
        for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){

                if(tab2[i][j]== tab2[Icase][Jcase-1]){
                NombreDePion++;
                liberte(i,j);
                if(liberte(i,j)==true){
                
                    break;
                
                }
                if (liberte(i,j)==false) {
                    compteurFalse++;
                

            }
        }
        }
        }
        
        
        if(compteurFalse==NombreDePion){
            NombreDePion=0;
            compteurFalse=0;
            for (var i=1;i<d;i++){
            for (var j=1;j<d;j++){
                if(tab2[i][j]== tab2[Icase][Jcase-1]){
                    
                    $("col_" + i +" line_" + j +" ").className='div2';
                }
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
