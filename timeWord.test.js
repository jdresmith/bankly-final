const timeWord = require('./timeWord');

// Test cases
const testCases = [
  ['00:00', 'midnight'],
  ['00:12', 'twelve twelve am'],
  ['01:00', 'one o’clock am'],
  ['06:01', 'six oh one am'],
  ['06:10', 'six ten am'],
  ['06:18', 'six eighteen am'],
  ['06:30', 'six thirty am'],
  ['10:34', 'ten thirty four am'],
  ['12:00', 'noon'],
  ['12:09', 'twelve oh nine pm'],
  ['23:23', 'eleven twenty three pm']
];

testCases.forEach(([input, expectedOutput]) => {
  const output = timeToWords(input);
  console.log(`Input: ${input}, Expected Output: ${expectedOutput}, Actual Output: ${output}`);
});

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});