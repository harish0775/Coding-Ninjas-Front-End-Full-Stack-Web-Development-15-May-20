 /*
  
  // Remove
 
$("h1").remove();

                  // Ready 

   $( document ).ready(function() {
    console.log( "document loaded" );
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
});


                                             // Attributes
                                              

            
                // An element's attributes can contain useful information for your application, so it's important to be able to get and set them.

                // linkThe .attr() method
                // The .attr() method acts as both a getter and a setter. As a setter, .attr() can accept either a key and a value, or an object containing one or more key/value pairs.

                // .attr() as a setter:





                // $( "a" ).attr( "href", "allMyHrefsAreTheSameNow.html" );
 
                // $( "a" ).attr({
                //     title: "all titles are the same too!",
                //     href: "somethingNew.html"


                // });$( "a" ).attr( "href" ); 

         
                $( "#content" )
                .find( "h2" )
                .eq( 2 )
                    .html( "new text for the third h3!" )
                    .end() // Restores the selection to all h3s in #content
                .eq( 0 )
                    .html( "new text for the first h3!" );

           */
        //   $( "h1" ).css( "fontSize" ,"30px");
        //   $("h1").css({
        //       textSize : "100px",
        //       color : "red"

        //   });
        //   h1.addClass("big");





// var para1 = document.getElementById('para1');
// para1.innerHTML = "Welcome World";

h

// $('p').html('Welcome India');


// $('#para1').text('Hello World');

//  //$('#para1').text('Hello World');
//    /*
//    function $(query){
//        return document.querySelector(query);
//    }

    
// var paras = $('p');
// paras.html('changed'); 
// var p1 = paras.eq(0);
// p1.html('hello');
// paras.eq(1).html('Lol')


// var p = paras(0);
// $(p)


// $('#para1').css('color','red');
// $('#para1').css('font-size','30px')

// */ 
// // $('#para1').css({
// //     fontSize :"20px",
// //     color : "red"
// // });
// $('div').css({
//     height :"40px",
//     width :"50px",
//     backgroundColor :"Cyan"
// });
// $('div').on('click',function(){
//     var element = $(this);
//     element.width(element.width() + 4000 + "px");
//     // alert("Div Clicked");
// });
// $('a').on('click',function(){
//     alert("Google link clcked");
// });

$( "p" ).hide("slow" );