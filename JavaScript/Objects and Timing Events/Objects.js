var student = {
	name : "Harish Nishad",
	roll_No : "186514628",
	Marks : "90"
}




/* 
student
{name: "Harish Nishad", roll: "186514628", Marks: "90"}
student.name
"Harish Nishad"
student.roll
"186514628"
student.name : "Harish Kumar"
VM14049:1 Uncaught SyntaxError: Unexpected token ':'
student.name = "Harish Kumar"
"Harish Kumar"
student.sem
undefined
student.sem = 4;
4
student
{name: "Harish Kumar", roll: "186514628", Marks: "90", sem: 4}

*/


  //...........................................................................................

        //           Delete a properties of an Object

  /*
        student
{name: "Harish Kumar", roll: "186514628", Marks: "90", sem: 4}
student.Marks
"90"
delete student.Marks            // delete student using delete
true
student
{name: "Harish Kumar", roll: "186514628", sem: 4}name: "Harish Kumar"roll: "186514628"sem: 4__proto__: Object

delete student["name"]    // this is also valid 
true
student
{roll: "186514628", sem: 4}


*/


//..............................3 Way .......iterating through object .............................

var student = {
	name : "Harish Nishad",
	roll_No : "186514628",
	Marks : "90"
}

/*
   different  3 way to itrated over object
	 
	 for( var prop in student){
	 console.log(prop);
	 }
	 
 
 
 
 
 */

// Object without value 
for( var prop in student){
	 console.log(prop);
	 }


// Object with  value 
for( var prop in student){
	 console.log(prop ,student[prop]);
	 }
 
var keys = Object.keys(student);
var keys = Object.getOwnPropertyNames(student);

   /*
     keys
(3) ["name", "roll_No", "Marks"]
    
    */











