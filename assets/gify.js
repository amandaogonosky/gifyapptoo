console.log("workin")

var gifButton;
var queryURL;
var topics;

// function
//  gify params: q, limit, rating

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=cats&api_key=cyU2OBRcwA8cePhq5korZnRYv2sFFzqx&limit=10");
xhr.done(function(data) { console.log("success got data", data); });
				
var giffy = ["cat", "kitten","rainbow"];
  function renderButtons() {
  $("#find-gif").empty();

for (var i =0; i< giffy.lenght; i++){
 var a = $("<button>");
 a.addClass("giffy");
 a.attr("data-name",giffy[i]);
 a.text(gifButton[i]);

 $("#giffy-button").append(a);

    } 
  }
$("#giftop").on("click",function(event){
event.preventDefault();

var giffy = $("#gif-form").val().trim();
giffy.push(giffy);

});

renderButtons();
// });

// $.ajax()({
//     url =queryURL,
//     method: 'GET',


// })


// $("#giftop").click(function(){
//     // $("#giftop").console
// console.log(gifButton);
// });
