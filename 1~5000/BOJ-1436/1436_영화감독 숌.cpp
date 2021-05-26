#include <iostream>
#include <string>

using namespace std;

int main() {
	int N,cnt=0;
	cin >> N;
	
	int num = 665;
	for (;;) {
		num++;
		string s = to_string(num);		//to_string => string형 변환

		if (s.find("666") != string::npos) {		//문자열에서 "666"이 있는지 확인
			++cnt;
		}

		if (cnt == N) {
			cout << num << endl;
			break;
		}
	}
	return 0;
}