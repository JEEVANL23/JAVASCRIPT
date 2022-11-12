const names = ['jeevan','kumar','sam'];
const morenames = ['adarsh','jaideep'];

console.log(names);     // prints the normal array

console.log(...names);      // removes the structure of the array

const allnames = [...names,'gio', ...morenames];        // instead of concatenation 
console.log(allnames);
