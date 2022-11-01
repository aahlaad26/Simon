

var i=0;
var buttonColours=["red","blue", "green","yellow"];
var pattern=[];
var userClickedPattern=[]
var level=0;
var started=false;
$(document).keypress(function() {
    if (!started) {
      
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      
      nextSequence();
      started = true;
    }
  });

    $(".btn").click(function clicked() {
        var userChosenColour=$(this).attr('id');
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        playSound(userChosenColour);
        if(userChosenColour===pattern[i]){
            if(i<level-1){
            i++;}
            else{
                userClickedPattern=[];
                i=0;
                setTimeout(function(){nextSequence()}, 1000);
               
               
            }
            
        }
        else{ $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
          }, 100);
            $("h1").text("Game Over, Press Any Key to Restart")
            started=false;
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            level=0;
           pattern=[];
           userClickedPattern=[];
           i=0;
        }
        // buttonAnimation(key);
    });

    
function nextSequence(){
    var index= Math.floor(Math.random()*4);
    var randomColour=buttonColours[index];
    pattern.push(randomColour);
    level++;
    $("#level-title").text("Level " + level);
    $("#"+randomColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomColour + ".mp3");
    audio.play();
}
function playSound(name){
    $("#"+name).addClass("pressed");
    setTimeout(function() {
        $("#"+name).removeClass("pressed");
      }, 100);
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
