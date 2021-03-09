#include <iostream>

using namespace std;

int run(int a, int b) {
    if (a == 0)         //0층일 경우 호 리턴
        return b;
    if (b == 1)         //1호일 경우 1명 리턴
        return 1;   
    return (run(a - 1, b) + run(a, b - 1)); //재귀
}

int main() {
    int T;
    cin >> T;
    int k, n;
    for (int i = 0; i < T; i++) {
        cin >> k >> n;
        cout << run(k, n) << "\n";
    }
    return 0;
}
