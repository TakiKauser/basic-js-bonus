// iterative fibonacci
const fibo = [0, 1];
for(let i = 2; i <= 6; i++){
    // fibo[2] = fibo[1] + fibo[0];
    // fibo[3] = fibo[2] + fibo[1];
    // fibo[4] = fibo[3] + fibo[2];
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// recursive fibonacci
function fibonacci(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6));