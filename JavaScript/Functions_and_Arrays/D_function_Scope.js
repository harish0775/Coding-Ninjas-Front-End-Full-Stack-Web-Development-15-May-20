 // Scope is the Area where variable is access .
// function scope is also called lexicale scope
// 
var name = 'Outside Function';  // this variable is  Gobal access

function scope(){
	 var nam = 'inside Function';  // this var is function Scope

	console.log(nam);
}
scope();
console.log(name);






// Execution Context

function c(){
	console.log("inside c");
	
}
function b(){
	c();
	console.log("inside b");
	
}
function a(){
	b();
	console.log("inside a");
}

a()
console.log("Global context");


// Output : inside Function
// VM4312:14 Outside Function
// VM4312:19 inside c
// VM4312:23 inside b
// VM4312:27 inside a
// VM4312:31 Global context

// in stack first print :
//  Gobal context
//   : in gbl cntxt a() present next .



