let a = [];
let b = [];

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        a.push(i);
    } else if (i % 4 === 0){
        b.push(i);
    }
}

console.log(a);
console.log(b);