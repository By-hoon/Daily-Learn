#include <iostream>
#include <string>

using namespace std;

int main() {
	int N,cnt=0;
	cin >> N;
	
	int num = 665;
	for (;;) {
		num++;
		string s = to_string(num);		//to_string => string�� ��ȯ

		if (s.find("666") != string::npos) {		//���ڿ����� "666"�� �ִ��� Ȯ��
			++cnt;
		}

		if (cnt == N) {
			cout << num << endl;
			break;
		}
	}
	return 0;
}