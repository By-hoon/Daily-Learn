function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const sum = s.slice(i, i + m).reduce((sum, e) => sum + e, 0);
    if (sum === d) result++;
  }
  return result;
}
