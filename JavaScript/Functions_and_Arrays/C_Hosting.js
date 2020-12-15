// Declare variable  after  printing then it's does  not through error it's show undefine  
//  because of variable Hosting  But js interpeter know variable is present

  //......Varible_Hosting 
  
  function hoistDemo(){
    console.log(i);
   var i = 10;
}
hoistDemo();

//...............................
//
//  function hosting 
hoistDemo();

function hoistDemo(){
    console.log(i);
   var i = 10;
}


//js ibnterpeter move all function decleraction & variable decleration move top of the code :  called hosting 

