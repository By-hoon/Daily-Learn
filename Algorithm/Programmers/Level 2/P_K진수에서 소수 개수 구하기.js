function solution(n, k) {
  let primes = [];
  const convert = n.toString(k);
  const numbers = convert.split("0");
  numbers.forEach((number) => {
    if (isPrime(Number(number))) {
      primes.push(number);
    }
  });
  return !primes.length ? 0 : primes.length;
}

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number % 2 === 0) {
    return number === 2 ? true : false;
  }
  const sqrt = parseInt(Math.sqrt(number));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};
