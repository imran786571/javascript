

// chapter No 1 Assignment Solution

//Question NO 1

//1. Write a script to greet your website visitor using JS alert box.
//2. Write a script to display following message on your web page: ANS: 1

// alert("Error! Please enter a valid password");


//Question NO: 3

//alert("Welcome to JS Land... \n Happy Coding!");

//Question NO: 4


// Question NO: 5

//alert("Welcome to JS Land..");
//alert("Happy Coding! \n Prevent this page from creating additional dialogs.");

// Question NO: 5 console code

//alert("Hello... I can run JS through my web brower's console");


// chapter NO 2:
//Question NO 1:

var username;
//Question NO 2:
var myName = "Imran Shah";

// Question NO 3:
// a;
var message;

//b
message = "Hello World";
//alert(message);


// Question NO 4:

var nam = "Imran Shah";
var age = 20;
var eduction = "Certified Mobile Application Development";

//alert("Name: " + nam + "\nAge: " + age + "\neduction: " + eduction);

//Question NO: 5

var piz = "PIZZA \n PIZZ \n PIZ \n PI \n P"

//alert(piz);

//Question NO: 6

var email = "im.shah991@gmail.com";

//alert("My email address is " + email);

//Question NO: 7
var book = "A smarter way to learn JavaScript";

//alert("i am tring to learn from the Book " + book);

// Question NO: 8
//document.write("Yah! I can write HTML content through JavaScript");


//Question NO 9
var storData = "---------ஜ۩۞۩ஜ---------";
//alert(storData);


// chatper NO: 3

//Question NO  1

var age = 20;
//alert("I am " + age + " years old");

//Question NO 2
var visit = 14;

//alert("You have visited site " + visit + " tiems")

//Question NO 3
var birthYear = 1991;

//document.write("My birth year is " + birthYear + "<br/>" + "Data type of my ddclared variable is number:")

//Question NO 4
var visiterName = "Imran shah";
var productTitle = "T-shirt(s)";
var quantity = "5";

//document.write(visiterName.bold() + " ordered " + quantity.bold() +" " + productTitle.bold() + "on XYZ Clothing soter");


//chapter NO 4;

var  head = "Rules for naming JS variables";
var num = "numbers,";
var  desh = "_";
var doler = "$";
var le = "letter";
var sen = "sensitive";
var key = "keywords";
var space = " ";

//document.writeln(head.bold() + "<br /><br /><br />");

//document.writeln("Variable names can only contain. " + num +space + doler + " and " +desh +" .For example <b>$my_1stVariable</b>");
//document.writeln("<br />Variable must begin with a letter, " +doler +" or " + desh + " For example <b>$name, _name or name</b>");
//document.writeln("<br /> Variable names are case " + sen.bold());
//document.writeln("<br />Variable names should not be JS " + key.bold());

// chatper NO: 05 
//Question NO: 1

var num1 = 3;
var num2 = 5;

var add = num1 + num2;
var sub = num2 - num1;
var multi = num1 * num2;
var div = num1 / num2;
var mud = num1 % num2;

//document.write("Sum Of " + num1 + " and " + num2 + " is " + add);
//document.write("<br />Subtraction Of " + num2 + " and " + num1 + " is " + sub);
//document.write("<br />Multiplication Of " + num1 + " and " + num2 + " is " + multi);
//document.write("<br />Division Of " + num1 + " and " + num2 + " is " +div);
//document.write("<br />Modulus Of " + num1  +" and " + num2 + " is " + mud);

// Question NO: 03 

 // a
 var myVariable ;
 //document.write("Value after variable declaration is: " + myVariable + "<br />");
 // b 
 myVariable = 5;
 //document.write("Initial value: " + myVariable + "<br />");


 //e 
 myVariable = myVariable + 1;
 //document.write("Value after increment is: " + myVariable);

 //g 
 myVariable = myVariable + 7;

 //document.write("<br />Value after addition is: " + myVariable + "<br />");

 //i 
 myVariable = myVariable - 1;
