/* variables are the container which are used to store some values in js. JS has 3 types of variables var, let and const. */



/* 1. Var (introduced in ES5 version of JS, can be redeclared and reassigned, function scoped, var are hoisted and declared with value (default)undefined) */

var a = 5; //variable is declared and initialized
console.log(a);

var a = 12; //variable can be redeclared in js
console.log(a);

//function scope property of var means var can be used anywhere inside the function where it is declared
function abc(){ //function declaration
    if(true){
        var a = 34;
    }
    console.log(a);
}
abc(); //function calling

//As in below var is declared inside block scope but var follows function scope, so it can be accessed from anywhere in whole program
{                               
    var b = "BhagatCodes";
}
console.log(b);

/*--------------------End of Var--------------------*/



/* 2. Let(introduced in ES6 version of JS, can not be redeclared but reassigned, block scoped, Let are also hoisted without initialization of default value and remains in temporal dead zone)*/

let c = 35;
console.log(c);

// let c = 21;  Let cant be redeclared but can be reassigned

c = 50; // c is a Let variable and can be reassigned with another value

//Block Scope
{
    let d = 'Code'; //Block scope means this 'd' can be used anywhere inside this block scope declared with these {}(curly braces)
}

/*--------------------End of Let--------------------*/



/* 3. Const(introduced in ES6 version of JS, cant be redeclared and reassigned, block scoped, same hoisting behaviour as Let variable)  */

const pi = 3.14; //this 'pi' value cant be redeclared and cant be reassigned with another value

//pi = 3.2(not possible because decalred with const keyword above)

/*--------------------End of const--------------------*/

/*--------------------Done with variables and constants--------------------- */