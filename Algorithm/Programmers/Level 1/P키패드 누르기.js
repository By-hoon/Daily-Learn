const solution = (numbers, hand) => {
    const answer = [];
  
    let leftHand = '*';
    let rightHand = '#';
  
    //numbers 배열 안의 각 값마다 실행
    numbers.forEach(number => {   
      if (number === 1 || number === 4 || number === 7) {
        answer.push('L');
        leftHand = number;
        return;
      }
  
      if (number === 3 || number === 6 || number === 9) {
        answer.push('R');
        rightHand = number;
        return;
      }
  
      //2,5,8,0의 경우 각 손가락의 목적 숫자까지의 거리를 계산하여 반환
      const leftDistance = getDistance(leftHand, number);
      const rightDistance = getDistance(rightHand, number);
  
      if (leftDistance === rightDistance) {
        if (hand === "right") {
          answer.push('R');
          rightHand = number;
          return;
        }
  
        if (hand === 'left') {
          answer.push('L');
          leftHand = number;
          return;
        }
      }
  
      if (leftDistance > rightDistance) {
        answer.push('R');
        rightHand = number;
      } 
  
      if (leftDistance < rightDistance) {
        answer.push('L');
        leftHand = number;
      }
    });

    //문자열화
    return answer.join("");
  };
  
  //키패드 숫자들을 미리 매핑하여 거리 계산에 사용
  const getDistance = (located, target) => {
    const keyPad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }
  
    const now = keyPad[located];
    const t = keyPad[target];

    //위치의 차의 절대값을 반환
    return Math.abs(t[0] - now[0]) + Math.abs(t[1] - now[1]);
  };