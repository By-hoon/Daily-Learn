const solution = (queue1, queue2) => {
  let sum1 = queue1.reduce((sum, node) => sum + node, 0);
  let sum2 = queue2.reduce((sum, node) => sum + node, 0);
  const halfSum = (sum1 + sum2) / 2;
  const q = [...queue1, ...queue2];
  let queue1Pointer = 0;
  let queue2Pointer = queue1.length;

  for (let count = 0; count < queue1.length * 3; count++) {
    if (sum1 === halfSum) {
      return count;
    }
    sum1 = sum1 > halfSum ? sum1 - q[queue1Pointer++ % q.length] : sum1 + q[queue2Pointer++ % q.length];
  }

  return -1;
};
