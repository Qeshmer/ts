var collections;
(function (collections) {
    var Collection = (function () {
        function Collection() {
            this.list = [];
        }
        ;
        Collection.prototype.add = function (e) {
            this.list.push(e);
            return true;
        };
        ;
        Collection.prototype.remove = function (e) {
            if (this.contains(e)) {
                var index = this.list.indexOf(e);
                this.list.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        };
        ;
        Collection.prototype.clear = function () {
            this.list = [];
        };
        ;
        Collection.prototype.contains = function (e) {
            return this.list.indexOf(e) !== -1;
        };
        ;
        Collection.prototype.isEmpty = function () {
            return this.size() === 0;
        };
        ;
        Collection.prototype.size = function () {
            return this.list.length;
        };
        ;
        Collection.prototype.toArray = function () {
            return this.list.slice();
        };
        ;
        Collection.prototype.addAll = function (col) {
            for (var _i = 0, _a = col.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item);
            }
            return true;
        };
        ;
        return Collection;
    }());
    collections.Collection = Collection;
})(collections || (collections = {}));
//# sourceMappingURL=collections.js.map