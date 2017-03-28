namespace calc {

    class MathStuff {

        private _mathExpression: string;

        constructor() {
            this._mathExpression = '';
        }

    };

    let calcMath = new MathStuff();

    let operators: Array<string> = ['+', '-', '/', '*'];

    let calcScreen = $('[calc-screen]');
    let clearButton = $('[clear]');
    let dotButton = $('[dot]');
    let equals = $('[equals]');
    let backspace = $('[backspace]');

    let hasNoOperator = function (): boolean {
        let lastChar = calcScreen.val().charAt(calcScreen.val().length - 1);
        return operators.indexOf(lastChar) === -1;
    };

    $('[add]').on('click', function (event) {
        event.preventDefault();
        let buttonText = $(this).attr('add');

        calcScreen.val(calcScreen.val() + buttonText);
    });

    $('[operator]').on('click', function (event) {
        event.preventDefault();
        let buttonText = $(this).attr('operator');


        if (calcScreen.val() !== '' && hasNoOperator()) {
            calcScreen.val(calcScreen.val() + buttonText);
        }
    });

    dotButton.on('click', function (event) {
        event.preventDefault();
        let buttonText = $(this).attr('dot');

        if (calcScreen.val().indexOf('.') === -1) {
            calcScreen.val(calcScreen.val() + buttonText);
        }
    });

    clearButton.on('click', function (event) {
        event.preventDefault();

        calcScreen.val('');
    });

    equals.on('click', function (event) {
        event.preventDefault();

        calcScreen.val(eval(calcScreen.val()));
    });

    backspace.on('click', function (event) {
        event.preventDefault();

        calcScreen.val(calcScreen.val().slice(0, calcScreen.val().length - 1));
    });
}