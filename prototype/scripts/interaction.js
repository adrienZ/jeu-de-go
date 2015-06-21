$(document).ready(function () {
    $(".choose_ia").hide();



//    var jeu = '<div class="multiplayer"> <div class="handicap"> <button id="oui" onclick="handicap(this)"> Oui </button> <button id="non" onclick="handicap(this)"> Non </button> <button id="bomb" onclick=" bomb()">bomb</button> </div> <h1> Jeu de Go </h1> <div id="J1"></div> <div id="J2"></div> <div class="game">  </div> <input type="file" id="fileinput" multiple /> <script type="text/javascript"> function readMultipleFiles(evt) { //Retrieve all the files from the FileList object var files = evt.target.files; if (files) { for (var i = 0, f; f = files[i]; i++) { var r = new FileReader(); r.onload = (function (f) { return function (e) { var contents = e.target.result; alert("Got the file.n" + "name: " + f.name + "n" + "type: " + f.type + "n" + "size: " + f.size + " bytesn" + "starts with: " + contents.substr(1, contents.indexOf("n"))); console.log(f) }; })(f); r.readAsText(f); } } else { alert("Failed to load files"); } } document.getElementById("fileinput").addEventListener("change", readMultipleFiles, false); </script> <button onclick="passer();" id="pass">PASS</button> <button id="save" value=save onclick=save();>SAVE</button> <script type="text/javascript" src="scripts/FileSaver.min.js"></script> </div>';

    var src = $('#gameScript').attr('src');




    $('div.tri:nth-child(1)').click(function () {

    });

    $('div.tri:nth-child(2)').click(function () {
        $('.mod').fadeOut();
        $(".choose_ia").fadeIn(500);

        $('#ia').click(function () {
            $('.ia').fadeIn();
        });
        $('#friend').click(function () {
            $('.normal').fadeIn();
        });
    })

});