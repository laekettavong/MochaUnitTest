/*
* Unit Tests
*/


// Dependencies
const assert = require('assert');
const lib = require('./../app/lib');
const StringUtils = lib.StringUtils;
const NumberUtils = lib.NumberUtils;
const DateUtils = lib.DateUtils;
const Colors = lib.Colors;

// Container for tests
const unit = {};
let testCounter = 1;

/* ----- StringUtils Test Cases ----- */
// Test case 1
unit[`[${testCounter++}] StringUtils.isTypeOfString should pass when argument is string type`] = (done) => {
    assert.equal(StringUtils.isTypeOfString('hello'), true);
    done();
}

// Test case 2
unit[`[${testCounter++}] StringUtils.isTypeOfString should fail when argument is integer type`] = (done) => {
    assert.equal(StringUtils.isTypeOfString(123), true);
    done();
}

// Test case 3
unit[`[${testCounter++}] StringUtils.isTypeOfString should fail when argument is an array`] = (done) => {
    assert.equal(StringUtils.isTypeOfString(['hello', 'world']), true);
    done();
}

// Test case 4
unit[`[${testCounter++}] StringUtils.isTypeOfString should fail when argument is undefined`] = (done) => {
    let notDefined;
    assert.equal(StringUtils.isTypeOfString(notDefined), false);
    done();
}

// Test case 5
unit[`[${testCounter++}] StringUtils.isTypeOfString should fail when argument is an object literal`] = (done) => {
    assert.equal(StringUtils.isTypeOfString({'hello' : 'world'}), false);
    done();
}

// Test case 6
unit[`[${testCounter++}] StringUtils.isTypeOfString should fail when argument isa boolean`] = (done) => {
    assert.equal(StringUtils.isTypeOfString(true), false);
    done();
}

// Test case 7
unit[`[${testCounter++}] StringUtils.isPalindrome should fail when argument is abcdecba`] = (done) => {
    assert.equal(StringUtils.isPalindrome('abcdecba'), false);
    done();
}

// Test case 8
unit[`[${testCounter++}] StringUtils.isPalindrome, 'nurses run' is a palindrome`] = (done) => {
    assert.equal(StringUtils.isPalindrome('nurses run'), true);
    done();
}

// Test case 9
unit[`[${testCounter++}] StringUtils.isPalindrome, 'madam' is a palindrome - should pass`] = (done) => {
    assert.equal(StringUtils.isPalindrome('madam'), true);
    done();
}

// Test case 10
unit[`[${testCounter++}]StringUtils.isPalindrome, 'madam' is a palindrome - should fail`] = (done) => {
    assert.equal(StringUtils.isPalindrome('madam'), false);
    done();
}

// Test case 11
unit[`[${testCounter++}] StringUtils.isPalindrome, 1234321 (integer) is a palindrome`] = (done) => {
    assert.equal(StringUtils.isPalindrome(1234321), true);
    done();
}

// Test case 12
unit[`[${testCounter++}] StringUtils.isPalindrome, 909099 (integer) is not a palindrome`] = (done) => {
    assert.equal(StringUtils.isPalindrome(909099), false);
    done();
}

// Test case 13
unit[`[${testCounter++}] StringUtils.isPalindrome, should fail when argument is an object literal and not string or integer`] = (done) => {
    assert.doesNotThrow(() => {
        StringUtils.isPalindrome({});
        done();
    }, TypeError);
}

// Test case 14
unit[`[${testCounter++}] StringUtils.isPalindrome, should fail when argument is an array and not string or integer`] = (done) => {
    assert.doesNotThrow(() => {
        StringUtils.isPalindrome([]);
        done();
    }, TypeError);
}

// Test case 15
unit[`[${testCounter++}] StringUtils.capitalizeAllFirstLetter, should fail when argument is not string type`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal( StringUtils.capitalizeAllFirstLetter(123456), false);
        done();
    }, TypeError);
}

// Test case 16
unit[`[${testCounter++}] StringUtils.capitalizeAllFirstLetter, should pass, 'hello world, how are you?' should be 'Hello World, How Are You?`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal( StringUtils.capitalizeAllFirstLetter('hello world, how are you?'), 'Hello World, How Are You?');
        done();
    }, TypeError);
}

// Test case 17
unit[`[${testCounter++}] StringUtils.capitalizeAllFirstLetter, should fail, 'quick brown fox' should be 'QuickBrownFox'`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal( StringUtils.capitalizeAllFirstLetter('quick brown fox'), 'QuickBrownFox');
        done();
    }, TypeError);
}

// Test case 18
unit[`[${testCounter++}] StringUtils.capitalizeAllFirstLetter, should pass, 'HeLlO wOrLD' should be 'HeLlO WOrLD'`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal( StringUtils.capitalizeAllFirstLetter('HeLlO wOrLD'), 'HeLlO WOrLD');
        done();
    }, TypeError);
}

