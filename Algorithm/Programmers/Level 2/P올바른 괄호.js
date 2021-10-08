function solution(s) {
    let arrS = [...s], left = 0;

    if (arrS[0] === ')') return false;

    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] === '(') left++;
        else if (left >= 1 && arrS[i] === ')') left--;
    }
    if (left === 0) return true;
    else return false;
}