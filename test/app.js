/* global describe it */
const { assert, expect } = require('chai')
const { StringUtil, NumberUtil, DateUtil } = require('./../app/lib')

/* ----- StringUtil Test Cases ----- */
let testCounter = 1
describe('StringUtil tests', () => {

    // Test case 1
    it(`[${testCounter++}] StringUtil.isTypeOfString should pass when argument is string type`, (done) => {
        assert.equal(StringUtil.isTypeOfString('hello'), true)
        done()
    })

    // Test case 2
    it(`[${testCounter++}] StringUtil.isTypeOfString should fail when argument is integer type`, (done) => {
        assert.isFalse(StringUtil.isTypeOfString(123), '123 should be number')
        done()
    })

    // Test case 3
    it(`[${testCounter++}] StringUtil.isTypeOfString should pass when argument is undefined and expected result is false`, (done) => {
        let notDefined
        assert.isFalse(StringUtil.isTypeOfString(notDefined), 'undefined should return false')
        done()
    })

    // Test case 4
    it(`[${testCounter++}] StringUtil.isPalindrome should pass when argument is abcdecba and the expected result is false`, (done) => {
        assert.isFalse(StringUtil.isPalindrome('abcdecba'), '\'abcdecba\' is not a palindrome')
        done()
    })

    // Test case 5
    it(`[${testCounter++}] StringUtil.isPalindrome, 'nurses run' is a palindrome`, (done) => {
        assert.isTrue(StringUtil.isPalindrome('nurses run'), '\nurses run\' is a palindrome')
        done()
    })

    // Test case 6
    it(`[${testCounter++}] StringUtil.isPalindrome, 'madam' is a palindrome`, (done) => {
        assert.isTrue(StringUtil.isPalindrome('madam'), '\'madam\' is a palindrome')
        done()
    })

    // Test case 7
    it(`[${testCounter++}] StringUtil.isPalindrome, 1234321 (integer) is a palindrome`, (done) => {
        assert.isTrue(StringUtil.isPalindrome(1234321), '\'1234321 is a palindrome')
        done()
    })

    // Test case 8
    it(`[${testCounter++}] StringUtil.isPalindrome, should fail when argument is an object literal and not string or integer`, (done) => {
        expect(StringUtil.isPalindrome.bind(StringUtil.isPalindrome, {})).to.throw('Invalid datatype')
        done()
    })

    // Test case 9
    it(`[${testCounter++}] StringUtil.isPalindrome, should fail when argument is an array and not string or integer`, (done) => {
        expect(StringUtil.isPalindrome.bind(StringUtil.isPalindrome, [])).to.throw('Invalid datatype')
        done()
    })

    // Test case 10
    it(`[${testCounter++}] StringUtil.capitalizeAllFirstLetter, should fail when argument is not string type`, (done) => {
        expect(StringUtil.capitalizeAllFirstLetter.bind(StringUtil.capitalizeAllFirstLetter, 123456)).to.throw('Invalid datatype')
        done()
    })

    // Test case 11
    it(`[${testCounter++}] StringUtil.capitalizeAllFirstLetter, should pass, 'hello world, how are you?' should be 'Hello World, How Are You?`, (done) => {
        assert.equal(StringUtil.capitalizeAllFirstLetter('hello world, how are you?'), 'Hello World, How Are You?')
        done()
    })

    // Test case 12
    it(`[${testCounter++}] StringUtil.capitalizeAllFirstLetter, should fail, 'quick brown fox' should be 'QuickBrownFox'`, (done) => {
        assert.notEqual(StringUtil.capitalizeAllFirstLetter('quick brown fox'), 'QuickBrownFox')
        done()
    })

    // Test case 13
    it(`[${testCounter++}] StringUtil.capitalizeAllFirstLetter, should pass, 'HeLlO wOrLD' should be 'HeLlO WOrLD'`, (done) => {
        assert.equal(StringUtil.capitalizeAllFirstLetter('HeLlO wOrLD'), 'HeLlO WOrLD')
        done()
    })

    // Test case 14
    it(`[${testCounter++}] StringUtil.removeWhiteSpace, should pass, ' coding is Awesome! ' should be 'codingisAwesome!'`, (done) => {
        assert.equal(StringUtil.removeWhiteSpace(' coding is Awesome! '), 'codingisAwesome!')
        done()
    })
})

