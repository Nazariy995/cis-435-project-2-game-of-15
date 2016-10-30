var game;

var $ = function(id){
    return document.getElementById(id);
}

var makeMove = function(e){
    var selectedId = e.target.id;
    var diff = Math.abs(selectedId - game.emptyValueIndex);
    if(diff == 1 || diff == game.columns){
        var temp = $(selectedId).innerHTML;
        $(selectedId).innerHTML = "&nbsp;";
        $(game.emptyValueIndex).innerHTML = temp;
        game.emptyValueIndex = selectedId;
    }
}

var setEventListeners = function(){
    var elements = document.getElementsByTagName("td");
    for(var i=0; i<elements.length;i++){
        var element = elements[i];
        if(element.innerHTML != "&nbsp;"){
            var value = element.addEventListener("click", makeMove,false);
        }
    }
}

var startGame = function(){
    var opts = {
        rows:4,
        columns:4
    }

    game = new Game(opts);
    $("board").innerHTML = game.table;
    setEventListeners();
}


window.addEventListener("load", startGame, false);
