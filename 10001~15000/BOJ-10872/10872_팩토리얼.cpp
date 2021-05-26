#include <iostream>

using namespace std;

int main(void) {
    int num, result = 1;
    cin >> num;
    if (num != 0) {         //0팩토리얼은 1
        for (int i = 1; i <= num; i++) {        //입력값까지 반복
            result = result*i;
        }
    }
    cout << result;
}
