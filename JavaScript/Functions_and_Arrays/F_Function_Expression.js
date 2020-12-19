
/* ................................ Function decelaration 
 * function fact(n){
	var ans = 1;
	for(var i = 1; i<=n;i++)
{
	ans = ans * i;
}
	return ans;
}
*/
//........................................Function Expression
var factorial =  function fact(n){
	var ans = 1;
	for(var i = 1; i<=n;i++)
{
	ans = ans * i;
}
	return ans;
};
console.log(factorial);
console.log(factorial(5));

//..............................................................................
 



var factorial = function fact(n){
		if(n == 0){
			return 1;
		}
		 return n*fact(n -1);
	 };




var factorial2 =  function(n){
	var ans = 1;
	for(var i = 1; i<=n;i++)
{
	ans = ans * i;
}
	return ans;
};

console.log(factorial);
console.log(factorial(2));