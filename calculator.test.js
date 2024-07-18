const add = require('./calculator');

test('Return 0 if passing nothing to add()', () => {
  expect(add("")).toBe(0);
});

test('Return TRUE if passing with coma seperated', () => {
  expect(add("1,2")).toBe(true);
});

test('Return FALSE if passing with coma seperated', () => {
  expect(add("12")).toBe(false);
});
