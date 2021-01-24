#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int n, sqi, T;
    cin >> T;
    for (int t = 0; t < T; t++) {
        int cnt = 0;
        cin >> n;
        int div = n / 2;
        sqi = sqrt(div);
        if (sqi == 1 && div != 1) {
            cout << div << " " << div << '\n';
            cnt++;
        }
        for (int j = 2; j <= sqi; j++) {
            if (div % j == 0)
                break;
            if (j == (int)sqi) {
                cout << div << " " << div << '\n';
                cnt++;
            }
        }
        if (cnt == 0) {
            for (int i = 1; i < div-1; i++) {
                int res1 = 0, res2 =0;
                int sqi1 = sqrt(div-i);
                if (sqi1 == 1 && div-i != 1) {
                    res1 = (div - i);
                }
                for (int j = 2; j <= sqi1; j++) {
                    if ((div - i) % j == 0)
                        break;
                    if (j == (int)sqi1) {
                        res1 = (div - i);
                    }
                }
                int sqi2 = sqrt(div+i);
                if (sqi2 == 1 && div+1 != 1) {
                    res2 = (div + i);
                }
                for (int j = 2; j <= sqi2; j++) {
                    if ((div + i) % j == 0)
                        break;
                    if (j == (int)sqi2) {
                        res2 = (div + i);
                    }
                }
                if ((res1 + res2) == n) {
                    cout << res1 << " " << res2 << '\n';
                    break;
                }
            }
        }

    }
    system("pause");
}