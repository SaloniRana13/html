// primitive datatypes
//string, number, boolean, null, undefined
var str = "javascript basics";
console.log(str);
var num = 100;
console.log(num);
var isVisible = false;//true/false
console.log(isVisible);

//arithmetic operations
var x = 10;
var y = 5;
var z = 3;
console.log('addition', x+y);
console.log('subtraction', x-y);
console.log('multiplication', x*y);
console.log('divide', x/y);
console.log('remainder', x%z);
console.log('increasebyone', ++x);
console.log('decreasebyone',--x)

//Problem of 5 sons are earning different amount, now add and divide this amount equally
var son1 = 10;
var son2 = 20;
var son3 = 30;
var son4 = 40;
var son5 = 50;
var numberOfsons = 5;
var total = son1+son2+son3+son4+son5;
var incomeForEveryone = total/numberOfsons;
console.log('incomeForEveryone',incomeForEveryone);

// Assignment Operators
// x = x + y;
x += y;
console.log('+ assigment operator',x);

// x = x - y;
x -= y;
console.log('- assigment operator',x);

console.log('less than or equal to ', x <= y);
console.log('greater than or equal to ', x >= y);
console.log('not equal to ', x != y);
console.log('equal to ', x == y);//===

// Logical operators &&, ||, !
//true && false = false;true && true = true; false && false = false;
console.log(x > 5 && y > z && z > x);
//true || false = true;
console.log(x > 5 || y > z || z > x);
console.log(!(x > 5 && y > z && z > x));

// conditional statements(if, else, else if)
// if(condition) {
//     segment of code
// }
var num = -1;
if(num > -1) {
    console.log('number is positive');
}else {
    console.log('number is negative');
}

// ques: is num equal to 10 or greater than 10 or less than 10
var num1 = 10;
if(num1 == 10) {
    console.log('number is equal to 10');
}else if(num1 > 10) {
    console.log('number is greater than 10');
}else if(num1 < 10) {
    console.log('number is less than 10');
}else{
    console.log('this is not a valid number');
}

// quest: Log the student grade according to these condition: above 90 is first grade, between 80 and 90 is second and between 75 and 80 is third grade. in case of less than 75 log "I don't believe in grade system"

// ques: tell me which number is greatest
var num1 = 20;
var num2 = 10;

// ques: tell me which number is greatest
var num1 = 10;
var num2 = 20;
var num3 = 15;

// ques: is withinRange
var start = 75;
var end = 100;
var num = 60;

// ques: if number odd/even
var num = 20;

// ques: is number divisible by 3 or 5 or 3 & 5 both