#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int n, sqi;

    for (;;) {
        int res = 0;
        cin >> n;
        if (n == 0)break;
        for (int i = n + 1; i <= 2 * n; i++) {
            sqi = sqrt(i);
            if (sqi == 1 && i != 1) {
                res++;
                continue;
            }
            for (int j = 2; j <= sqi; j++) {
                if (i % j == 0)
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