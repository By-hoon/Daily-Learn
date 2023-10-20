function lilysHomework(arr) {
  const reverseArr = [...arr].reverse();
  const sortArr = [...arr].sort((a, b) => a - b);
  return Math.min(swap(arr, sortArr), swap(reverseArr, sortArr));
}

function swap(original, sorted) {
  let count = 0;
  const dic = {};

  original.forEach((num, index) => {
    dic[num] = index;
  });

  for (let i = 0; i < original.length; i++) {
    if (original[i] === sorted[i]) continue;

    const swapIndex = dic[sorted[i]];
    dic[original[i]] = dic[sorted[i]];
    original[swapIndex] = original[i];
    original[i] = sorted[i];
    count++;
  }

  return count;
}

const arr = [7, 15, 12, 3];
lilysHomework(arr);
