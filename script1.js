function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        // Only start counting if num is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

// Example usage
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
