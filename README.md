# test-a-react-app-with-jest-and-cypress

I`m learning new tools and frameworks for automated testing. This is a practical project. 

Following this guide: https://www.freecodecamp.org/news/test-a-react-app-with-jest-testing-library-and-cypress/

To start, we need to create a Node app with 
    "npm init -y "   

Then install Jest by running
    "npm i -D jest "
-D saves it as a development dependency

I addeed the files index.js (With some JS scripts) and index.test.js (to test those scripts)

If you have these files and NPM and Jest, you can run "npm test" in terminal, and get these results:

test-a-react-app-with-jest-and-cypress@1.0.0 test
> jest

 PASS  ./index.test.js
  √ neuquen is palindrom (1 ms)
  √ bariloche is not palindrom                                                                                                           
  √ [2,7,11,15] and 9 returns [2, 7] (1 ms)                                                                                              
  √ [3,2,4] and 6 returns [2, 4] (1 ms)                                                                                                  
  √ [3,2,4] and 10 returns false                                                                                                         
                                                                                                                                         
Test Suites: 1 passed, 1 total                                                                                                           
Tests:       5 passed, 5 total                                                                                                           
Snapshots:   0 total
Time:        0.299 s, estimated 1 s
Ran all test suites.