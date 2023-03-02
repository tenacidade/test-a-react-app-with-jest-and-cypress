isPalindrome = require('./index.js')
//Require the function we want to test: isPalindrome = require('./index.js')

test('neuquen is palindrom', () => {
    expect(isPalindrome("neuquen")).toBe(true)
})



test('bariloche is not palindrom', () => {
    expect(isPalindrome("bariloche")).toBe(false)
})


/*
 * The test() function is provided by Jest and within it 
 * we will put the code we want Jest to execute.
 * 
 * test() takes two parameters. The first is a test description, 
 * which is a distinctive name that will show on our console when the test is run.
 * 
 * The second parameter is a callback, which contains the actual testing code.
 * 
 * Within this callback we're calling the expect() function (also provided by Jest)
 * expect() takes our function as parameter, which itself is receiving a parameter we made up.
 * 
 * Last, we chain the .toBe() function (provided by Jest too) and as parameter
 * we pass it the value we expect isPalindrome() to return for each case.
 * 
 * ("neuquen" is a palindrome so our function should return true, and "bariloche" is not, so it should return false.)
 * 
*/