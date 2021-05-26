#include <iostream>

using namespace std;

int main() {
    int T;
    cin >> T;
    int X, Y, dis;
    for (int i = 0; i < T; i++) {
        cin >> X >> Y;
        dis = Y - X;            //거리계산
        int cnt = 1;
        int cnt2 = 0;
        int res = 0;

        while (dis > 0) {
            for (int j = 1; j <= cnt; j++) {
                dis--;
            }
            res++;
            cnt2++;
            if (cnt2 == 2) {        //3번 루프할 때 마다 cnt 증가
               cnt++;
               cnt2 = 0;
            }
        }
        cout << res << '\n';
    }
}