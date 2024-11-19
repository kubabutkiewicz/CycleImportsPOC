# Generate the bundle
npx react-native bundle \
  --platform ios \
  --dev false \
  --entry-file index.js \
  --bundle-output analysis/ios-bundle.js

# Check the size
ls -lh analysis/ios-bundle.js