
// Jasmine is an assert framework, so you can verify that your expectations are OK.
// See https://jasmine.github.io/
// Below is just an example to get you going!

describe('Collection implementation', () => {

    let stringColl = new collections.Collection<string>();

    it('implements a collection', () => {

        expect(stringColl.size()).toBe(0);
        expect(stringColl.isEmpty()).toBe(true);

    });

    it('adds a new item to the collection', () =>  {

        stringColl.add('Holá');
        stringColl.add('Adiós');
        expect(stringColl.size()).toBe(2);

    });

    it('clears/resets the collection', () => {

        stringColl.clear();
        expect(stringColl.size()).toBe(0);

    });

    it('checks if element exists in collection', () => {

    });

});