function getTotalX(a, b) {
  let result = 0;
  const start = a[a.length - 1];
  const end = b[0];

  for (let i = start; i <= end; i++) {
    if (!a.every((value) => i % value == 0)) continue;
    if (b.every((value) => value % i == 0)) result++;
  }
  return result;
}
