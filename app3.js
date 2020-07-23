
// ========== chapter no 38-42 task no 1

// function myFun(a, b) {
//     var res = Math.pow(a, b);
//     document.write("value of a is: " + a + "<br />Value of b is: " + b +"<br />Result is: " + res);
    
// }

// myFun(4,3);



// ============= chapter no 38-42 task no 2


// function checkYear() {
//     var getYear = +prompt("Please enter year", 2020);

//     if(0 === getYear % 4 && 0 != getYear %100 || 0 === getYear %400) {
//         alert("Year: " + getYear + " is a leap year")
//     } else {
        
//         alert("Year: " + getYear + " is not a leap year")
//     }  
// }
// checkYear()


//============ chapter no 38-42 task no 3
 

// var triangle = function first(a, b, c) {
//     var s = ( a + b + c) / 2

//     var a = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return a;
// }

// document.write(triangle(11, 9, 9));

//========== chapter no 38-42 task no 4


// var mk1 = +prompt("Please enter subject one marks: ", 65);
// var mk2 = +prompt("Please enter subject one marks: ", 50);
// var mk3 = +prompt("Please enter subject one marks: ", 70);
// var totalMakrs = 850;

// // average function start
// function aver() {
//     mk1 = (mk1 / totalMakrs) 
//     mk2 = (mk2 / totalMakrs) 
//     mk3 = (mk3 / totalMakrs) 
    
// }

// // percentage function 
// function percentage() {
//    mk1 =  mk1 * 100
//    mk2 = mk2 * 100
//    mk3 = mk3 * 100
// }

// // main function start 
// function resultMarks() {
//     //average function call
//     aver();
//     // percentage function call
//     percentage();
//     var n1 = mk1.toFixed(2)
//     var n2 = mk2.toFixed(2)
//     var n3 = mk3.toFixed(2)

//     document.write("Subject One: " + n1 +"%" +"<br />Subject Two: " + n2 +"%" + "<br />Subject Three: " + n3 +"%")
// }
// // main function call
// resultMarks()

//================ chapter no 38-42 task no 6




//============= chapter no 43-48 task no 1

// function show() {
//     alert("link is click");
// }

//============= chapter no 43-48 task no 2

// function alertShow() {
//     alert("Thanks for purchasing a phone from us");
// }


//============ chapter no 43-48 task no 3

// function deleRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }





//========= chapter no 43-48 task no 4

// function changeimg() {
//     document.getElementById("myImg").src = "second.jpg";
// }

// function changeOut() {
//     document.getElementById("myImg").src = "first.jpg";
// }

    

//========== chapter no 43-48 task no 5
// var hValue = 0;

// function inc() {
//    hValue++
//     document.getElementById("h").innerHTML = hValue;
// }

// function dec() {
//     hValue--;
//     document.getElementById("h").innerHTML = hValue;
// }



//============= chapter no 49-52 task no 1

// function formData() {
//     var fName = document.getElementById("first_name")
//     var lName = document.getElementById("last_name")
//     var email = document.getElementById("email")
//     var pwd = document.getElementById("password")
//     var confirmPwd = document.getElementById("password_confirmation")

//    console.log(document.getElementById("fname").innerHTML = fName);
// }


//======= chapter no 49-52 task no 2

// function readMore() {
//     var text = document.getElementById("hide");
//     var ahref = document.getElementById("aHref");
//     text.setAttribute("class", "display");
//     ahref.setAttribute("class", "n");
// }


//============ chapter no 58-67 task no 1

// var val = document.getElementById("main-content");
// console.log(val)

// var ch = val.children;
// // console.log(ch)

