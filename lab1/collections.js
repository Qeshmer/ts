var collections;
(function (collections) {
    var Iterator = (function () {
        function Iterator(collection) {
            this.index = 0;
            this.collection = collection;
        }
        ;
        Iterator.prototype.hasNext = function () {
            return this.index < this.collection.length;
        };
        Iterator.prototype.size = function () {
            return this.collection.length;
        };
        Iterator.prototype.next = function () {
            if (this.hasNext()) {
                return this.collection[this.index++];
            }
            else {
                return null;
            }
        };
        return Iterator;
    }());
    collections.Iterator = Iterator;
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
        Collection.prototype.addAll = function (coll) {
            for (var _i = 0, _a = coll.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item);
            }
            return true;
        };
        ;
        Collection.prototype.removeAll = function (coll) {
            var changed = false;
            for (var _i = 0, _a = this.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                if (coll.contains(item)) {
                    this.remove(item);
                    changed = true;
                }
            }
            return changed;
        };
        Collection.prototype.retainAll = function (coll) {
            var changed = false;
            for (var _i = 0, _a = this.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                if (!coll.contains(item)) {
                    this.remove(item);
                    changed = true;
                }
            }
            return changed;
        };
        Collection.prototype.containsAll = function (coll) {
            var containsAll = false;
            for (var _i = 0, _a = coll.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                if (this.contains(item)) {
                    containsAll = true;
                }
                else {
                    containsAll = false;
                    break;
                }
            }
            return containsAll;
        };
        Collection.prototype.toArray = function () {
            return this.list.slice();
        };
        ;
        return Collection;
    }());
    collections.Collection = Collection;
})(collections || (collections = {}));
//# sourceMappingURL=collections.js.map