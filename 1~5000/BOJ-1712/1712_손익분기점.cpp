#include <iostream>

using namespace std;

int main() {
    int A, B, C;
    int n = 1;
    cin >> A >> B >> C;
    if (B >= C) {          // B가 C보다 크면 -1 출력
        cout << -1;
        return 0;
    }

    cout << A / (C - B) + 1; // 나눈값에 +1 하여 출력
}