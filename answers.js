
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
