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
    });
});
//# sourceMappingURL=collections-spec.js.map