var a = 25;
a= a-13;
console.log(a/2);
a = "hello";
console.log(a + " hello");

for(var i = 0; i<10; i++) {
    console.log(i);
    i= i + 3;
}

console.log("outside of the loop " + i);

function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];

    for(var i = 0; i<arrayOfNumbers.length; i++) {
        sum+= arrayOfNumbers[i];
        console.log("the current sum is: " + sum)
    }
    
    console.log("the total is: " + sum);
}

getTotal([1,3,5]);

var arr = [4,5,6,1,9,4,8,7];

getTotal(arr);

var isTired = true;
var hoursSlept = 7;
var isHungry = false;
var whatToDo = "Just woke up.. I should ";

if (isTired) {
    whatToDo += "make sure I get a good sleep tonight, ";
}

if (hoursSlept <= 8) {
    whatToDo += "drink some great Coffee, ";
}

if(isHungry) {
    whatToDo += " make some eggs,";
}

whatToDo += "and prepare myself for a great day!";

console.log(whatToDo);


for (var x = 0; x>0; x --) {
    if (x != 2) { // if x is not equal to 2 then it is true
        console.log(x);
    }
    else {
        console.log("ignitions!");
    }
}

console.log("liftoff!");

var countPositives = 0;
var numbers = [3,4,-2,7,16,-8,0];

for(var y = 0; y < numbers.length; y ++) {
    if (y % 2 == 0) {
        countPositives += 1;
    }
}

console.log("there are " + countPositives + " positive values");