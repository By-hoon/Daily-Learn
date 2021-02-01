#include <iostream>

using namespace std;

int main() {
	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		int x1, x2, y1, y2, r1, r2;
        int d, check1, check2;
		cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;
        d = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        check1 = (r1 - r2) * (r1 - r2);
        check2 = (r1 + r2) * (r1 + r2);
        if (d == 0)
        {
            if (check1 == 0)
                cout << "-1" << '\n';
            else
                cout << "0" << '\n';
        }
        else if (d == check1 || d == check2)
            cout << "1" << '\n';
        else if (check1 < d && d < check2)
            cout << "2" << '\n';
        else
            cout << "0" << '\n';
    }
}