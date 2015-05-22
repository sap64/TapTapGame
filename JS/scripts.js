
//GAME SCRIPTS

$( document ).ready(function() {
    console.log( "ready!" );	
	changeColor();
	});
	
$("#fbook").on("touchstart",function(){
	fade("loginPage","startButton");
	});
	
$("#twttr").on("touchstart",function(){
	fade("loginPage","startButton");
	});
	
$("#startButton").on("touchend",function(){
	fade("startButton","gamePage");
	changeColor();
	fadeIn("timerOne");
	fadeIn("pressTile");
	fadeIn("gameScore");
	counterOne();
	
	
	});

$("li").on("touchstart",function(){
	$(this).addClass("tileEffect");
	});
	
	
//Funtions for changing colors	
	
var divs = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];

function changeColor(){

	var previousNum = 1000;               
	var classes = ["colorGreen","colorRed","colorYellow","colorLime","colorAqua","colorPink","colorPurple","colorOrange","colorWhite","colorCyan","colorCrimson","colorSpring","colorFuchsia","colorViolet","colorGold","colorRedOrange"];
	var sa = shuffleArray(classes);
		for(var i = 0; i < divs.length;i++){
		
			var id = divs[i];
		
			var myClass = sa[i];
		
			$("#" + id).attr("class",myClass);
		}
	
	 
}
//Function to randomize colors 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1) );
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Timer One function
var count = 30;
function counterOne(){
	var counter = setInterval(timer, 1000);//1000 will  run it every 1 second

	
	
	function timer(){
  
		if(count < 10){
			count = "0" + count;
		}
		
	  
		if (count == 0){
			clearInterval(counter);
			//counter ended, do something here
			fade("gamePage","gameOver");
			
		}
			
			document.getElementById("timerOne").innerHTML = count ;
			count--;
  
		//Do code for showing the number of seconds here
	}

	
		
	
}



//End of Timer One function

//Score counter fucntion
var score = 0;	


		if(score < 10){
		score = "0" + score;
document.getElementById("gameScore").innerHTML = score ;
		}

	
$("li").on("touchend",function(){
	if ($(this).hasClass("colorGreen")){
	 changeColor();
	
		
	 	document.getElementById("gameScore").innerHTML = score ;
		score++;

	} 
	
	
		else{
		
			count = 0;
			//score = 0;
			fade("gamePage","gameOver");
			fadeOut("timerOne");
		}
});

var finalScore = score;
	document.getElementById("finalScore").innerHTML = finalScore;

$("#retryButton").on("touchend",function(){
	fade("gameOver","gamePage");
	fadeIn("timerOne");
	count = 30;
	score = 0;
	counterOne();
	changeColor();
	});





