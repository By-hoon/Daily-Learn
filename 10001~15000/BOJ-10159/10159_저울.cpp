#include<stdio.h>
#define limit 105

int n, m;
int comp1[limit][limit];
int comp2[limit][limit];
bool check1[limit];
bool check2[limit];
int res[limit];

void reset() {
	for (int i = 1; i <= n; i++) check1[i] = 0, check2[i] = 0;
}
void dfs1(int v) {
	check1[v] = 1;
	for (int i = 1; i <= n; i++) if (comp1[v][i] && !check1[i]) dfs1(i);
}

void dfs2(int v) {
	check2[v] = 1;
	for (int i = 1; i <= n; i++) if (comp2[v][i] && !check2[i]) dfs2(i);
}

int main() {
	scanf("%d %d", &n, &m);
	for (int i = 0, x, y; i < m; i++) {
		scanf("%d %d", &x, &y);
		comp1[x][y] = 1;
		comp2[y][x] = 1;
	}
	for (int i = 1; i <= n; i++) {
		int count = 0;
		reset();
		dfs1(i);
		dfs2(i);
		for (int j = 1; j <= n; j++)
			if (check1[j] || check2[j]) count++;
		res[i] = n - count;
	}
	for (int i = 1; i <= n; i++) printf("%d\n", res[i]);
}