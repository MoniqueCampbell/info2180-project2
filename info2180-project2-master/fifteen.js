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
var title1=puz.getContent("1");
title1.onclick = function(){	
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
	
//try2
function myFunction() {
    document.getElementsByTagName("DIV")[0][0].setAttribute("id", "title1"); 
}
myFunction();
		title1.onclick = function(){
		document.getElementsById("title1").style.left="400px";  
		document.getElementsById("title1").style.top="400px";
		document.getElementsById("title1").style.backgroundPosition = "-300px 100px";
	}}