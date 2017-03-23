
// Jasmine is an assert framework, so you can verify that your expectations are OK.
// See https://jasmine.github.io/
// Below is just an example to get you going!

describe("Collection implementation", () => {

    it("implements a collection", () => {
        let stringCollection = new collections.Collection<string>();
        expect(stringCollection.size()).toBe(0);
        expect(stringCollection.isEmpty()).toBe(true);

    });

    it("adds a new item to the collection", () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Holá');
        stringCollection.add('Adiós');
        expect(stringCollection.size()).toBe(2);

    });

    it("clears/resets the collection", () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.clear();
        expect(stringCollection.size()).toBe(0);

    });

    it("checks if element exists in collection", () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Steve');
        stringCollection.add('Gunnar');
        expect(stringCollection.contains('Glenn')).toBe(false);
        expect(stringCollection.contains('Gunnar')).toBe(true);
    });

    it("removes an element in the collection", () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Yo');
        stringCollection.add('Gazorpazorp');
        expect(stringCollection.remove('Yo')).toBe(true);
        expect(stringCollection.remove('Does\'t exist')).toBe(false);
        expect(stringCollection.size()).toBe(1);
    });

    it("converts the collection to an array", () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Rich');
        stringCollection.add('Morto');
        var newArray = stringCollection.toArray();
        expect(newArray).toEqual(jasmine.any(Array));

        stringCollection.add('Test');
        stringCollection.add('Test2');
        // checking to make sure newArray is a shallow copy
        expect(newArray.length).toBe(2);
    });

    it("adds all the elements of a collection to the invoking collection", () => {
        let collA = new collections.Collection<number>();
        let collB = new collections.Collection<number>();

        collA.add(1);
        collA.add(2);
        collA.add(3);
        collB.add(4);
        collB.add(5);
        collB.add(6);

        collA.addAll(collB);
        expect(collA.size()).toBe(6);
    });

    it("should create an iterator for the collection", () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add("Freddie");
        stringCollection.add("Hello");

        let stringIterator = new collections.Iterator<string>(stringCollection.toArray());
        expect(stringIterator.next()).toBe('Freddie');
        expect(stringIterator.next()).toBe('Hello');
        expect(stringIterator.next()).toBe(null);

    });

    it("should remove all elements of a given collection from the invoking collection", () => {

        let myCollection = new collections.Collection<string>();
        let removeCollection = new collections.Collection<string>();

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

    it("should remove all elements except those contained in the given collection", () => {
        let myCollection = new collections.Collection<string>();
        let retainCollection = new collections.Collection<string>();

        myCollection.add("Eleven");
        myCollection.add("Twelve");
        myCollection.add("Thirteen");
        myCollection.add("Fourteen");
        myCollection.add("Fifteen");


        retainCollection.add("Fifteen");

        expect(myCollection.retainAll(retainCollection)).toBe(true);
        expect(myCollection.size()).toBe(1);

    });

    it("should check if the invoking collection contains all of the given collections elements", () => {
        var myCollection = new collections.Collection<string>();
        var containCollection = new collections.Collection<string>();

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

describe("Set implementation", () => {

    it("should add an item to the set if it doesnt exist", () => {

        let mySet = new collections.Set<string>();

        mySet.add("Hello");
        mySet.add("Bye");

        expect(mySet.add("Will pass")).toBe(true);
        expect(mySet.add("Bye")).toBe(false);

    });

});

describe("List implementation", () => {

    it("should return the item at given index", () => {

        let myList = new collections.List<string>();

        myList.add("Zero");
        myList.add("One");
        myList.add("Two");
        myList.add("Three");

        expect(myList.get(0)).toBe("Zero");

    });

    it("should update the value of element given the index and return it", () => {
        let myList = new collections.List<number>();

        myList.add(100);
        myList.add(200);
        myList.add(300);
        myList.add(400);

        expect(myList.set(0, 5000)).toBe(5000);
    });

    it("should insert an element at a given index", () => {

        let myList = new collections.List<string>();

        myList.add("Slap");
        myList.add("Clap");
        myList.add("Flap");

        myList.addAtIndex(1, "How can it slap?");
        expect(myList.size()).toBe(4);
        expect(myList.get(1)).toBe("How can it slap?");

    });

    it("should delete an item at a given index", () => {

        let myList = new collections.List<number>();

        myList.add(1);
        myList.add(2);
        myList.add(3);
        myList.add(4);

        myList.removeAtIndex(1);
        expect(myList.size()).toBe(3);
        expect(myList.get(1)).toBe(3);

    });

    it("should return the index of a given element", () => {

        let myList = new collections.List<string>();

        myList.add("Coolio");
        myList.add("Clark");
        myList.add("Stark");
        myList.add("Park");

        expect(myList.indexOf("Steve")).toBe(-1);
        expect(myList.indexOf("Coolio")).toBe(0);
        expect(myList.indexOf("Stark")).toBe(2);

    });

    it("should return the last index of the given element", () => {

        let myList = new collections.List<string>();

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

    it("should add all items of another list at given index", () => {

        let listA = new collections.List<number>();
        let listB = new collections.List<number>();

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

    it("should create a sublist from a given start and end index", () => {

        let myList = new collections.List<string>();
        let subList = new collections.List<string>();

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

describe("Key/value Entry implementation", () => {

    it("it should instantiate a key value entry", () => {
        let nyEntry = new collections.Entry<string, string>("1", "New York");

        expect(nyEntry.getKey()).toBe("1");
        expect(nyEntry.getValue()).toBe("New York");
    });

});

describe("Map implementation", () => {

    it("it should add a key value pair", () => {
        let myMap = new collections.Map<string, string>();

        myMap.put("1", "Hello");
        myMap.put("2", "Bye");

    });

    it("should get the value for given key", () => {

        let myMap = new collections.Map<string, string>();

        myMap.put("1", "No way");
        myMap.put("2", "Okay");
        myMap.put("3", "Fine");

        expect(myMap.get("1")).toBe("No way");
        expect(myMap.get("3")).toBe("Fine");
        expect(myMap.get("9")).toBeUndefined();

    });

    it("should get the number of items in a map list and check if it's empty", () => {
        let myMap = new collections.Map<string, string>();

        myMap.put("1", "10");
        myMap.put("2", "20");
        myMap.put("3", "30");

        expect(myMap.size()).toBe(3);
        expect(myMap.isEmpty()).toBe(false);

        let emptyMap = new collections.Map<number, number>();
        expect(emptyMap.size()).toBe(0);
        expect(emptyMap.isEmpty()).toBe(true);

    });

    it("should check if key exists in map", () => {
        let myMap = new collections.Map<number, number>();

        myMap.put(10, 435);
        myMap.put(20, 24235);
        myMap.put(30, 43543);

        expect(myMap.containsKey(10)).toBe(true);
        expect(myMap.containsKey(20)).toBe(true);
        expect(myMap.containsKey(200)).toBe(false);

    });

    it("should check if value exist in map", () => {
        let myMap = new collections.Map<number, number>();

        myMap.put(10, 435);
        myMap.put(20, 24235);

        expect(myMap.containsValue(435)).toBe(true);
        expect(myMap.containsValue(24235)).toBe(true);
        expect(myMap.containsValue(2224235)).toBe(false);

    });

    it("should remove a key value pair from maplist given the key", () => {
        let cityMap = new collections.Map<string, string>();

        cityMap.put("1", "Göteborg");
        cityMap.put("2", "Stockholm");
        cityMap.put("3", "New York");
        cityMap.put("4", "London");

        expect(cityMap.size()).toBe(4);
        let stockholm = cityMap.remove("2");

        expect(stockholm).toBe("Stockholm");
        expect(cityMap.size()).toBe(3);
        expect(cityMap.containsKey("2")).toBe(false);
        expect(cityMap.containsValue("Stockholm")).toBe(false);

    });

    it("should add all the key/value pairs from another map to the invoking map", () => {
        let map1 = new collections.Map<string, string>();
        let map2 = new collections.Map<string, string>();

        map1.put("1", "Göteborg");
        map1.put("2", "Stockholm");

        map2.put("3", "New York");
        map2.put("4", "London");

        map1.putAll(map2);

        expect(map1.size()).toBe(4);
        expect(map1.get("3")).toBe("New York");

    });

    it("should add all keys in map to a set of keys", () => {
        let map1 = new collections.Map<string, string>();

        map1.put("1", "Göteborg");
        map1.put("2", "Stockholm");

        let keySet = map1.keySet();
        expect(keySet.size()).toBe(2);
        expect(keySet.toArray()[0]).toBe("1");

    });

    it("should add all values to a collection", () => {
        let cityMap = new collections.Map<string, string>();

        cityMap.put("1", "Göteborg");
        cityMap.put("2", "Stockholm");
        cityMap.put("3", "New York");
        cityMap.put("4", "London");

        let cityColl = cityMap.values();
        expect(cityColl.size()).toBe(4);
        expect(cityColl.contains("Stockholm")).toBe(true);
        expect(cityColl.contains("London")).toBe(true);
        expect(cityColl.contains("Los Angeles")).toBe(false);

    });

});