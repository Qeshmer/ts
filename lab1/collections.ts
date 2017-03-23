/**
 * For details on how these interfaces work in Java:
 * http://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html
 * https://docs.oracle.com/javase/tutorial/collections/
 *
 */
namespace collections {

    /**
     * An interface for visiting each entry in a collection
     */
    export interface Iterator<E> {
        hasNext(): boolean;
        // next(): E;
    }

    export interface Iterable<T> {
        iterator(): Iterator<T>;
    }

    /**
     * A bunch of objects
     */
    export interface Collection<E> extends Iterable<E> {

        size(): number;

        isEmpty(): boolean;

        contains(e: any): boolean;

        iterator(): Iterator<E>;

        toArray(): E[];

        add(e: E): boolean;

        remove(e: any): boolean;

        addAll(col: Collection<E>): boolean;

        removeAll(col: Collection<any>): boolean;

        containsAll(col: Collection<any>): boolean;

        retainAll(col: Collection<any>): boolean;

        clear(): void;

    }

    /**
     * A collection with set semantics
     */
    export interface Set<E> extends Collection<E> {
    }

    /**
     * A collection with indices
     */
    export interface List<E> extends Collection<E> {

        addAllAtIndex(index: number, col: Collection<E>): boolean;

        get(index: number): E;

        set(index: number, element: E): E;

        addAtIndex(index: number, element: E): void;

        removeAtIndex(index: number): E;

        indexOf(o: any): number;

        lastIndexOf(o: any): number;

        subList(fromIndex: number, toIndex: number): List<E>;

    }


    /**
     * A key value pair
     */
    export interface Entry<K, V> {

        getKey(): K;

        getValue(): V;
    }

    /**
     * A set of keys mapping to values
     */
    export interface Map<K, V> {

        size(): number;

        isEmpty(): boolean;

        containsKey(key: any): boolean;

        containsValue(value: any): boolean;

        get(key: any): V;

        put(key: K, value: V): V;

        remove(key: any): V;

        putAll(map: Map<K, V>): void;

        clear(): void;

        keySet(): Set<K>;

        values(): Collection<V>;

        entrySet(): Set<Entry<K, V>>;

    }

    // Classes

    export class Iterator<E> implements Iterator<E> {

        collection: E[];

        private index = 0;

        constructor(collection: E[]) {
            this.collection = collection;
        };

        hasNext(): boolean {
            return this.index < this.collection.length;
        }

        size(): any {
            return this.collection.length;
        }

        next(): E {
            if (this.hasNext()) {
                return this.collection[this.index++];
            } else {
                return null;
            }
        }

    }

    export class Collection<E> implements Collection<E> {
        protected list: E[];

        constructor() {
            this.list = [];
        };

        add(e: E): Boolean {
            this.list.push(e);
            return true;
        };

        remove(e: E): Boolean {
            if (this.contains(e)) {
                let index = this.list.indexOf(e);
                this.list.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        };

        clear(): void {
            this.list = [];
        };

        contains(e: any): boolean {
            return this.list.indexOf(e) !== -1;
        };

        isEmpty(): boolean {
            return this.size() === 0;
        };

        size(): number {
            return this.list.length;
        };


        addAll(coll: Collection<E>): boolean {
            for (let item of coll.toArray()) {
                this.add(item);
            }
            return true;
        };

        removeAll(coll: Collection<E>): boolean {
            let changed = false;

            for (let item of this.toArray()) {
                if (coll.contains(item)) {
                    this.remove(item);
                    changed = true;
                }
            }
            return changed;

        };

        retainAll(coll: Collection<any>): boolean {
            let changed = false;

            for (let item of this.toArray()) {
                if (!coll.contains(item)) {
                    this.remove(item);
                    changed = true;
                }
            }
            return changed;
        };

        containsAll(coll: Collection<any>): boolean {
            let containsAll = false;
            for (let item of coll.toArray()) {
                if (this.contains(item)) {
                    containsAll = true;
                } else {
                    containsAll = false;
                    break;
                }
            }
            return containsAll;
        }

        toArray(): E[] {
            return this.list.slice();
        };

    }

