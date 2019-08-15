

function NAME(){
	var person = prompt("please enter your name","Ava Mahboubi");
	if(person != null) {
	alert("Hello" + person +  "! what is your name!");
		
	}
}


function Convert(){
	var a= parseInt(document.getElementById("Fdeg").value)
	var b= (a-32)*5/9
	alert(a+"Fahrenheint="+b+"Celsius");


	
}


function Answer1(){
	if (document.getElementById("Chinese").checked){
		alert("Correct"); 

	}else{
		alert("Wrong");

	}
}


function Answer2(){
	if(document.getElementById("Namibia").checked){
		alert("Correct");
	}else{
		alert("Wrong")
	}
}



function Age(){
	var a=parseInt(document.getElementById("age").value)
	if(a<0){
		alert("you’re kidding, right?");
	} else if(a==0){
		alert("oh Baby, how can you work with computer that early in life");
	} else if (a>100){
		alert("you are too old to play!");
	} else{
		alert("you can play the games!!");
	}
}




function EvenOdd(){
	var a =parseInt(document.getElementById("EvenOdd").value)
	var b=a%2
	if (b==0){
		alert (a+"even number");
	} else if(b==1){
		alert(a+"odd number");
	}

}










