function removeDuplicates2(nums: number[]): number {
    // Start `k` at 2 since the first two positions are assumed to be correctly placed
    // given that we allow up to two occurrences of each element.
    let k = 2;

    // Iterate through the array starting from the third element
    for (let i = 2; i < nums.length; i++) {
        // Check if the current element is different from the element at the position
        // two places before `k`. This comparison ensures that more than two duplicates
        // are not allowed. It correctly handles the case where at least two previous
        // elements are the same as the current element.
        if (nums[i] !== nums[k - 2]) {
            // If the current element passes the check, assign it to the position at `k`
            // and then increment `k`.
            nums[k++] = nums[i];
        }
    }

    // Return the new length of the array after duplicates allowing up to two occurrences have been removed.
    return k;
};
