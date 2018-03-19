console.log("workin")

var gifButton;
var queryURL;
var topics;
var giffy = ["cat", "kitten","rainbow"];
// function
//  gify params: q, limit, rating

// var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=cats&api_key=cyU2OBRcwA8cePhq5korZnRYv2sFFzqx&limit=10");
// xhr.done(function(data) { console.log("success got data", data); });
				

  function renderButtons() {
  $("#giffy-button").empty();

for (var i =0; i< giffy.length; i++){
 var show = $("<button>");
 show.addClass("giffy");
 show.attr("data-name",giffy[i]);
 show.text(giffy[i]);

 $("#giffy-button").append(show);

    } 
  }
  renderButtons();


$("#find-gif").on("click", function(event){
  event.preventDefault();
  var getGif =$("#gif-input").val().trim();
  giffy.push(getGif)
  renderButtons();
  $("#gif-input").val(" ");
console.log(getGif);
});

$(document).on("click", ".giffy", displaygif)
// }
// });

function displaygif(){
  var queryURL ="https://api.giphy.com/v1/gifs/search?q="+($(this).text())+"&api_key=cyU2OBRcwA8cePhq5korZnRYv2sFFzqx&limit=10";
  
  $.ajax({
    url: queryURL,
    method: 'GET',
}).then(function(response){
console.log(response);
for (i=0; i <response.data.length; i++){
  var gifMove =response.data[i].images.fixed_height.url;
  var gifStill =response.data[i].images.fixed_height_still.url;
  var gifs =$("<img>").addClass("anyGif")
  .attr("src", gifStill).attr("gifMove", gifMove).attr("gifStill", gifStill).attr("data-state", "still")
  $(".gif-views").prepend(gifs);

}

});
$(document).on("click", ".anyGif",function()

{
  var state = $(this).attr("data-state");
      if (state==="still") {
$(this).attr("src", $(this).attr("gifMove"));
        $(this).attr("data-state", "moving")
        console.log("clicked");
}
    else{
      $(this).attr("src", $(this).attr("gifStill"));
      $(this).attr("data-state", "stilling")

    }
})
}

// var gifDiv = $("<div class='gif'>");

// var gifThing = response.img







