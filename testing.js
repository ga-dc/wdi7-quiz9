$(document).ready(function(){
  var url = "http://kittengifs.com/gifs";
  function getKitGif(){
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).then(function(response){
      console.log(response.length);
    });
  }
  getKitGif();
});
