var playler=[];
 ;
function change(e)
{
    var test = e.id;
    console.log(test);
    
    switch(test) {
            
            
        case 'mario': document.querySelector('.hero').style.background  ='url("images/mario.png") no-repeat center, white';
            document.querySelector('.hero').style.backgroundSize  ='contain';
            break;   
                    case 'pikachu': document.querySelector('.hero').style.background  ='url("images/pika.png") no-repeat center, white';
            document.querySelector('.hero').style.backgroundSize  ='contain';
            break; 
        case 'yoshi': document.querySelector('.hero').style.background  ='url("images/yoshi.png") no-repeat center, white';
            document.querySelector('.hero').style.backgroundSize  ='contain';
            break;             
                    case 'samus': document.querySelector('.hero').style.background  ='url("images/samus.png") no-repeat center, white';
            document.querySelector('.hero').style.backgroundSize  ='contain';
            break; 
                                case 'link': document.querySelector('.hero').style.background  ='url("images/link.png") no-repeat center, white';
            document.querySelector('.hero').style.backgroundSize  ='contain';
            break; 
            
    }
    
    
}
