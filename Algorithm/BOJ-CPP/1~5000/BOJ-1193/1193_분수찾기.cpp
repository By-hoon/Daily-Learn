#include <iostream>

using namespace std;

int main() {
    int X;
    cin >> X;
    int i = 1;
    int res = 0;
    while (true) {
        if (X - i <= 0) {
            break;
        }
        X -= i;
        i++;        // i�� ���� �ٹٲ�
        res++;      // �ٹٲ� Ƚ�� ī����
    }
    if (res % 2 == 0)
        cout << res + 2 - X << "/" << X; //Ȧ���� ���
    else
        cout << X << "/" << res + 2 - X; //¦���� ���

    return 0;
}