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
	fadeIn("timerOne");
	timerOne();
	timeEnd();
	});

	
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
	var time = 30;
	
	function timerOne(){
		
		setTimeout(function(){
			time--;
			var secs = Math.floor(time/1);
			//var tenths = time % 10;
			
			if(secs < 10){
				secs = "0" + secs
			}
			
			document.getElementById("timerOne").innerHTML = secs ;
			timerOne();
		},1000);
		
		
		
	}
	
	function timeEnd(){
		setTimeout(function(){
		fadeOut("timerOne","gameOver");},30000);
	}
	
	
	
	
	
	
	
$("li").on("touchstart",function(){
	if ($(this).hasClass("colorGreen")){
	 changeColor();
	}
	
		else{
			
			timeEnd();
			fade("gamePage","gameOver");
			fadeOut("timerOne");
		}
});








