#!/bin/bash

# Function to bundle and analyze
analyze_bundle() {
    local case_file=$1
    local output_file="analysis/web-bundle-${case_file##*/}.js"
    
    echo "Testing Web Build: $case_file"
    
    # Bundle the code using webpack
    npx webpack \
        --mode production \
        --entry ./$case_file \
        --output-path $(dirname "$output_file") \
        --output-filename $(basename "$output_file") \
        --target web

    # Analysis
    echo "Checking for unused exports in web bundle..."
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
    
    # Check bundle size
    echo "Bundle size: $(wc -c < "$output_file") bytes"
    echo "----------------------------------------"
}

# Create analysis directory if it doesn't exist
mkdir -p analysis

# Run analysis for each test case
for case_file in test/treeshaking-cases/*.ts; do
    analyze_bundle "$case_file"
done 