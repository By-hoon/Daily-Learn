function solution(N, stages) {
    var staging = [];
    var player = stages.length, cnt = 1;
    var fail = [];

    //각 스테이지에 몇 명 있는지 확인
    stages.forEach(i => {
        if(!staging[i])staging[i] = 0
        if(i<=N)staging[i]++;
    });

    //각 스테이지 별 실패율과 스테이지 값을 저장
    while(cnt < (N+1)){
        if(!staging[cnt])staging[cnt] = 0;
        var divide = (staging[cnt] / player);
        var info = {
            index: cnt,
            failure_Rate: divide
        };
        fail.push(info);
        player -= staging[cnt];
        cnt++;
    };

    //실패율 내림차순 정렬
    fail.sort(function(a,b){
        if(a.failure_Rate < b.failure_Rate)return 1;
        if(a.failure_Rate > b.failure_Rate)return -1;
        return 0;
    })
    var answer = [];

    //실패율의 내림차순으로 인덱스 저장
    fail.forEach(i => {
        answer.push(i.index);
    });
    return answer;
}