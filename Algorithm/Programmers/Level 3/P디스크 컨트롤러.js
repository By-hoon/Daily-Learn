function solution(jobs) {
  let answer = 0;
  let jobCount = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  const priorityQueue = [];
  let currentTime = 0;
  while (priorityQueue.length || jobCount < jobs.length) {
    if (jobs.length > jobCount && currentTime >= jobs[jobCount][0]) {
      priorityQueue.push(jobs[jobCount]);
      priorityQueue.sort((a, b) => {
        return a[1] - b[1];
      });
      jobCount++;
      continue;
    }
    if (priorityQueue.length !== 0) {
      currentTime += priorityQueue[0][1];
      answer += currentTime - priorityQueue[0][0];
      priorityQueue.shift();
    } else {
      currentTime = jobs[jobCount][0];
    }
  }
  return Math.floor(answer / jobs.length);
}
