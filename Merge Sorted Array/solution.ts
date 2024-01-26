/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // Index for the last element of nums1
    let j = n - 1; // Index for the last element of nums2
    let merged = m + n - 1; // Index for the last position of the merged array

    // Iterate until we have processed all elements of nums2
    while (j >= 0) {
        // Compare the last elements of nums1 and nums2
        if (nums1[i] >= nums2[j]) {
            // If nums1 has a larger or equal element, place it in the merged array
            nums1[merged] = nums1[i];
            i--; // Move to the previous element in nums1
        } else {
            // Otherwise, place the last element of nums2 in the merged array
            nums1[merged] = nums2[j];
            j--; // Move to the previous element in nums2
        }
        merged--; // Move to the previous position in the merged array
    }

    // If there are still elements remaining in nums2
    while (j >= 0) {
        // Place the remaining elements of nums2 in the merged array
        nums1[merged] = nums2[j];
        j--; // Move to the previous element in nums2
        merged--; // Move to the previous position in the merged array
    }
}
