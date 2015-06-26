var Nombreperso=0;
function css(selector, property, value) {
    for (var i=0; i<document.styleSheets.length;i++) {//Loop through all styles
        //Try add rule
        try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}//IE
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


function mario(){
				if(Nombreperso==0){
				theme=1;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				}
				else {
					theme2=1;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				
console.log(theme);
}
function pika(){
				if(Nombreperso==0){

				theme=2;
				var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				}
				else {
					theme2=2;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				
				}
				
				
	    console.log(theme);
			

}

function sonic(){
				if(Nombreperso==0){
				theme=3;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=3;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}


function link(){
				if(Nombreperso==0){
				theme=4;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=4;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}

function samus(){
				if(Nombreperso==0){
				theme=5;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=5;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}

function dk(){
				if(Nombreperso==0){
				theme=6;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=6;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}
function bowser(){
				if(Nombreperso==0){
				theme=7;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=7;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}

function luigi(){
				if(Nombreperso==0){
				theme=8;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=8;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}
function yoshi(){
				if(Nombreperso==0){
				theme=9;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme",theme,date_exp,myDomain);
				
				}
				else {
					theme2=9;
					var pathname=location.pathname;
				var myDomain=pathname.substring(0,pathname.lastIndexOf('/')) +'/';
				var date_exp = new Date();
				date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));
	// Ici on définit une durée de vie de 365 jours
				SetCookie("theme2",theme2,date_exp,myDomain);
				}
			
				

}



function page(){
	Nombreperso++;
	
	if(Nombreperso==2){
	document.location.href='index.html';
	}
}



