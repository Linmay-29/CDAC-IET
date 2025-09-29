#include <iostream>
using namespace std;

class Solution {
public:
    int TwoSum(int* num, int n, int target) {
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (num[i] + num[j] == target) {
                    cout << "Pair found at indices: " << i << " and " << j << endl;
                    return 1;
                }
            }
        }
        cout << "Pair not found" << endl;
        return 0;
    }
};

int main() {
    Solution sol;
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int n = sizeof(nums) / sizeof(nums[0]);

    sol.TwoSum(nums, n, target);

    return 0;
}

