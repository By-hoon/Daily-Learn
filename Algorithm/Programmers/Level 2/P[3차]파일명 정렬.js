function solution(files) {
    const re = RegExp(/\d{1,5}/);
    const arr = files.reduce((acc, cur, i) => {
        const matchedNumber = re.exec(cur);
        const tailStartIndex = matchedNumber.index + matchedNumber[0].length;
        acc.push({
            'head': cur.substring(0, matchedNumber.index),
            'number': cur.substring(matchedNumber.index, tailStartIndex),
            'tail': cur.substring(tailStartIndex),
        })
        return acc;
    }, [])
    arr.sort((a, b) => {
        const compared = a.head.toLowerCase().localeCompare(b.head.toLowerCase());
        return compared === 0 ? a.number - b.number : compared;
    });
    return arr.reduce((acc, cur) => {
        acc.push(`${cur.head}${cur.number}${cur.tail}`);
        return acc;
    }, [])
}