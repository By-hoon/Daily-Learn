#include <iostream>
#include <cmath>

using namespace std;

void hanoi(int n, int first, int second, int third) {
	if (n == 1) cout << first << " " << third << '\n';
	else {
		hanoi(n - 1, first, third, second);			// 1����� -> 2�����
		cout << first << " " << third << '\n';	// 1����� -> 3�����
		hanoi(n - 1, second, first, third);			// 2����� -> 3�����
	}
}
int main() {
	int n;
	cin >> n;
	cout << (1 << n) - 1 << '\n'; //(1 << n) => ��Ʈ���� �������� ����Ʈ
	hanoi(n, 1, 2, 3);
	return 0;
}