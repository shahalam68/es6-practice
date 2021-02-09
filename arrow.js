// function doubleIt(num){
//     return num*2;
// }



// const doubleIt = function myFun(num){
//     return num * 2;
// }


const doubleIt = num => num * 2; 
const add =(x, y) => x + y;

const domath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const result2 =domath(7,5);
console.log(result2);
const result = add(50,70);
console.log(result);
