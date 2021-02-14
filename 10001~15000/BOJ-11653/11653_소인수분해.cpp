#include <iostream>
#include <cmath>

using namespace std;

int main() {
	int N;
	cin >> N;
    for (int i = 2; i <= sqrt(N); i++)	 //sqrt로 제곱근 계산
    {
        while (N % i == 0)		// i로 딱 나눠 떨어지면 
        {
            cout << i << "\n";
            N = N / i;
        }
    }

    if (N > 1)
        cout << N << "\n";
}
