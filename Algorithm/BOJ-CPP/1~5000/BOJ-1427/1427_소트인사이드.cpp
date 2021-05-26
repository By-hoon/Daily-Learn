#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

bool compare(char a, char b)        //내림차순 비교
{
    return a > b;
}
int main() {
    string a;
    cin >> a;
    sort(a.begin(), a.end(), compare);      //sort 함수
    cout << a;
}