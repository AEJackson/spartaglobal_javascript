function diceRole() {
  var diceRolled = Math.floor(Math.random() * 6) + 1;  // returns a random integer from 1 to 6
  return diceRolled;
}

function getSquaresToFill(diceNumber) {
  var boxes = [false,false,false,false,false,false,false,false,false];

  switch (diceNumber) {
    case 1:
      //set middle box i.e. box 5 index 4
      boxes[4] = true;
      break;
    case 2:
      boxes[0] = true;
      boxes[8] = true;
      break;
    case 3:
      boxes[0] = true;
      boxes[4] = true;
      boxes[8] = true;
      break;
    case 4:
      boxes[0] = true;
      boxes[2] = true;
      boxes[6] = true;
      boxes[8] = true;
      break;
    case 5:
      boxes[0] = true;
      boxes[2] = true;
      boxes[4] = true;
      boxes[6] = true;
      boxes[8] = true;
      break;
    case 6:
      boxes[0] = true;
      boxes[2] = true;
      boxes[3] = true;
      boxes[5] = true;
      boxes[6] = true;
      boxes[8] = true;
      break;

    default:
  }

  return boxes;
}

var theNumberRolled = diceRole();
var toFillBoxes = getSquaresToFill( theNumberRolled );

//var diceDisplay = document.querySelector("div.dice");
var diceSquares = document.querySelectorAll("div.innerSquare");

for (var i = 0; i < 9; i++) {
  if(toFillBoxes[i]){
    diceSquares[i].className = "dot";
  }
  // diceDisplay.children[i].innerHTML = toFillBoxes[i].toString();
}

console.log(theNumberRolled);
