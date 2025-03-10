// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and set it to equal 'Dane.' 
// We then create a conditional statement which checks the value of 'name'. If 'name' were 'Mary',
//it would personally greet Mary. Otherwise (and in this case, where 'name' is 'Dane') it will console log 'How do you do?' 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We've declared two variables, one called 'secret' and another called 'code'. Code has been set to equal 123.
// We then have two conditional statements which check the value of 'code'. 
// If the value of 'code' is '123', it will console log 'super', and multiply the value of 'code' by two.
// If the value of 'code' is greater than 250, it will console log 'duper'. 
//
// UPDATE FOR RESUBMISSION: It will console log "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We've created three variables, a Boolean called 'isStudent' and two with numerical values, 'age' and 'zip'. 
// We then have a series of if/else statements based on these variables.  
//If ifStudent is true and the value of zip is greater than 8000, 'You're a student on the West Cost!' will be logged. 
//If ifStudent is false, or if age is less than 30, 'What are your hobbies?' will be logged.
//If ifStudent is true, 'Welcome to Prime' will be logged.
//In all other cases, 'How about the weather?' will be logged. 

//UPDATE FOR RESUBMISSION: It will console log "You're a student on the West Coast!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}

//FIX: the values of colorOne and colorTwo have been swapped from the instructions. 
It should read

let colorOne= 'blue';
let colorTwo = 'red';

//UPDATE FOR RESUBMISSION: The if statement should include a value for colorTwo as well as color one. 
//And maybe also an assignement for if mix = false? */

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

FIX: '||' will check for either condition to be true, not both -- in this case, we need &&. 

Should read 
if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
} 

(I'm also not sure time should be declared as a const in this case, since it might need to vary.)
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

// UPDATE FOR RESUBMISSION: ... Honestly didn't understand the wording of grader's correction, 
but rereading the question it looks like maybe the 'if' condition should actually be "if (minAge < age)"? 
*/

