describe('Collection implementation', function () {
    it('implements a collection', function () {
        var stringCollection = new collections.Collection();
        expect(stringCollection.size()).toBe(0);
        expect(stringCollection.isEmpty()).toBe(true);
    });
    it('adds a new item to the collection', function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Holá');
        stringCollection.add('Adiós');
        expect(stringCollection.size()).toBe(2);
    });
    it('clears/resets the collection', function () {
        var stringCollection = new collections.Collection();
        stringCollection.clear();
        expect(stringCollection.size()).toBe(0);
    });
    it('checks if element exists in collection', function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Steve');
        stringCollection.add('Gunnar');
        expect(stringCollection.contains('Glenn')).toBe(false);
        expect(stringCollection.contains('Gunnar')).toBe(true);
    });
    it('removes an element in the collection', function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Yo');
        stringCollection.add('Gazorpazorp');
        expect(stringCollection.remove('Yo')).toBe(true);
        expect(stringCollection.remove('Does\'t exist')).toBe(false);
        expect(stringCollection.size()).toBe(1);
    });
    it('converts the collection to an array', function () {
        var stringCollection = new collections.Collection();
        stringCollection.add('Rich');
        stringCollection.add('Morto');
        var newArray = stringCollection.toArray();
        expect(newArray).toEqual(jasmine.any(Array));
        stringCollection.add('Test');
        stringCollection.add('Test2');
        expect(newArray.length).toBe(2);
    });
    it('adds all the elements of a collection to the invoking collection', function () {
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
    it('should create an iterator for the collection', function () {
        var stringCollection = new collections.Collection();
        stringCollection.add("Freddie");
        stringCollection.add("Hello");
        var stringIterator = new collections.Iterator(stringCollection.toArray());
        expect(stringIterator.next()).toBe('Freddie');
        expect(stringIterator.next()).toBe('Hello');
        expect(stringIterator.next()).toBe(null);
    });
    it('should remove all elements of a given collection from the invoking collection', function () {
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
    it('should remove all elements except those contained in the given collection', function () {
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
    it('should check if the invoking collection contains all of the given collections elements', function () {
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
//# sourceMappingURL=collections-spec.js.map