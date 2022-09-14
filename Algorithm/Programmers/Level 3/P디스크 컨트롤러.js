function solution(jobs) {
  let answer = 0;
  const required = [];
  const request = [];
  jobs.forEach((job) => {
    if (!required[job[0]]) required[job[0]] = [];
    required[job[0]].push(job[1]);
    request[job[0]] = true;
  });
  const priorityQueue = [];
  let work = false;
  let currentTime = 0;
  let finishTime = 0;
  while (priorityQueue.length || required.length) {
    if (currentTime === finishTime) work = false;
    if (request[currentTime]) {
      priorityQueue.push(...required.shift());
      priorityQueue.sort();
    }
    if (!work) {
      const cost = priorityQueue.shift();
      finishTime = currentTime + cost;
      answer += cost;
      work = true;
    }
    currentTime++;
    if (priorityQueue.length) answer += priorityQueue.length;
  }
  return Math.floor(answer / jobs.length);
}
