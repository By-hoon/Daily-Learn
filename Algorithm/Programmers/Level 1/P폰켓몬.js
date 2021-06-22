const solution = (nums) => {
    const leng = (nums.length / 2);
    const arr = []
    let count = 0;

    //각 값을 arr의 인덱스 값으로 하여, 나온 적이 있는 숫자인지 체크
    //처음 나온 값이라면 count 값을 늘린다.
    nums.forEach(num => {
        if(arr[num] !== 1){
            count++;
            arr[num] = 1;
        };
    });

    //뽑아야 하는 폰켓몬 수와 count값을 비교하여 작은 값을 출력
    return Math.min(count, leng);
}