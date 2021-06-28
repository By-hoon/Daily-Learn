function solution(lottos, win_nums) {
    var cnt = 0, cnt2 = 0;
    var check = [];
    const prized = [6, 6, 5,4,3,2,1];

    //번호를 인덱스로 하여 저장
    lottos.forEach(i => {
        //0인 경우 저장하지 않고, 0의 갯수를 세준다
        if(i === 0)cnt++;
        else {
            check[i] = 1;
        }
    });

    //당첨번호의 인덱스와 앞서 저장한 인덱스를 비교하여 일치여부 확인
    win_nums.forEach(j => {
        if(check[j] === 1)cnt2++;
    });

    var answer = [prized[cnt2+cnt], prized[(cnt2)]];
    return answer;
}