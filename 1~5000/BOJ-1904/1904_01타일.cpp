#include<iostream>
#include<vector>

using namespace std;

vector<long long> num = {0,1,2};

void pibo(int N) {

	long long anwser;
	for (int i = 3; i <= N; i++) {
		anwser = 0;
		anwser = num[i - 1] + num[i - 2];
		num.push_back(anwser % 15746);
	}
}
int main() {
	int N;
	cin >> N;
	pibo(N);
	cout << num[N] % 15746;
}