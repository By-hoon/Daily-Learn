#include <iostream>
#include <cmath>

using namespace std;

int main() {
	int x, y, z;
	for (;;) {
		cin >> x >> y >> z;
		if (x + y + z == 0)break; 		// 입력이 0,0,0인지 확인하여 종료
		int M = max(max(x, y), max(x, z));	// 제일 큰 값을 M으로 지정
		if ((pow(M, 2) * 2) == (pow(x, 2) + pow(y, 2) + pow(z, 2)))   // 빗변제곱의*2 = 삼각형 각 변 제곱의 합 
			cout << "right" << '\n';
		else cout << "wrong" << '\n';
	}
}
