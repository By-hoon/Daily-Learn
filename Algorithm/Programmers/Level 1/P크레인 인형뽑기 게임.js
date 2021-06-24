function solution(board, moves) {
    const doll = [];
    var answer = 0;
    moves.forEach(movec => {
        var check = 0;
        var count = 0;
        while(check == 0 && count != (board.length)){
            if(board[count][movec-1] !== 0){
                if(doll.length > 0){
                    if(doll[doll.length-1] === board[count][movec-1]){
                        doll.pop();
                        answer += 2;
                    }
                    else doll.push(board[count][movec-1]);
                }
                else doll.push(board[count][movec-1]);
                board[count][movec-1] = 0
                check = 1;
            }
            else count++;
        }
    });
    return answer;
}