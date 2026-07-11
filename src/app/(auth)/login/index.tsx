import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { WelcomeScreen } from "./_components/WelcomeScreen";
import { LoginForm } from "./_components/LoginForm";
import { SuccessScreen } from "./_components/SuccessScreen";
import { styles } from "./_index.styles";

type LoginStep = "welcome" | "login" | "success";

export default function LoginRoute() {
  const [step, setStep] = useState<LoginStep>("welcome");
  const router = useRouter();

  const handleExplore = () => {
    // Navigate back to the home/index page of the application
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      {step === "welcome" && (
        <WelcomeScreen onGetStarted={() => setStep("login")} />
      )}
      {step === "login" && (
        <LoginForm onLoginSuccess={() => setStep("success")} />
      )}
      {step === "success" && (
        <SuccessScreen onExplore={handleExplore} />
      )}
    </View>
  );
}
