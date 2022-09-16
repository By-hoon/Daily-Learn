function solution(n, k) {
  let primes = [];
  const convert = n.toString(k);
  const indexs = [-1];
  if (convert.length === 1) {
    if (isPrime(Number(convert))) primes.push(convert);
  } else {
    for (let i = 0; i < convert.length; i++) {
      if (convert[i] == 0) indexs.push(i);
    }
    indexs.forEach((index, i) => {
      const number = convert.slice(index + 1, indexs[i + 1]);
      if (isPrime(Number(number))) primes.push(number);
    });
  }
  console.log(primes);
  return primes.length === 0 ? -1 : primes.length;
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

solution(437674, 3);
