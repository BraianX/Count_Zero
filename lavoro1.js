function countZero (array) {
    let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]===0){
        sum = sum + 1;  
    } 
}
return sum;
}
const zero = [1,3,5,0,22,0,12,0];
console.log(countZero(zero));

