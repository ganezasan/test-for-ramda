# test for [ramda](https://github.com/ramda/ramda)

The example shows how much time `ramda.uniq` takes to run with more than 1000 items. 
When the number of items about 2000, it needs around 6 to 7 seconds.

```
npx jest ramda.test.js
 PASS  ./ramda.test.js (18.327 s)
  ✓ ramda-0.27.0 (7704 ms)
  ✓ ramda-0.27.1 (7566 ms)
  ✓ ramda with 1000 items (1853 ms)
  ✓ ramda with 100 items (20 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        18.977 s
```

## setup 

```
npm install
```

## import Github branches

```
npx babel-node importBranches.js
```

## run test 

```
npx jest ramda.test.js
```
