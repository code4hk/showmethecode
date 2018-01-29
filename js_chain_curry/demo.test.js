import _ from 'lodash';
import { flow, filter } from 'lodash/fp';
// this will throw error by flow-type
import { filterrrr } from 'lodash/fp/filterrrr';

// This will throw error
// SyntaxError: demo.test.js: Lodash chain sequences are not supported by babel-plugin-lodash.
// Consider substituting chain sequences with composition patterns.
// See https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba
test('_.chain fails', () => {
  const result = _.chain([1, 2, 3])
    .map(x => x)
    .value();

  expect(result).toEqual([1, 2, 3]);
});

test('fp way', () => {
  const result = flow(
    x => x,
    filter(x => x === '周庭'),
  )(['周庭', '姚松炎']);

  expect(result).toEqual(['姚松炎']);
});

