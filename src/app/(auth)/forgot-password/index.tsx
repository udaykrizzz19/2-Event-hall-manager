import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { ForgotPassword } from "../../../components/auth/signup/ForgotPassword";
import { ConfirmResetPassword } from "../../../components/auth/signup/ConfirmResetPassword";
import { EnterNewPassword } from "../../../components/auth/signup/EnterNewPassword";
import { styles } from "../../../components/auth/signup/signup.styles";

type ForgotPasswordStep = "forgot" | "confirm" | "reset";

export default function ForgotPasswordRoute() {
  const [step, setStep] = useState<ForgotPasswordStep>("forgot");
  const router = useRouter();

  const handleResetSuccess = () => {
    // Navigate back to login screen once password reset is successfully finalized
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      {step === "forgot" && (
        <ForgotPassword onSendCode={() => setStep("confirm")} />
      )}
      {step === "confirm" && (
        <ConfirmResetPassword onVerifySuccess={() => setStep("reset")} />
      )}
      {step === "reset" && (
        <EnterNewPassword onResetSuccess={handleResetSuccess} />
      )}
    </View>
  );
}
