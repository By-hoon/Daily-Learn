function solution(d, budget) {
    var answer = 0;

    //신청 금액을 오름차순으로 정렬
    d.sort((a,b) => a-b);

    //각 신청금액을 적은 금액부터, 예산에서 차감
    d.forEach(i => {
        if(budget - i >= 0){
            budget -= i;
            answer++;
        };
    });

    return answer;
}