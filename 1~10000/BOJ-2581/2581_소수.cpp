#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int N, num, sqnum;
    int cnt = 0;
    cin >> N;
    for (int i = 0; i < N; i++) {
        cin >> num;
        sqnum = sqrt(num);
        if (sqnum == 1 && num != 1) {
            cnt++;
            continue;
        }
        for (int j = 2; j <= sqnum; j++) {
            if (num % j == 0)
                break;
            if (j == (int)sqnum)
                cnt++;
        }
        if (num % 2 == 0)
            continue;
    }
    cout << cnt << '\n';
}