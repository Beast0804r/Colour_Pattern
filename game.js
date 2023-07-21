
var buttonColours =["red","blue","green","yellow"];

var gamepattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){

    if(!started){

        $("#level-title").text("level" +level );
        nextSequence();
        started=true;
        

    }
})

$(document).click(function(){

    if(!started){

        $("#level-title").text("level" +level );
        nextSequence();
        started=true;
        

    }
})




$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playsound(userChosenColour);

    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
});



function checkAnswer(currentLevel){

    if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){

        console.log("CORRECT");

        if(userClickedPattern.length === gamepattern.length){

            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("WR0NG");

        playsound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);

        $("#level-title").text("Game Over, Press Restart key");

        


        

        

        
        
    }
}

function nextSequence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("level " +level );

    var randomnumber = Math.floor(Math.random() *4);

    var randomChoosencolour = buttonColours[randomnumber];

    gamepattern.push(randomChoosencolour);

    $("#" + randomChoosencolour).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChoosencolour);

}

function playsound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

   
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
    }, 150);
}

function startOver(){

    level=0;

    gamepattern=[];
    started=false;
}