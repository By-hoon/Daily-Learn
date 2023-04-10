function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const nextNumber = numbers[j];
      if (currentNumber < nextNumber) {
        answer.push(nextNumber);
        break;
      }
      if (j === numbers.length - 1) answer.push(-1);
    }
  }
  answer.push(-1);
  return answer;
}
