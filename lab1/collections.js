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
        Collection.prototype.clear = function () {
            this.list = [];
        };
        ;
        Collection.prototype.contains = function (e) {
            return this.list.indexOf(e) !== -1;
        };
        Collection.prototype.size = function () {
            return this.list.length;
        };
        ;
        Collection.prototype.isEmpty = function () {
            if (this.size() === 0)
                return true;
            else
                return false;
        };
        ;
        return Collection;
    }());
    collections.Collection = Collection;
})(collections || (collections = {}));
//# sourceMappingURL=collections.js.map