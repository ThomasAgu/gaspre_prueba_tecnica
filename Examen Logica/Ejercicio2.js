function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
function primenumbers(n){
    const factors = []
    for(let i = 2; i < n; i++){
        while (n % i === 0 && isPrime(i)){
            factors.push(i);
            n /= i;
        }

        return factors
    }
}

//
console.log(primenumbers(120)) //eq false