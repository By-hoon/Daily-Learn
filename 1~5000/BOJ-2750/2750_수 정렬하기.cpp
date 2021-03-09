#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int N;
    int num[1001] = { 0 };

    cin >> N;
    for (int i = 0; i < N; i++) {
        cin >> num[i];
    }
    sort(num, num + N);
    for (int i = 0; i < N; i++) {
        cout << num[i] << endl;
    }

    return 0;
}