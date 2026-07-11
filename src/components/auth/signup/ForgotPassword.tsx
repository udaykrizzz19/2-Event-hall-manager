import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { styles } from "./ForgotPassword.styles";

interface ForgotPasswordProps {
  onSendCode: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSendCode }) => {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const handleSendCode = () => {
    if (isEmailValid) {
      setShowError(false);
      onSendCode();
    } else {
      setShowError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={{ width: "100%", alignItems: "center" }}>
          {/* Top Reset Password SVG Illustration */}
          <View style={styles.illustrationContainer}>
            <Image
              source={require("../../../../assets/images/loginSignup/reset_pass.svg")}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          </View>

          {/* Text Info */}
          <View style={styles.textGroup}>
            <Text style={styles.title}>Reset Your Password</Text>
            <Text style={styles.subtitle}>
              Enter your email adress below{"\n"}
              and we’ll send you a link with instructions
            </Text>
          </View>

          {/* Form inputs */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email Address</Text>
            <View style={[styles.inputWrapper, emailFocused && styles.inputWrapperFocused]}>
              {/* Mail Left Icon */}
              <Image
                source={require("../../../../assets/images/loginSignup/Mail.svg")}
                style={styles.leftIcon}
                contentFit="contain"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter Email Address"
                placeholderTextColor="#cbd5e1"
                value={email}
                onChangeText={(text) => {
                  setEmail(text.replace(/\s/g, ""));
                  if (showError) setShowError(false);
                }}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Error Message */}
            {showError && (
              <Text style={{ color: "#d90404", fontSize: 12, marginTop: 4, fontWeight: "500", paddingHorizontal: 4 }}>
                Enter valid email address
              </Text>
            )}

            {/* Action Trigger Button */}
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendCode}
              activeOpacity={0.8}
            >
              <Text style={styles.sendButtonText}>Send Verification Code</Text>
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
