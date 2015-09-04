'use strict';

describe('Calculator Service', function () {

    var service;

    beforeEach(function () {
        service = new CalculatorService();
    });

    it('By default calculator should display 0 when loaded', function () {
        expect(service.getDisplay()).toEqual('0');
    });


    it('1+1 should display 2 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('+');
        service.enterDigit('one');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('2');
    });

    it('2*3 should display 6 when loaded', function () {
        service.enterDigit('two');
        service.enterOperation('*');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('6');
    });

    it('6/3 should display 2 when loaded', function () {
        service.enterDigit('six');
        service.enterOperation('/');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('2');
    });


    it('6-3 should display 3 when loaded', function () {
        service.enterDigit('six');
        service.enterOperation('-');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('3');
    });

    it('6-3+3 should display 6 when loaded', function () {
        service.enterDigit('six');
        service.enterOperation('-');
        service.enterDigit('three');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('6');
    });

    it('enter 6 6 + 3 3 = should display 99 when loaded', function () {
        service.enterDigit('six');
        service.enterDigit('six');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('99');
    });




    //Edge Cases

    it('enter 1 0 0 + = should display 200 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('zero');
        service.enterDigit('zero');
        service.enterOperation('+');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('200');
    });


    //fractions
    it('5/2 should display 2.5 when loaded', function () {
        service.enterDigit('five');
        service.enterOperation('/');
        service.enterDigit('two');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('2.5');
    });

    //division by zero

    it('5/0 should display division by zero error when loaded', function () {
        service.enterDigit('five');
        service.enterOperation('/');
        service.enterDigit('zero');
        service.enterEquals();
        expect(service.getDisplay()).toEqual(service.DIVISION_BY_ZERO_ERROR);
    });

    //division by zero

    it('5/0=1+1 should display division by zero error when loaded', function () {
        service.enterDigit('five');
        service.enterOperation('/');
        service.enterDigit('zero');
        service.enterEquals();
        service.enterDigit('one');
        service.enterOperation('+');
        service.enterDigit('one');
        service.enterEquals();
        expect(service.getDisplay()).toEqual(service.DIVISION_BY_ZERO_ERROR);
    });

    it('0/= should display division by zero error when loaded', function () {
        service.enterDigit('zero');
        service.enterOperation('/');
        service.enterEquals();
        expect(service.getDisplay()).toEqual(service.DIVISION_BY_ZERO_ERROR);
    });

    //get an error then clear it
    it('1/0 clear should display 0 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('/');
        service.enterDigit('zero');
        service.enterEquals();
        service.enterClear();
        expect(service.getDisplay()).toEqual('0');
    });


    it('1+-= should display 2 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('-');
        service.enterOperation('+');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('2');
    });

    it('1+- should display 1 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('+');
        service.enterOperation('-');
        expect(service.getDisplay()).toEqual('1');
    });

    it('9/3= should display 3 when loaded', function () {
        service.enterDigit('nine');
        service.enterOperation('/');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('3');
    });

    it('9/= should display 1 when loaded', function () {
        service.enterDigit('nine');
        service.enterOperation('/');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('1');
    });


});

