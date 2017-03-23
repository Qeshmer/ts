var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        ;
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
        ;
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
    var Set = (function (_super) {
        __extends(Set, _super);
        function Set() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Set.prototype.add = function (e) {
            if (this.contains(e)) {
                return false;
            }
            else {
                this.list.push(e);
                return true;
            }
        };
        ;
        return Set;
    }(Collection));
    collections.Set = Set;
    var List = (function (_super) {
        __extends(List, _super);
        function List() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        List.prototype.get = function (index) {
            return this.list[index];
        };
        ;
        List.prototype.set = function (index, element) {
            this.list[index] = element;
            return this.get(index);
        };
        ;
        List.prototype.addAtIndex = function (index, element) {
            this.list.splice(index, 0, element);
        };
        ;
        List.prototype.addAllAtIndex = function (index, coll) {
            var changed = false;
            var arr = coll.toArray();
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var item = arr_1[_i];
                this.addAtIndex(index, item);
                index++;
            }
            changed = true;
            return changed;
        };
        ;
        List.prototype.removeAtIndex = function (index) {
            this.list.splice(index, 1);
            return this.get(index);
        };
        ;
        List.prototype.indexOf = function (o) {
            return this.list.indexOf(o);
        };
        ;
        List.prototype.lastIndexOf = function (o) {
            return this.toArray().lastIndexOf(o);
        };
        ;
        List.prototype.subList = function (fromIndex, toIndex) {
            var newList = new List();
            var arr = this.toArray().slice(fromIndex, toIndex);
            for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                var item = arr_2[_i];
                newList.add(item);
            }
            return newList;
        };
        ;
        return List;
    }(Collection));
    collections.List = List;
    var Entry = (function () {
        function Entry(key, value) {
            this._keyValuePair = {};
            this._keyValuePair[key] = value;
        }
        Entry.prototype.getKey = function () {
            var keyValuePair = this._keyValuePair;
            var key;
            for (var prop in keyValuePair) {
                key = prop;
            }
            return key;
        };
        Entry.prototype.getValue = function () {
            var keyValuePair = this._keyValuePair;
            var value;
            for (var val in keyValuePair) {
                value = keyValuePair[val];
            }
            return value;
        };
        return Entry;
    }());
    collections.Entry = Entry;
    var Map = (function () {
        function Map() {
            this._mapList = {};
        }
        Map.prototype.put = function (key, value) {
            this._mapList[key] = value;
            return value;
        };
        Map.prototype.get = function (key) {
            var mapList = this._mapList;
            return mapList[key];
        };
        Map.prototype.remove = function (key) {
            var value = this._mapList[key];
            delete this._mapList[key];
            return value;
        };
        Map.prototype.clear = function () {
            this._mapList = {};
        };
        Map.prototype.putAll = function (map) {
            var mapArr = map.toArray();
            for (var _i = 0, mapArr_1 = mapArr; _i < mapArr_1.length; _i++) {
                var item = mapArr_1[_i];
                this.put(item[0], item[1]);
            }
        };
        Map.prototype.size = function () {
            var mapList = this._mapList;
            var count = 0;
            for (var item in mapList) {
                count++;
            }
            return count;
        };
        Map.prototype.isEmpty = function () {
            return this.size() === 0;
        };
        Map.prototype.containsKey = function (key) {
            return key in this._mapList;
        };
        Map.prototype.containsValue = function (value) {
            var mapList = this._mapList;
            var exists = false;
            for (var k in mapList) {
                if (mapList[k] === value)
                    exists = true;
            }
            return exists;
        };
        Map.prototype.toArray = function () {
            var mapArr = [];
            var mapList = this._mapList;
            for (var item in mapList) {
                mapArr.push([item, mapList[item]]);
            }
            return mapArr;
        };
        Map.prototype.keySet = function () {
            var keySet = new Set();
            var mapArr = this.toArray();
            for (var _i = 0, mapArr_2 = mapArr; _i < mapArr_2.length; _i++) {
                var item = mapArr_2[_i];
                keySet.add(item[0]);
            }
            return keySet;
        };
        Map.prototype.values = function () {
            var valCollection = new Collection();
            var mapArr = this.toArray();
            for (var _i = 0, mapArr_3 = mapArr; _i < mapArr_3.length; _i++) {
                var item = mapArr_3[_i];
                valCollection.add(item[1]);
            }
            return valCollection;
        };
        return Map;
    }());
    collections.Map = Map;
})(collections || (collections = {}));
//# sourceMappingURL=collections.js.map