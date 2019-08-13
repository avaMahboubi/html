//get element by id example
document.getElementById('formJS').innerHTML="this massage came from JavaScript";

var date = new Date();
//get element by id example
document.getElementById('formJS').innerHTML=date;







//alert example
alert('now i have JS');




function Hello(){
	alert("Hello, World");
}

function Hello2(){
	var person = prompt("please enter your name","Harry Potter");
	if(person != null) {
		document.getElementById("insert").innerHTML =
		"Hello" + person +  "! How are you today";
	}
}

function sum(){
	var a = parseInt(document.getElementById('numA').value)
	var b = parseInt(document.getElementById('numB').value)
	var sum;
	sum = a+b;

	document.getElementById("result").innerHTML = sum;
}


	function check(){
		if (document.getElementById("optionA").checked){
			alert("ok!");

		}else{
			alert("Wrong");

		}
	}
function square(){
	var a = parseInt(document.getElementById("field1").value)
	var sum;

	sum = a*a;
	document.getElementById("result").innerHTML = sum;

}







