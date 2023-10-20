function commonChild(s1, s2) {
  let maximum = Array.from({ length: s1.length + 1 }, (_) => []);
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0) {
        maximum[i][j] = 0;
        continue;
      }

      if (s1[i - 1] === s2[j - 1]) {
        maximum[i][j] = maximum[i - 1][j - 1] + 1;
        continue;
      }

      maximum[i][j] = Math.max(maximum[i - 1][j], maximum[i][j - 1]);
    }
  }

  return maximum[s1.length][s2.length];
}
