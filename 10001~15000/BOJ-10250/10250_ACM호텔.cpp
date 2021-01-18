#include <iostream>

using namespace std;

int main() {
    int T;
    cin >> T;
    int H, W, N;
    for (int i = 0; i < T; i++) {
        cin >> H >> W >> N;
        int HH, WW;
        HH = N % H; // H로 나눈 나머지를 HH에 저장하여 층 수를 정한다.
        WW = N / H; // H로 나눈 몫을 WW에 저장
        if (HH > 0)
            WW++; // 호 수가 1에서부터 시작이므로 1을 호 수에 더해준다.
        else
            HH = H; // 나머지가 없으면 맨 윗층이므로 H를 층 수로 정한다.
        cout << HH * 100 + WW << '\n';
    }
}