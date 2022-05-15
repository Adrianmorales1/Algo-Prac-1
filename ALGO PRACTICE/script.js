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

//Print 1-255 

function print255() {
    for(var x = 1; x<=255; x++)
    console.log(x)
}

//print Ints and sum 0-255 

function printAndSum255() {
    sum = 0;
    for(var x = 0; x<=255; x++) {
        sum += x;
        console.log(x + " and the sum now is " + sum);

    }
}

//Find and Print Max 

function printMaxOfArray(arr) {
    max = arr[0];
    for(var x =0; x< arr.length; x++) {
        if (max <= arr[x])
        {
            max = arr[x];
        }
    }
    console.log(max);
}

var array = [0,3,4,5,9,2,3,4,5,7];

printMaxOfArray(array);

//array with odd from 1-255 

function returnOddsArray1To255() {
    var arr = [];
    for(var x = 0; x<=255; x++){
        if(x % 2 == 1) {
            arr.push(x);
        }
    }
    return arr;
}

//Greater than Y

function returnArrayCountGreaterThanY(arr,y) {
    var count = 0;
    for(var x = 0; x<arr.length; x++){
        if(arr[x] > y) {
            count += 1;
        }
    }
    return count;
}
console.log(array.length);
console.log(returnArrayCountGreaterThanY(array, 10))
console.log(returnArrayCountGreaterThanY(array, 5))
console.log(returnArrayCountGreaterThanY(array, 0))


//max, min,average 

function printMaxMinAverageVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var total= 0;
    for(var x = 0; x <arr.length; x++){
        total += arr[x];
        if(max < arr[x]) {
            max = arr[x];
        }
        if(min > arr[x]){
            min = arr[x];
        }
    }
    var aver = total / arr.length;

    console.log(max + " " + min + " " + aver);
}

printMaxMinAverageVals(array);

//iterate and print array 

function printArrayVals(arr) {
    for(var x= 0; x <arr.length; x++) {
        console.log(arr[x]);
    }
}

printArrayVals(array);