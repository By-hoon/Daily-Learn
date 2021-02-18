#include <iostream>

using namespace std;

int main() {
	int N;
	int kg[50], cm[50];
	int ck = 1;
	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> kg[i] >> cm[i];
	}
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (kg[i] < kg[j] && cm[i] < cm[j]) {
				ck++;
			}
		}
		cout << ck << ' ';
		ck = 1;
	}
}