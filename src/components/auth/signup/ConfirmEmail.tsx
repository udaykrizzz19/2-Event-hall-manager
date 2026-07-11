import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { styles } from "./ConfirmEmail.styles";

interface ConfirmEmailProps {
  onVerifySuccess: () => void;
}

export const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ onVerifySuccess }) => {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(183); // 3 minutes and 3 seconds (3:03) as shown in mockup

  // Countdown timer hook
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleVerify = () => {
    // If a 5 digit code is entered, simulate account completion
    if (code.length === 5) {
      onVerifySuccess();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.illustrationContainer}>
            <Image
              source={require("../../../../assets/images/loginSignup/confirm_email.svg")}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          </View>

          {/* Text Info */}
          <View style={styles.textGroup}>
            <Text style={styles.title}>Confirm Your Email</Text>
            <Text style={styles.subtitle}>
              We’ve sent 5 digits verification code{"\n"}
              to your <Text style={styles.emailHighlight}>Email</Text>
            </Text>
          </View>

          {/* Code Input Section */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Enter Verification Code</Text>
            <View style={styles.otpInputWrapper}>
              {/* Mail Left Icon */}
              <Image
                source={require("../../../../assets/images/loginSignup/Mail.svg")}
                style={styles.leftIcon}
                contentFit="contain"
              />

              {/* OTP Numeric Input */}
              <TextInput
                style={styles.textInput}
                placeholder="5-digit code"
                placeholderTextColor="#cbd5e1"
                value={code}
                onChangeText={(text) => setCode(text.replace(/[^0-9]/g, "").slice(0, 5))}
                keyboardType="number-pad"
                maxLength={5}
              />

              {/* Resend Countdown */}
              {timeLeft > 0 ? (
                <Text style={styles.timerText}>Resend in {formatTime(timeLeft)}</Text>
              ) : (
                <TouchableOpacity onPress={() => setTimeLeft(183)}>
                  <Text style={[styles.timerText, { color: "#d90404", fontWeight: "700" }]}>Resend Code</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Verification Trigger Button */}
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={handleVerify}
              activeOpacity={0.8}
            >
              <Text style={styles.verifyButtonText}>Verify and Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Support Info */}
        <View style={styles.footerLinksContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.footerLinkText}>Need Help</Text>
          </TouchableOpacity>
          <Text style={styles.footerDivider}>|</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.footerLinkText}>FAQ</Text>
          </TouchableOpacity>
          <Text style={styles.footerDivider}>|</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.footerLinkText}>Terms Of use</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
