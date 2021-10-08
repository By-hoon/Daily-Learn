function solution(s) {
    if (s.length === 1) return 1;
    let arr = [];
    for(let i = 1; i <= parseInt(s.length / 2); i++) {
        let cnt = 1;
        let str = '';
        for(let j = 0; j < s.length; j += i) {
            const current = s.substr(j, i);
            const next = s.substr(j+i, i);
            if(current === next) {
                cnt++;
            } else {
                str = cnt > 1? str + cnt + current : str + current;
                cnt = 1;
            }
        }
        arr.push(str.length);
    }
    return Math.min(...arr);
}