/* ----- NumberUtil Test Cases ----- */
testCounter = 1
describe('NumberUtil tests', () => {

    // Test case 1
    it(`[${testCounter++}] NumberUtil.countTo, should fail since '1000' is string type`, (done) => {
        NumberUtil.countTo('1000')
            .catch(reason => {
                assert.equal(reason, 'Invalid datatype')
                done()
            })
    })

    // Test case 2
    it(`[${testCounter++}] NumberUtil.countTo, should pass since 1000 is number type`, (done) => {
        NumberUtil.countTo(1000)
            .then(result => {
                assert.equal(result, 'Done counting to: 1000')
                done()
            })
    })

    // Test case 3
    it(`[${testCounter++}] NumberUtil.getMaxValue, should fail when empty argument`, (done) => {
        assert.throws(NumberUtil.getMaxValue.bind(NumberUtil.getMaxValue), TypeError)
        done()
    })

    // Test case 4
    it(`[${testCounter++}] NumberUtil.getMaxValue, should fail when argument is not an array of integers`, (done) => {
        assert.throws(NumberUtil.getMaxValue.bind(NumberUtil.getMaxValue, '12,14,99'), TypeError)
        done()
    })

    // Test case 5
    it(`[${testCounter++}] NumberUtil.getMaxValue, should fail when not all element in array are integers`, (done) => {
        assert.throws(NumberUtil.getMaxValue.bind(NumberUtil.getMaxValue, [44, 12, 3, '50', 27, 95, 7]), TypeError)
        done()
    })

    // Test case 6
    it(`[${testCounter++}] NumberUtil.getMaxValue, should pass, highest value should be 127 from [44, 12 , 99, 3, 50, 127, 95, 7]`, (done) => {
        assert.equal(NumberUtil.getMaxValue([44, 12, 99, 3, 50, 127, 95, 7]), 127)
        done()
    })

    // Test case 7
    it(`[${testCounter++}] NumberUtil.getMinValue, should fail when not all element in array are integers`, (done) => {
        assert.throws(NumberUtil.getMinValue.bind(NumberUtil.getMinValue, [44, -12, 3, '-50', 27, -95, 7]), TypeError)
        done()
    })

    // Test case 8
    it(`[${testCounter++}] NumberUtil.getMinValue, should pass, lowedt value should be -95 from [44, -12 , 13, -50, 27, -95, 1, 207, 0]`, (done) => {
        assert.equal(NumberUtil.getMinValue([44, -12, 13, -50, 27, -95, 1, 207, 0]), -95)
        done()
    })

    // Test case 9
    it(`[${testCounter++}] NumberUtil.getMinValue, should fail when an empty array is passed in`, (done) => {
        assert.throws(NumberUtil.getMinValue.bind(NumberUtil.getMinValue, []), TypeError)
        done()
    })
})

/* ----- DateUtil Test Cases ----- */
testCounter = 1
describe('DateUtil tests', () => {
    // Test case 1
    it(`[${testCounter++}] DateUtil.before, should fail when wrong datatype is passed in`, (done) => {
        let date = new DateUtil(new Date())
        assert.throws(date.before.bind(date.before, 'today'), TypeError)
        done()
    })

    // Test case 2
    it(`[${testCounter++}] DateUtil.before, should pass when date1 is 24 hours before the date2`, (done) => {
        let date1 = new DateUtil(new Date())
        let date2 = new DateUtil(new Date())
        date1.offsetHours(-24)
        assert.equal(date1.before(date2), true)
        done()
    })

    // Test case 3
    it(`[${testCounter++}] DateUtil.before, should fail when date2 is 24 hours before the date1`, (done) => {
        let date1 = new DateUtil(new Date())
        let date2 = new DateUtil(new Date())
        date1.offsetHours(-24)
        assert.equal(date2.before(date1), false)
        done()
    })

    // Test case 4
    it(`[${testCounter++}] DateUtil.after, should pass when date2 is 24 hours after the date1`, (done) => {
        let date1 = new DateUtil(new Date())
        let date2 = new DateUtil(new Date())
        date1.offsetHours(-24)
        assert.equal(date2.after(date1), true)
        done()
    })

    // Test case 5
    it(`[${testCounter++}] DateUtil.after, should fail when date1 is being compared to an undefined date`, (done) => {
        let date1 = new DateUtil(new Date())
        let date2
        date1.offsetHours(24)
        assert.throws(date1.after.bind(date1.after, date2), TypeError)
        done()
    })
})