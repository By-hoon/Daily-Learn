#include <iostream>

using namespace std;

int main() {
	int x[3], y[3];
	int resx, resy;
	for (int i = 0; i < 3; i++) {
		cin >> x[i] >> y[i];
	}
	if (x[0] == x[1])resx = x[2];		//짝이 없는 x값을 찾는 과정
	else if (x[0] == x[2])resx = x[1];
	else resx = x[0];

	if (y[0] == y[1])resy = y[2];		//짝이 없는 y값을 찾는 
	else if (y[0] == y[2])resy = y[1];
	else resy = y[0];

	cout << resx << " " << resy;

}
