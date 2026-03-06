//let a = 10;
//console.log(a++ + a);// a++ is post-increment, so it will return the value of a before incrementing. Therefore, the expression will be evaluated as 10 + 11, resulting in 21. After this line, a will be incremented to 11.
//console.log(a); // 11, because a was incremented in the previous line.
let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;
console.log(b);
console.log(a);
console.log(c);
