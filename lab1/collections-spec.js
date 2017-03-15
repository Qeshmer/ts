describe('Collection implementation', function () {
    var stringColl = new collections.Collection();
    it('implements a collection', function () {
        expect(stringColl.size()).toBe(0);
        expect(stringColl.isEmpty()).toBe(true);
    });
    it('adds a new item to the collection', function () {
        stringColl.add('Holá');
        stringColl.add('Adiós');
        expect(stringColl.size()).toBe(2);
    });
    it('clears/resets the collection', function () {
        stringColl.clear();
        expect(stringColl.size()).toBe(0);
    });
    it('checks if element exists in collection', function () {
        stringColl.add('Steve');
        stringColl.add('Gunnar');
        expect(stringColl.contains('Glenn')).toBe(false);
        expect(stringColl.contains('Gunnar')).toBe(true);
        stringColl.clear();
    });
    it('removes an element in the collection', function () {
        stringColl.add('Yo');
        stringColl.add('Gazorpazorp');
        expect(stringColl.remove('Yo')).toBe(true);
        expect(stringColl.remove('Does\'t exist')).toBe(false);
        expect(stringColl.size()).toBe(1);
    });
});
//# sourceMappingURL=collections-spec.js.map