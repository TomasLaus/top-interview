function removeElement(nums: number[], val: number): number {
    // Initialize k to 0, which will track the position for the next non-val element
    let k = 0;

    // Iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not the value we want to remove,
        if (nums[i] !== val) {
            // Place it at the kth position
            nums[k] = nums[i];
            // Increment k
            k++;
        }
        // If the current element is the value to remove, do nothing and continue
    }

    // Return k, which is the new length of the array without the val elements
    return k;
};