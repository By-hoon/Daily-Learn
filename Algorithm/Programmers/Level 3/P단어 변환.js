function solution(begin, target, words) {
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0;

  queue.push([begin, 0]);

  while (queue) {
    let [current, count] = queue.shift();
    if (current === target) {
      return count;
    }

    words.forEach((word) => {
      let notEqual = 0;

      if (visited.includes(word)) return;

      for (let index = 0; index < word.length; index++) {
        if (word[index] !== current[index]) notEqual++;
      }

      if (notEqual === 1) {
        queue.push([word, ++count]); // 전위증가, 후위증가 차이

        visited.push(word);
      }
    });
  }
}
