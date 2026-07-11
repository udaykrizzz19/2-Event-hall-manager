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
import { styles } from "./EnterNewPassword.styles";

interface EnterNewPasswordProps {
  onResetSuccess: () => void;
}

export const EnterNewPassword: React.FC<EnterNewPasswordProps> = ({ onResetSuccess }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleSetNewPassword = () => {
    // Basic match validation
    if (password.length >= 6 && password === confirmPassword) {
      setShowError(false);
      onResetSuccess();
    } else {
      setShowError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={{ width: "100%", alignItems: "center" }}>
          {/* Top Lock SVG Illustration */}
          <View style={styles.illustrationContainer}>
            {/* When you add enter_new_password.svg to assets/images/loginSignup/, swap this with:
                source={require("../../../../assets/images/loginSignup/enter_new_password.svg")} */}
            <Image
              source={{ uri: "https://via.placeholder.com/240" }}
              style={styles.illustrationImage}
              contentFit="contain"
            />
          </View>

          {/* Text Info */}
          <View style={styles.textGroup}>
            <Text style={styles.title}>Enter New Password</Text>
            <Text style={styles.subtitle}>Set Complex passwords to protect</Text>
          </View>

          {/* Form inputs */}
          <View style={styles.formContainer}>
            {/* Password Field */}
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputWrapper, passwordFocused && styles.inputWrapperFocused]}>
              {/* Lock Icon */}
              <Image
                source={require("../../../../assets/images/loginSignup/Password.svg")}
                style={styles.leftIcon}
                contentFit="contain"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#cbd5e1"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (showError) setShowError(false);
                }}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* Eye toggle button */}
              <TouchableOpacity
                style={styles.rightIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}
                activeOpacity={0.7}
              >
                {passwordVisible ? (
                  <View style={{ width: 22, height: 22, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: 20, height: 12, borderRadius: 6, borderWidth: 2, borderColor: "#a0aec0", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
                      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#a0aec0" }} />
                    </View>
                  </View>
                ) : (
                  <View style={{ width: 22, height: 22, alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <View style={{ width: 20, height: 12, borderRadius: 6, borderWidth: 2, borderColor: "#a0aec0", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#a0aec0" }} />
                    </View>
                    <View style={{ position: "absolute", width: 22, height: 2, backgroundColor: "#a0aec0", transform: [{ rotate: "45deg" }] }} />
                  </View>
                )}
              </TouchableOpacity>
            </View>

            {/* Confirm Password Field */}
            <Text style={styles.label}>Re Type Password</Text>
            <View style={[styles.inputWrapper, confirmPasswordFocused && styles.inputWrapperFocused]}>
              {/* Lock Icon */}
              <Image
                source={require("../../../../assets/images/loginSignup/Password.svg")}
                style={styles.leftIcon}
                contentFit="contain"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#cbd5e1"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (showError) setShowError(false);
                }}
                onFocus={() => setConfirmPasswordFocused(true)}
                onBlur={() => setConfirmPasswordFocused(false)}
                secureTextEntry={!confirmPasswordVisible}
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* Eye toggle button */}
              <TouchableOpacity
                style={styles.rightIcon}
                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                activeOpacity={0.7}
              >
                {confirmPasswordVisible ? (
                  <View style={{ width: 22, height: 22, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: 20, height: 12, borderRadius: 6, borderWidth: 2, borderColor: "#a0aec0", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
                      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#a0aec0" }} />
                    </View>
                  </View>
                ) : (
                  <View style={{ width: 22, height: 22, alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <View style={{ width: 20, height: 12, borderRadius: 6, borderWidth: 2, borderColor: "#a0aec0", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#a0aec0" }} />
                    </View>
                    <View style={{ position: "absolute", width: 22, height: 2, backgroundColor: "#a0aec0", transform: [{ rotate: "45deg" }] }} />
                  </View>
                )}
              </TouchableOpacity>
            </View>

            {/* Error Message */}
            {showError && (
              <Text style={{ color: "#d90404", fontSize: 12, marginTop: 6, fontWeight: "500", paddingHorizontal: 4 }}>
                Passwords must match and be at least 6 characters
              </Text>
            )}

            {/* Action Set Button */}
            <TouchableOpacity
              style={styles.setButton}
              onPress={handleSetNewPassword}
              activeOpacity={0.8}
            >
              <Text style={styles.setButtonText}>Set New Password</Text>
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
