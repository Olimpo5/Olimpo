export default {
  expo: {
    name: "Olimpo",
    slug: "olimpo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    android: {
      package: "com.tuempresa.olimpo",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      usesCleartextTraffic: true,
      permissions: [
        "INTERNET",
        "ACCESS_NETWORK_STATE"
      ]
    },
    plugins: [
      "./plugins/withCleartextTraffic",
      [
        "expo-build-properties",
        {
          android: {
            usesCleartextTraffic: true
          }
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "f0777a0b-0d0a-4162-ab10-74362bfbba17"
      }
    }
  }
};