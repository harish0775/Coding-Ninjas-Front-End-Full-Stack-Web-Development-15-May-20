
function fetchRandomDogImage(){


//     var xhrRequest  = new  XMLHttpRequest();

// xhrRequest.onload = function(){
//     console.log(xhrRequest,response);
//     var responseJSON =JSON.parse(xhrRequest.response); 
//     var imageUrl = responseJSON.message;
//     $('#dog-image').attr('src',imageUrl);
    
// };
// xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',TextTrackCue);
// xhrRequest.send();

// }

// $('#fetch-dog-image-button').click(fetchRandomDogImage);
$.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    method:'Get',
    success : function(data){{
        var imageUrl = responseJSON.message;
            $('#dog-image').attr('src',imageUrl);
    }}
});
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);