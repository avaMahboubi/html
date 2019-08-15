alert("test");

function NAME(){
	var person = prompt("please enter your name","Ava Mahboubi");
	if(person != null) {
		document.getElementById("insert").innerHTML =
		"Hello" + person +  "! How are you today";
	}
}