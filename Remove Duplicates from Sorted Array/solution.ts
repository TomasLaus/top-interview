function removeDuplicates(nums: number[]): number {
    let k: number = 0; // Initialize k to track the position for placing unique elements

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element is not the same as the next element
        if (nums[i] !== nums[i + 1]) {
            // Assign the unique element to the k-th position in the array
            nums[k] = nums[i];
            // Increment k for the next potential unique element
            k++;
        }
    }

    // Return the count of unique elements
    return k;
};
