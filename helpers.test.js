const helpers = require('./helpers.js');

describe('helpers libary', () => {

    describe('add function', () => {
        it('should do x when called with/passed y', () => {

        });

        // low hanging fruit
        // obvious happy path
        // obvious sad pathh
        // edge/corner cases
    });

    describe('areSameLength function', () => {

        it('should return true when called with strings of the same length', () => {
            expect(helpers.areSameLength('a', 'a')).toBe(true);
        });

        it('should return false when called with strings of the different length', () => {
            expect(helpers.areSameLength('a', 'aa')).toBe(false);
        });

        it('should return false when any of the argument are not strings', () => {
            expect(helpers.areSameLength('1', 1)).toBe(null);
            expect(helpers.areSameLength('1', [])).toBe(null);
            expect(helpers.areSameLength('1', {})).toBe(null);
            expect(helpers.areSameLength('1', NaN)).toBe(null);
        });

        it('the type of NaN should be NaN', () => {
            expect(typeof NaN).toBe('number');
        })
    // check for different length strings
    // it's not a string
    // passing no arguments
    // passing null or undefined
    // passing non strings
        // passing numbers
        // passing arrays
        // passing objects
    });
});