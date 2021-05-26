#include <iostream>

using namespace std;

int arr[50] = { 0,1,};
int fibonacci(int N)
{
    if (N == 0 || N == 1)
        return arr[N];
    else if (arr[N] == 0)
        arr[N] = fibonacci(N - 1) + fibonacci(N - 2);
    return arr[N];
}
int main() {
    int T;
    cin >> T;
    int tmp;
    for (int i = 0; i < T; i++)
    {
        cin >> tmp;
        if (tmp == 0)
            cout << "1 0" << '\n';
        else
            cout << fibonacci(tmp - 1) << ' ' << fibonacci(tmp) << '\n';
    }
}