var	count = 10;
function Timer(){
	if(count == 0){
		console.log("Time Up !!!!");
		clearInterval(id);
		return;	
	}
	console.log(count);
	count--;
}

var id = setInterval(Timer,1000);