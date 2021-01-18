#include<iostream>
using namespace std;
int main() {
	int N, kg5, res;
	int sugar = 0;
	cin >> N;
	kg5 = N / 5;
	while (kg5 >= 0) {
		sugar = 0;
		res = 0;
		if (kg5 > 0)
		{
			sugar = N - 5 * kg5;
			res = kg5;
		}
		else
			sugar = N;
		res += sugar / 3;
		sugar = sugar % 3;

		if (sugar == 0)
		{
			cout << res;
			break;
		}
		kg5--;
	}
	if (sugar != 0)
		cout << -1;
}