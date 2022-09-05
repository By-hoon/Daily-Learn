function solution(genres, plays) {
  let answer = [];
  const songs = {};
  const combination = {};
  genres.forEach((genre, idx) => {
    if (!songs[genre]) songs[genre] = [];
    if (combination[genre] == null || combination[genre] == undefined) {
      combination[genre] = 0;
    }
    const info = {
      genre,
      play: plays[idx],
      index: idx,
    };
    songs[genre].push(info);
    combination[genre] += plays[idx];
  });

  const combinationArr = [];
  for (let key in combination) {
    combinationArr.push({
      genre: key,
      play: combination[key],
    });
  }
  combinationArr.sort((a, b) => b.play - a.play);
  combinationArr.forEach((el) => {
    const targetGenre = songs[el.genre];
    targetGenre.sort((a, b) => b.play - a.play);
    targetGenre[0] && answer.push(targetGenre[0].index);
    targetGenre[1] && answer.push(targetGenre[1].index);
  });
  return answer;
}
