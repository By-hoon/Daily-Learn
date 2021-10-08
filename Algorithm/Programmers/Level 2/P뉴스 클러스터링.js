function solution(str1, str2) {

    const arr1 = divide(str1);
    const arr2 = divide(str2);
    const set = new Set([...arr1, ...arr2]);
    let union = 0;
    let intersection = 0;

    set.forEach(element => {
        const count1 = arr1.filter(x => x === element).length;
        const count2 = arr2.filter(x => x === element).length;
        union += Math.max(count1, count2);
        intersection += Math.min(count1, count2);
    })
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

function divide(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
        const part = text.substr(i, 2);
        if (part.match(/[A-Za-z]{2}/)) {
            result.push(part.toLowerCase());
        }
    }
    return result;
}