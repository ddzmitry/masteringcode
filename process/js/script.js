var colors = [
               '#C94C24', //orange
               '#268BD2', //blue
               '#C4226F', //pink
               '#859835', // lime
               '#6D73C2', // purple
               '#37A198', // green
               '#DA3637', //red
               '#F0AD4E' //yellow
             ];
// remove the box
  



function makeBoxes(howMany) {
  var colorAmt = colors.length;
  var currColor = 0;
  var myElement;
  var myNode = document.querySelector('.boxes');


  myNode.addEventListener('click', (e)=>{
          e.target.parentNode.removeChild(e.target);
    }, false);
  for (var i = 0; i < howMany; i++) {

    myElement = document.createElement('div');
    myElement.className = 'box';
    myElement.style = 'background-color:' + colors[currColor];
    myNode.appendChild(myElement);


 

    if (currColor === colorAmt-1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }
}

makeBoxes(20);