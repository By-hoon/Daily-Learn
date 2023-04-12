function solution(storey) {
  let answer = 0;
  const storeys = storey
    .toString()
    .split("")
    .reverse()
    .map((e) => Number(e));
  storeys.forEach((number, index) => {
    console.log(storeys, answer);
    if (number < 5) {
      answer += number;
      return;
    }
    if (number > 5) {
      answer += 10 - number;
      if (index + 1 === storeys.length) {
        answer++;
        return;
      }
      storeys[index + 1]++;
      return;
    }
    answer += number;
    if (storeys[index + 1] + 1 > 5 || storeys[index + 1] + 1 === 10) storeys[index + 1] += 1;
  });
  return answer;
}
