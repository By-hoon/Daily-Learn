function solution(n, words) {
    const record = {} , anwser = [];
    words.forEach((str, i) => {
        if (i !==0){
        const last = words[i-1]
        if(last[last.length-1] !== str[0] || record[str] === 1){
            i ++;
            anwser.push([(i%n) === 0 ? n: (i%n), (Math.ceil(i/n))]);
        }
        };
        record[str] = 1;
    });
    return anwser.length !== 0 ? anwser[0]:[0,0];
}