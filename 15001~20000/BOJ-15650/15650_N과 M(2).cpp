#include <iostream>

using namespace std;

int arr[9] = { 0, };
bool ck[9] = { 0, };

void dfs(int start, int cnt, int n, int m)
{
    if (cnt == m)
    {
        for (int i = 0; i < m; i++)
            cout << arr[i] << ' ';
        cout << '\n';
        return;
    }
    for (int i = start; i <= n; i++)
    {
        if (!ck[i])                        //bool값으로 체크
        {
            ck[i] = true;
            arr[cnt] = i;
            dfs(i + 1, cnt + 1, n, m);
            ck[i] = false;
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    dfs(1, 0, n, m);
}