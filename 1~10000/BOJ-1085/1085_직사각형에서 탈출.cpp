#include <iostream>
#include<algorithm>

using namespace std;

int main() {
	int x, y, w, h;
	cin >> x >> y >> w >> h;

	int res1, res2;
	res1 = w - x;
	res2 = h - y;

	int m1 = min(res1, res2);
	int m2 = min(x, y);

	cout << min(m1, m2);
}