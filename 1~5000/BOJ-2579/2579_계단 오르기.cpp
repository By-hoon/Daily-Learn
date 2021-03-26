#include<iostream>

using namespace std;

int N;
int num[301];
int ans[301];

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
    ans[1] = num[1];   
    ans[2] = num[1] + num[2];
    ans[3] = Max(num[1] + num[3], num[2] + num[3]);

    for (int i = 4; i <= N; i++)
    {
        ans[i] = Max(ans[i - 2] + num[i], ans[i - 3] + num[i - 1] + num[i]);
    }

    cout << ans[N] << "\n";
}

int main(void)
{
    Input();
    Solution();

    return 0;
}