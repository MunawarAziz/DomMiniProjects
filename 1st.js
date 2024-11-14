const closeto100 = (a,b) => (100 - a) < (100 - b) ? a : b;

console.log(closeto100(10,20))
console.log(closeto100(30,60))
console.log(closeto100(39,20))



// // que2 

// const countchars = (str, char) =>
//     str.split("").filter(ch => ch === char).length;
// const contains2to4 = (str, char) =>
//     countchars(str, char) >= 2 && countchars(str, char) <=4;






//how many evven number

const countEvennumber = (arr) =>
    arr.filter(num => num % 2 === 0).length
console.log(countEvennumber([2,3,4,5,6,7,8,9,0,12,45,67,896,544,67]));



const prtinEvennumber = (arr) =>
    arr.filter(num => num % 2  ===0)
console.log(printEvennumber([1,2,3,4,5,6,7,8,9,0,12,43,56,74,44,3346,45,3,5,6,7,77,8,88,]));



