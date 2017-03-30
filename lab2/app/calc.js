var calc;
(function (calc) {
    var MathStuff = (function () {
        function MathStuff() {
            this.operators = ['+', '-', '/', '*'];
            this.evaluated = false;
            this._mathEntries = [];
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
    numberButtons.on('click', function (event) {
        if (calcMath.evaluated) {
            screen.val('');
            calcMath.evaluated = false;
        }
        event.preventDefault();
        var buttonText = $(this).attr('add');
        screen.val(screen.val() + buttonText);
    });
    backspace.on('click', function (event) {
        event.preventDefault();
        screen.val(screen.val().slice(0, screen.val().length - 1));
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
    equals.on('click', function () {
        if (screen.val() !== '') {
            calcMath.addToEntries(screen.val().toString());
        }
        screen.val(calcMath.evaluate());
        calcMath.clearEntries();
    });
    $('#entrybutton').on('click', function () {
        console.log(calcMath.getEntries());
    });
})(calc || (calc = {}));
//# sourceMappingURL=calc.js.map