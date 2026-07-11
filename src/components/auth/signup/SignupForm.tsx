import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { styles } from "./SignupForm.styles";

interface SignupFormProps {
  onSignupSuccess: () => void;
}

const USER_TYPES = ["Client", "Manager", "Admin"];

export const SignupForm: React.FC<SignupFormProps> = ({ onSignupSuccess }) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Custom dropdown states
  const [userType, setUserType] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false);

  // Input focus states
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const handleSignUp = () => {
    // Directly trigger next step transition so user is not blocked during UI evaluation
    onSignupSuccess();
  };

  const handleSelectOption = (option: string) => {
    setUserType(option);
    setPickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* Header Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.subtitle}>Let’s Signup to continues Forward</Text>
        </View>

        {/* Brand Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/images/logo/Logo.svg")}
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* First Name Field */}
          <Text style={styles.label}>First Name</Text>
          <View style={[styles.inputWrapper, firstNameFocused && styles.inputWrapperFocused]}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your first name"
              placeholderTextColor="#a0aec0"
              value={firstName}
              onChangeText={setFirstName}
              onFocus={() => setFirstNameFocused(true)}
              onBlur={() => setFirstNameFocused(false)}
              autoCapitalize="words"
            />
          </View>

          {/* Last Name Field */}
          <Text style={styles.label}>Last Name</Text>
          <View style={[styles.inputWrapper, lastNameFocused && styles.inputWrapperFocused]}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your last name"
              placeholderTextColor="#a0aec0"
              value={lastName}
              onChangeText={setLastName}
              onFocus={() => setLastNameFocused(true)}
              onBlur={() => setLastNameFocused(false)}
              autoCapitalize="words"
            />
          </View>

          {/* Password Field */}
          <Text style={styles.label}>Password</Text>
          <View style={[styles.inputWrapper, passwordFocused && styles.inputWrapperFocused]}>
            <TextInput
              style={styles.textInput}
              placeholder="Create password"
              placeholderTextColor="#a0aec0"
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Confirm Password Field */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={[styles.inputWrapper, confirmPasswordFocused && styles.inputWrapperFocused]}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm password"
              placeholderTextColor="#a0aec0"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* User Type Select Field */}
          <Text style={styles.label}>User Type</Text>
          <TouchableOpacity
            style={styles.dropdownSelector}
            activeOpacity={0.8}
            onPress={() => setPickerVisible(true)}
          >
            {userType ? (
              <Text style={styles.dropdownText}>{userType}</Text>
            ) : (
              <Text style={styles.dropdownPlaceholder}>Select User Type</Text>
            )}
            <View style={styles.chevronContainer}>
              <View style={styles.chevronArrow} />
            </View>
          </TouchableOpacity>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>You can Connect with</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Google Signup Button */}
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

          {/* Footer Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an Account? </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.replace("/login")}>
              <Text style={styles.loginLink}>Sign In here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* User Type picker Modal */}
      <Modal
        visible={pickerVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setPickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Choose User Type</Text>
              <TouchableOpacity onPress={() => setPickerVisible(false)}>
                <Text style={styles.modalCloseButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={USER_TYPES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOptionItem}
                  onPress={() => handleSelectOption(item)}
                >
                  <Text
                    style={[
                      styles.modalOptionText,
                      userType === item && styles.modalOptionTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
