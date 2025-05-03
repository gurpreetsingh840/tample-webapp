const fs = require('fs');
const path = require('path');

// Read app settings
const appSettingsPath = path.join(__dirname, '../public/assets/config/app-settings.json');
const appSettings = JSON.parse(fs.readFileSync(appSettingsPath, 'utf8'));

// Read index.html
const indexPath = path.join(__dirname, '../src/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Replace placeholder with Facebook URL
const facebookUrl = appSettings.socialLinks.facebook;
indexHtml = indexHtml.replace(/your-facebook-page-url/g, facebookUrl);

// Write back the modified index.html
fs.writeFileSync(indexPath, indexHtml);

console.log('Meta tags injected successfully!');
