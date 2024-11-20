# Cycle Imports POC Performance Analysis

This repository contains performance analysis and bundle size comparisons across different optimization approaches.

## Performance Benchmarks

Average execution time across 5 runs for each service:

| Service   | Main Branch | Fix-1 Branch | Fix-2 Branch |
|-----------|-------------|--------------|--------------|
| ServiceA  | 297.109 ms  | 298.146 ms   | 297.422 ms  |
| ServiceB  | 296.827 ms  | 297.660 ms   | 296.920 ms  |
| ServiceC  | 297.310 ms  | 296.583 ms   | 298.102 ms  |

## Bundle Size Analysis

To analyze bundle sizes across different platforms, run the following commands:

### Android Bundle Analysis

```bash
# using npm
npm run analyze-android

# OR using Yarn
yarn analyze-android
```

### iOS Bundle Analysis

```bash
# using npm
npm run analyze-ios

# OR using Yarn
yarn analyze-ios
```

### Bundle Size Comparison

| Platform | Main Branch | Fix-1 Branch | Fix-2 Branch |
|----------|-------------|--------------|--------------|
| Android  | 1.7 MB      | 1.7 MB       | 1.7 MB       |
| Web      | TBD         | TBD          | TBD          |


