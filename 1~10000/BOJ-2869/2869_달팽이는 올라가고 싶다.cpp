#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int A, B, V, ans = 0;
    cin >> A >> B >> V;
    int last = V - A;
    if (last % (A - B) == 0) { ans = last / (A - B) + 1; }
    else { ans = last / (A - B) + 2; }
    cout << ans << '\n';
    return 0;
}