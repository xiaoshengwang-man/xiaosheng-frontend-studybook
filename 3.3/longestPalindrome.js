var longestPalindrome = function (s) {
    let temp = new Set()
    let sum = 0
    s.split("").forEach(c => {
        if (temp.has(c)) {
            temp.delete(c)
            sum += 2;
        } else {
            temp.add(c)
        }
    })
    return sum + (temp.size > 0 ? 1 : 0);
};