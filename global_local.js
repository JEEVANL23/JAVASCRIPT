// global varible

var a = "global variable";
myfun(a);
function myfun(a) {

    a+= ' world';
    console.log(a);     // this prints out local variable within function
    
    var helo = 'helloo new';
}

console.log(a); // this prints out global variable


// console.log(helo);       this will give an error because c is local variable



