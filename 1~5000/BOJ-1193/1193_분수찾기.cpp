#include <iostream>

using namespace std;

int main() {
    int X;
    cin >> X;
    int i = 1;
    int res = 0;
    while (true) {
        if (X - i <= 0) {
            break;
        }
        X -= i;
        i++;        // i¸¦ ÅëÇÑ ÁÙ¹Ù²Þ
        res++;      // ÁÙ¹Ù²ñ È½¼ö Ä«¿îÆÃ
    }
    if (res % 2 == 0)
        cout << res + 2 - X << "/" << X; //È¦¼öÇà Ãâ·Â
    else
        cout << X << "/" << res + 2 - X; //Â¦¼öÇà Ãâ·Â

    return 0;
}