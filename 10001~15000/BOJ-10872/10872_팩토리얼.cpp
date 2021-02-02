#include <iostream>

using namespace std;

int main(void) {
    int num, result = 1;
    cin >> num;
    if (num != 0) {
        for (int i = 1; i <= num; i++) {
            result = result*i;
        }
    }
    cout << result;
}