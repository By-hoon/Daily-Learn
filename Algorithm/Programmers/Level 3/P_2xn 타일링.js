function solution(n) {
    var tile = Array(n).fill(0)
    tile[0] = 1
    tile[1] = 2
    for (var i = 2; i < n; i++) {
        var a = tile[i - 1] + tile[i - 2]
        tile[i] = a % 1000000007
    }
    return tile[n - 1];
}