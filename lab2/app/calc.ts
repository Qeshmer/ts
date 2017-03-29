namespace calc {

    class MathStuff {

        private _mathEntry: string[]
        public operators = ['+', '-', '/', '*'];


        constructor() {
            this._mathEntry = [];
        }

        addToEntry(entry: string | number): void {
            this._mathEntry.push(entry.toString());
        }

        getEntry() {
            return this._mathEntry.join(" ");
        }

        clearEntry(): void {
            this._mathEntry = [];
        }

        lastOfEntry() {
            return this._mathEntry[this._mathEntry.length - 1];
        }

        evaluate() {
            console.log(this._mathEntry);
            let stringExpression = this._mathEntry.join('');

            let evaluator = function (fn) {
                return new Function('return ' + fn)();

            };

            console.log(evaluator(stringExpression));

        }

    };

    let calcMath = new MathStuff();

    let operatorButtons = $('[operator]');
    let numberButtons = $('[add]');
    let clearButton = $('[clear]');
    let equals = $('[equals]');
    let calcScreen = $('[calc-screen]');

    let clear = function (): void {

    };

    clearButton.on('click', function (event) {

    });

    numberButtons.on('click', function (event) {
        let buttonText = $(this).attr('add');

        calcScreen.val(calcScreen.val() + buttonText);
    });

    operatorButtons.on('click', function (event) {
        let buttonText = $(this).attr('operator');

        if (calcScreen.val() !== '') {
            calcMath.addToEntry(calcScreen.val());
        }

        if (calcScreen.val() !== '' && calcMath.operators.indexOf(calcMath.lastOfEntry()) === -1) {
            calcMath.addToEntry(buttonText);
        }

        calcScreen.val('');

    });

    equals.on('click', function (entry) {
        if (calcScreen.val() !== '') {
            calcMath.addToEntry(calcScreen.val());
        }
        calcMath.evaluate();
        calcScreen.val('');
    });

}