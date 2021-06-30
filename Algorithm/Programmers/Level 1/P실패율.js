function solution(N, stages) {
    var staging = [];
    var player = stages.length, cnt = 1;
    var fail = [];
    stages.forEach(i => {
        if(!staging[i])staging[i] = 0
        if(i<=N)staging[i]++;
    });

    while(cnt < (N+1)){
        if(!staging[cnt])staging[cnt] = 0;
        var divide = (staging[cnt] / player);
        var info = {
            index: cnt,
            failure_Rate: divide
        };
        fail.push(info);
        player -= staging[cnt];
        console.log(player);
        cnt++;
    };
    console.log(fail);
    var answer = [];
    return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
solution(N, stages);