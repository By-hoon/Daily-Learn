function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  const capSpace = [0, 0];

  for (let i = deliveries.length - 1; i >= 0; i--) {
    let cur = [deliveries[i], pickups[i]];

    if (cur[0] > capSpace[0]) {
      cur[0] -= capSpace[0];
      capSpace[0] = 0;
    } else {
      capSpace[0] -= cur[0];
      cur[0] = 0;
    }

    if (cur[1] > capSpace[1]) {
      cur[1] -= capSpace[1];
      capSpace[1] = 0;
    } else {
      capSpace[1] -= cur[1];
      cur[1] = 0;
    }

    const delivery = cur[0] % cap ? Math.floor(cur[0] / cap) + 1 : cur[0] / cap;
    const pickup = cur[1] % cap ? Math.floor(cur[1] / cap) + 1 : cur[1] / cap;

    const move = Math.max(delivery, pickup);
    answer += move * (i + 1) * 2;
    capSpace[0] += move * cap - cur[0];
    capSpace[1] += move * cap - cur[1];
  }

  return answer;
}
