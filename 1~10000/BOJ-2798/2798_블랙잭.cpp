#include <iostream>

using namespace std;

int main() {
	int N, M;
	cin >> N >> M;
	int arr[100];
	for (int i = 0; i < N; i++) {
		cin >> arr[i];
	}
	
	int max = 0;
	for (int i = 0; i < N - 2; i++) {			//3중for문으로 세개 숫자 합을 비교
		for (int j = i + 1; j < N - 1; j++) {
			for (int h = j + 1; h < N; h++) {
				if (arr[i] + arr[j] + arr[h] <= M && M - (arr[i] + arr[j] + arr[h]) < M - max) {
					max = arr[i] + arr[j] + arr[h];
				}
			}
		}
	}
	cout << max;
}