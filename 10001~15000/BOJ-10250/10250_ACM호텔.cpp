#include <iostream>

using namespace std;

int main() {
    int T;
    cin >> T;
    int H, W, N;
    for (int i = 0; i < T; i++) {
        cin >> H >> W >> N;
        int HH, WW;
        HH = N % H; // H�� ���� �������� HH�� �����Ͽ� �� ���� ���Ѵ�.
        WW = N / H; // H�� ���� ���� WW�� ����
        if (HH > 0)
            WW++; // ȣ ���� 1�������� �����̹Ƿ� 1�� ȣ ���� �����ش�.
        else
            HH = H; // �������� ������ �� �����̹Ƿ� H�� �� ���� ���Ѵ�.
        cout << HH * 100 + WW << '\n';
    }
}