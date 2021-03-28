#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
	int n;
	cin >> n;
	vector<int> make(n + 1);

	make[1] = 0;
	for (int i = 2; i <= n; i++) {
		make[i] = make[i - 1] + 1;
		if (!(i % 3)) make[i] = min(make[i], make[i / 3] + 1);
		if (!(i % 2)) make[i] = min(make[i], make[i / 2] + 1);
	}

	cout << make[n] << endl;
	return 0;
}