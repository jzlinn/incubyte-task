const add = require('./calculator');

test('Return 0 if passing nothing to add()', () => {
  expect(add("")).toBe(0);
});

// test('Return TRUE if passing with coma seperated', () => {
//   expect(add("1,2")).toBe(true);
// });

test('Return FALSE if passing with coma seperated', () => {
  expect(add("12")).toBe(false);
});

test('Returns the sum of two numbers', () => {
  expect(add("10,20")).toBe(30);
});

test('Returns the sum of Three numbers with spacesin between', () => {
  expect(add("  10  , 20, 40")).toBe(70);
});

test('returns the sum of numbers with new lines between them', () => {
  expect(add("10,\n20,40")).toBe(70);
});