// Test case 19
unit[`[${testCounter++}] StringUtils.removeWhiteSpace, should pass, ' coding is Awesome! ' should be 'codingisAwesome!'`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal( StringUtils.removeWhiteSpace(' coding is Awesome! '), 'codingisAwesome!');
        done();
    }, TypeError);
}


/* ----- NumberUtils Test Cases ----- */

// Test case 20
unit[`[${testCounter++}] NumberUtils.countTo, should fail since '1000' is string type`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.countTo('1000', (err, str) => {
            assert.ok(err);
            assert.equal(str, 'Done');
            done();
        });

    }, TypeError);
}

// Test case 21
unit[`[${testCounter++}] NumberUtils.countTo, should pass since 1000 is number type`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.countTo(1000, (err, str) => {
            assert.ok(err);
            assert.equal(str, 'Done');
            done();
        });

    }, TypeError);
}

// Test case 22
unit[`[${testCounter++}] NumberUtils.getMaxValue, should fail when empty argument`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.getMaxValue();
        done();
    }, TypeError);
}

// Test case 23
unit[`[${testCounter++}] NumberUtils.getMaxValue, should fail when argument is not an array of integers`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.getMaxValue('12,14,99');
        done();
    }, TypeError);
}

// Test case 24
unit[`[${testCounter++}] NumberUtils.getMaxValue, should fail when not all element in array are integers`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.getMaxValue([44, 12 , 3, '50', 27, 95, 7]);
        done();
    }, TypeError);
}


// Test case 25
unit[`[${testCounter++}] NumberUtils.getMaxValue, should pass, highest value should be 127 from [44, 12 , 99, 3, 50, 127, 95, 7]`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal(NumberUtils.getMaxValue([44, 12 , 99, 3, 50, 127, 95, 7]), 127);
        done();
    }, TypeError);
}

// Test case 26
unit[`[${testCounter++}] NumberUtils.getMinValue, should fail when not all element in array are integers`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.getMinValue([44, -12 , 3, '-50', 27, -95, 7]);
        done();
    }, TypeError);
}


// Test case 27
unit[`[${testCounter++}] NumberUtils.getMinValue, should pass, lowedt value should be -95 from [44, -12 , 13, -50, 27, -95, 1, 207, 0]`] = (done) => {
    assert.doesNotThrow(() => {
        assert.equal(NumberUtils.getMinValue([44, -12 , 13, -50, 27, -95, 1, 207, 0]), -95);
        done();
    }, TypeError);
}

// Test case 28
unit[`[${testCounter++}] NumberUtils.getMinValue, should fail when an empty array is passed in]`] = (done) => {
    assert.doesNotThrow(() => {
        NumberUtils.getMinValue([]);
        done();
    }, TypeError);
}

/* ----- DateUtils Test Cases ----- */

// Test case 29
unit[`[${testCounter++}] DateUtils.before, should fail when wrong datatype is passed in`] = (done) => {
    assert.doesNotThrow(() => {
        let date1 = new DateUtils(new Date());
        date1.before('today')
        done();
    }, TypeError);
}

// Test case 30
unit[`[${testCounter++}] DateUtils.before, should pass when date1 is 24 hours before the date2`] = (done) => {
    assert.doesNotThrow(() => {
        let date1 = new DateUtils(new Date());
        let date2 = new DateUtils(new Date())
        date1.setHours(date1.getHours() - 24);
        assert.equal(date1.before(date2), true);
        done();
    }, TypeError);
}

// Test case 31
unit[`[${testCounter++}] DateUtils.before, should fail when date2 is 24 hours before the date1`] = (done) => {
    assert.doesNotThrow(() => {
        let date1 = new DateUtils(new Date());
        let date2 = new DateUtils(new Date())
        date1.setHours(date1.getHours() - 24);
        assert.equal(date2.before(date1), true);
        done();
    }, TypeError);
}

// Test case 32
unit[`[${testCounter++}] DateUtils.after, should pass when date2 is 24 hours after the date1`] = (done) => {
    assert.doesNotThrow(() => {
        let date1 = new DateUtils(new Date());
        let date2 = new DateUtils(new Date())
        date1.setHours(date1.getHours() - 24);
        assert.equal(date2.after(date1), true);
        done();
    }, TypeError);
}

// Test case 33
unit[`[${testCounter++}] DateUtils.after, should fail when date1 is being compared to an undefined date`] = (done) => {
    assert.doesNotThrow(() => {
        let date1 = new DateUtils(new Date());
        let date2;
        date1.setHours(date1.getHours() - 24);
        assert.equal(date1.after(date2), true);
        done();
    }, TypeError);
}


module.exports = unit;