function kangaroo(x1, v1, x2, v2) {
  let diff = Math.abs(x1 - x2);
  let roop = true;
  while (roop) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) roop = false;
    if (Math.abs(x1 - x2) >= diff) roop = false;
  }
  if (x1 === x2) return "YES";
  return "NO";
}
