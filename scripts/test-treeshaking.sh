#!/bin/bash

# Function to bundle and analyze
analyze_bundle() {
    local case_file=$1
    local output_file="analysis/bundle-${case_file##*/}.js"
    
    echo "Testing: $case_file"
    
    # Bundle the code
    npx react-native bundle \
        --platform android \
        --dev false \
        --entry-file "$case_file" \
        --bundle-output "$output_file"
    
    # Analysis
    echo "Checking for unused exports in bundle..."
    echo "ServiceA.doSomethingA present: $(grep -c "doSomethingA" "$output_file")"
    echo "ServiceA.useServiceB present: $(grep -c "useServiceB" "$output_file")"
    echo "ServiceA.testCircularA1 present: $(grep -c "testCircularA1" "$output_file")"
    echo "ServiceA.testCircularA2 present: $(grep -c "testCircularA2" "$output_file")"
    echo "ServiceA.complexChainA present: $(grep -c "complexChainA" "$output_file")"
    echo "ServiceB.doSomethingB present: $(grep -c "doSomethingB" "$output_file")"
    echo "ServiceB.useServiceC present: $(grep -c "useServiceC" "$output_file")"
    echo "ServiceB.testCircularB1 present: $(grep -c "testCircularB1" "$output_file")"
    echo "ServiceB.testCircularB2 present: $(grep -c "testCircularB2" "$output_file")"
    echo "ServiceB.complexChainB present: $(grep -c "complexChainB" "$output_file")"
    echo "ServiceC.doSomethingC present: $(grep -c "doSomethingC" "$output_file")"
    echo "ServiceC.useServiceA present: $(grep -c "useServiceA" "$output_file")"
    echo "ServiceC.testCircularC1 present: $(grep -c "testCircularC1" "$output_file")"
    echo "ServiceC.testCircularC2 present: $(grep -c "testCircularC2" "$output_file")"
    echo "ServiceC.complexChainC present: $(grep -c "complexChainC" "$output_file")"
    echo "----------------------------------------"
}

# Create analysis directory if it doesn't exist
mkdir -p analysis

# Run analysis for each test case
for case_file in test/treeshaking-cases/*.ts; do
    analyze_bundle "$case_file"
done