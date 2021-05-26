#include <iostream>
#include <queue>
using namespace std;

struct ROBOT {
    ROBOT(int _r = 0, int _c = 0, int _d = 0) :r(_r), c(_c), d(_d) {}
    int r, c, d;
};
ROBOT robot;

int n, m, type, cnt;

const int dr[] = { 0,-1,0,+1 };
const int dc[] = { -1,0,+1,0 };
const int rr[] = { +1,0,-1,0 };
const int rc[] = { 0,-1,0,+1 };

int map[50][50];
bool clean[50][50];


int main() {
    scanf("%d %d %d %d %d", &n, &m, &robot.r, &robot.c, &robot.d);
    for (int r = 0; r < n; r++) {
        for (int c = 0; c < m; c++) {
            scanf("%d", &map[r][c]);
        }
    }
    queue<ROBOT> q;
    q.push(robot);
    while (!q.empty()) {
        int r = q.front().r;
        int c = q.front().c;
        int d = q.front().d;
        q.pop();
        if (!clean[r][c] && map[r][c] == 0) {
            clean[r][c] = true;
            cnt++;
        }
        for (int i = 0; i < 4; ++i) {
            int turn_r = r + dr[d];
            int turn_c = c + dc[d];
            int turn_d = (d + 3) % 4;
            if (!clean[turn_r][turn_c] && map[turn_r][turn_c] == 0) {
                robot.r = turn_r; robot.c = turn_c; robot.d = turn_d;
                q.push(robot);
                break;
            }
            else {
                d = turn_d;
                if (i == 3) {
                    i = -1;
                    r = r + rr[d]; c = c + rc[d];
                    if (map[r][c] == 1) break;
                }
                continue;
            }
        }
    }
    printf("%d\n", cnt);

}
