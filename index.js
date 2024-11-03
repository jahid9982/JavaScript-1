1. // Free Drinks
var burger = 501;
if (burger > 500){
    console.log('free Coke')
}
else {
    console.log('Coke: 30tk')
};

2. // BMI Calculator and Health Category
var weight = 500;
var hight = 5.7;
var bmi = (weight / hight);
if (bmi < 18.5) {
    console.log('you are underweight')
}
else if (bmi >= 18.5 && bmi <=24.9) {
    console.log('you are normal')
}
else if (bmi >= 25 && bmi <= 29.9){
    console.log(' you are overweight')
}
else {
    console.log('you are obese')
};


// 3. Grade Calculator
var marks = 59;

if (marks >= 90 && marks <= 100){
    console.log('A')
}
else if (marks >=  80 && marks <= 89){
    console.log('-A')
}
else if (marks >=  70 && marks <= 79){
    console.log('B')
}
else if (marks >= 60 && marks <= 69){
    console.log('C')
}
else {console.log('fail')};


// 4.

var myResult = 79;
var friendResult = 22;

if(myResult > 80 ) {
    if (friendResult > 80){
        console.log(' go for a lunch')
    }
    if (friendResult >=60 && friendResult <80){
        console.log('good luck next time')
}
    if (friendResult >=40 && friendResult <60){
        console.log('message unseen')
}
    if (friendResult <40){
        console.log('block your friend')
}
}
else {console.log('go to home and sleep and act sad')};

// 5.
var num1 = 50;

var num2 = 49;
// var num12 = num1 * num2;

if (num1 * 2 == num1 + num2) {console.log (num1)}
else {console.log(num1 + num2)};

// 6. Ticket fare Calculator. First take a variable as money.

var age = 11;
var occupation = 'others'
var ticketPrice = "800 Tk"

if ( age < 10) {console.log('free')

}
else if ( occupation == 'students') {
     console.log('get a 50% discount')
    }
    else if ( age >=60){
        console.log('Gets a 15% Discount')
    }
    else{console.log (ticketPrice)};