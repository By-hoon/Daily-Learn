#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int map[9][9];
vector<pair<int, int>> blank; 
int cnt = 0;
bool check2 = false;

bool check(pair<int, int> b) {
    int square_x = b.first / 3; 
    int square_y = b.second / 3;
    for (int i = 0; i < 9; i++)
    {
        if (map[b.first][i] == map[b.first][b.second] && i != b.second)
            return false; 
        if (map[i][b.second] == map[b.first][b.second] && i != b.first)
            return false;
    }
    for (int i = 3 * square_x; i < 3 * square_x + 3; i++)
        for (int j = 3 * square_y; j < 3 * square_y + 3; j++)
        {
            if (map[i][j] == map[b.first][b.second])
            {
                if (i != b.first && j != b.second)
                    return false; 
            }
        }
    return true; 
}

void run(int n) {
    if (n == cnt) 
    {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++)
                cout << map[i][j] << ' ';
            cout << '\n';
        }
        check2 = true; 
        return;
    }
    for (int j = 1; j <= 9; j++)
    {
        map[blank[n].first][blank[n].second] = j;
        if (check(blank[n])) 
            run(n + 1);
        if (check2) 
           return;
    }
    map[blank[n].first][blank[n].second] = 0;
    return;
}

int main() {
    pair<int, int> b;
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++)
        {
            cin >> map[i][j];
            if (map[i][j] == 0)
            {
                b.first = i;
                b.second = j;
                blank.push_back(b);
                cnt++;
            }
        }
    }
    run(0);
}