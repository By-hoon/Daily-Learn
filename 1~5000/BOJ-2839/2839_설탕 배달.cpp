#include<iostream>
using namespace std;
int main() {
	int N, kg5, res;
	int sugar = 0;
	cin >> N;
	kg5 = N / 5;				//5kg 최대값 계산
	while (kg5 >= 0) {
		sugar = 0;
		res = 0;
		if (kg5 > 0)
		{
			sugar = N - 5 * kg5;	//5kg 쓰고 남은 양
			res = kg5;
		}
		else
			sugar = N;
		res += sugar / 3;		//3kg 값 계산
		sugar = sugar % 3;		//3kg 사용하고 남은 무게

		if (sugar == 0)			//나누어 떨어지면 출력
		{
			cout << res;
			break;
		}
		kg5--;				//5kg 값을 줄여감
	}
	if (sugar != 0)
		cout << -1;
}
