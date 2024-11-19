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
    echo "ServiceA.useServiceB present: $(grep -c "useServiceB" "$output_file")"
    echo "ServiceB.useServiceC present: $(grep -c "useServiceC" "$output_file")"
    echo "ServiceC.doSomethingC present: $(grep -c "doSomethingC" "$output_file")"
    echo "----------------------------------------"
}

# Create analysis directory if it doesn't exist
mkdir -p analysis

# Run analysis for each test case
for case_file in test/treeshaking-cases/*.ts; do
    analyze_bundle "$case_file"
done