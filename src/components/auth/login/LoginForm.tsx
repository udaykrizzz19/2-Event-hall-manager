import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Image } from "expo-image";
import { styles } from "./LoginForm.styles";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Basic email validation check
  const isEmailValid = email.includes("@") && email.includes(".");

  const handleSignIn = () => {
    // If fields are not empty, simulate success
    if (email.trim() && password.trim()) {
      onLoginSuccess();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* Header Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Let's login for explore continues</Text>
        </View>

        {/* Brand Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/images/logo/Logo.svg")}
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Input Fields */}
        <View style={styles.formContainer}>
          {/* Email or Phone Field */}
          <Text style={styles.label}>Email or Phone Number</Text>
          <View
            style={[
              styles.inputWrapper,
              emailFocused && styles.inputWrapperFocused,
              // When focused or valid, it can highlight (mockup shows red border when active)
              (emailFocused || isEmailValid) && styles.inputWrapperFocused,
            ]}
          >
            <Image
              source={require("../../../../assets/images/loginSignup/Mail.svg")}
              style={[styles.leftIcon, { width: 22, height: 22 }]}
              contentFit="contain"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#a0aec0"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {/* If email is valid, display a checkmark circle on the right */}
            {isEmailValid && (
              <View style={[styles.rightIcon, { width: 18, height: 18, borderRadius: 9, backgroundColor: "#d90404", alignItems: "center", justifyContent: "center" }]}>
                <Text style={{ color: "#ffffff", fontSize: 11, fontWeight: "bold", marginTop: -1 }}>✓</Text>
              </View>
            )}
          </View>

          {/* Password Field */}
          <Text style={styles.label}>Password</Text>
          <View
            style={[
              styles.inputWrapper,
              passwordFocused && styles.inputWrapperFocused,
            ]}
          >
            <Image
              source={require("../../../../assets/images/loginSignup/Password.svg")}
              style={[styles.leftIcon, { width: 24, height: 24 }]}
              contentFit="contain"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#a0aec0"
              value={password}
              onChangeText={setPassword}
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

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPasswordContainer} activeOpacity={0.7}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>You can Connect with</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Google Login Button */}
          <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
            <View style={styles.googleIconContainer}>
              <Image
                source={require("../../../../assets/images/loginSignup/google_logo.svg")}
                style={{ width: 22, height: 22 }}
                contentFit="contain"
              />
            </View>
            <Text style={styles.googleButtonText}>Log In with Google</Text>
          </TouchableOpacity>

          {/* Footer Signup */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.signupLink}>Sign Up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
