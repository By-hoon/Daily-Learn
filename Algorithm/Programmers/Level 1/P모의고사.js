function solution(answers) {
    const answer = [];
    const list = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    var c1 = 0,
        c2 = 0,
        c3 = 0;
    
    for(var i=0; i<answers.length; i++){
        if(answers[i] === list[0][i%5])
            c1++;
        if(answers[i] === list[1][i%8])
            c2++;
        if(answers[i] === list[2][i%10])
            c3++;
    };
    var max = Math.max(c1,c2,c3)
    if(max === c1) answer.push(1);
    if(max === c2) answer.push(2);
    if(max === c3) answer.push(3);

    return answer;
}
var answers = [1,2,3,4,5];
solution(answers)

