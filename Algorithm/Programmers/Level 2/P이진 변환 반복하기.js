function solution(s) {
  let countZero = 0,
    countConvert = 0;
  while (s.length !== 1) {
    const origin = s;
    s = s
      .split("")
      .filter((number) => number == 1)
      .join("");
    countZero += origin.length - s.length;
    s = s.length.toString(2);
    countConvert++;
  }
  return [countConvert, countZero];
}
