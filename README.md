# Gurudwara Singh Sabha Website

A modern, responsive website for Gurudwara Singh Sabha built with Angular and TailwindCSS.

## Features
- Responsive design with mobile-first approach
- Dark mode support
- Programs and services information
- Community services section
- Contact information with Google Maps integration
- Modern UI with smooth animations

## Tech Stack
- Angular 19
- TailwindCSS
- Material Icons
- Font Awesome

## Development
```bash
# Clone the repository
git clone https://github.com/gurpreetsingh840/temple-webapp.git

# Install dependencies
npm install

# Start development server
npm start
```

## Deployment
```bash
# Build for production
ng build

# The site will be built to /docs folder for GitHub Pages
```

## Live Demo
Visit: https://ricgurudwara.org/

## Contributing
We welcome contributions to improve this Gurudwara website template! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Run tests and ensure the site works locally
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to your branch (`git push origin feature/YourFeature`)
7. Open a Pull Request

### Guidelines
- Keep the design clean and accessible
- Maintain mobile responsiveness
- Follow Angular best practices
- Respect Sikh values and traditions in all content
- Test your changes thoroughly

### Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/temple-webapp.git

# Add upstream remote
git remote add upstream https://github.com/gurpreetsingh840/temple-webapp.git

# Install dependencies
npm install

# Start development server
npm start
```

## Local Configuration

The application uses two configuration files:
- `appsettings.json` - Default settings checked into source control
- `appsettings.local.json` - Local development settings (git ignored), for security reasons

### Development
During local development, create `appsettings.local.json` in the `src/assets` directory:

```json
{
  "firebase": {
    "apiKey": "your-api-key",
    "authDomain": "your-auth-domain",
    "projectId": "your-project-id",
    "storageBucket": "your-storage-bucket",
    "messagingSenderId": "your-messaging-sender-id",
    "appId": "your-app-id"
  }
}
```

### Firebase Deployment
When building for Firebase deployment (`npm run deploy:all`), the settings from both files will be automatically merged. The local settings will override the default settings. This only happens during the Firebase build process.

For all other environments, only the relevant environment-specific settings file will be used.

### Need Help?
- Open an issue for bugs or suggestions
- Ask questions in the discussions section
- Review existing PRs and issues before working on a new feature

## License
This project is licensed under the MIT License with additional restrictions:
- The software may not be sold or used for commercial purposes
- The software may not be misrepresented or manipulated in a way that could be harmful or disrespectful

See the [LICENSE](LICENSE) file for details.
