#include <iostream>
#include <cmath>

using namespace std;

void hanoi(int n, int first, int second, int third) {
	if (n == 1) cout << first << " " << third << '\n';
	else {
		hanoi(n - 1, first, third, second);			// 1¹ø±âµÕ -> 2¹ø±âµÕ
		cout << first << " " << third << '\n';	// 1¹ø±âµÕ -> 3¹ø±âµÕ
		hanoi(n - 1, second, first, third);			// 2¹ø±âµÕ -> 3¹ø±âµÕ
	}
}
int main() {
	int n;
	cin >> n;
	cout << (1 << n) - 1 << '\n'; //(1 << n) => ºñÆ®¿¡¼­ ¿ŞÂÊÀ¸·Î ½¬ÇÁÆ®
	hanoi(n, 1, 2, 3);
	return 0;
}