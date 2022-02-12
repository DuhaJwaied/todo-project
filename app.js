var username = prompt ("What's your name?");
var gender = prompt("What's your gender? male /female only");

if(gender =="male")
{confirmedGender = "Mr."}
else 
{ confirmedGender=" "}


if(gender == "female")
{confirmedGender = "Mrs."}
else 
{ confirmedGender=" "}


var userAge = prompt("What's your age?")
if(userAge <= 0)
{
    alert("Age can't be less than or equal to zero!")
}

welcomeMessage = confirm("Skip message?");

if(welcomeMessage == false)
{
    alert("Hello "+confirmedGender +" "+username);
}







// var username = prompt ("type your name ")
// var gender = prompt ("type your gender")
// if( gender !=="male" && gender !=="female")

//    { gender = prompt ("type your gender again only male/female")
// }

// var age = prompt ("type your age")
// if( age <=0 )
// {alert("the age is incorrect please do it again")

//     var age = prompt ("type your age again")
// }

// var choice = confirm("Do you want ot see welcoming message??")

// if (choice == true)
// {
// if (  gender == "male" )
// {alert("wellcome Mr" + username ) }
// elseif ( gender == "female" )
//     {alert("wellcome" + username)}
// elseif 
// {alert ("wellcome " + username)}
// }

    
