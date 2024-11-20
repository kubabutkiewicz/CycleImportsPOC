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
| Web      | 0.391 MB    | 0.388 MB     | 0.390 MB     |

### Tree Shaking Analysis Results

#### Main Branch Results

Methods with unexpected presence counts (ideal count should be 1):

**Case 1:**
- ServiceA.doSomethingA: 3 instances
- ServiceC.testCircularC2: 3 instances
- Most other methods: 2 instances
- ServiceC.complexChainC: 1 instance (optimal)

**Case 2:**
- ServiceC.testCircularC2: 3 instances
- All other methods: 2 instances

**Case 3:**
- ServiceB.complexChainB: 3 instances
- ServiceC.testCircularC2: 3 instances
- Most other methods: 2 instances
- ServiceC.complexChainC: 1 instance (optimal)

#### Fix-1 Branch Results

**Case 1:**
- ServiceA.doSomethingA: 4 instances
- ServiceB.doSomethingB: 3 instances
- ServiceC.doSomethingC: 3 instances
- Some methods: 2 instances
- Most circular methods: 1 instance (improved)

**Case 2:**
- ServiceA.doSomethingA: 3 instances
- ServiceB.doSomethingB: 3 instances
- ServiceC.doSomethingC: 3 instances
- Some methods: 2 instances
- Most circular methods: 1 instance (improved)

**Case 3:**
- ServiceA.doSomethingA: 3 instances
- ServiceB.doSomethingB: 3 instances
- ServiceC.doSomethingC: 3 instances
- Some methods: 2 instances
- Most circular methods: 1 instance (improved)

### Tree Shaking Effectiveness

| Platform | Main Branch | Fix-1 Branch | Fix-2 Branch |
|----------|-------------|--------------|--------------|
| General  | Suboptimal - Most methods appear 2-3 times | Mixed - Core methods 3-4 times, but better circular handling | TBD |
| Web      | TBD         | TBD          | TBD          |


