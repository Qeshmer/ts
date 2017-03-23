describe("Collection implementation", function () {
    it("implements a collection", function () {
        var stringCollection = new collections.Collection();
        expect(stringCollection.size()).toBe(0);
        expect(stringCollection.isEmpty()).toBe(true);
    });
    it("adds a new item to the collection", function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Holá');
        stringCollection.add('Adiós');
        expect(stringCollection.size()).toBe(2);
    });
    it("clears/resets the collection", function () {
        var stringCollection = new collections.Collection();
        stringCollection.clear();
        expect(stringCollection.size()).toBe(0);
    });
    it("checks if element exists in collection", function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Steve');
        stringCollection.add('Gunnar');
        expect(stringCollection.contains('Glenn')).toBe(false);
        expect(stringCollection.contains('Gunnar')).toBe(true);
    });
    it("removes an element in the collection", function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Yo');
        stringCollection.add('Gazorpazorp');
        expect(stringCollection.remove('Yo')).toBe(true);
        expect(stringCollection.remove('Does\'t exist')).toBe(false);
        expect(stringCollection.size()).toBe(1);
    });
    it("converts the collection to an array", function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Rich');
        stringCollection.add('Morto');
        var newArray = stringCollection.toArray();
        expect(newArray).toEqual(jasmine.any(Array));
        stringCollection.add('Test');
        stringCollection.add('Test2');
        expect(newArray.length).toBe(2);
    });
    it("adds all the elements of a collection to the invoking collection", function () {
        var collA = new collections.Collection();
        var collB = new collections.Collection();
        collA.add(1);
        collA.add(2);
        collA.add(3);
        collB.add(4);
        collB.add(5);
        collB.add(6);
        collA.addAll(collB);
        expect(collA.size()).toBe(6);
    });
    it("should create an iterator for the collection", function () {
        var stringCollection = new collections.Collection();
        stringCollection.add("Freddie");
        stringCollection.add("Hello");
        var stringIterator = new collections.Iterator(stringCollection.toArray());
        expect(stringIterator.next()).toBe('Freddie');
        expect(stringIterator.next()).toBe('Hello');
        expect(stringIterator.next()).toBe(null);
    });
    it("should remove all elements of a given collection from the invoking collection", function () {
        var myCollection = new collections.Collection();
        var removeCollection = new collections.Collection();
        myCollection.add("Morto");
        myCollection.add("Rich");
        myCollection.add("Gazorpazorp");
        removeCollection.add("Gazorpazorp");
        expect(myCollection.removeAll(removeCollection)).toBe(true);
        expect(myCollection.size()).toBe(2);
        myCollection.clear();
        removeCollection.clear();
        myCollection.add("So");
        myCollection.add("No");
        removeCollection.add("STOP");
        expect(myCollection.removeAll(removeCollection)).toBe(false);
    });
    it("should remove all elements except those contained in the given collection", function () {
        var myCollection = new collections.Collection();
        var retainCollection = new collections.Collection();
        myCollection.add("Eleven");
        myCollection.add("Twelve");
        myCollection.add("Thirteen");
        myCollection.add("Fourteen");
        myCollection.add("Fifteen");
        retainCollection.add("Fifteen");
        expect(myCollection.retainAll(retainCollection)).toBe(true);
        expect(myCollection.size()).toBe(1);
    });
    it("should check if the invoking collection contains all of the given collections elements", function () {
        var myCollection = new collections.Collection();
        var containCollection = new collections.Collection();
        myCollection.add("Gazorpazorp");
        myCollection.add("Zygerians");
        myCollection.add("Pluto");
        myCollection.add("Thing");
        containCollection.add("Pluto");
        containCollection.add("Thing");
        expect(myCollection.containsAll(containCollection)).toBe(true);
        myCollection.clear();
        containCollection.clear();
        myCollection.add("Nope");
        myCollection.add("Story time");
        myCollection.add("Zapp");
        containCollection.add("Zapp");
        containCollection.add("Blob");
        expect(myCollection.containsAll(containCollection)).toBe(false);
    });
});
describe("Set implementation", function () {
    it("should add an item to the set if it doesnt exist", function () {
        var mySet = new collections.Set();
        mySet.add("Hello");
        mySet.add("Bye");
        expect(mySet.add("Will pass")).toBe(true);
        expect(mySet.add("Bye")).toBe(false);
    });
});
describe("List implementation", function () {
    it("should return the item at given index", function () {
        var myList = new collections.List();
        myList.add("Zero");
        myList.add("One");
        myList.add("Two");
        myList.add("Three");
        expect(myList.get(0)).toBe("Zero");
    });
    it("should update the value of element given the index and return it", function () {
        var myList = new collections.List();
        myList.add(100);
        myList.add(200);
        myList.add(300);
        myList.add(400);
        expect(myList.set(0, 5000)).toBe(5000);
    });
    it("should insert an element at a given index", function () {
        var myList = new collections.List();
        myList.add("Slap");
        myList.add("Clap");
        myList.add("Flap");
        myList.addAtIndex(1, "How can it slap?");
        expect(myList.size()).toBe(4);
        expect(myList.get(1)).toBe("How can it slap?");
    });
    it("should delete an item at a given index", function () {
        var myList = new collections.List();
        myList.add(1);
        myList.add(2);
        myList.add(3);
        myList.add(4);
        myList.removeAtIndex(1);
        expect(myList.size()).toBe(3);
        expect(myList.get(1)).toBe(3);
    });
    it("should return the index of a given element", function () {
        var myList = new collections.List();
        myList.add("Coolio");
        myList.add("Clark");
        myList.add("Stark");
        myList.add("Park");
        expect(myList.indexOf("Steve")).toBe(-1);
        expect(myList.indexOf("Coolio")).toBe(0);
        expect(myList.indexOf("Stark")).toBe(2);
    });
    it("should return the last index of the given element", function () {
        var myList = new collections.List();
        myList.add("Stop");
        myList.add("Cop");
        myList.add("Pop");
        myList.add("Drop");
        myList.add("Mop");
        myList.add("Pop");
        myList.add("Cop");
        expect(myList.lastIndexOf("Pop")).toBe(5);
        expect(myList.lastIndexOf("Cop")).toBe(6);
    });
    it("should add all items of another list at given index", function () {
        var listA = new collections.List();
        var listB = new collections.List();
        listA.add(15);
        listA.add(256);
        listA.add(356);
        listA.add(422);
        listA.add(5667);
        listB.add(6434);
        listB.add(7232);
        listA.addAllAtIndex(2, listB);
        expect(listA.get(2)).toBe(6434);
        expect(listA.get(3)).toBe(7232);
        expect(listA.size()).toBe(7);
    });
    it("should create a sublist from a given start and end index", function () {
        var myList = new collections.List();
        var subList = new collections.List();
        myList.add("Eleven");
        myList.add("Twelve");
        myList.add("Thirteen");
        myList.add("Fourteen");
        myList.add("Fifteen");
        subList = myList.subList(2, 4);
        expect(subList.size()).toBe(2);
        expect(subList.get(0)).toBe("Thirteen");
    });
});
describe("Key/value Entry implementation", function () {
    it("it should instantiate a key value entry", function () {
        var nyEntry = new collections.Entry("1", "New York");
        expect(nyEntry.getKey()).toBe("1");
        expect(nyEntry.getValue()).toBe("New York");
    });
});
describe("Map implementation", function () {
    it("it should add a key value pair", function () {
        var myMap = new collections.Map();
        myMap.put("1", "Hello");
        myMap.put("2", "Bye");
    });
    it("should get the value for given key", function () {
        var myMap = new collections.Map();
        myMap.put("1", "No way");
        myMap.put("2", "Okay");
        myMap.put("3", "Fine");
        expect(myMap.get("1")).toBe("No way");
        expect(myMap.get("3")).toBe("Fine");
        expect(myMap.get("9")).toBeUndefined();
    });
    it("should get the number of items in a map list and check if it's empty", function () {
        var myMap = new collections.Map();
        myMap.put("1", "10");
        myMap.put("2", "20");
        myMap.put("3", "30");
        expect(myMap.size()).toBe(3);
        expect(myMap.isEmpty()).toBe(false);
        var emptyMap = new collections.Map();
        expect(emptyMap.size()).toBe(0);
        expect(emptyMap.isEmpty()).toBe(true);
    });
    it("should check if key exists in map", function () {
        var myMap = new collections.Map();
        myMap.put(10, 435);
        myMap.put(20, 24235);
        myMap.put(30, 43543);
        expect(myMap.containsKey(10)).toBe(true);
        expect(myMap.containsKey(20)).toBe(true);
        expect(myMap.containsKey(200)).toBe(false);
    });
    it("should check if value exist in map", function () {
        var myMap = new collections.Map();
        myMap.put(10, 435);
        myMap.put(20, 24235);
        expect(myMap.containsValue(435)).toBe(true);
        expect(myMap.containsValue(24235)).toBe(true);
        expect(myMap.containsValue(2224235)).toBe(false);
    });
    it("should remove a key value pair from maplist given the key", function () {
        var cityMap = new collections.Map();
        cityMap.put("1", "Göteborg");
        cityMap.put("2", "Stockholm");
        cityMap.put("3", "New York");
        cityMap.put("4", "London");
        expect(cityMap.size()).toBe(4);
        var stockholm = cityMap.remove("2");
        expect(stockholm).toBe("Stockholm");
        expect(cityMap.size()).toBe(3);
        expect(cityMap.containsKey("2")).toBe(false);
        expect(cityMap.containsValue("Stockholm")).toBe(false);
    });
    it("should add all the key/value pairs from another map to the invoking map", function () {
        var map1 = new collections.Map();
        var map2 = new collections.Map();
        map1.put("1", "Göteborg");
        map1.put("2", "Stockholm");
        map2.put("3", "New York");
        map2.put("4", "London");
        map1.putAll(map2);
        expect(map1.size()).toBe(4);
        expect(map1.get("3")).toBe("New York");
    });
    it("should add all keys in map to a set of keys", function () {
        var map1 = new collections.Map();
        map1.put("1", "Göteborg");
        map1.put("2", "Stockholm");
        var keySet = map1.keySet();
        expect(keySet.size()).toBe(2);
        expect(keySet.toArray()[0]).toBe("1");
    });
    it("should add all values to a collection", function () {
        var cityMap = new collections.Map();
        cityMap.put("1", "Göteborg");
        cityMap.put("2", "Stockholm");
        cityMap.put("3", "New York");
        cityMap.put("4", "London");
        var cityColl = cityMap.values();
        expect(cityColl.size()).toBe(4);
        expect(cityColl.contains("Stockholm")).toBe(true);
        expect(cityColl.contains("London")).toBe(true);
        expect(cityColl.contains("Los Angeles")).toBe(false);
    });
});
//# sourceMappingURL=collections-spec.js.map