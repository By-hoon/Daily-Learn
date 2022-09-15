function solution(operations) {
  const dualPriorityQueue = [];
  operations.forEach((operation) => {
    const [order, value] = operation.split(" ");
    if (order === "I") dualPriorityQueue.push(Number(value));
    else {
      dualPriorityQueue.sort((a, b) => a - b);
      if (value == "1") dualPriorityQueue.pop();
      else if (value == "-1") dualPriorityQueue.shift();
    }
  });
  if (dualPriorityQueue.length) dualPriorityQueue.sort((a, b) => a - b);
  return dualPriorityQueue.length
    ? [dualPriorityQueue[dualPriorityQueue.length - 1], dualPriorityQueue[0]]
    : [0, 0];
}
