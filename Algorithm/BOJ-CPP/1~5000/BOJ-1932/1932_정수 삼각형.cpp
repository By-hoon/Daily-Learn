#include <iostream>
#include <algorithm>

using namespace std;

int num[501][501];
int ans[501][501];


int main() {
	int size;
	cin >> size;
	for (int i = 0; i < size; i++) {
		for (int j = 0; j <= i; j++) {
			cin >> num[i][j];
		}
	}

	ans[0][0] = num[0][0];
	for (int i = 1; i < size; i++) {
		for (int j = 0; j <= i; j++) {
			if (j == 0)
				ans[i][j] = ans[i - 1][j] + num[i][j];
			else if (i == j)
				ans[i][j] = ans[i - 1][j - 1] + num[i][j];
			else
				ans[i][j] = max(ans[i - 1][j - 1] + num[i][j], ans[i - 1][j] + num[i][j]);
		}
	}

	int max = 0;
	for (int i = 0; i < size; i++) {
		if (ans[size - 1][i] >= max)
			max = ans[size - 1][i];
	}

	cout << max;
}