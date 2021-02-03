#include<iostream>

using namespace std;

int run(int num) {
	if (num == 0)return 0;
	else if (num == 1)return 1;
	else return run(num-2) + run(num-1);
}

int main() {
	int n;
	cin >> n;
	int result = run(n);
	cout << result;
}