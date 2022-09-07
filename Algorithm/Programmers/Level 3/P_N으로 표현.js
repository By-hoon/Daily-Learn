function solution(N, number) {
  let results = [];
  for (let i = 1; i < 9; i++) {
    results.push(new Set());
    let temp = "";
    for (let j = 0; j < i; j++) {
      temp += String(N);
    }
    results[i - 1].add(parseInt(temp));
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (let first of results[j]) {
        for (let second of results[i - j - 1]) {
          results[i].add(first + second);
          results[i].add(first - second);
          results[i].add(Math.floor(first / second));
          results[i].add(first * second);
        }
      }
    }
    for (let result of results[i]) {
      if (result === number) {
        return i + 1;
      }
    }
  }
  return -1;
}
