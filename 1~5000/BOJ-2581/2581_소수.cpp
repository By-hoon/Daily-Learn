#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int M, N, sqi;
    int res = 0;
    int res2 = 0;
    cin >> M >> N;
    for (int i = M; i <= N; i++) {
        sqi = sqrt(i); // sqrt => 제곱근을 구하는 함수
        if (sqi == 1 && i != 1) {
            if (res == 0)res2 = i;
            res += i;
            continue;
        }
        for (int j = 2; j <= sqi; j++) {
            if (i % j == 0)
                break;
            if (j == (int)sqi) {
                if (res == 0)res2 = i;
                res += i;
            }
        }
        if (i % 2 == 0)
            continue;
    }
    if (res != 0)cout << res << '\n' << res2;
    else cout << "-1";
}
