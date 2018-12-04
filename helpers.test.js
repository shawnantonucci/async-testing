const helpers = require('./helpers.js');

test("is a string", () => {
    const str = 'hello';

    // Assert
    expect(helpers.areSameLength(str)).toThrow();
});

it('should fail', () => {
    expect(false).toBeTruthy();
});