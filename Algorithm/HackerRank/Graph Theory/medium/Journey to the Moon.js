function journeyToMoon(n, astronaut) {
  const sums = sumToN(n);
  const pairs = [[]];
  const astronautIndex = [];
  astronaut.forEach((ast) => {
    if (astronautIndex[ast[0]] && astronautIndex[ast[1]]) {
      const newPair = [...new Set([...pairs[astronautIndex[ast[0]]], ...pairs[astronautIndex[ast[1]]]])];
      const deleteIndex = astronautIndex[ast[1]];
      pairs[astronautIndex[ast[1]]].forEach((e) => (astronautIndex[e] = astronautIndex[ast[0]]));
      pairs[deleteIndex] = [];
      pairs[astronautIndex[ast[0]]] = newPair;
      return;
    }
    if (astronautIndex[ast[0]]) {
      pairs[astronautIndex[ast[0]]].push(ast[1]);
      astronautIndex[ast[1]] = astronautIndex[ast[0]];
      return;
    }
    if (astronautIndex[ast[1]]) {
      pairs[astronautIndex[ast[1]]].push(ast[0]);
      astronautIndex[ast[0]] = astronautIndex[ast[1]];
      return;
    }
    pairs.push(ast);
    const currentIndex = pairs.length - 1;
    astronautIndex[ast[0]] = currentIndex;
    astronautIndex[ast[1]] = currentIndex;
  });

  let result = sums[n];
  pairs.forEach((pair) => {
    result -= sums[pair.length];
  });
  return result;
}

function sumToN(n) {
  let sum = 0;
  const sums = [0, 0];
  for (let i = 1; i < n; i++) {
    sum += i;
    sums.push(sum);
  }
  return sums;
}
