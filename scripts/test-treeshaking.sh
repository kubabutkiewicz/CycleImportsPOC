# For testA
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file test/treeShaking/testA.ts \
  --bundle-output analysis/testA-bundle.js

# For testB
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file test/treeShaking/testB.ts \
  --bundle-output analysis/testB-bundle.js

  # For testC
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file test/treeShaking/testC.ts \
  --bundle-output analysis/testC-bundle.js


grep "useServiceB" analysis/testA-bundle.js
grep "useServiceC" analysis/testA-bundle.js
grep "doSomethingC" analysis/testA-bundle.js

grep "useServiceA" analysis/testB-bundle.js
grep "useServiceC" analysis/testB-bundle.js
grep "doSomethingC" analysis/testB-bundle.js

grep "useServiceA" analysis/testC-bundle.js
grep "useServiceB" analysis/testC-bundle.js
grep "doSomethingB" analysis/testC-bundle.js