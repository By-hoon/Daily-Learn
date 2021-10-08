function solution(progresses, speeds) {
    var time = [], answer = [], count = 1, start = 0;
    progresses.forEach((progress, i) => {
        time.push(parseInt((100 - progress) / speeds[i]) + ((100 - progress) % speeds[i] !== 0 ? 1 : 0));
        if (time.length > 1) {
            if (time[start] >= time[i]) count++;
            else {
                answer.push(count);
                start = i;
                count = 1;
            }
        }
    });
    answer.push(count);
    return answer;
}