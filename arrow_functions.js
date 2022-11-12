const integers = [1,2,3];   // map - it traverse through every single elementof the array and will update what we want in the return value

/*const updated_integer = integers.map(function(number){  // number is the current element that being loop thorugh

    return number+=1;   // this is explicit return - specifying 
    

});
*/

const updated_integer = integers.map(number => number+=1); // implicit return // number is the current element that being loop thorugh

console.log(updated_integer);