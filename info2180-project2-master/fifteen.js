//For bonus marks I did animation
window.onload = function(){

	var puzzlearea=$("#puzzlearea");
	var c=puzzlearea.children();
	var x=0;
	var y=0;
	var count=0;
	/*c[0].style.backgroundColor="yellow";
	c[0].classList.add("puzzlepiece");*/

	for (var i=0;i<c.length;i++){
		$(c[i]).addClass("puzzlepiece");
		c[i].style.left=x+"px";  
		c[i].style.top=y+"px";
		x+=100;
		count+=1;
		if(count%4==0){
			y+=100;
			x=0;
		}
	}

	c[0].style.backgroundPosition = "0px 0px";
	c[1].style.backgroundPosition = "-100px 0px";
	c[2].style.backgroundPosition = "-200px 0px";
	c[3].style.backgroundPosition = "-300px 0px";
	c[4].style.backgroundPosition = "0px 300px";
	c[5].style.backgroundPosition = "-100px 300px";
	c[6].style.backgroundPosition = "-200px 300px";
	c[7].style.backgroundPosition = "-300px 300px";
	c[8].style.backgroundPosition = "0px 200px";
	c[9].style.backgroundPosition = "-100px 200px";
	c[10].style.backgroundPosition = "-200px 200px";
	c[11].style.backgroundPosition = "-300px 200px";
	c[12].style.backgroundPosition = "0px 100px";
	c[13].style.backgroundPosition = "-100px 100px";
	c[14].style.backgroundPosition = "-200px 100px";
	

//try 1 at moving the puzzle to the empty square
document.getElementByTag("DIV").onclick = function(){
var puzzle1=puz.getContent("1");
puzzle1.onclick = function(){	
for (var i=1;i<c.length;i++){
		$(c[i]).addClass("puzzlepiece");
		c[i].style.left=x+"px";  
		c[i].style.top=y+"px";
		x+=100;
		x_2-=100;
		count+=1;
		if(count%4==0){
			y+=100;
			x=0;
		}
	}
	
	c[0].style.left="400px";
	c[0].style.top="400px";
	
//try2 at moving the puzzle to the empty square
function myFunction() {
    document.getElementsByTagName("DIV")[0][0].setAttribute("id", "puzzle1"); 
    document.getElementsByTagName("DIV")[0][1].setAttribute("id", "puzzle2"); 
    document.getElementsByTagName("DIV")[0][2].setAttribute("id", "puzzle3"); 
    document.getElementsByTagName("DIV")[0][3].setAttribute("id", "puzzle4"); 
    document.getElementsByTagName("DIV")[0][4].setAttribute("id", "puzzle5"); 
    document.getElementsByTagName("DIV")[0][5].setAttribute("id", "puzzle6"); 
    document.getElementsByTagName("DIV")[0][6].setAttribute("id", "puzzle6"); 
    document.getElementsByTagName("DIV")[0][7].setAttribute("id", "puzzle8"); 
    document.getElementsByTagName("DIV")[0][8].setAttribute("id", "puzzle9"); 
    document.getElementsByTagName("DIV")[0][9].setAttribute("id", "puzzle10"); 
    document.getElementsByTagName("DIV")[0][10].setAttribute("id", "puzzle11"); 
    document.getElementsByTagName("DIV")[0][11].setAttribute("id", "puzzle12"); 
    document.getElementsByTagName("DIV")[0][12].setAttribute("id", "puzzle13"); 
    document.getElementsByTagName("DIV")[0][13].setAttribute("id", "puzzle14"); 
    document.getElementsByTagName("DIV")[0][14].setAttribute("id", "puzzle15"); 
}
myFunction();

	puzzle1.onclick = function(){
		document.getElementsById("puzzle1").style.left="400px";  
		document.getElementsById("puzzle1").style.top="400px";
		document.getElementsById("puzzle1").style.backgroundPosition = "-300px 100px";
	}

//code for animation
puzzle1.onclick = function myMove() {
  var puz1 = document.getElementById("puzzle1");   
  var id = setInterval(ani, 3);
  var pos = 0;
  function ani() {
      pos++; 
      puz1.style.top = pos + 'px'; 
      puz1.style.left = pos + 'px'; 
    }
}