function solution(participant, completion) {
    var answer = '';
    
    //미리 정렬
    participant.sort();
    completion.sort();
    
    //정렬값끼리 비교하여 일치하지 않는 값 찾기
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            return answer;
        }
    }
}