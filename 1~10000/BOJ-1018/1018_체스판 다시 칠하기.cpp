#include <iostream>
#include <cstring>
#include <algorithm>
#include <utility>

using namespace std;

char map[60][60];

int chess(int x, int y) {
	int a = 0, b = 0;
	for (int i = 0; i < 8; i++) {
		for (int j = 0; j < 8; j++) {
			if ((i + j) % 2 == 0) {
				if (map[x + i][y + j] != 'B')a++;
				if (map[x + i][y + j] != 'W')b++;
			}
			else {
				if (map[i + x][j + y] != 'W')a++;
				if (map[i + x][j + y] != 'B')b++;
			}
		}
	}
	return min(a, b);
}

int main() {
	int N, M;
	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			cin >> map[i][j];
		}
	}

	int minv = 100000;

	for (int i = 0; i + 7 < N; i++) {
		for (int j = 0; j + 7 < M; j++) {
			int tmp = chess(i, j);
			if (tmp < minv)minv = tmp;
		}
	}
	cout << minv;
}