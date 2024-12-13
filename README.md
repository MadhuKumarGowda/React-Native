# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Steps to add TailwindCSS Config to React Native app

Steps to configure tailwind css into react natives are as follows:

### 1. Navigate to [https://www.nativewind.dev/] for more information

    Need to install nativewind and it's peer dependencies by running below command
    **npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context**

### 2. Run below command to create tailwind.config.js file

      **npx tailwindcss init**

### 3. Create global.css file to add the tailwind directives

    `@tailwind base;
      @tailwind components;
      @tailwind utilities;
     `

### 4. Manually create babel.config.js file to add below configuration

    `module.exports = function (api) {api.cache(true); return {presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],"nativewind/babel",
    ], };};`

### 5. Create metro.config.js to add below configuration which will consider when build the app

`const { getDefaultConfig } = require("expo/metro-config");const { withNativeWind } = require('nativewind/metro');
   const config = getDefaultConfig(__dirname) module.exports = withNativeWind(config, { input: './global.css' })`

### 6. Import globall.css in app.js / app.tsx / index.js / index.tsx

      `import "./global.css"`

### 7. This is optional step but would be good to create **nativewind-env.d.ts** add below configuration to get rid of TS warning when we add className attribute

      /// <reference types="nativewind/types" />

### Now you are good use TailwindCss utilities in your React Native app

example:

`<View **className="flex flex-row justify-start items-start gap-3"**>
  <Text **className="text-red-700 text-3xl"**> Welcome </Text> 
  </View>`
