// iterative factorial
let fact = 1;
for (let i = 6; i >=1; i--){
    fact *= i;
}
console.log(fact);

// recursive factorial
function factorial(n){
    if (n == 1){
        return 1;
    }

    return factorial(n-1) * n;
}
console.log(factorial(6));