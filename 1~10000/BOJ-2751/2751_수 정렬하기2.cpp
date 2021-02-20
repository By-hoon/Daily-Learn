#include<iostream>

using namespace std;

int N, num[1000001];
int* num2;

void merge(int left, int right) {
	int mid = (left + right) / 2;

	int i = left;
	int j = mid + 1;
	int k = left;
	while (i <= mid && j <= right)
	{
		if (num[i] <= num[j])
			num2[k++] = num[i++];
		else
			num2[k++] = num[j++];
	}

	int tmp = i > mid ? j : i;

	while (k <= right) num2[k++] = num[tmp++];

	for (int i = left; i <= right; i++) num[i] = num2[i];
}

void partition(int left, int right) {
	int mid;
	if (left < right)
	{
		mid = (left + right) / 2;
		partition(left, mid);
		partition(mid + 1, right);
		merge(left, right);
	}
}

int main() {
	scanf("%d", &N);
	num2 = new int[N];
	for (int i = 0; i < N; i++) scanf("%d", &num[i]);

	partition(0, N - 1);

	for (int i = 0; i < N; i++) printf("%d\n", num[i]);
}