    export class Set<E> extends Collection<E> implements Set<E>{

        add(e: E): boolean {
            if (this.contains(e)) {
                return false;
            } else {
                this.list.push(e);
                return true;
            }
        };
    }

    export class List<E> extends Collection<E> implements List<E> {

        get(index: number): E {
            return this.list[index];
        };

        set(index: number, element: E): E {
            this.list[index] = element;
            return this.get(index);
        };

        addAtIndex(index: number, element: E): void {
            this.list.splice(index, 0, element);
        };

        addAllAtIndex(index: number, coll: Collection<E>): boolean {
            let changed = false;

            let arr = coll.toArray();

            for (let item of arr) {
                this.addAtIndex(index, item);
                index++
            }

            changed = true;
            return changed;
        };

        removeAtIndex(index: number): E {
            this.list.splice(index, 1);
            return this.get(index);
        };

        indexOf(o: any): number {
            return this.list.indexOf(o);
        };

        lastIndexOf(o: any): number {
            return this.toArray().lastIndexOf(o);
        };

        subList(fromIndex: number, toIndex: number): List<E> {
            let newList = new List<E>();

            let arr = this.toArray().slice(fromIndex, toIndex);
            for (let item of arr) {
                newList.add(item);
            }

            return newList;

        };

    }

    export class Entry<K, V> implements Entry<K, V> {
        private _keyValuePair;

        constructor(key: K, value: V) {
            this._keyValuePair = {};
            this._keyValuePair[key] = value;
        }

        getKey(): K {
            let keyValuePair = this._keyValuePair;
            let key;
            for (let prop in keyValuePair) {
                key = prop;
            }
            return key;
        }

        getValue(): V {
            let keyValuePair = this._keyValuePair;
            let value;

            for (let val in keyValuePair) {
                value = keyValuePair[val];
            }
            return value;
        }
    }

    /*
        export interface Map<K, V> {
            entrySet(): Set<Entry<K, V>>;
        }
    */

    export class Map<K, V> implements Map<K, V> {

        private _mapList;

        constructor() {
            this._mapList = {};
        }

        put(key: K, value: V): V {

            this._mapList[key] = value;
            return value;
        }

        get(key: any): V {

            let mapList = this._mapList;

            return mapList[key];
        }

        remove(key: any): V {

            let value = this._mapList[key];
            delete this._mapList[key];
            return value;

        }

        clear(): void {

            this._mapList = {};

        }

        putAll(map: Map<K, V>): void {
            let mapArr = map.toArray();

            for (let item of mapArr) {
                this.put(item[0], item[1]);
            }

        }

        size(): number {

            let mapList = this._mapList;

            let count = 0;
            for (let item in mapList) {
                count++;
            }
            return count;

        }

        isEmpty(): boolean {
            return this.size() === 0;
        }

        containsKey(key: any): boolean {

            return key in this._mapList;

        }

        containsValue(value: any): boolean {

            let mapList = this._mapList;

            let exists = false;
            for (let k in mapList) {
                if (mapList[k] === value)
                    exists = true;
            }
            return exists;

        }

        toArray(): Array<{ key: K, value: V }> {
            let mapArr = [];
            let mapList = this._mapList;

            for (let item in mapList) {
                mapArr.push([item, mapList[item]]);
            }
            return mapArr;
        }


        keySet(): Set<K> {
            let keySet = new Set<K>();
            let mapArr = this.toArray();

            for (let item of mapArr) {
                keySet.add(item[0]);
            }
            return keySet;
        }

        values(): Collection<V> {
            let valCollection = new Collection<V>();
            let mapArr = this.toArray();

            for (let item of mapArr) {
                valCollection.add(item[1]);
            }
            return valCollection;
        }
    }
} 