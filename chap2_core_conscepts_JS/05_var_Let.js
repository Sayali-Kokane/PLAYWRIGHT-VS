//Variable declaration using var
var a = 10;
console.log(a); // Output: 10
//def of function
function test() 
{
    console.log("hello");
    var a = 20;//local variable
    console.log(a); // Output: 20
    if (true)
    {
        var a = 30;
        console.log(a); // Output: 30
    }
    console.log("within function", a);
}
//calling the function
test()

//Let keyword- Block scope variable
let b = 40;//global variable
console.log(b); // Output: 40
function test1(){
    let b = 50;
    console.log(b); // Output:50
    if(true)
    {
        let b = 60;
        console.log(b); // Output:60
    }
    console.log("let",b); // Output:50
}
test1()