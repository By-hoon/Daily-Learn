#include <iostream>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int N;
    cin >> N;

    int arr[10001] = { 0 };

    for (int i = 0; i < N; i++) {           // ���� ī��Ʈ
        int num;
        cin >> num;
        arr[num] += 1;
    }

    for (int i = 1; i <= 10000; i++)        // ������ŭ ���
        for (int j = 0; j < arr[i]; j++)
            cout << i << "\n";
}       //�������