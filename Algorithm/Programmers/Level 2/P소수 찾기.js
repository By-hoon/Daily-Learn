function solution(numbers) {
  const newNumbers = numbers.split("");
  const answer = new Set();
  getPermutation(answer, newNumbers, "");
  return answer.size;
}

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPermutation = (answer, numbers, fixedNumber) => {
  if (numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      const temp = [...numbers];
      temp.splice(i, 1);

      if (isPrime(parseInt(fixedNumber + numbers[i]))) {
        answer.add(parseInt(fixedNumber + numbers[i]));
      }
      getPermutation(answer, temp, fixedNumber + numbers[i]);
    }
  }
};
