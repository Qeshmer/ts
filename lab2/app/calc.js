var calc;
(function (calc) {
    var MathStuff = (function () {
        function MathStuff() {
            this.operators = ['+', '-', '/', '*'];
            this._mathEntries = [];
            this.evaluated = false;
        }
        MathStuff.prototype.addToEntries = function (entry) {
            this._mathEntries.push(entry);
        };
        MathStuff.prototype.getEntries = function () {
            return this._mathEntries;
        };
        MathStuff.prototype.lastOfEntries = function () {
            return this._mathEntries[this._mathEntries.length - 1];
        };
        MathStuff.prototype.clearEntries = function () {
            this._mathEntries = [];
            this.evaluated = false;
        };
        MathStuff.prototype.evaluate = function () {
            if (this.operators.indexOf(this.lastOfEntries()) > -1) {
                this._mathEntries.pop();
            }
            var mathExpression = this._mathEntries.join('');
            var evaluator = function (fn) {
                return new Function('return ' + fn)();
            };
            this.evaluated = true;
            return evaluator(mathExpression);
        };
        return MathStuff;
    }());
    ;
    var calcMath = new MathStuff();
    var screen = $('[calc-screen]');
    var numberButtons = $('[add]');
    var operators = $('[operator]');
    var backspace = $('[backspace]');
    var equals = $('[equals]');
    var clear = $('[clear]');
    var dot = $('[dot]');
    var plusMinus = $('[plusMinus]');
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
        var buttonText = $(this).attr('add');
        screen.val(screen.val() + buttonText);
    });
    operators.on('click', function (event) {
        event.preventDefault();
        var lastChar = screen.val().charAt(screen.val().length - 1);
        var buttonText = $(this).attr('operator');
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
        var dotText = $(this).attr('dot');
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
        var isPositve = screen.val().indexOf('-') === -1;
        if (isPositve && screen.val() !== '') {
            screen.val('-' + screen.val());
        }
        else {
            screen.val(screen.val().replace('-', ''));
        }
    });
    $('#entrybutton').on('click', function () {
        console.log(calcMath.getEntries());
    });
})(calc || (calc = {}));
//# sourceMappingURL=calc.js.map