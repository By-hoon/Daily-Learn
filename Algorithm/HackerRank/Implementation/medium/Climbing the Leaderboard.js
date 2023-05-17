function climbingLeaderboard(ranked, player) {
  const result = [];
  const scores = [...new Set(ranked)].reverse();
  let playerRank = 0;
  player.forEach((playerScore) => {
    while (playerRank < scores.length && playerScore >= scores[playerRank]) {
      playerRank++;
    }
    result.push(scores.length - playerRank + 1);
  });
  return result;
}
