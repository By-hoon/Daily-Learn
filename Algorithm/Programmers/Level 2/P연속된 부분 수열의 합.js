function solution(sequence, k) {
  let answer = [];
  let start = 0;
  let last = 0;
  let sum = sequence[0];
  while (start !== sequence.length && last !== sequence.length) {
    if (sequence[last] === k) {
      answer = [last, last];
      break;
    }
    if (sum === k) {
      answer = compareIndex(answer, [start, last]);
      sum -= sequence[start];
      start++;
      last++;
      sum += sequence[last];
      continue;
    }
    if (sum > k) {
      sum -= sequence[start];
      start++;
    }
    if (sum < k) {
      last++;
      sum += sequence[last];
    }
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
