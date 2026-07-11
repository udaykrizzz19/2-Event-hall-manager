import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { CreateAccount } from "../../../components/auth/signup/CreateAccount";
import { SignupForm } from "../../../components/auth/signup/SignupForm";
import { ConfirmEmail } from "../../../components/auth/signup/ConfirmEmail";
import { styles } from "../../../components/auth/signup/signup.styles";

type SignupStep = "create_account" | "signup_form" | "confirm_email";

export default function SignupRoute() {
  const [step, setStep] = useState<SignupStep>("create_account");
  const router = useRouter();

  const handleVerifySuccess = () => {
    // Navigate back to the login page once registration/verification succeeds
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      {step === "create_account" && (
        <CreateAccount onContinue={() => setStep("signup_form")} />
      )}
      {step === "signup_form" && (
        <SignupForm onSignupSuccess={() => setStep("confirm_email")} />
      )}
      {step === "confirm_email" && (
        <ConfirmEmail onVerifySuccess={handleVerifySuccess} />
      )}
    </View>
  );
}
