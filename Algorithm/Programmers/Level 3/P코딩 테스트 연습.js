function solution(alp, cop, problems) {
  const times = Array.from({ length: 151 }, () => new Array(151).fill(10000));
  let maxAlp = 0;
  let maxCop = 0;
  problems.forEach((problem) => {
    if (problem[0] > maxAlp) maxAlp = problem[0];
    if (problem[1] > maxCop) maxCop = problem[1];
  });

  if (alp > maxAlp) alp = maxAlp;
  if (cop > maxCop) cop = maxCop;

  times[alp][cop] = 0;
  for (let i = 0; i <= maxAlp; i++) {
    for (let j = 0; j <= maxCop; j++) {
      if (i === maxAlp && j === maxCop) break;

      if (i < maxAlp) times[i + 1][j] = Math.min(times[i + 1][j], times[i][j] + 1);
      if (j < maxCop) times[i][j + 1] = Math.min(times[i][j + 1], times[i][j] + 1);

      problems.forEach((problem) => {
        const [alpReq, copReq, alpRwd, copRwd, cost] = problem;
        if (i < alpReq || j < copReq) return;

        const curAlp = i + alpRwd;
        const curCop = j + copRwd;

        if (curAlp >= maxAlp && curCop >= maxCop) {
          times[maxAlp][maxCop] = Math.min(times[maxAlp][maxCop], times[i][j] + cost);
          return;
        }
        if (curAlp >= maxAlp) {
          times[maxAlp][j + copRwd] = Math.min(times[maxAlp][j + copRwd], times[i][j] + cost);
          return;
        }
        if (curCop >= maxCop) {
          times[i + alpRwd][maxCop] = Math.min(times[i + alpRwd][maxCop], times[i][j] + cost);
          return;
        }
        times[i + alpRwd][j + copRwd] = Math.min(times[i + alpRwd][j + copRwd], times[i][j] + cost);
      });
    }
  }

  return times[maxAlp][maxCop];
}
