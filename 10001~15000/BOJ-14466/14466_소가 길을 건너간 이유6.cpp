#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include<cstring>

using namespace std;

vector<pair<int, int>> cow;
set<pair<int, int>> arr[101][101];
bool ch[101][101];
int dxy[4][2] = { {-1,0},{1,0}, {0,1},{0,-1} };
int N, K, R;

void dfs(int x, int y) {
	if (x < 1 || y < 1 || x > N || y > N) return;
	ch[x][y] = true;
	for (int dir = 0; dir < 4; dir++) {
		int nx = x + dxy[dir][0];
		int ny = y + dxy[dir][1];
		if (ch[nx][ny] || arr[x][y].count({ nx,ny })) continue;
		dfs(nx, ny);
	}
}

int main() {

	int anwser = 0;
	cin >> N >> K >> R;
	for (int i = 0; i < R; i++) {
		int a, b, c, d;
		cin >> a >> b >> c >> d;
		arr[a][b].insert({ c,d });
		arr[c][d].insert({ a,b });
	}
	for (int i = 0; i < K; i++) {
		int x, y;
		cin >> x >> y;
		cow.push_back({ x,y });
	}
	for (int i = 0; i < cow.size(); i++) {
		memset(ch, false, sizeof(ch));
		dfs(cow[i].first, cow[i].second);
		for (int j = i + 1; j < cow.size(); j++) {
			if (!ch[cow[j].first][cow[j].second]) anwser++;
		}
	}
	cout << anwser << "\n";

	return 0;
}