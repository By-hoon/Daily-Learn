function solution(cacheSize, cities) {
    var cash = [], answer = 0;
    cities.forEach(city => {
        const findIndex = cash.findIndex(element => element === city.toUpperCase());
        if(findIndex !== -1){
            cash.push(city.toUpperCase());
            cash.splice(findIndex, 1);
            answer += 1;
        }
        else{
            cash.push(city.toUpperCase());
            cash.length > cacheSize ? cash.shift() : null;
            answer += 5;
        }
    });
    return answer;
}
