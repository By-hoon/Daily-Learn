const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];

function solution(numbers, hand) {
    var handcheck = new Boolean(true);
    if(hand === "left")handcheck = Boolean(false);
    var left = 10,
        right = 12,
        answer = '';
    for(var i =0; i<numbers.length; i++){
        if((numbers[i]%3)===1){
        }
        else if((numbers[i]%3)===0 && numbers[i] !== 0){
        }
        else if((numbers[i]%3)===2){
        }
        else if(numbers[i] === 0){
            if(i===0){
                if(handcheck){

                }
                else{
                    
                }
            }
        }
    }
    answer = answer + 'L';
    
    console.log(answer);
    return answer;

}

solution(numbers, "left");