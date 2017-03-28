var calc;
(function (calc) {
    var MathStuff = (function () {
        function MathStuff() {
            this._mathExpression = '';
        }
        return MathStuff;
    }());
    ;
    var calcMath = new MathStuff();
    var operators = ['+', '-', '/', '*'];
    var calcScreen = $('[calc-screen]');
    var clearButton = $('[clear]');
    var dotButton = $('[dot]');
    var equals = $('[equals]');
    var backspace = $('[backspace]');
    var hasNoOperator = function () {
        var lastChar = calcScreen.val().charAt(calcScreen.val().length - 1);
        return operators.indexOf(lastChar) === -1;
    };
    $('[add]').on('click', function (event) {
        event.preventDefault();
        var buttonText = $(this).attr('add');
        calcScreen.val(calcScreen.val() + buttonText);
    });
    $('[operator]').on('click', function (event) {
        event.preventDefault();
        var buttonText = $(this).attr('operator');
        if (calcScreen.val() !== '' && hasNoOperator()) {
            calcScreen.val(calcScreen.val() + buttonText);
        }
    });
    dotButton.on('click', function (event) {
        event.preventDefault();
        var buttonText = $(this).attr('dot');
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
})(calc || (calc = {}));
//# sourceMappingURL=calc.js.map