#include <iostream>

using namespace std;

int arr[9] = { 0, };

void dfs(int num, int cnt, int n, int m)
{
    if (cnt == m)
    {
        for (int i = 0; i < m; i++)
            cout << arr[i] << ' ';
        cout << '\n';
        return;
    }
    for (int i = num; i <= n; i++)
    {
        arr[cnt] = i;
        dfs(i, cnt + 1, n, m);
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    dfs(1, 0, n, m);
}