function solution(dartResult) {
    const arr = dartResult.split('');
    arr.forEach(i => {
        if(!isNaN(i))console.log(i);
    });
    var answer = 0;
    return answer;
};

solution('1S2D*3T');