
// Algorithm Book, pg. 16 assignments

//Setting & Swapping
var myNumber = 42;
var myName = "Roxanna";

var myNumber = myName;
console.log('Your number is now', myNumber); //swapped myNumber with myName

var myNumber = 42;
var myName = "Roxanna";

var myName = myNumber;
console.log("Your new name is now", myNumber); //swapped myName with myNumber


//Print -52 to 1066 
for (var num = -52; num < 1067; num = num + 1)
    console.log(num);
    
    
//Don't Worry, Be Happy
function beCheerful() {
    console.log("good morning!");
}

for( var num = 1; num < 99; num = num + 1) {
    beCheerful();
}

//Multiples of 3 but not all
for(var i=-300; i<=0; i++) {
    
    // check if i is evenly divisible by 3
    if(i%3==0) {
        // skip -3 and -6
        if(i === -3 || i === -6) {
            continue; //the continue tells it to skip these numbers
        }
        else {
          console.log(i); //now it can print the others in the loop
        }
    }
}

//Printing Integars with while
var num = 2000;
while(num <= 5280) {
    console.log(num);
    num += 1;
}

//You say it's your birthday
var month = 3;
var day = 23;
function birthdayCheck(A, B) {
  if((day === A && month === B) || (month === A && day === B)){
    console.log("How did you know?");
  }
  else {
    console.log("Just another day...");
 }

birthdayCheck(3,23); //Calls the function for testing

 //LeapYear
 
 function leapYear(year){
  if ((year%4 === 0) && (year%100 !== 0) || (year%400 ===0)){
    console.log("It's a leap year");
  }
  else {
    console.log("Not a leap year");
  }
}

leapYear(2020);
        
    
