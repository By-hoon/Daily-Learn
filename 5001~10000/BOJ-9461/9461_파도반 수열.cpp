#include <iostream>
#include <vector>

using namespace std;

vector<long long> num;
void pado(int N) {
	long long ans;
	for (int i = 6; i <= N; i++) {
		ans = 0;
		ans = num[i - 5] + num[i - 1];
		num.push_back(ans);
	}
}

int main() {
	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		num = { 0,1,1,1,2,2};
		int N;
		cin >> N;
		pado(N);
		cout << num[N] << endl;
	}
}