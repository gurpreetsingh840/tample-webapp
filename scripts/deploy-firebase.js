const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function executeCommand(command) {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Error executing command: ${command}`);
        console.error(error);
        process.exit(1);
    }
}

async function deployToFirebase() {
    try {
        // Read and update version
        const versionPath = path.join(__dirname, '../src/version.json');
        const packagePath = path.join(__dirname, '../package.json');

        // Read both files
        const versionInfo = require(versionPath);
        const packageJson = require(packagePath);

        // Increment version
        const [major, minor, patch] = versionInfo.version.split('.').map(Number);
        const newVersion = `${major}.${minor}.${patch + 1}`;

        // Update both files
        versionInfo.version = newVersion;
        versionInfo.lastUpdate = new Date().toISOString();
        packageJson.version = newVersion;

        // Save updates
        fs.writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2));
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        console.log(`📝 Version bumped to ${newVersion}`);

        console.log('🚀 Starting Firebase deployment process...');

        // Build the application for production
        console.log('📦 Building application...');
        executeCommand('npm run build:prod');

        // Ensure user is logged in to Firebase
        console.log('🔑 Checking Firebase login status...');
        try {
            execSync('firebase projects:list', { stdio: 'pipe' });
        } catch (error) {
            console.log('📝 Please login to Firebase...');
            executeCommand('firebase login');
        }

        // Deploy to Firebase
        console.log('🚀 Deploying to Firebase...');
        executeCommand('firebase deploy --only hosting');

        console.log('✅ Deployment completed successfully!');

        // Format date
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toTimeString().split(' ')[0];
        const timestamp = `${date} ${time}`;

        // Git commands
        console.log('📝 Committing changes...');
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "Deploy Firebase v${newVersion} - ${timestamp}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });

        console.log(`✨ Version ${newVersion} deployed successfully!`);

    } catch (error) {
        console.error('❌ Deployment failed:', error);
        process.exit(1);
    }
}

deployToFirebase();
