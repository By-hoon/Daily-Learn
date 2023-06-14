function solution(scores) {
  const myScore = scores[0];
  const mySum = myScore[0] + myScore[1];

  scores.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  let answer = 1;
  let maxScore = 0;

  for (let score of scores) {
    if (score[1] < maxScore) {
      if (score === myScore) return -1;
      continue;
    }

    const currentSum = score[0] + score[1];
    if (currentSum > mySum) {
      answer++;
    }

    maxScore = Math.max(maxScore, score[1]);
  }
  return answer;
}
