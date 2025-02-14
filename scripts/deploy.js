const { execSync } = require('child_process');

try {
  // Run build
  console.log('📦 Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Format date
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0];
  const timestamp = `${date} ${time}`;

  // Git commands
  console.log('🚀 Deploying to GitHub Pages...');
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "Deploy to GitHub Pages - ${timestamp}"`, { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });

  console.log('✨ Deployment completed successfully!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 