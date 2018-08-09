//get element by id
var wrapperDiv = document.getElementById('wrapper');
wrapperDiv.style.backgroundColor = "blue";

//get element by tag name
var lis = document.getElementsByTagName("li");
lis[1].innerHTML = "Im a LI and i've changed"

//querySelector
var selected = document.querySelectorAll("li.selected");
for (var i = 0; i < selected.length; i++) {
  selected[i].style.color = "red";
}

var ptag = document.createElement("p");
ptag.innerHTML = "A brand new tag";
document.body.appendChild(ptag);

var ul = document.getElementById("list");
var listItem = document.createElement("li");
listItem.innerHTML = "new list item JS";
ul.insertBefore(listItem, lis[lis.length-1]);

//turn every other list item a different colour
for (var i = 0; i < lis.length; i++) {
  var className = i % 2 == 0 ? "even":"";
  var li = lis[i];

  li.className = className;
}

var countSpan = document.getElementById("count");
countSpan.innerHTML = lis.length;

debugger;
