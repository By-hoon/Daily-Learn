function solution(clothes) {
  let answer = 1;
  const parts = {};
  clothes.forEach((dress) => {
    if (!parts[dress[1]]) parts[dress[1]] = [];
    parts[dress[1]].push(dress[0]);
  });
  Object.keys(parts).forEach((part) => {
    const count = parts[part].length;
    answer *= count + 1;
  });
  return answer - 1;
}
