# Generate the bundle
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file index.js \
  --bundle-output analysis/android-bundle.js

# Check the size
ls -lh analysis/android-bundle.js