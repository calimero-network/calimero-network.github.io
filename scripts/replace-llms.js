#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const customLlmsPath = path.join(__dirname, '../static/llms.txt');
const buildLlmsPath = path.join(__dirname, '../build/llms.txt');

console.log('🔄 Replacing plugin-generated llms.txt with custom content...');

try {
  // Read our custom llms.txt
  const customContent = fs.readFileSync(customLlmsPath, 'utf8');
  
  // Write it to the build directory, replacing the plugin's output
  fs.writeFileSync(buildLlmsPath, customContent, 'utf8');
  
  console.log('✅ Successfully replaced llms.txt with custom content');
  console.log(`📁 Custom content written to: ${buildLlmsPath}`);
  
} catch (error) {
  console.error('❌ Error replacing llms.txt:', error.message);
  process.exit(1);
}
