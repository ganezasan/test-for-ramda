import fs from 'fs';
import * as R from 'ramda';
import * as newR from 'ramda-0.27.1';

const json = fs.readFileSync('./branches.json');
const branches = JSON.parse(json).map(d => ({text: d.name, value: d.name}));

test('ramda-0.27.0', () => {
  const items = R.uniq(branches);
  expect(items.length).toBe(1992);
});

test('ramda-0.27.1', () => {
  const items = newR.uniq(branches);
  expect(items.length).toBe(1992);
});

test('ramda with 1000 items', () => {
  const items = R.uniq(branches.slice(0, 1000));
  expect(items.length).toBe(1000);
});

test('ramda with 100 items', () => {
  const items = R.uniq(branches.slice(0, 100));
  expect(items.length).toBe(100);
});
