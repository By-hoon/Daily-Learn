function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => -1);
  const selections = [];

  for (let i = 0; i < numbers.length; i++) {
    while (selections.length && numbers[selections[selections.length - 1]] < numbers[i]) {
      answer[selections.pop()] = numbers[i];
    }
    selections.push(i);
  }
  return answer;
}
