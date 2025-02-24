const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const shouldVersion = !process.argv.includes('--no-version');

try {
  // Read and update version
  const versionPath = path.join(__dirname, '../src/version.json');
  const packagePath = path.join(__dirname, '../package.json');

  // Read both files
  const versionInfo = require(versionPath);
  const packageJson = require(packagePath);

  // Increment version
  const [major, minor, patch] = versionInfo.version.split('.').map(Number);
  const newVersion = `${major}.${minor}.${patch + (shouldVersion ? 1 : 0)}`;

  // Update both files
  versionInfo.version = newVersion;
  versionInfo.lastUpdate = new Date().toISOString();
  packageJson.version = newVersion;

  // Save updates
  if (shouldVersion) {
    fs.writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2));
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    console.log(`📝 Version bumped to ${newVersion}`);
  } else {
    console.log(`📝 Version remains at ${newVersion}`);
  }

  // Run build
  console.log('📦 Building application...');
  execSync('npm run build:prod:git', { stdio: 'inherit' });

  // Format date
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0];
  const timestamp = `${date} ${time}`;

  // Git commands
  console.log('🚀 Deploying to GitHub Pages...');
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "Deploy GitHub v${newVersion} - ${timestamp}"`, { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });

  console.log(`✨ Version ${newVersion} deployed successfully!`);
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 