#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;

vector<int> arr;

int main() {
    int N, num, range, middle = 0, mo_num, ave = 0;
    int most = -9999;
    int Nber[8001] = { 0, };
    bool check = false;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        cin >> num;
        arr.push_back(num);
        ave += num;
        Nber[num + 4000]++;
    }
    sort(arr.begin(), arr.end());
    for (int i = 0; i < 8001; i++)         //ÃÖºó°ª
    {
        if (Nber[i] == 0)
            continue;
        if (Nber[i] == most)
        {
            if (check)
            {
                mo_num = i - 4000;
                check = false;
            }
        }
        if (Nber[i] > most)
        {
            most = Nber[i];
            mo_num = i - 4000;
            check = true;
        }
    }
    ave = round((float)ave / N);            //Æò±Õ
    middle = arr[arr.size() / 2];           //Áß¾Ó°ª
    range = arr.back() - arr.front();       //¹üÀ§
    cout << ave << '\n' << middle << '\n' << mo_num << '\n' << range;
}