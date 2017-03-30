namespace calc {

    class MathStuff {
        private _mathEntries: string[];
        public operators: string[] = ['+', '-', '/', '*'];
        public evaluated: boolean;

        constructor() {
            this._mathEntries = [];
            this.evaluated = false;
        }

        addToEntries(entry: string): void {
            this._mathEntries.push(entry);
        }

        getEntries() {
            return this._mathEntries;
        }

        lastOfEntries() {
            return this._mathEntries[this._mathEntries.length - 1];
        }

        clearEntries() {
            this._mathEntries = [];
            this.evaluated = false;
        }

        evaluate() {
            if (this.operators.indexOf(this.lastOfEntries()) > -1) {
                this._mathEntries.pop();
            }

            let mathExpression = this._mathEntries.join('');

            let evaluator = function (fn) {
                return new Function('return ' + fn)();
            };

            this.evaluated = true
            return evaluator(mathExpression);
        }

    };

    let calcMath = new MathStuff();
    let screen = $('[calc-screen]');

    let numberButtons = $('[add]');
    let operators = $('[operator]');
    let backspace = $('[backspace]');
    let equals = $('[equals]');
    let clear = $('[clear]');
    let dot = $('[dot]');
    let plusMinus = $('[plusMinus]');

    backspace.on('click', function (event) {
        event.preventDefault();
        screen.val(screen.val().pop());
    });

    numberButtons.on('click', function (event) {
        if (calcMath.evaluated) {
            screen.val('');
            calcMath.evaluated = false;
        }
        event.preventDefault();
        let buttonText = $(this).attr('add');

        screen.val(screen.val() + buttonText);
    });


    operators.on('click', function (event) {
        event.preventDefault();
        let lastChar = screen.val().charAt(screen.val().length - 1);
        let buttonText = $(this).attr('operator');

        if (screen.val() !== '') {
            calcMath.addToEntries(screen.val().toString());
        }

        if (screen.val() !== '' && calcMath.operators.indexOf(lastChar) === -1) {
            calcMath.addToEntries(buttonText.toString());
            screen.val('');
        }
    });

    clear.on('click', function (event) {
        event.preventDefault();
        screen.val('');
        calcMath.clearEntries();
    });

    dot.on('click', function (event) {
        let dotText = $(this).attr('dot');
        if (screen.val().indexOf(dotText) === -1) {
            screen.val(screen.val() + dotText);
        }
    });

    equals.on('click', function () {
        if (screen.val() !== '') {
            calcMath.addToEntries(screen.val().toString());
        }

        screen.val(calcMath.evaluate());
        calcMath.clearEntries();
    });

    plusMinus.on('click', function () {
        let isPositve = screen.val().indexOf('-') === -1;

        if (isPositve && screen.val() !== '') {
            screen.val('-' + screen.val());
        } else {
            screen.val(screen.val().replace('-', ''));
        }

    });

    $('#entrybutton').on('click', function () {
        console.log(calcMath.getEntries());
    });

}