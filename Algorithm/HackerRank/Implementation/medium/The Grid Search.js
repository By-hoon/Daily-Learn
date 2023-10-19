function gridSearch(G, P) {
  let result = "NO";

  const gLength = G[0].length;
  const pLength = P[0].length;

  GLoop: for (let g = 0; g <= G.length - P.length; g++) {
    for (let i = 0; i < gLength; i++) {
      if (G[g][i] !== P[0][0]) continue;
      if (g.length - i < pLength) continue;
      PLoop: for (let p = 0; p < P.length; p++) {
        const slice = G[g + p].slice(i, i + pLength);
        if (slice !== P[p]) break;

        if (p === P.length - 1) result = "YES";
      }

      if (result === "YES") break GLoop;
    }
  }

  return result;
}
