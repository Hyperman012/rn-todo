import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { createMediaStyleSheet } from "media-style-sheet";

const MediaStyleSheet = createMediaStyleSheet({
  tablet: () => true,
  mobile: () => false,
});

function useIsDarkMode() {
  return useColorScheme() === "dark";
}

export default function App(): React.JSX.Element {
  const isDarkMode = useIsDarkMode();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <SafeAreaView style={backgroundStyle}></SafeAreaView>;
}
