// The provided function, majorityElement, is an implementation of the Boyer-Moore Voting Algorithm. 
function majorityElement(nums: number[]): number {
    // Initialize the votes count and assume the first element is the majority element.
    let votes = 1;
    let majority = nums[0];

    // Iterate through the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // If votes drop to 0, we assume the current element might be the new majority element.
        if (votes === 0) {
            votes++;
            majority = nums[i];
        }
        // If the current element is the same as our assumed majority, increase the vote count.
        else if (nums[i] == majority) {
            votes++;
        }
        // If the current element is different, decrease the vote count.
        else {
            votes--;
        }
    }

    // Return the majority element.
    // Note: This algorithm assumes that a majority element always exists in the array.
    return majority;
};
