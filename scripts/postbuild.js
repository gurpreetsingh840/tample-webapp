const fs = require('fs');
const path = require('path');

try {
  // Update version info
  const versionPath = path.join(__dirname, '../src/version.json');
  const versionInfo = require(versionPath);
  versionInfo.lastUpdate = new Date().toISOString();
  fs.writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2));
  console.log('✓ Version info updated');

  // Post-build file operations
  const docsPath = path.join(__dirname, '../docs');
  const browserPath = path.join(docsPath, 'browser');

  // Check if files exist before removing
  if (fs.existsSync(path.join(docsPath, 'index.html'))) {
    fs.unlinkSync(path.join(docsPath, 'index.html'));
  }
  if (fs.existsSync(path.join(docsPath, '404.html'))) {
    fs.unlinkSync(path.join(docsPath, '404.html'));
  }
  console.log('✓ Old files cleaned');

  // Ensure browser directory exists
  if (!fs.existsSync(browserPath)) {
    throw new Error('Browser directory not found! Build may have failed.');
  }

  // Copy from browser folder
  fs.readdirSync(browserPath).forEach(file => {
    fs.cpSync(
      path.join(browserPath, file), 
      path.join(docsPath, file), 
      { recursive: true, force: true }
    );
  });
  console.log('✓ New files copied');

  // Remove browser folder
  fs.rmSync(browserPath, { recursive: true, force: true });
  console.log('✓ Browser folder cleaned');

  // Create 404.html
  fs.copyFileSync(
    path.join(docsPath, 'index.html'),
    path.join(docsPath, '404.html')
  );
  console.log('✓ 404.html created');

  console.log('✨ Post-build operations completed successfully!');
} catch (error) {
  console.error('❌ Error during post-build:', error.message);
  process.exit(1);
} 