#include <iostream>
#include <cmath>

using namespace std;

int main() {
	long double R;;
	cin >> R;
	cout << fixed;
	cout.precision(6);
	cout << (pow(R, 2) * 3.1415926535897932) << "\n";
	cout << (2 * pow(R, 2)) << "\n";
}