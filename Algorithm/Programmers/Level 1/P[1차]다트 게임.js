function solution(dartResult) {
    const arr = dartResult.split('');
    var score = [], bonus =[], option=[];
    var answer = 0, cnt = -1, cal = 0, chk = 0;
    arr.forEach(i => {
        if(!isNaN(i)){
            if(chk !== 0 && i === '0'){
                score.pop();
                score.push('10');
                chk = 0;
            }
            else {
                score.push(i);
                chk ++;
            }
        }
        else if(i !== "*" && i !== "#")
        {
            (i === "S") ? bonus.push(1) : (i === "D") ? bonus.push(2) : bonus.push(3);
            option.push(1);
            cnt++;
            chk = 0;
        }
        else
            (i === "*") ? option[cnt] = 2 : (i === "#") ? option[cnt]=-1 : null;
        
    });
    option.push(0);
    for(let i=0; i<3; i++){
        cal = (Math.pow(score[i], bonus[i]) * option[i])
        answer += ((option[i+1] === 2) ? cal * 2 : cal);
    }
    return answer;
};