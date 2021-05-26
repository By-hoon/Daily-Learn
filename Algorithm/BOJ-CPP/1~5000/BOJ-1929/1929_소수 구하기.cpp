#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int M, N, sqi;
    cin >> M >> N;
    for (int i = M; i <= N; i++) {
        sqi = sqrt(i);      //sqrt => 제곱근을 구하는 함수
        if (sqi == 1 && i != 1) {
            cout << i << '\n';
            continue;
        }
        for (int j = 2; j <= sqi; j++) {
            if (i % j == 0)
                break;
            if (j == (int)sqi) {
                cout << i << '\n';
            }
        }
        if (i % 2 == 0)
            continue;
    }
}
