function solution(weights) {
  let answer = 0;
  const store = {};
  const ratios = [1, 3 / 2, 2, 4 / 3];

  weights.sort((a, b) => b - a);

  weights.forEach((weight) => {
    ratios.forEach((ratio) => {
      const pair = weight * ratio;
      if (store[pair]) answer += store[pair];
    });
    if (store[weight]) {
      store[weight]++;
      return;
    }
    store[weight] = 1;
  });
  return answer;
}
