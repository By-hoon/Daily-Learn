const solution = (n, lost, reserve) => {
    var answer = n - lost.length;
    const num = [];
    const newLost = [];

    //여벌 체육복이 있는 학생 인덱스 값에 체킹
    reserve.forEach(i => {
        num[i] = 2;
    });

    //여벌 체욱이 있는 학생이 도난 당했다면 자기 여벌을 입음
    lost.forEach(i => {
        if(num[i] === 2){
            answer++;
            num[i] = 1;
        }
        //남은 도난 당한 학생 저장
        else newLost.push(i);
    })

    //남은 도난 당한 학생 중에 여벌을 받을 수 있는 학생이 있는지 확인
    newLost.forEach(i => {
        if(num[i-1] === 2){
            answer++;
            num[i-1] = 1;
        }
        else if(num[i+1] === 2){
            answer++;
            num[i+1] = 1;
        }
    });
    return answer;
}