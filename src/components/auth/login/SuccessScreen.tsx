import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { styles } from "./SuccessScreen.styles";

interface SuccessScreenProps {
  onExplore: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onExplore }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Success Illustration SVG Card */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../../../../assets/images/loginSignup/Success_screen.svg")}
            style={{ width: 280, height: 280, marginLeft: 30 }}
            contentFit="contain"
          />
        </View>

        {/* Text Section */}
        <View style={styles.textGroup}>
          <Text style={styles.title}>Yey! Login Successfull</Text>
          <Text style={styles.subtitle}>
            You will be moved to home screen right now.{"\n"}
            Enjoy the features!
          </Text>
        </View>

        {/* Bottom Call to Action */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={onExplore}
          >
            <Text style={styles.buttonText}>Lets Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
