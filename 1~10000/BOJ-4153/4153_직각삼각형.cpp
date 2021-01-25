#include <iostream>
#include <cmath>

using namespace std;

int main() {
	int x, y, z;
	for (;;) {
		cin >> x >> y >> z;
		if (x + y + z == 0)break;
		int M = max(max(x, y), max(x, z));
		if ((pow(M, 2) * 2) == (pow(x, 2) + pow(y, 2) + pow(z, 2)))
			cout << "right" << '\n';
		else cout << "wrong" << '\n';
	}
}