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
import { useRouter } from "expo-router";
import { styles } from "./CreateAccount.styles";

interface CreateAccountProps {
  onContinue: () => void;
}

export const CreateAccount: React.FC<CreateAccountProps> = ({ onContinue }) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const isEmailValid = value.includes("@") && value.includes(".");

  const handleContinue = () => {
    if (value.trim()) {
      onContinue();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* Header Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Create Your Account</Text>
          <Text style={styles.subtitle}>Create account for exploring news</Text>
        </View>

        {/* Brand Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/images/logo/Logo.svg")}
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../../../../assets/images/loginSignup/create_account.svg")}
            style={styles.illustrationImage}
            contentFit="contain"
          />
        </View>

        {/* Form Inputs */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email or Phone Number</Text>
          <View style={styles.inputWrapper}>
            {/* Left Mail Icon */}
            <Image
              source={require("../../../../assets/images/loginSignup/Mail.svg")}
              style={[styles.leftIcon, { width: 22, height: 22 }]}
              contentFit="contain"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Hello@tyler.com"
              placeholderTextColor="#cbd5e1"
              value={value}
              onChangeText={setValue}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* Checkmark indicator when valid */}
            {isEmailValid && (
              <View style={[styles.rightIcon, { width: 18, height: 18, borderRadius: 9, backgroundColor: "#d90404", alignItems: "center", justifyContent: "center" }]}>
                <Text style={{ color: "#ffffff", fontSize: 11, fontWeight: "bold", marginTop: -1 }}>✓</Text>
              </View>
            )}
          </View>

          {/* Divider */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>You can Connect with</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Google Button */}
          <TouchableOpacity
            style={styles.googleButton}
            activeOpacity={0.8}
            onPress={() => router.replace("/login?step=success")}
          >
            <View style={styles.googleIconContainer}>
              <Image
                source={require("../../../../assets/images/loginSignup/google_logo.svg")}
                style={{ width: 22, height: 22 }}
                contentFit="contain"
              />
            </View>
            <Text style={styles.googleButtonText}>Signup with Google</Text>
          </TouchableOpacity>

          {/* Action Continue Button */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
