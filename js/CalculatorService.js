'use strict';

/**
 * Represents the abstraction of a calculator display and input
 * @constructor
 */
function CalculatorService() {
    this.enterClear();


}

CalculatorService.prototype = {
    /**
     * This is the division by zero error for the calculator
     */
    DIVISION_BY_ZERO_ERROR: 'Error! One does not simply divide by zero.',

    /**
     * These are the digits that the calculator service accepts
     */
    digits: {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    },
    /**
     * Enter a single digit into the calculator service.
     * @param {string} digit - The digit to be entered into the calculator.
     */
    enterDigit: function (digit) {

        this.currentNumber *= 10;
        this.currentNumber += this.digits[digit];

        if (this.previousOperation == null) {
            this.previousOperation = this.currentOperation;
            this.currentOperation = null;
        }

    },

    /**
     * Enter a single operation into the calculator service.
     * @param {string} operation - The operation to be entered into the calculator.
     */

    enterOperation: function (operation) {

        if (this.currentNumber != null) {

            switch (this.previousOperation) {
                case '+':
                    this.currentResult += this.currentNumber;
                    break;
                case '-':
                    this.currentResult -= this.currentNumber;
                    break;
                case '*':
                    this.currentResult *= this.currentNumber;
                    break;
                case '/':
                    if (this.currentNumber == 0) {

                        this.error = this.DIVISION_BY_ZERO_ERROR;
                    }
                    else {
                        this.currentResult *=1.0;
                        this.currentResult /= this.currentNumber;
                    }
                    break;
            }

            if (this.previousOperation == null) {
                this.currentResult = this.currentNumber;
            }
            this.previousOperation = null;
            this.currentNumber = null;

        }

        this.currentOperation = operation;
    },

    /**
     * Enter equals into the calculator service.
     */

    enterEquals: function () {
        if (this.currentNumber == null) {
            if (this.previousNumber == null) {
                this.previousNumber = this.currentResult;
            }
            this.currentNumber = this.previousNumber;
        }

        this.previousNumber = this.currentNumber;

        if (this.currentOperation) {
            if (this.currentResult == null) {
                this.currentResult = 0;
            }
            this.currentNumber = this.currentResult;
            this.previousOperation = this.currentOperation;
            this.repeatOperation = this.previousOperation;
            this.enterOperation(null);
        }
        else if (this.previousOperation) {
            this.repeatOperation = this.previousOperation;
            this.enterOperation(null);

        }
        else if (this.repeatOperation) {
            this.previousOperation = this.repeatOperation;
            this.enterOperation(null);
        }
        else {
            this.currentResult = this.currentNumber;
            this.currentNumber = null;
        }

    },

    /**
     * Enter clear into the calculator service.
     */

    enterClear: function () {
        this.currentResult = null;
        this.currentNumber = null;
        this.currentOperation = null;
        this.previousOperation = null;
        this.repeatOperation = null;
        this.previousNumber = null;
        this.error = null;
    },
    /**
     * Get the display of the calculator service.
     * @returns {String}
     */
    getDisplay: function () {
        var display;
        //Errors are persistent until clear is entered
        if (this.error) {
            display = this.error;
        }
        else if (this.currentNumber == null) {
            display = this.currentResult;
        }
        else {
            display = this.currentNumber;
        }

        return String(display || 0);

    }

};


