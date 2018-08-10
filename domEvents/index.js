document.addEventListener("DOMContentLoaded", function() {

  // access myButton
  var myButton = document.getElementById('myButton');

  //event listener for our myButton
  myButton.addEventListener("click", handleClick)

  // handleClick function
  function handleClick() {
    console.log("Button was click");
  }

  // access the myForm
  var myForm = document.getElementById("myForm");
  var name;

  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var firstNameField = document.getElementById("firstName");
    // debugger;
    // console.log("firstNameField");
    if(!firstNameField.value){
      //access the input field;
      firstNameField.style.backgroundColor = "red";
    }
    else {
      name = firstNameField.value;
      console.log(name);
    }
  })

  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var div3 = document.getElementById("div3");

  //Bubbling and Capture;
  div1.addEventListener("click",function functionName(event) {
    event.stopPropagation();
    console.log("div1 was clicked");
  }) // true parameter say trigger at capture stage,
  div2.addEventListener("click",function functionName(event) {
    event.stopPropagation();
    console.log("div2 was clicked");
  })
  div3.addEventListener("click",function functionName(event) {
    event.stopPropagation();
    console.log("div3 was clicked");
  })


});
