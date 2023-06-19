function solution(numbers) {
  const answer = [];
  numbers.forEach((number) => {
    const biNum = number.toString(2);
    const biNumLength = biNum.length;
    let biTree = "0".repeat(2 ** biNumLength.toString(2).length - 1 - biNumLength);
    biTree += biNum;
    if (isBiTree(biTree, 0, biTree.length - 1)) {
      answer.push(1);
      return;
    }
    answer.push(0);
  });

  return answer;
}

function isBiTree(biTree, first, last) {
  const middle = Math.floor((first + last) / 2);
  const left = Math.floor((first + middle - 1) / 2);
  const right = Math.floor((middle + 1 + last) / 2);

  if (first == last) return true;
  if (biTree[middle] === "0" && (biTree[left] === "1" || biTree[right] === "1")) return false;

  if (!isBiTree(biTree, first, middle - 1)) return false;
  if (!isBiTree(biTree, middle + 1, last)) return false;

  return true;
}
