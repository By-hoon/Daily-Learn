function solution(brown, yellow) {
  let answer = [];
  let roop = true;
  const sum = brown + yellow;
  let calculateNumber = sum;
  while (roop) {
    if (sum % calculateNumber === 0) {
      const devideNumber = sum / calculateNumber;
      const edge = (calculateNumber + devideNumber) * 2 - 4;
      if (brown === edge) {
        answer = [Math.max(calculateNumber, devideNumber), Math.min(calculateNumber, devideNumber)];
        roop = false;
      }
    }
    calculateNumber--;
  }
  return answer;
}
