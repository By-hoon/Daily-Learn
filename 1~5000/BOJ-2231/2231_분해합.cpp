#include <iostream>

using namespace std;

int main() {
	int N;

	cin >> N;

	for (int i = 1; i < N; ++i) {
		int sum = i;
		int div = i;

		while (div) {
			sum += div % 10;
			div /= 10;
		}

		if (N == sum) {
			cout << i << endl;		//endl => 줄바꿈 출력 std::endl
			return 0;
		}
	}

	cout << "0" << endl;

	return 0;
}
