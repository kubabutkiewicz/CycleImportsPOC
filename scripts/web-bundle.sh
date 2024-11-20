#!/bin/bash

# Create the output directory if it doesn't exist
mkdir -p analysis

# Generate the production web bundle 
npx webpack \
  --mode production \
  --output-path analysis \
  --output-filename web-bundle.js

# Check the size
ls -lh analysis/web-bundle.js 