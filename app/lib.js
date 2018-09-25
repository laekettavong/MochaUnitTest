/*
* Arbitrary functions to be tested agains
*/

const StringUtil = class StringUtil {
    /*
    * Determines whether the specified sctring is a palindrome
    * 
    * @param {str} string to check
    * 
    */
    static isPalindrome(str) {
        try {
            str = StringUtil.isTypeOfNumber(str) ? str.toString() : str
            str = StringUtil.removeWhiteSpace(str).toLowerCase()

            if (str) {
                let len = str.length
                for (let i = 0; i < len; i++) {
                    let leftChar = str[i]
                    let rightChar = str[len - (i + 1)]
                    if (leftChar !== rightChar) {
                        return false
                    }
                }
                return true
            } else {
                throw new Error('Falsy argument')
            }
        } catch (err) {
            throw new TypeError('Invalid datatype')
        }
    }

    /*
    * Parses the specified string an capitalize the tokens that are separated by white space
    * 
    * @param {str} target string to capitalize
    * 
    */
    static capitalizeAllFirstLetter(str) {
        if (StringUtil.isTypeOfString(str)) {
            let strArray = str.split(' ')
            let capital = []
            for (let str of strArray) {
                capital.push(str[0].toUpperCase() + str.substr(1))
            }
            return capital.join(' ')
        } else {
            throw new Error('Invalid datatype')
        }
    }

    /*
    * Determines whether the given argument is a string
    * 
    * @param {str} target string
    * 
    */
    static isTypeOfString(str) {
        return typeof (str) === 'string'
    }

    /*
    * Determines whether the given argument is a number
    * 
    * @param {str} target string
    * 
    */
    static isTypeOfNumber(str) {
        return typeof (str) == 'number'
    }

    /*
    * Globally removes all white space from the given string
    * 
    * @param {str} target string
    * 
    */
    static removeWhiteSpace(str) {
        if (this.isTypeOfString(str) || this.isTypeOfNumber(str)) {
            if (str) {
                return str.replace(/\s/gi, '')
            }
        } else {
            throw new Error('Invalid datatype')
        }
    }
}


const NumberUtil = class NumberUtil {
    /*
    * Fetches the highest value in a given array
    * 
    * @param {numberArray} target array to scan
    * 
    */
    static getMaxValue(numberArray) {
        if (!numberArray || !(numberArray instanceof Array) || numberArray.length == 0) throw TypeError('Invalid argument')

        numberArray.forEach((ele) => {
            if (!StringUtil.isTypeOfNumber(ele)) throw TypeError('Element is not a number type')
        })

        numberArray = numberArray.sort((a, b) => (a < b ? 1 : -1))
        return numberArray[0]
    }

    /*
    * Fetches the lowest value in a given array
    * 
    * @param {numberArray} target array to scan
    * 
    */
    static getMinValue(numberArray) {

        if (!numberArray || !(numberArray instanceof Array) || numberArray.length == 0) throw TypeError('Invalid argument')

        numberArray.forEach((ele) => {
            if (!StringUtil.isTypeOfNumber(ele)) throw new TypeError('Element is not a number type')
        })
        numberArray = numberArray.sort((a, b) => (a > b ? 1 : -1))

        return numberArray[0]
    }

    /*
    * Simple counter that returns a Promise when complete
    * 
    * @param {num} max number to count to
    * @param {callback}
    * 
    * @return {promise}
    */
    static countTo(num) {
        return new Promise((resolve, reject) => {
            if (StringUtil.isTypeOfNumber(num)) {
                let counter = 0
                while (counter <= num) {
                    counter++
                }
                resolve(`Done counting to: ${num}`)
            } else {
                reject('Invalid datatype')
            }
        })
    }
}

const DateUtil = class DateUtil extends Date {
    constructor(dateStr) {
        super(dateStr)
    }

    /*
    * Determines whether this date comes before the specified date
    * 
    * @param {date} date to check against
    * 
    */
    before(date) {
        if (!(date instanceof Date)) throw new TypeError('Invalid datatype')
        return this.valueOf() < date.valueOf()
    }

    /*
    * Determines whether this date comes after the specified date
    * 
    * @param {date} date to check against
    * 
    */
    after(date) {
        if (!(date instanceof Date)) throw new TypeError('Invalid datatype')
        return this.valueOf() > date.valueOf()
    }

    /*
    * Changes the time of creation date
    * 
    * @param {hours} 
    *   postive value for future time
    *   negative value for time in past
    * 
    */
    offsetHours(hours) {
        this.setHours(this.getHours() + hours)
    }
}

module.exports = {
    StringUtil,
    NumberUtil,
    DateUtil
}