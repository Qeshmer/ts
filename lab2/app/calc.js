var calc;
(function (calc) {
    var MathStuff = (function () {
        function MathStuff() {
            this.operators = ['+', '-', '/', '*'];
            this._mathEntry = [];
        }
        MathStuff.prototype.addToEntry = function (entry) {
            this._mathEntry.push(entry.toString());
        };
        MathStuff.prototype.getEntry = function () {
            return this._mathEntry.join(" ");
        };
        MathStuff.prototype.clearEntry = function () {
            this._mathEntry = [];
        };
        MathStuff.prototype.lastOfEntry = function () {
            return this._mathEntry[this._mathEntry.length - 1];
        };
        MathStuff.prototype.evaluate = function () {
            console.log(this._mathEntry);
            var stringExpression = this._mathEntry.join('');
            var evaluator = function (fn) {
                return new Function('return ' + fn)();
            };
            console.log(evaluator(stringExpression));
        };
        return MathStuff;
    }());
    ;
    var calcMath = new MathStuff();
    var operatorButtons = $('[operator]');
    var numberButtons = $('[add]');
    var clearButton = $('[clear]');
    var equals = $('[equals]');
    var calcScreen = $('[calc-screen]');
    var clear = function () {
    };
    clearButton.on('click', function (event) {
    });
    numberButtons.on('click', function (event) {
        var buttonText = $(this).attr('add');
        calcScreen.val(calcScreen.val() + buttonText);
    });
    operatorButtons.on('click', function (event) {
        var buttonText = $(this).attr('operator');
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
})(calc || (calc = {}));
//# sourceMappingURL=calc.js.map