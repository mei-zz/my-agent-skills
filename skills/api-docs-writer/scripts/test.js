/**
 * API Docs Writer Skill - Test Script
 * 
 * This script validates the skill configuration and demonstrates basic functionality.
 */

const fs = require('fs');
const path = require('path');

// Test 1: Validate SKILL.md exists and has correct format
function testSkillMdFormat() {
  const skillPath = path.join(__dirname, '..', 'SKILL.md');
  
  if (!fs.existsSync(skillPath)) {
    console.error('❌ SKILL.md not found');
    return false;
  }
  
  const content = fs.readFileSync(skillPath, 'utf8');
  
  // Check YAML frontmatter
  if (!content.startsWith('---')) {
    console.error('❌ Missing YAML frontmatter');
    return false;
  }
  
  // Check required fields
  const requiredFields = ['name:', 'description:', 'version:', 'author:'];
  for (const field of requiredFields) {
    if (!content.includes(field)) {
      console.error(`❌ Missing required field: ${field}`);
      return false;
    }
  }
  
  console.log('✅ SKILL.md format is valid');
  return true;
}

// Test 2: Validate skill metadata
function testSkillMetadata() {
  const skillPath = path.join(__dirname, '..', 'SKILL.md');
  const content = fs.readFileSync(skillPath, 'utf8');
  
  // Extract name from frontmatter
  const nameMatch = content.match(/name:\s*(.+)/);
  if (!nameMatch || !nameMatch[1].trim()) {
    console.error('❌ Invalid skill name');
    return false;
  }
  
  console.log(`✅ Skill name: ${nameMatch[1].trim()}`);
  return true;
}

// Run all tests
function runTests() {
  console.log('\n🧪 Running API Docs Writer Skill Tests...\n');
  
  const results = [
    testSkillMdFormat(),
    testSkillMetadata()
  ];
  
  console.log('\n' + '='.repeat(40));
  if (results.every(r => r)) {
    console.log('✅ All tests passed!');
    process.exit(0);
  } else {
    console.log('❌ Some tests failed');
    process.exit(1);
  }
}

runTests();