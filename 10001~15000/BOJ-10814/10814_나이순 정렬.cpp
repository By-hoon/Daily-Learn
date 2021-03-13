#include <string>
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(pair<int, string> a, pair<int, string> b)
{
	return a.first < b.first;
}

int main() {
	int N;
	cin >> N;
	vector<pair<int, string>> arr;
	pair<int, string> arr2;
	for (int i = 0; i < N; i++)
	{
		cin >> arr2.first >> arr2.second;
		arr.push_back(arr2);
	}
	stable_sort(arr.begin(), arr.end(), compare);
	for (int i = 0; i < N; i++)
		cout << arr[i].first << ' ' << arr[i].second << '\n';
}