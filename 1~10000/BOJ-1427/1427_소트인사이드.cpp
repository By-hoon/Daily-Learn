#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

bool compare(char a, char b)        //�������� ��
{
    return a > b;
}
int main() {
    string a;
    cin >> a;
    sort(a.begin(), a.end(), compare);      //sort �Լ�
    cout << a;
}