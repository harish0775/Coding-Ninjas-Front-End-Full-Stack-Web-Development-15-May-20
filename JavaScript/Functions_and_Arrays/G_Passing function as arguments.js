var factorial = function fact(n){
	var ans =1;
	for (var i = 1;i<= n;i++){
		ans = ans * i;
		
	};
	return ans;
};

function ncr(n,r,factorial){
	return factorial(n) /(factorial(r) *factorial(n -r));
};
console.log(ncr(5,2,factorial));