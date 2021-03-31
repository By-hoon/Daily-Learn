#include<iostream>

using namespace std;

int N;
int num[10001];
int ans[10001];

int Max(int A, int B) {
    if (A > B) return A; return B;
}

void Input()
{
    cin >> N;
    for (int i = 1; i <= N; i++)
    {
        cin >> num[i];
    }
}

void Solution()
{
    ans[0] = num[0];
    ans[1] = num[1];
    ans[2] = num[1] + num[2];

    for (int i = 3; i <= N; i++)
    {
        ans[i] = Max(ans[i - 1], Max(ans[i - 2] + num[i], ans[i - 3] + num[i - 1] + num[i]));
    }

    cout << ans[N] << "\n";
}

int main(void)
{
    Input();
    Solution();

    return 0;
}