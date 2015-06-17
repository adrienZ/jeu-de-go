$(document).ready(function(){
    $('div.tri.up:nth-child(1)').click( function(){
        $('.apercu').css('background', "url('img/modecustom2.jpg') no-repeat");
        $('.apercu').css('background-size', "contain");    
    })
    
        $('div.tri.up:nth-child(2)').click( function(){
        $('.apercu').css('background', "url('img/logo-smash.jpg') no-repeat");
        $('.apercu').css('background-size', "contain");    
    })
    
            $('div.tri.down').click( function(){
        $('.apercu').css('background', "url('img/mode1.jpg')");
        $('.apercu').css('background-size', "contain");    
    })
});