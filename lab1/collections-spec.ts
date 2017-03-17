
// Jasmine is an assert framework, so you can verify that your expectations are OK.
// See https://jasmine.github.io/
// Below is just an example to get you going!

describe('Collection implementation', () => {


    it('implements a collection', () => {
        let stringCollection = new collections.Collection<string>();
        expect(stringCollection.size()).toBe(0);
        expect(stringCollection.isEmpty()).toBe(true);

    });

    it('adds a new item to the collection', () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Holá');
        stringCollection.add('Adiós');
        expect(stringCollection.size()).toBe(2);

    });

    it('clears/resets the collection', () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.clear();
        expect(stringCollection.size()).toBe(0);

    });

    it('checks if element exists in collection', () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Steve');
        stringCollection.add('Gunnar');
        expect(stringCollection.contains('Glenn')).toBe(false);
        expect(stringCollection.contains('Gunnar')).toBe(true);
    });

    it('removes an element in the collection', () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add('Yo');
        stringCollection.add('Gazorpazorp');
        expect(stringCollection.remove('Yo')).toBe(true);
        expect(stringCollection.remove('Does\'t exist')).toBe(false);
        expect(stringCollection.size()).toBe(1);
    });

    it('converts the collection to an array', () => {
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

    it('adds all the elements of a collection to the invoking collection', () => {
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

    it('should create an iterator for the collection', () => {
        let stringCollection = new collections.Collection<string>();
        stringCollection.add("Freddie");
        stringCollection.add("Hello");

        let stringIterator = new collections.Iterator<string>(stringCollection.toArray());
        expect(stringIterator.next()).toBe('Freddie');
        expect(stringIterator.next()).toBe('Hello');
        expect(stringIterator.next()).toBe(null);

    });

    it('should remove all elements of a given collection from the invoking collection', () => {

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

    it('should remove all elements except those contained in the given collection', () => {
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

    it('should check if the invoking collection contains all of the given collections elements', () => {
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