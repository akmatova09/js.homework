
function myMax(myArr) {
    return Math.max.apply(null, myArr);
}

let a = myMax([11, 12 , 29, 17, 19, 0, 7, 18]);
console.log(a);