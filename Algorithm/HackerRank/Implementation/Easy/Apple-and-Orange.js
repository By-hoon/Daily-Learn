function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const result = [0, 0];
  const maxLength = Math.max(apples.length, oranges.length);
  for (let i = 0; i < maxLength; i++) {
    if (apples[i]) {
      const appleRegion = a + apples[i];
      if (appleRegion >= s && appleRegion <= t) result[0]++;
    }
    if (oranges[i]) {
      const orangeRegion = b + oranges[i];
      if (orangeRegion >= s && orangeRegion <= t) result[1]++;
    }
  }
  console.log(result[0]);
  console.log(result[1]);
}