// document.write("Value after decrement is: " + myVariable + "<br />")

 //j 
 myVariable = myVariable % 3;
 //document.write("The remainder is : " + myVariable);

 //Question NO: 04
 var ticket = 600;

 var buyTicket = ticket * 5;

 //document.write("Total cost to buy 5 tickets to a movies is " + buyTicket +"PKR");

 //Question NO: 05
 var table = 4;

 //document.write("Table of " + table + "<br />")
 //for(var i = 1; i <= 10; i++) {
   //  document.write(table + " x " + i + " = " +table * i + "<br />");
 //}

 //Question NO: 06

 var c = 25;
 var f = 70;

//convert it to fehrenhit
var f2 = (c * 9 / 5) +32;
//document.write(c + "<sup>o</sup>C is "+ f2 + "<sup>o</sup>F" + "<br />")

 //convert it to celsius
 var c2 = (f - 32) * 5 /9;
//document.write(f + "<sup>o</sup>F is " + c2 + "<sup>o</sup>C")

//question no: 07

var price1 = 650;
var price2 = 100;

var qItem1 = 3;
var qItem2 = 7;
var shipingCharge = 100;

var result = price1 * qItem1 + price2 * qItem2 + shipingCharge;
//document.write("Price of item 1 is " + price1 +"<br />" +"Quantity of item 1 is " + qItem1 +"<br />" 
  //              + "Price of item 2 is " +price2 +"<br />" + "Quantity of item 2 is " + qItem2 +"<br />"
    //            + "Shipping Charges " + shipingCharge +"<br /><br />");
//document.write("Total Cost of your order is " + result);


//question no 08
var totalMarks = 980;
var obtainMarks = 804;

var percent = (obtainMarks / totalMarks) * 100;
//document.write("Total Marks: " +totalMarks + "<br />" + "Marks obtained: " 
  //              +obtainMarks +"<br />" + "Percentage: " + percent+"%");

//question no 09
var usDollar = 10;
var saudiRiyals = 25;

//var final = usDollar * 104.80 + saudiRiyals * 28; 
//document.write("Total Currency in PKR: " + final);

//question no 10

var n = 2;

n = (n + 5) *10 / 2;
//alert(n);

// question no 11
var cYear = 2020;
var bYear = 1994;

var yAge = cYear - bYear;

//document.write("Current Year: " + cYear +"<br />" + "Birth Year: " + bYear +"<br />" +"Your Age is: " + yAge);

// question no 12;

var r = 20;

// math PI 
var r1 = Math.PI * r * r;

// math round
var r2 = (Math.round(Math.PI * r * r * 100) / 100);

//document.write("Redius of a circle: " + r +"<br />"
  //              + "The circumference is: " + r1 + "<br />"
    //            + "The area is: " + r2);

//question no 13;

var fSnack = "chocolate chip";
var curAge = 15;
var maxAge = 65;
var amountPday = 3;

var totalc = (maxAge - curAge) * amountPday ;

//document.write("Favorite Snack: " + fSnack
  //              + "<br />" + "Current age: " + curAge
    //            + "<br />" +"Esitmated Maximum Age: " + maxAge
      //          + "<br />" +"Amount of snacks per day: " + amountPday
        //        + "<br />" +"You will need " + totalc + " chocolate chip to last you until the ripe old age of "+ maxAge);


// chapter no 6-9 question no 1;

//var n = +prompt("Enter your number ", 10 );

//document.write("Result: " +"<br />" + "The value of n is: " + n +"<br />.................................");
//n = ++n;
//document.write("<br /><br />The value of ++n is: " + n
//                + "<br />Now the value of n is: " + n + "<br /><br /><br /><br />");
//n = n++
//document.write("The value of n++ is: " + n +"<br />"
  //              +"Now the value of n is: " + n +"<br /><br /><br />");

//n = --n;
//document.write("The value of --n is: " + n 
  //              + "<br />Now the value of n is: " + n +"<br /><br /><br />")

//n = n--;
//document.write("The value of n-- is: " + n 
  //              + "<br />Now the value of n is: " + n )


  //qeustion no 2;

 // var a = 2; 
  //var b = 1;
  //var res = --a - --b + ++b + b--;

  //document.write("a is: "+ a + "<br /> b is: " + b + "<br />result is: " +res);

  //quesiton 3;
  //var userInput = prompt("Please enter your name: ");
  //alert("Great : " + userInput);

