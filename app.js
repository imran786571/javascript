
// //======== chapter no 21-25 task no 1

// var fName = prompt("Please enter your first name: ");
// var lName = prompt("Please enter your last name: ");

// var fullName = fName + " " + lName;

// alert("Hello " + fullName);


// //===== chapter no 21-15 task no 2

// var mobName = prompt("Please enter your favorite Mobile phone modal: ");

// var stLength = mobName.length;

// document.write("My Favorite phone is: " + mobName +"<br />Length of string: " + stLength);

// //============chapter no 21-25 task no 3

// var pak = "Pakistani";
// var find = pak.indexOf("n");

// document.write("String: " +pak +"<br />Index of 'n': " + find);


// // ======chapter no 21-25 task no 4

// var stH = "Hello World";
// var lIndx = stH.lastIndexOf("l");

// document.write("String: " + stH + "<br />Last Index of 'l': " + lIndx);



// //===========chapter no 21-25 task no 5

// var stPak = "pakistani";

// var findIndex = stPak.charAt(3);

// document.write("String: " + stPak + "<br />Character at index 3: " + findIndex);


// //======= chapter no 21-25 task no 6

// var fName = prompt("Please enter your first name: ")
// var lName = prompt("Please enter your last name: ")

// var res = fName.concat(lName);

// document.write("Hello " + res);


// //======= CHAPTER no 21-25 task no 7

// var hyd = "Hyderabad";
// var res = hyd.replace("Hyder", "Islam");

// document.write("City: " + hyd + "<br />After replacement: " + res);



// // ===== chapter no 21-25 task no 8 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g, "&");

// document.write("Messge: " + message + "<br /><br /> after replace: " + res);


// //========== chapter no 21-25 task no 9

// var st = "472";

// var changeType = parseInt(st);

// document.write("Value: " + st + "<br />Type: " + typeof(st) + "<br />Value: " + changeType +"<br />Type: " + typeof(changeType));


// //===== chapter no 21-25 task no 10

// var userInput = prompt("Please enter any string: ");

// var changeUper = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br />Upper case: " + changeUper);


// //==========chapter no 21-25 task no 11
// var stringUser = prompt("Please enter any string : ");

// var titleCase = stringUser.charAt(0).toUpperCase();

// var re = stringUser.replace(stringUser.charAt(0), titleCase);

// document.write("User Input: " + stringUser + "<br />Title Case: " + re);


//==========chapter no 21-25 task no 12 

// var num = 35.36;
// var r = num.toString();
// r = r.replace(".", "");
// document.write("Number: " + num + "<br />Result: " + r);


// //======= chapter no 21-255 task no 13

// var userName = prompt("Please enter your username without special symbol")

// if(userName.match(/@/g) || userName.match(/,/g) || userName.match(/!/g) ) {
//     alert("Please enter a valid username");
// } else {
//     alert("username is: " + userName);
// }


// // ============ chapter no 21-25 task no 14
// var useerInput = prompt("Welcome to ABC Bakery What do you want to order sir/ma'am?");
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// var change = useerInput.toLowerCase();

// var ind = a.indexOf(change);

// if(a.indexOf(change) != -1) {
//     document.write(useerInput + " is <b>available</b> at index of " + ind + " in our bakery");
// } else{
//     document.write("We are sorry." + useerInput + " is <b>not available in our bakery");
// }



// //====== chapter no 21-25 task no 16

// var uni = "University of Karachi";
// var res = uni.split(" ");




// //=======chapter no 21-25 task no 17
// var txt = prompt("Please enter any string here: ");

// var strlength = txt.length;
// var last = txt.charAt(strlength - 1)
// document.write("User input: " + txt + "<br />Last character of input: " + last);


// //======chapte no 21-25 task no 18 

// var text = "The quick brown fox jumps over the lazy dog";
// var textChange = text.toLowerCase();

// var count = textChange.match(/the/g).length;

// document.write("Text: " + text +"<br /> The are " + count + " occurence(s) of word 'the'");



// //======== chapter no 26-30 task no 1

//  var positive = +prompt("Please enter positive integer: ");

//  if(positive < 1) {
//      alert("Please enter a positive number:")
//  } else {
     
//      var round = Math.round(positive);
//      var floor = Math.floor(positive);
//      var c = Math.ceil(positive);
    
//      document.write("number: " + positive + "<br />round off value: " + round +"<br />floor value: " + floor +"<br />Ceil value: " + c);
//  }



// //======== chapter no 26-30 task no 2

//  var negative = +prompt("Please enter negative integer: ");

//  if(negative > 1) {
//      alert("Please enter a negative number:")
//  } else {
     
//      var round = Math.round(negative);
//      var floor = Math.floor(negative);
//      var c = Math.ceil(negative);
    
//      document.write("number: " + negative + "<br />round off value: " + round +"<br />floor value: " + floor +"<br />Ceil value: " + c);
//  }



// //=======chapter no 26-30 task no 3

