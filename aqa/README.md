# TASK

Create a framework and automate 3 test cases using API: 

https://swapi.dev 

And JSON schemas: 

https://swapi.dev/documentation#schema

Please send a link to a git repository after completion.


## Test cases:
1. Darth Vader is a male who was born year 41.9BBY on planet Tatooine with yellow eyes. 
2. Yoda's species natural habitat is unknown, they speak Galactic basic language, their average lifespan is 900 years.
3. Verify 404 error for non-existing route


## Requirements:
- Use Typescript
- Write asynchronous tests
- Use config file for specifying urls
- Tests must run in parallel
- Implement response validator against json-schema
- Write a README file and describe how to run your project


### Additional:
- It is preferred to use axios/got
- It is preferred to use mocha/chai
- Generate Typescript interfaces based on json-schema
- Generate Allure report
- Run all tests on CI 
- Use programming patterns 