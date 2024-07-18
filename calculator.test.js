const add = require('./calculator');

test('Return the value passing to it', () => {
  expect(add("")).toBe(1);
});