function solution(users, emoticons) {
  const answer = [0, 0];
  const discount = [10, 20, 30, 40];
  const pairs = [];
  function dfs(emoticons, result) {
    if (emoticons.length < 1) {
      pairs.push(result);
      return;
    }
    for (let i = 0; i < discount.length; i++) {
      dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]]);
    }
  }
  dfs(emoticons, []);

  pairs.forEach((pair) => {
    const sales = [0, 0];

    users.forEach(([per, price]) => {
      let sum = 0;

      pair.forEach(([dis, cost]) => {
        if (dis >= per) {
          sum += ((100 - dis) / 100) * cost;
        }
      });

      if (sum >= price) {
        sales[0] += 1;
        return;
      }
      sales[1] += sum;
    });
    if (answer[0] > sales[0]) return;
    if (answer[0] < sales[0]) {
      answer[0] = sales[0];
      answer[1] = sales[1];
      return;
    }

    if (answer[1] < sales[1]) {
      answer[1] = sales[1];
    }
  });

  return answer;
}
