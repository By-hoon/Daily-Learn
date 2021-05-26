#include<vector>
#include<utility>
#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
	int N;
	cin >> N;
	vector<pair<int, int>> arr;
	pair<int, int> arr2;
	for (int i = 0; i < N; i++)
	{
		cin >> arr2.first >> arr2.second;
		arr.push_back(arr2);
	}
	sort(arr.begin(), arr.end());
	for (int i = 0; i < N; i++)
		cout << arr[i].first << ' ' << arr[i].second << '\n';
}