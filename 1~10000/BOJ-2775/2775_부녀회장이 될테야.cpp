#include <iostream>

using namespace std;

int run(int a, int b) {
    if (a == 0)
        return b;
    if (b == 1)
        return 1;
    return (run(a - 1, b) + run(a, b - 1));
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