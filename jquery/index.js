$(function(event) {

  var count = document.getElementById("count");
  var count2 = $("#count");
  console.log(count);
  console.log(count2);

  var items = document.getElementsByTagName("li");
  var items2 = $("li");
  console.log(items);
  console.log(items2);

  var done = document.querySelectorAll("li.done");
  var done2 = $("li.done");
  console.log(done);

  var li = $("<li>New Item</li>");
  var liTop = $("<li>New Item Top</li>")

  $("#list").append(li);
  $("#list").prepend(li);

  //
  var todos = ["one", "two", 3, "four"];

  $(todos).each(function(index, todos) {
    console.log(todos);
  })

  $(".done").html(6).css("color","red");

  //Event listeners
  $("#myButton").on("click", function() {
    $(".done").html(Math.random()*100).css("color","yellow");
  })

})
