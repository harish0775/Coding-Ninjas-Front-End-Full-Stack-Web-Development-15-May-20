// Array are  object in javascript
var arr = [20,70,50,34,2,23];
var obj = {
    "0" : "20",
    "1" :  "23",
    "2" : "17",
    "3" : "56",
    "5" :  "0"
}






/*
 

 obj
{0: "20", 1: "23", 2: "17", 3: "56", 5: "0"}
0: "20"
1: "23"
2: "17"
3: "56"
5: "0"
__proto__: Object
arr
(6) [20, 70, 50, 34, 2, 23]
0: 20
1: 70
2: 50
3: 34
4: 2
5: 23
length: 6
__proto__: Array(0)

obj
{0: "20", 1: "23", 2: "17", 3: "56", 5: "0", pro1: "Demo"}

obj.pro1 = "Demo"            // add property to object demo
"Demo"
 */
// Notes : if obj        property checge the length of object isn change              
///        In Array      Length of Array Change No change in Length     








/*

   for(var i in arr){
    console.log(i)
}
VM21249:2 0
VM21249:2 1
VM21249:2 2
VM21249:2 3
VM21249:2 4
VM21249:2 5
undefined

*/