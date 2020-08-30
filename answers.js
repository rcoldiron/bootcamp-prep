
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
            continue;
        }
        else {
          console.log(i);
        }
    }
}

//Printing Integars with while
var num = 2000;
while(num <= 5280) {
    console.log(num);
    num += 1;
}


    
