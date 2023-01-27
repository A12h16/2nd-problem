function twoSums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i]], nums[j];
            }
        }
    }
    return [];
}
console.log(twoSums([1, 2, 3, 4, 5], 5));
