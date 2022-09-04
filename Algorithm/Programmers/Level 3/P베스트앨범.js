function solution(genres, plays) {
  let answer = [];
  const combination = {};
  genres.forEach((genre, index) => {
    const play = plays[index];
    if (!combination[genre]) combination[genre] = { totalPlay: 0, songs: [] };
    combination[genre].totalPlay += play;
    if (combination[genre].songs.length < 2) {
      combination[genre].songs.push({
        index,
        plays: play,
      });
      if (combination[genre].songs.length === 2) combination[genre].songs.sort((a, b) => b.plays - a.plays);
    } else {
      if (combination[genre].songs[0].plays < play) {
        combination[genre].songs.pop();
        combination[genre].songs.unshift({
          index,
          plays: play,
        });
      } else if (combination[genre].songs[0].plays > play && combination[genre].songs[1].plays < play) {
        combination[genre].songs.pop();
        combination[genre].songs.push({
          index,
          plays: play,
        });
      }
    }
  });
  const newGenres = [];
  Object.keys(combination).forEach((key) => {
    newGenres.push([key, combination[key].totalPlay]);
  });
  newGenres
    .sort((a, b) => b[1] - a[1])
    .forEach((newGenre) => {
      answer.push(combination[newGenre[0]].songs[0].index);
      answer.push(combination[newGenre[0]].songs[1].index);
    });
  return answer;
}
