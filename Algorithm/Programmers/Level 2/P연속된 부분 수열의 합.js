function solution(sequence, k) {
  let answer = [];
  let start = 0;
  let last = 0;
  while (start !== sequence.length && last !== sequence.length) {
    if (sequence[last] === k) {
      answer = [last, last];
      break;
    }
    let sum = 0;
    for (let i = start; i <= last; i++) {
      sum += sequence[i];
    }
    if (sum === k) {
      answer = compareIndex(answer, [start, last]);
      start++;
      last++;
      continue;
    }
    if (sum > k) start++;
    if (sum < k) last++;
  }
  return answer;
}

const compareIndex = (answer, newAnswer) => {
  if (answer.length === 0) return newAnswer;

  const indexGapOfAnswer = answer[1] - answer[0];
  const indexGapOfNewAnswer = newAnswer[1] - newAnswer[0];

  if (indexGapOfAnswer === indexGapOfNewAnswer) return answer;

  return indexGapOfAnswer > indexGapOfNewAnswer ? newAnswer : answer;
};
