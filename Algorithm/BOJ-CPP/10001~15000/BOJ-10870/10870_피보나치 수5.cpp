#include<iostream>

using namespace std;

int run(int num) {
	if (num == 0)return 0;			//0일때 0리턴
	else if (num == 1)return 1;		//1일때 1리턴
	else return run(num-2) + run(num-1);	//재귀로 해당 순서까지 구한다.
}

int main() {
	int n;
	cin >> n;
	int result = run(n);
	cout << result;
}
