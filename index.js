module.exports = isPalindrome;

function isPalindrome(string) {
    // O(n)
    // Put a pointer at each extreme of the word and iterate "inwards"
    // At each iteration, check if the pointers represent equal values
    // If this condition isn't accomplished, the word isn't a palindrome
    let left = 0
    let right = string.length - 1

    while (left < right) {
        if (string[left] === string[right]) {
            left += 1
            right -= 1
        }
        else return false
    }

    return true
}
