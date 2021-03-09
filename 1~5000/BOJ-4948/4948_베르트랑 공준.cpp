#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int n, sqi;

    for (;;) {
        int res = 0;
        cin >> n;
        if (n == 0)break;
        for (int i = n + 1; i <= 2 * n; i++) {      //n+1 => n보다 크고, 2*n => 2n보다 작고
            sqi = sqrt(i);
            if (sqi == 1 && i != 1) {               //2또는 3일 경우
                res++;
                continue;
            }
            for (int j = 2; j <= sqi; j++) {
                if (i % j == 0)                     //홀수일 경우
                    break;
                if (j == (int)sqi) {
                    res++;
                }
            }
            if (i % 2 == 0)
                continue;
        }
        cout << res << '\n';
    }
}