// question no 5;
//var usertableNo = +prompt("Please enter a number here: ", 5);

//if(usertableNo === 5) {
  //document.write("<br />table for by default number is: " +usertableNo +"<br /><br/>");
//} else {
  //document.write("You have enter a number: " +usertableNo +"<br /><br />")
//}
//for(var i =1; i <= 10; i++) {
  //document.write(usertableNo + " x " + i + " = " + usertableNo * i +"<br />");
//}

//question no 6;

// var sub1 = prompt("Please enter first subject name: ");
// var sub2 = prompt("Please enter second subject name: ");
// var sub3 = prompt("Please enter third subject name: ");

// var tMakrs = 100;

// var ob1 = +prompt("Please enter your obtain marks for first subject: ");
// var ob2 = +prompt("Please enter your obtain marks for second subject: ");
// var ob3 = +prompt("Please enter your obtain marks for third subject: ");

// document.getElementById("sub1").innerHTML = sub1;
// document.getElementById("sub2").innerHTML = sub2;
// document.getElementById("sub3").innerHTML = sub3;


// chapter no 9 - 11

// qestion no: 1

// var city = prompt("Please enter city name: ('Hint enter city name: karachi')")

// var changeName = city.toLowerCase();

// if (changeName === "karachi") {
//   alert("Welcome to city of lights");
// }


// //qeustion no 2
// var gender = prompt("Please enter you gender: ");

// var genChange = gender.toLowerCase();

// if(genChange === "male") {
//   alert("Good Morning Sir:")
// } else if (genChange === "female") {
//   alert("Good Morning Ma'am.");
// } else {
//   alert("Please enter correct gender");
// }


// qeustion no 3

// var color = prompt("Please enter color of road traffic:");

// var cChange = color.toLowerCase();

// if(cChange === "red") {
//   alert("Must Stop");
// } else if(cChange === "yellow") {
//   alert("Ready to move");
// } else if(cChange === "green") {
//   alert("Move now");
// } else {
//   alert("Not a traffic signal color");
// }


//question no 4;

// var fuel = +prompt("Please enter remaining fuel: "); 
 
// if(fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }


// question no 5;
//a
// var a = 4;
// if(++a === 5) {
  // }
  
//b
//   var b = 82;
  
//   if(b++ === 83) {
//      alert("given condition for variable a is true");
// }

//c

// var c = 12;
// if(c++ === 13) {
//   alert("condition 1 is true")
// }

// if(c === 13) {
//   alert("condition 2 is true")
// }


// if(++c < 14) {
//   alert("condition 3 is true")
// }

// if (c === 14) {
//   alert("condition 4 is true");
// }

// d part start

// var materialCost  = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if(totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }


// e part start here

// if(true) {
//   alert(true);
// }

// if(false) {
//   alert(false);
// }

// f part start here 

// if("car" < "cat") {
//   alert("car is smaller than cat");
// }


// qeustion no 6;

// var obM = +prompt("Please enter your obtained marks: ");
// var totM = +prompt("Please enter your total marks: ");

// var pMark = (obM / totM) * 100;

// if(pMark >= 80) {
  
// document.write("<h1>Marks Sheet</h1><br /><br />")

// document.write("Total marks: " + totM
//                 + "<br />Marks Obtained: " + obM
//                 + "<br />Percentage: " +pMark +"%"
//                 +"<br />Grade: A-one"+ "<br />Remarks: Excellent");
// } else if(pMark >= 70) {
  
// document.write("<h1>Marks Sheet</h1><br /><br />")

// document.write("Total marks: " + totM
//                 + "<br />Marks Obtained: " + obM
//                 + "<br />Percentage: " +pMark +"%"
//                 +"<br />Grade: A"+ "<br />Remarks: Good");
// } else if(pMark >= 60) {
  
// document.write("<h1>Marks Sheet</h1><br /><br />")

