function extraLongFactorials(n) {
  let result = 1n;
  for (let i = 1n; i <= BigInt(n); i++) {
    result *= i;
  }
  console.log(result.toString());
}

// BigInt 사용 시 뒤에 n이 붙게됨.
