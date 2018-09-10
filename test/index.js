/*
* Test runner
*/

const lib = require('./../app/lib');
const Colors = lib.Colors;



const TestRunner = class TestRunner {
    constructor() {
        this.tests = {
            unit : require('./unit')
        };
        
        this.testCount = 0;
    }

    /*
    * Iterates through the test cases and invoke the corresponding function
    */
    runTests() {
        let errors = [];
        let successes = 0;
        let limit = this.getTestCount();
        let counter = 0;
        Object.entries(this.tests).forEach(([containerKey, containerVal]) => {
            Object.entries(containerVal).forEach(([testCase, testFunct]) => {
                // Self invoking anonymous function
                (() => {
                    try {
                        testFunct(() => {
                             // If it calls back withou throwing, then it succeeded, so log it in green
                             console.log(Colors.GREEN, testCase);
                             counter++;
                             successes++;
                             if(counter == limit) {
                                this.generateTestReport(limit, successes, errors);
                             }
                        });
                    } catch(err) {
                        // If it throws, then it failed, so capture the error thrown and log it in red
                        errors.push({'name' : testCase, 'error' : err});
                        console.log(Colors.RED, testCase);
                        counter++;
                        if(counter == limit) {
                            this.generateTestReport(limit, successes, errors);
                        }
                    }
                })();
            });
        });
    }

    /*
    * Determines the number of cases to be teted
    */
    getTestCount() {
        Object.entries(this.tests).forEach(([key, val]) => {
            this.testCount += Object.entries(val).length;
        });
        return this.testCount;
    }

    /*
    * Outputs the test reports based on the provide metrics
    * 
    * @param {limit} the number of cases under test)
    * @param {successes} number of successful test cases
    * @param {errors} array of cases that failed
    * 
    */
    generateTestReport(limit, successes, errors) {
        console.log('');
        console.log(`\x1b[33m----------BEGIN TEST REPORT----------\x1b[0m`);
        console.log('');
        console.log('Total Tests: ', `\x1b[33m${limit}\x1b[0m`);
        console.log('Pass: ', `\x1b[32m${successes}\x1b[0m`);
        console.log('Failed: ', `\x1b[31m${errors.length}\x1b[0m`);
        console.log('');
        // If there are errors, print them in detail
        if(errors.length > 0) {
            console.log(`\x1b[31m----------BEGIN ERROR DETAILS----------'\x1b[0m`);
            console.log('');
            errors.forEach((testError) => {
                console.log(Colors.RED, testError.name);
                console.log(testError.error);
                console.log('');

            });
            console.log('');
            console.log(`\x1b[31m----------END ERROR DETAILS----------'\x1b[0m`);
        }
        console.log('');
        console.log(`\x1b[33m----------END TEST REPORT----------\x1b[0m`);
        process.exit(0);
    }
}

new TestRunner().runTests();