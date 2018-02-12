# Full Stack Web Solution

This is an ES6 full stack web project template with Express and vuejs.

## FSWS Template Structure
```

├── client              // Web Client Folder
│
│ ├── build                 // Webpack build script
│ │ ├── loaders                 // loaders
│ │ ├── plugins                 // plugins
│ │ ├── index.js                // Script Entry
│ │ ├── config.base.js          // Basic configs
│ │ ├── config.staging.js       // Staging config
│ │ ├── config.production.js    // Production config
│ │ ├── config.development.js   // Development config
│ │
│ ├── dist              // Web dist Folder
│ │
│ ├── src               // Web Client Source Code
│ │ │
│ │ ├── admin               // Admin Project Folder
│ │ │ ├── assets                // Project assets
│ │ │ ├── components            // Components
│ │ │ ├── directives            // Directives
│ │ │ ├── constants             // Constant variables
│ │ │ ├── i18n                  // i18n
│ │ │ ├── views                 // Page Views
│ │ │ ├── services              // Web services
│ │ │ ├── vuex                  // vuex store
│ │ │ ├── main.js               // Main Entry
│ │ │ ├── router.js             // Router configs
│ │ │
│ │ ├── pc                  // PC Project Folder
│ │ │
│ │ ├── mobile              // Mobile Project Folder
│ │ │
│ ├── index.html        // Common index html
│
├── config          // Env Common Config Folder
│ ├── index.js          // Env entry
│ ├── staging.env       // Staging config
│ ├── production.env    // Production config
│ ├── development.env   // Development config
│
├── logs            // Server Log Folder
│
├── server          // Server Source Code
│ ├── ApiRouter       // Api Router
│ ├── Application     // Main App Startup
│ ├── Constants       // Constant variables
│ ├── Controllers     // Controllers
│ ├── Extends         // Extention Apps
│ ├── Models          // Models
│ ├── Services        // Services
│ ├── WebRouter       // Web Router
│ ├── index.js        // Server Entry
│
├── test            // Test Script Folder
├── uploads         // User upload Folder
├── .babelrc        // babel config
├── README.md       // Readme.md
├── package.json    // package.json
├── jsconfig.json   // vscode config

```

## Enviroment

- node v6.0 up
- mongodb v3.4.4 up

## Installation

- This project is using ccap to generate captchas, so if you are using Windows OS, please preinstall C++ compiler.
- If start up the feature of captcha generator, you should preinstall these plugins.
  - MAC OSX User run this command, `brew install pkg-config cairo libpng jpeg giflib`.
  - Windows User：
    - Install [Chocolatey](https://chocolatey.org/)
    - Install cairo[32 Bit](http://ftp.gnome.org/pub/GNOME/binaries/win32/gtk+/2.24/gtk+-bundle_2.24.10-20120208_win32.zip)/[64 Bit](http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip), and unzip this into C:\GTK.
    - Run command, `choco install -y python2 gtk-runtime microsoft-build-tools libjpeg-turbo`.
- Finish the step above, then run `npm install`.

## Start up

- Start up mongodb.
- Write your env config [development|staging|production].cofig in the `config` Folder
- In development mode：
  - Run `npm run development:server`
  - Run `npm run development:client`
- In staging/production mode：
  - Run `npm run staging` or `npm run production`
  
## Testing

- Start up mongodb.
- Run `npm run test`

## Todo:
These features are WIP :construction:.
- Create a demo shop/user app.
- Remove babel-node server and using webpack dist for prd/staging.
- Front client add weex project folder.
- Make create server model more hommization.

## Contribution

Thank you to all the people who would like to contribute  FSWS Project!