
var randomNum;
var Leo;
var Princess;
var Gray;
var Teddy;
var numTally;
var losses = 0;
var wins = 0;



$(document).ready(function() {

start();
    
    // Generates and displays random number
   function start() { 
       numTally = 0;
       console.log("start function");
       randomNum = Math.floor((Math.random() * 120) + 19);
        console.log("RanNum: " + randomNum);
        $("#randomNumber").text("Random Number: " + randomNum);
        $("#totalScore").text("Total Score: " + numTally);
    }

    Leo = Math.floor((Math.random() * 12) + 1);
    console.log("Leo: " + Leo); 
    
    Princess = Math.floor((Math.random() * 12) + 1);
    console.log("Princess: " + Princess);
        // Trying to have a diff # for each
        if (Princess === Leo) {
        Princess = Math.floor((Math.random() * 12) + 1);
        }

    Gray = Math.floor((Math.random() * 12) + 1);
    console.log("Gray: " + Gray);

    Teddy = Math.floor((Math.random() * 12) + 1);
    console.log("Teddy: " + Teddy);

    // Adds each click of portrait to total score

    $("#Ruffles").on("click", function () {      
        numTally = numTally + Leo;
        $("#totalScore").text("Total Score: " + numTally);
        checkWinLoss();
    });

    $("#Petals").on("click", function () {      
        numTally = numTally + Princess;
        $("#totalScore").text("Total Score: " + numTally);
        checkWinLoss();
    });

    $("#General").on("click", function () {      
        numTally = numTally + Gray;
        $("#totalScore").text("Total Score: " + numTally);
        checkWinLoss();
    });

    $("#Glasses").on("click", function () {      
        numTally = numTally + Teddy;
        console.log(numTally);
        $("#totalScore").text("Total Score: " + numTally);
        checkWinLoss();
    } 
    );

    // When random number = score, "you win!"

 
    function checkWinLoss() {
    if (randomNum === numTally) {
        $("#wins").text(wins + 1);
        alert("Paws-itively Great!");
        start();
    }
    
    else if (randomNum < numTally) {
        $("#losses").text(losses + 1);
        alert('"Pet"-ter Luck Next Time');
        start();
    }
    
    }

    

       
    

    



    

});