// var v = +prompt("Please enter a value here: ");

// var abso = Math.abs(v);

// document.write("The absolute value of " + v + " is " + abso);


// //======= chapter no 26-30 task no 4

// var n = Math.floor(Math.random() * 10); // return a random integer between 0 to 9;
// var n1 = Math.floor(Math.random() * 20); // return a random integer between 0 to 20;

// document.write("Random dice value: " + n + "<br /><br />Random dice value: " + n1);


// //====== chapter no 26-30 task no 5

// var num1 = Math.floor(Math.random() * 2) + 1;

// if(num1 === 1) {
//     document.write(num1 + "<br /><br />random coin value: Tails");
// } else {
    
//     document.write(num1 + "<br /><br />random coin value: Heads");
// }



// //==== chapter no 26-30 task no 6

// var rand = Math.floor(Math.random() * 100) + 1;

// document.write("random number between 1 and 100: " + rand);


// // ==========chapter no 26-30 task no 7

// var w = prompt("Enter your weight in kilograms");
// var r = w.slice(0, 1);
//     parseInt(r);
// var f = r + 8.3;

// document.write("The Weight of user is " + f + " Kilograms");



// //========= chapter 26-30 task no 8

// var secr = Math.floor(Math.random() * 10) + 1;
// var userValue = +prompt("Enter a number between 1 and 10");

// if(userValue === secr) {
//     alert("Congratulate you found the secret number: ");
// } else {
//     alert("Try again!");
// }



// //=== chapter no 31-34 task no 1

var rightNow = new Date();

// document.write(rightNow)

//======= chapter no 31-34 task no 2

// var theMonth = rightNow.getMonth();
// var month = ["January","February","March","April","May","June","July",
//               "August","September","October","November","December"];

// document.write("Current Month: " + month[theMonth]);

// //==== chapter no 31-34 task no 3

// var day = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentDay = rightNow.getDay();

// var res = day[currentDay].substring(0, 3);

// document.write("Today is " + res);


// //========chapter no 31-34 task no 4


// var day = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var today = rightNow.getDay();

// if(day[today] === "sunday" || day[today] === "Saturday") {
//     document.write("It's Fun day ");
// } else{
//     document.write("Today is not Fun day")
// }

// //======== chapter no 31-34 task no 5

// // var dt = new Date();

// if(new Date() > 16) {
//     alert("First fifteen days of the month")
// } else  {
//     alert("Last days of the month");
// }



//=======chapter no 31-34 task no 6

// var currentDate = new Date();
// var  mili = currentDate.getTime();

// var getmili = currentDate.getTime();

// console.log(getmili);

// document.write("Current Date: " + currentDate
//                 + "<br />Elapsed milliseconds since January 1, 1970: " + mili);



// //========== chapter no 31-34 task no 7

// var td = new Date();

// var hour = td.getHours();
// console.log(hour)

// if(hour >= 11) {
//     alert("It's PM");
// } else {
//     alert("It's AM");
// }


// //====== chapter no 31-34 task no 8

// var laterDate = new Date("Dec 31, 2020");

// document.write("Later date: " + laterDate);





// ========== chapter no 31-34 task no 10

// var td = new Date("Dec 05 2015");

// var td1 = new Date("Jan 01, 2015");

// var st = td1.getSeconds();
// var st1 = td.getSeconds();

// var Result = st - st1;
// console.log(Result);



// //========== chapter no 31-34 task no 14

// var cusName = "ABC Customer";
// var mt = "February";
// var units = 410;
// var chargesUnit = 16;
// var letPay = 350;

// var netAmount = units * chargesUnit;
// var grossAmount = netAmount + letPay;

// document.write("<h1>K-Electric Bill</h1><br /><br />"
//                 + "Customer Name: " + cusName.bold()
//                 + "<br />Month: " + mt.bold()
//                 + "<br />Number of units: <b>" + units +"</b><br />"
//                 + "Charges per unit: <b>" + chargesUnit + "</b><br />" 
//                 + "<br /><br />Net Amount Payable(within Due Date): <b>" +netAmount +"</b><br />"  
//                 +"Late payment surcharges: <b>" + letPay +"</b><br />"
//                 + "Gross Amount Payable(after Due Date): <b>" + grossAmount +"</b>")



// //========= chapter no 35-38 task no 1

// function currentDate() {
//     var dt = new Date();
//     document.write(dt);
// }

// // function call 
// currentDate();

// //======== chapter no 35-38 task no 2 

// function greet(f, l) {
//     alert("Hello " + f + " " + l);
// }

// var first = prompt("Please enter you first name: ")
// var last = prompt("Please enter you last name: ")

// greet(first, last);

// //========chapter no 35-38 task no 3

// function ad(n1, n2) {
//    return  n1 + n2;
// }

// var s1 = +prompt("Please enter first number here: ");
// var s2 = +prompt("Please enter second number here: ");
// document.write("first number: " + s1 + "<br /> second number: " + s2+ "<br />add: " + ad(s1,s2));