// document.write("Total marks: " + totM
//                 + "<br />Marks Obtained: " + obM
//                 + "<br />Percentage: " +pMark +"%"
//                 +"<br />Grade: B"+ "<br />Remarks: You need to improve");
// } else {
  
// document.write("<h1>Marks Sheet</h1><br /><br />")

// document.write("Total marks: " + totM
//                 + "<br />Marks Obtained: " + obM
//                 + "<br />Percentage: " +pMark +"%"
//                 +"<br />Grade: fail"+ "<br />Remarks: Sorry");
// }


//question no 7

// var gues = 8;

// var usProm = +prompt("Enter number from 1 to 10");

// if(usProm === gues) {
//   alert("Bingo! Correct answer");
// } else if(usProm === 7 || usProm === 9) {
//   alert("Close enough to the correct answer");
// }else if (usProm < 1 || usProm >10) {
//   alert("Please enter number between 1 to 10")
// } else {
//   alert(" try again!")
// }


// question no 8;

// var nDivide = +prompt("Enter number for checking divide by 3 or not:");

// if(nDivide % 3 === 0) {
//   alert("The given number is divide by 3");
// } else {
//   alert("The given number is not divide by 3");
// }


// question no 9

// var evenNum = +prompt("Please enter any number for checking even or odd!");

// if(evenNum % 2 ===0) {
//   alert("The number is even");
// } else {
//   alert("The number is odd");
// }


// question no 10

// var t = +prompt("Please enter temperature");

// if(t > 40) {
//   alert("It is too hot outside");
// } else if(t >30) {
//   alert("The Weather today is Normal.");
// } else if(t >20) {
//   alert("Today's Weather is cool.");
// } else if(t > 10) {
//   alert("OMG! Today's weather is so cool.");
// } else {
//   alert("tyr again")
// }

// question no 11

// var number1 = +prompt("Please enter first number")
// var number2= +prompt("Please enter second number")
// var operator = prompt("Please enter operator here");

// if(operator === "+") {
//   var add = number1 + number2;
//   alert("number1 is: " + number1 
//          +"\nnumber2 is: " + number2
//          +"\nadd: " + add);
// }

// if(operator === "-") {
//   var minus = number1 - number2;
//   alert("number1 is: " + number1 
//          +"\nnumber2 is: " + number2
//          +"\nminus: " + minus);
// }

// if(operator === "*") {
//   var multiply = number1 * number2;
//   alert("number1 is: " + number1 
//          +"\nnumber2 is: " + number2
//          +"\nmultiplication: " + multiply);
// } else if(operator === "/") {
//   var divi = number1 / number2;
//   alert("number1 is: " + number1 
//          +"\nnumber2 is: " + number2
//          +"\ndivided: " + divi);
// }else if(operator === "%") {
//   var moduls = number1 % number2;
//   alert("number1 is: " + number1 
//          +"\nnumber2 is: " + number2
//          +"\nmodules: " + moduls);
// } else {
//   alert("please enter correct operator!");
// }


// === chapter no 12-13 takes no 2 

// var n1 = +prompt("Enter first number here");
// var n2 = +prompt("Enter second number here");

// if( n1 === n2) {
//   alert("the enter number is equals");
// } else if( n1 > n2) {
//   alert("The Number1 is larger then Number2");
// } else if (n2 > n1) {
//   alert("The Number2 is larger than Number1");
// } else {
//   alert("Please enter correct number:")
// }


// ======= chapter no 12-13 === task no 3

// var check = +prompt("Please enter a number positive and negative");

// if(check < 0) {
//   alert("The number you have enter is negative")
// } else if ( check > 0) {
//   alert("The number you have enter is positive");
// } else {
//   alert("please enter correct number")
// }


// ===== chapter no 12-13 task no 4

// var vText = prompt("Please enter one string to check for vowels or not");
// var vChange = vText.toLowerCase();
// var vArray = ["a", "e", "i", "o", "u"];

// if(vArray.indexOf(vChange) !== -1) {
//   alert("true");
// } else {
//   alert("fasle");
// }


// ===== chapter no 12-13 taks no 5

