/*
* Arbitrary functions to be tested agains
*/


const StringUtils = class StringUtils {
    static isPalindrome(str) {
        try{
            str = this.isTypeOfNumber(str) ? str.toString() : str;
            str = this.removeWhiteSpace(str).toLowerCase();
            if(str) {
                let len = str.length;
                for(let i = 0; i < len; i++ ) {
                    let leftChar = str[i];
                    let rightChar = str[len-(i+1)]
                    if(leftChar !== rightChar) {
                        return false;
                    }
                }
                return true;
            } else {
                throw new Error('Falsy argument');
            }
        } catch(err) {
            throw new Error('Invalid datatype');
        }
    }

    static capitalizeAllFirstLetter(str) {
        if(this.isTypeOfString(str)) {
            let strArray =  str.split(" ");
            let capital = [];
            for(let str of strArray) {
                capital.push(str[0].toUpperCase() + str.substr(1));
            }
            return capital.join(" ");
        } else {
            throw new Error('Invalid datatype');
        }
    }

    static isTypeOfString(dataType) {
        return typeof(dataType) === 'string';
    }

    static isTypeOfNumber(dataType) {
        return typeof(dataType) == 'number';
    }

    static removeWhiteSpace(str) {
        if(this.isTypeOfString(str) || this.isTypeOfNumber(str)) {
            if(str) {
                return str.replace(/\W/gi, '');
            }
        } else {
            throw new Error('Invalid datatype');
        }
    }
}

const NumberUtils = class NumberUtils {
    static getMaxValue(numberArray) {
        if(!numberArray || !(numberArray instanceof Array) || numberArray.length == 0) throw Error('Invalid argument');

        numberArray.forEach((ele) => {
            if(!StringUtils.isTypeOfNumber(ele)) throw Error('Element is not a number type');
        });
        numberArray = numberArray.sort((a, b) => (a < b ? 1 : -1));
        return numberArray[0];
    }

    static getMinValue(numberArray) {
        if(!numberArray || !(numberArray instanceof Array) || numberArray.length == 0) throw Error('Invalid argument');

        numberArray.forEach((ele) => {
            if(!StringUtils.isTypeOfNumber(ele)) throw new Error('Element is not a number type');
        });
        numberArray = numberArray.sort((a, b) => (a > b ? 1 : -1));
        return numberArray[0];
    }

    static countTo(num, callback) {
        if(StringUtils.isTypeOfNumber(num)) {
            let counter = 0;
            while(counter < num) {
                counter++;
            }
            callback(true, 'Done');
        } else {
            callback(false, 'Error');
        }
    }
}

const DateUtils = class DateUtils extends Date {
    constructor(dateStr) {
      super(dateStr);
    }
  
    before(date) {
        if(!(date instanceof Date)) throw new Error('Invalid datatype');
        return this.valueOf() < date.valueOf();
    }

    after(date) {
        if(!(date instanceof Date)) throw new Error('Invalid datatype');
        return this.valueOf() > date.valueOf();
    }
}
  
const Colors = {
    RED : '\x1b[31m%s\x1b[0m',
    GREEN : '\x1b[32m%s\x1b[0m',
    YELLOW : '\x1b[33m%s\x1b[0m',
    DARK_BLUE: '\x1b[34m%s\x1b[0m',
    MAGENTA : '\x1b[35m%s\x1b[0m',
    LIGHT_BLUE: '\x1b[36m%s\x1b[0m'
}

module.exports.StringUtils = StringUtils;
module.exports.NumberUtils = NumberUtils;
module.exports.DateUtils = DateUtils;
module.exports.Colors = Colors;