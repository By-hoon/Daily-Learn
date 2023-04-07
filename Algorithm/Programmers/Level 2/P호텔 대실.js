function solution(book_time) {
  let answer = 0;

  book_time.sort((a, b) => convertTime(a[0]) - convertTime(b[0]));

  const cleaningTime = 10;
  let currentTime = 0;
  let usingRooms = [];

  book_time.forEach((time) => {
    const checkInTime = convertTime(time[0]);
    const checkOutTime = convertTime(time[1]);
    currentTime = checkInTime;
    let checkOutRooms = null;
    usingRooms.forEach((usingRoom, index) => {
      if (usingRoom <= currentTime) checkOutRooms = index;
    });
    if (checkOutRooms !== null) usingRooms.splice(checkOutRooms, 1);
    usingRooms.push(checkOutTime + cleaningTime);
    answer = usingRooms.length;
  });
  return answer;
}

const convertTime = (time) => {
  const timeSplit = time.split(":");
  return Number(timeSplit[0]) * 60 + Number(timeSplit[1]);
};
