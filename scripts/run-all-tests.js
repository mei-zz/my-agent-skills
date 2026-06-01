/**
 * Run All Skills Tests
 * 
 * This script finds and runs all test.js files in the skills directory.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function findTestScripts(dir) {
  const tests = [];
  
  if (!fs.existsSync(dir)) {
    return tests;
  }
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      tests.push(...findTestScripts(fullPath));
    } else if (item.name === 'test.js') {
      tests.push(fullPath);
    }
  }
  
  return tests;
}

const skillsDir = path.join(__dirname, '..', 'skills');
const tests = findTestScripts(skillsDir);

console.log(`\n🧪 Found ${tests.length} test(s)\n`);

if (tests.length === 0) {
  console.log('No tests found. Add test.js files to your skills.');
  process.exit(0);
}

let passed = 0;
let failed = 0;

for (const test of tests) {
  const relativePath = path.relative(skillsDir, test);
  console.log(`\n📋 Running: ${relativePath}`);
  console.log('-'.repeat(40));
  try {
    execSync(`node "${test}"`, { stdio: 'inherit' });
    passed++;
  } catch (e) {
    failed++;
  }
}

console.log('\n' + '='.repeat(40));
console.log(`Results: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!');
  process.exit(0);
}