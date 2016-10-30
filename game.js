var Game = function(opts){
    this.rows = opts.rows;
    this.columns = opts.columns;
    this.values = this.createNewValues();
    this.table = "";
    this.emptyValueIndex = 0;
    this.newGame();
}

Game.prototype.newGame = function(){
    this.shuffleGame();
    var valuesIndex = 0;

    var table = "<table>";
    for(var i=0; i<this.rows; i++){
        var row = "<tr>";
        for(var j=0; j<this.columns;j++){
            var column = "<td id="+ valuesIndex+">";
            var num = this.values[valuesIndex];
            if (num == 16){
                this.emptyValueIndex = valuesIndex;
                num = "&nbsp;";
            }
            valuesIndex++;
            column +=num + "</td>";
            row += column;
        }
        row += "</tr>";
        table += row;
    }
    table += "</table>";

    this.table = table;
}

Game.prototype.shuffleGame = function(){
    for(var i = this.values.length -1 ; i > 0;i-- ){
        var j = Math.floor(Math.random() * (i+1));

        var temp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = temp;
    }
}

Game.prototype.createNewValues = function(){
    var possibleValues = [];
    var range = this.rows * this.columns;
    for(var i = 1; i <= range; i++){
        possibleValues.push(i)
    }

    return possibleValues;
}

Game.prototype.checkIfFinishedGame = function(){





}




