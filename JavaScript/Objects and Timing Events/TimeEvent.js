

function sayhello(){
	console.log("Hello World");
}
setTimeout(sayhello,2000);  // it print only once in particular time that you  given

setInterval(sayhello,2000);  // it print repeatly  of given time 

//........................................................................................
var sec =1

function sayhello(){
	console.log("after",sec);
	sec++;
}

function sayhello(){
	console.log("Hello World");
}
setTimeout(sayhello,2000);

setInterval(sayhello,2000);


var sec =1

function sayhello(){
	console.log("after",sec);
	sec++;
}


//......................................         clearInterval(id);           ........................................

var id = setInterval(sayhello,2000);
var sec =1

function sayhello(){
	console.log("after",sec);
	sec++;
	if(sec == 6){
		clearInterval(id);
	}
}




