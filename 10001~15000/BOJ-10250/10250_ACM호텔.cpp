#include <iostream>

using namespace std;

int main() {
    int T;
    cin >> T;
    int H, W, N;
    for (int i = 0; i < T; i++) {
        cin >> H >> W >> N;
        int HH, WW;
        HH = N % H;
        WW = N / H;
        if (HH > 0)
            WW++;
        else
            HH = H;
        cout << HH * 100 + WW << '\n';
    }
}