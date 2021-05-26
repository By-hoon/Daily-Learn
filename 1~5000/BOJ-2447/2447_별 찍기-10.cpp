#include <iostream>

using namespace std;

char map[2200][2200];

void fill() {						//빈칸으로 맵을 채워넣음
	for (int i = 0; i < 2200; ++i) {
		for (int j = 0; j < 2200; ++j) {
			map[i][j] = ' ';
		}
	}
}
void fillStar(int n, int x, int y) {			//별을 채워넣음

	if (n == 1) {
		map[x][y] = '*';
		return;
	}
	int div = n / 3;
	for (int i = 0; i < 3; ++i) {
		for (int j = 0; j < 3; ++j) {
			if (i == 1 && j == 1) {
				continue;
			}
			fillStar(div, x + (div * i), y + (div * j));	//재귀
		}
	}
	return;
}

int main()
{
	int n;
	cin >> n;
	fill();
	fillStar(n, 0, 0);

	for (int i = 0; i < n; ++i) {
		for (int j = 0; j < n; ++j) {
			cout << map[i][j];
		}
		cout << endl;
	}

	return 0;
}