// //========chapter no 35-38 task no 4

// function calculator(n1, n2, op) {
//     if(op === "+") {
//         var add = n1 + n2;
//     return alert("first number: " + n1 +"\nsecond number: " + n2 +"\nOperator : " + op+ "\nResult: " + add);
//     } else if(op === "-") {
//         var minus = n1 - n2;
//     return alert("first number: " + n1 +"\nsecond number: " + n2 +"\nOperator : " + op+ "\nResult: " + minus);
//     } else if(op === "*") {
//         var multi = n1 * n2;
//     return alert("first number: " + n1 +"\nsecond number: " + n2 +"\nOperator : " + op+ "\nResult: " + multi);
//     } else if (op === "/") {
//         var divide = n1 / n2;
//     return alert("first number: " + n1 +"\nsecond number: " + n2 +"\nOperator : " + op+ "\nResult: " + divide);
//     } else if(op === "%") {
//         var mud = n1 % n2;
//     return alert("first number: " + n1 +"\nsecond number: " + n2 +"\nOperator : " + op+ "\nResult: " + mud);
//     } else {
//         return alert("Please enter a valid Operator :");
//     }
// }

// var number1 = +prompt("Please enter first number here: ");
// var number2 = +prompt("Please enter second number here: ");
// var opera = prompt("Please enter operator number here:(+ / * % -) ");

// calculator(number1, number2, opera);


// // =========chapter no  35-38 task no 5

// function sumOfNum(s) {
//     var nn
//     for(var i = 1; i <= s; i++) {
//         var sum = 0;
//          var nn = i * i;
//          sum = nn;
//     }
//     document.write("The sum of sqaures for numbers up to and including " + s + " is " + sum)
// }

// var sq = 5;
// sumOfNum(sq)


// // ========= chapter no 35-38 task no 6

// function factorialNum(n) {
//     var ans = 1;
//     if(n === 0 || n === 1) {
//         return ans;
//     } else {
//         for(var i = n; i >=1; i--) {
//             ans = ans * i;
//         }
//         return ans;
//     }
// }


// var num = +prompt("Please enter a number for factorial: ");

// var finalResult = factorialNum(num);

// document.write("The Factorial of " + num + " is " + finalResult);



//======= chapters no 35-38 task no 7

// var lastNum = 0;
// function find(n) {
//     return n.charAt(0);
// }

// function findLast(n) {
//     return n % 10;
// }



// var np = prompt("Enter number here: ");

//  var res = find(np)
//  var res1 = findLast(np)
 
//  console.log("first num is: " + res)
//  console.log("last num is: " + res1)

//  for(var i = res; i <= res1; i++) {
//     document.write(i +"<br")
// }

// //===== chaapter no 35-38 task no 7

// var first = +prompt("Enter first number here: ");
// var last = +prompt("Enter last number here ");


// function counting(n1, n2) {
//     for(var i = n1; i <= n2; i++) {
//         document.write(i + "<br />");
//     }
// }

// counting(first, last);

// //===== chapter no 35-38 task no 9

// function area(w, h) {
//     return w * h;
// }

// var n1 = 12; 
// var n2 = 10;

// // pass by variable 
//  var res = area(n1, n2)
 
//  document.write("The Area of your rectangle is: " + res + "<br /><br /><br />");

//  // pass by value 
//  var r = area(34, 12);

//  document.write("the are of your rectangle is: " + r);



// //=== chapter no 35-38 task no 10

// function palindrome(s) {
//     var n ;
//     n = s.split('').reverse().join('')

//     if( s === n) {
//      return alert("The String is palindrome")
//     } else {
//         return alert("The Strinng is not palindrome")
//     }
    
// }

// var st = prompt("Please enter any string")

// palindrome(st)

// //=========== chapter no 35-38 task no 11



// //capitalize_Words 
// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// var st = prompt("Please enter any string here: ");

// var res = capitalize_Words(st);
 
// document.write("You Enter String : " + st +"<br /><br />UpperCase : " + res);


// // =========== chapter no 35-38 task no 12


// function findST(s) {
//     var array1 = s.match(/\w[a-z]{0,}/gi);
//     var res = array1[0];

//     for(var i = 1; i < array1.length; i++) {
//         if(res.length < array1[i].length) {
//             res = array1[i];
//         }
//     }

//     return res;
// }

// var userST = prompt("Please enter any string here: ");

// var n = findST(userST);

// document.write("You Enter String: " + userST +"<br /><br />longest string is: " + n);


// //========= chapter no 35-38 task no 13

// function countSTL(str, letter) {
//     var count_let = 0;
//     for(var i = 0; i < str.length; i++) {
//         if(str.charAt(i) === letter) {
//             count_let += 1
//         }
//     }

//     return count_let;
// }

// r = countSTL("JSResourceS.com", 'o');

// document.write("count the num of occurrences o: string: JSResources.com is : " + r)



