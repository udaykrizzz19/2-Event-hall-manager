import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { SignupForm } from "../../../components/auth/signup/SignupForm";
import { ConfirmEmail } from "../../../components/auth/signup/ConfirmEmail";
import { styles } from "../../../components/auth/signup/signup.styles";

type SignupStep = "signup" | "confirm";

export default function SignupRoute() {
  const [step, setStep] = useState<SignupStep>("signup");
  const router = useRouter();

  const handleVerifySuccess = () => {
    // Navigate back to the login page once registration/verification succeeds
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      {step === "signup" && (
        <SignupForm onSignupSuccess={() => setStep("confirm")} />
      )}
      {step === "confirm" && (
        <ConfirmEmail onVerifySuccess={handleVerifySuccess} />
      )}
    </View>
  );
}
