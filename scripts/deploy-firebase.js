const { execSync } = require('child_process');

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

    } catch (error) {
        console.error('❌ Deployment failed:', error);
        process.exit(1);
    }
}

deployToFirebase();
