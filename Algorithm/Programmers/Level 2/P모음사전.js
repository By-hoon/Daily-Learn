function solution(word) {
    var answer = 0;
    const wordObj = {
        E: 1,
        I: 2,
        O: 3,
        U: 4,
    };
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'A') answer++;
        else {
            for (let j = 4; j > i; j--) answer += (Math.pow(5, (j - i)) * wordObj[word[i]]);
            answer += wordObj[word[i]] + 1;
        };
    };
    return answer;
}