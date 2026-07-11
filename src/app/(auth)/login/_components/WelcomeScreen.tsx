import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { styles } from "./WelcomeScreen.styles";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  return (
    <View style={styles.container}>
      {/* Top Graphic Wave SVG Image using expo-image */}
      <Image
        source={require("../../../../../assets/images/loginSignup/welcome.svg")}
        style={styles.topImage}
        contentFit="cover"
      />

      {/* Content Area */}
      <View style={styles.contentContainer}>
        <View style={styles.textGroup}>
          <Text style={styles.title}>
            Everything You need is{"\n"}
            right here{"\n"}
            At one place !
          </Text>
          <Text style={styles.subtitle}>
            Manage and oversee things all at once !
          </Text>
        </View>

        {/* Action Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={onGetStarted}
          >
            <Text style={styles.buttonText}>GET STARTED  ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
