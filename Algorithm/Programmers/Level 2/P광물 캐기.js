const solution = (picks, minerals) => {
  let answer = 0;
  let len = Math.ceil(minerals.length / 5);
  let mineralAmount = picks.reduce((a, b) => a + b);

  if (mineralAmount === 0) return 0;
  minerals = minerals.splice(0, mineralAmount * 5);

  let fatigues = [];

  for (let a = 0; a < len; a++) {
    const mineralObj = { diamond: 0, iron: 0, stone: 0 };
    const targetMinerals = minerals.splice(0, 5);

    targetMinerals.map((mineral) => mineralObj[mineral]++);

    fatigues.push([
      mineralObj.diamond + mineralObj.iron + mineralObj.stone,
      mineralObj.diamond * 5 + mineralObj.iron + mineralObj.stone,
      mineralObj.diamond * 25 + mineralObj.iron * 5 + mineralObj.stone,
    ]);
  }

  fatigues.sort((a, b) => b[2] - a[2]);

  fatigues.forEach((fatigue) => {
    if (picks[0] > 0) {
      picks[0]--;
      answer += fatigue[0];
      return;
    }
    if (picks[1] > 0) {
      picks[1]--;
      answer += fatigue[1];
      return;
    }
    if (picks[2] > 0) {
      picks[2]--;
      answer += fatigue[2];
      return;
    }
  });

  return answer;
};
