function breakingRecords(scores) {
  const result = [0, 0];
  let max = scores[0];
  let min = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      result[1]++;
      min = scores[i];
      continue;
    }
    if (scores[i] > max) {
      result[0]++;
      max = scores[i];
    }
  }
  return result;
}