// var psd = "imran123";
// var check1 = prompt("Please enter your password:");
// var verif = prompt("Please enter again password for verif:");

// if(check1 != "" && verif != null && verif != "" && check1 != null) {
//   if(psd === check1 && psd === verif) {
//     alert("Correct! The password you entered matches the original password");
//   } else {
//     alert("Incorrect password");
//   }

// } else {
//   alert("Please enter your password first!");
// }


// ===== chapter no 12-13 task no 6

// var greeting ;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   alert(greeting);
// } else {
//   greeting = "Good Evening";
//   alert(greeting);
// }

// ===== chapter no 12-13 task no 7

// var time = +prompt("Please enter 24 hours clock format time:");

// if(time === 1900) {
//   if(time >= 0000 && time === 1200) {
//     alert("Good Morning!")
//   } else if(time >= 1200 && time < 1700) {
//     alert("Good afternoon!")
//   } else if(time >= 1700 && time < 2100) {
//     alert("Good evening!")
//   } else if(time >= 2100 && time <= 2359) {
//     alert("Good night!");
//   }
// } else {
//   alert("not allowed for string!")
// }




// === chapter no 17-20 task no 3

// var i ;
// for(i = 1; i <= 10; i++ ) {
//   document.write(i +"<br />")
// }

// ===== chapter no 17-20 task no 4

// var tableNum = +prompt("Enter a number to show its multiplication table:");
// var tableLenth = +prompt("Enter length multiplication table:");

// document.write("Multiplication table of " + tableNum +"<br />Length " + tableLenth +"<br /><br />");

// for(var i = 1; i <= tableLenth; i++) {
//   document.write(tableNum + " x " + i + " = " + i * tableNum +"<br />");
// }


// ========= chapter no 17-20 task no 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br />");
// }

// document.write("<br />")

// for(var j = 0; j < fruits.length; j++) {
//   document.write("Element at index " + j + " is " + fruits[j] +"<br />");
// }


// chapter no 17-20 task no 6

// document.write("<h1>Counting:</h1> <br />");

// for(var i = 1; i <= 15; i++) {
//   document.write(i + ", ")
// }

// document.write("<h1> Reverse counting:</h1> <br />");
//  for(var i = 10; i >= 1; i--) {
//    document.write(i + ", ")
//  }

//   document.write("<h1>Even:</h1> <br />");
 
//   for( var i = 0; i <= 20; i++ ) {
//     if(i % 2 === 0) {
//       document.write(i + ", ");
//     }
//   }

//   document.write("<h1>Odd:</h1> <br />");
 
//   for( var i = 0; i <= 20; i++ ) {
//     if(i % 2 != 0) {
//       document.write(i + ", ");
//     }
//   }


//   document.write("<h1>Series:</h1> <br />");
 
//   for( var i = 2; i <= 20; i++ ) {
//     if(i % 2 === 0) {
//       document.write(i + "k, ");
//     }
//   }




//==== chapter no 17-20 task no 7

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userSearch = prompt("Welcome to ABC Bakery What do you want to order sir/ma'am?");
// var change = userSearch.toLowerCase();
// var ind = arr.indexOf(change);

// if(arr.indexOf(change) != -1) {
//    alert(userSearch + " is available at index " + ind + " in our bakery");
// }


// ==== chapter no 17-20 task no 8 

// var a = [24, 53, 78, 91, 12]
// var larger ;

// larger = Math.max.apply (null, a);

// document.write("Array items: ")

// for(var i = 0; i <a.length; i++) {
//   document.write(a[i] + ",")
// }

// document.write("<br />The largest number is " + larger)


// ==== chapter no 17-20 task no 9

// var s = [24, 53, 78, 91, 12]
// var smal ;

// smal = Math.min.apply (null, s);

// document.write("Array items: ")

// for(var i = 0; i <s.length; i++) {
//   document.write(s[i] + ",")
// }

// document.write("<br />The largest number is " + smal);


// === chapter no 17-20 task  no 10

var nm = 5;

for(var i = 1; i <= 20; i++) {
  document.write(nm * i + ", ")
}