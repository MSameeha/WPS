var counterText = 0;

var counterRadioButton = 0;

var counterCheckBox = 0;

var counterTextArea = 0;

var counter = 0;
function addAllInputs(divName, inputType){

     var newdiv = document.createElement('div');

     switch(inputType) {

          case 'text':

               newdiv.innerHTML = "Entry " +(counterText+1)+" <input type='text' name='myInputs[]'><br>";

               counterText++;

               break;

          case 'radio':newdiv.innerHTML = "Entry " +(counterRadioButton+1)+" <input type='radio' name='myRadioButtons[]'>";

          counterRadioButton++;

          break;

     case 'checkbox':

          newdiv.innerHTML = "Entry "+(counterCheckBox+1)+" <input type='checkbox' name='myCheckBoxes[]'>";

          counterCheckBox++;

          break;

     case 'textarea':

        newdiv.innerHTML = "Entry "+(counterTextArea+1)+" <textarea name='myTextAreas[]'>type here...</textarea>";

            counterTextArea++;

            break;
       }

  document.getElementById(divName).appendChild(newdiv);
}
function addSec(){
 var newdiv = document.createElement('div');

 var div = document.getElementById('dynamicInput').innerHTML;
 newdiv.innerHTML = document.getElementById('dynamicInput').innerHTML;
 document.body.appendChild(newdiv);

}