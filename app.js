`use strict`;

var username = prompt("What's your name?");
var gender = prompt("What's your gender? male /female only");

if (gender == "male") { confirmedGender = "Mr." }
else { confirmedGender = " " }


if (gender == "female") { confirmedGender = "Mrs." }
else { confirmedGender = " " }


var userAge = prompt("What's your age?")
if (userAge <= 0) {
    alert("Age can't be less than or equal to zero!")
}

welcomeMessage = confirm("Skip message?");

if (welcomeMessage == false) {
    alert("Hello " + confirmedGender + " " + username);
}




////////////////////////////////////////////////////////////////////
//task 6
var Arr = [];
alert("Quick Questionaie");
var Qone = prompt("Do you like our page style yes/no?");

checkAnswer(Qone);
var Qtwo = prompt("will you use the page again yes/no??");

checkAnswer(Qtwo);
var Qthree = prompt("is it better than befor??");

checkAnswer(Qthree);



function checkAnswer(answer) {

answer=answer.toLowerCase();

    if (answer == "yes"){ 
        answer = "yes" 
        Arr.push(answer);}
    else if (answer == "no") {
         answer = "No"
         Arr.push(answer); }
    else { 
        answer = "invaild" ;
        Arr.push(answer);
    }
console.log(answer);
 

  
   // return Arr;
}
function print ( Arr)
{for ( let i=0; i< Arr.length ;i++ )
{console.log(Arr[i])}
}
console.log(Arr);

print(Arr)


