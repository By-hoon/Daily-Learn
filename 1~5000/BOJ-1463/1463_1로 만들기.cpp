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
		make[i] = make[i - 1] + 1;		//1À» »«´Ù
		if (!(i % 3)) make[i] = min(make[i], make[i / 3] + 1);	//3À¸·Î ³ª´©¾î ¶³¾îÁü
		if (!(i % 2)) make[i] = min(make[i], make[i / 2] + 1);	//2·Î ³ª´©¾î ¶³¾îÁü
	}

	cout << make[n] << endl;
	return 0;
}