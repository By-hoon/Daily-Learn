const solution = (name) => {
  let answer = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let tmp = name.charCodeAt(i);
    if (tmp < 78) answer += tmp % 65;
    else answer += 91 - tmp;
    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) nextIndex += 1;

    min = Math.min(min, i * 2 + name.length - nextIndex);
  }
  answer += min;
  return answer;
};
