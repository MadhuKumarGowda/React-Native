import { Image, StyleSheet, Platform, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import "../../global.css";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View className="flex flex-row justify-start items-start gap-3">
        {/* Applied Tailwind CSS here */}
        <Text className="text-red-700 text-3xl"> Welcome </Text>
        <HelloWave />
      </View>
      <View className="gap-8 mb-4">
        <Text className="text-blue-700 text-2xl"> Step 1: Try it </Text>
        <View>
          <Text>
            {" "}
            Edit <Text className="font-semibold">app/(tabs)/index.tsx</Text>to
            see changes. Press{" "}
            <Text className="font-semibold">
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </Text>
          </Text>
        </View>
      </View>

      <View className="gap-8 mb-4">
        <Text className="text-blue-700 text-2xl">Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </View>
      <View className="gap-8 mb-8">
        <Text className="text-blue-700 text-2xl">
          Step 3: Get a fresh start
        </Text>
        <Text>
          When you're ready, run <Text></Text>
          <Text className="font-semibold">npm run reset-project</Text>to get a
          fresh
          <Text className="font-semibold">app</Text> directory. This will move
          the current
          <Text className="font-semibold"> app</Text>
          <Text className="font-semibold"> app-example</Text>
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
