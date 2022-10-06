function solution(gems) {
  const gemsCount = new Set(gems).size;
  const gemMap = new Map();
  var answer = [1, gems.length];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === gemsCount) {
      const newAnswer = [[...gemMap][0][1] + 1, i + 1];
      answer = answer[1] - answer[0] > newAnswer[1] - newAnswer[0] ? newAnswer : answer;
    }
  });
  return answer;
}
