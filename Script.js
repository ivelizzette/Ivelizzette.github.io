console.log('Hello from external');

//making Variables


//get name from promt and saves it in user variable
let user = prompt('Enter Name ');
//prints welcome message to console
console.log('Hello' + user);

//gets h1 element with id 'message'
let messageH1 = document.getElementById('message');
//edits text of h1 element
messageH1.innerHTML = ' Lovely ' + user;

let userColor = prompt('Enter color');
messageH1.style.color = userColor; 


let word = promt();
//assuming word statrt with consenant
//get first letter from word

//get word without first letter
let pigLatin = word.slice(1) +  word.chartAt(0) + 'ay'
//add first letter to end
//add ay to the end
Alert(pigLatin)