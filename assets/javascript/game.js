
var randomNum = 0;
var Leo = 0;
var Princess = 0;
var Gray = 0;
var Teddy = 0;
var numTally = 0;
var losses = 0;
var wins = 0;



$(document).ready(function() {
    
    // Generates and displays random number
    randomNum = Math.floor((Math.random() * 120) + 19);
    console.log("RanNum: " + randomNum);
    $("#randomNumber").text("Random Number: " + randomNum);

    Leo = Math.floor((Math.random() * 12) + 1);
    console.log("Leo: " + Leo);

    Princess = Math.floor((Math.random() * 12) + 1);
    console.log("Princess: " + Princess);

    Gray = Math.floor((Math.random() * 12) + 1);
    console.log("Gray: " + Gray);

    Teddy = Math.floor((Math.random() * 12) + 1);
    console.log("Teddy: " + Teddy);


    $("#Ruffles").on("click", function () {      
        numTally = numTally + Leo;
        $("#totalScore").text("Total Score: " + numTally);
    });

    $("#Petals").on("click", function () {      
        numTally = numTally + Princess;
        $("#totalScore").text("Total Score: " + numTally);
    });

    $("#General").on("click", function () {      
        numTally = numTally + Gray;
        $("#totalScore").text("Total Score: " + numTally);
    });

    $("#Glasses").on("click", function () {      
        numTally = numTally + Teddy;
        $("#totalScore").text("Total Score: " + numTally);
    });




    

});
