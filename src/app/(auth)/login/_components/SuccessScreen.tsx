import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./SuccessScreen.styles";

interface SuccessScreenProps {
  onExplore: () => void;
}

const SuccessIllustration: React.FC = () => {
  return (
    <View style={styles.successGraphicsContainer}>
      {/* Light blue/grey circular glow base */}
      <View style={styles.glowBackground}>
        {/* Floating Arc Ornament */}
        <View style={styles.blueArc} />
        
        {/* Floating Squiggle Ornaments */}
        <View style={styles.pinkSquiggle} />
        <View style={styles.orangeSquiggle} />

        {/* Floating Confetti Dots */}
        <View style={styles.dotBlue1} />
        <View style={styles.dotOrange1} />
        <View style={styles.dotBlue2} />
        <View style={styles.dotGrey1} />
        <View style={styles.dotGrey2} />

        {/* Card drop-shadow representation */}
        <View style={styles.cardShadowBackground} />

        {/* Inner white login confirmation card */}
        <View style={styles.cardContainer}>
          {/* Top-right small arrow action button */}
          <View style={styles.cardTopRightButton}>
            <Text style={styles.cardTopRightButtonText}>➔</Text>
          </View>

          {/* Green checkmark success badge */}
          <View style={styles.cardGreenBadgeContainer}>
            <View style={styles.cardGreenBadgeInner}>
              <Text style={styles.cardGreenBadgeText}>✓</Text>
            </View>
          </View>

          {/* Simulated content text block bars */}
          <View>
            <View style={styles.cardGreyPill} />
            <View style={styles.cardLightBox} />
          </View>
        </View>
      </View>
    </View>
  );
};

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onExplore }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Success Illustration Card */}
        <View style={styles.illustrationContainer}>
          <SuccessIllustration />
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
