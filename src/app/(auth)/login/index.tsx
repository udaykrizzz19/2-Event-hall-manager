import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { WelcomeScreen } from "../../../components/auth/login/WelcomeScreen";
import { LoginForm } from "../../../components/auth/login/LoginForm";
import { SuccessScreen } from "../../../components/auth/login/SuccessScreen";
import { styles } from "../../../components/auth/login/login.styles";

type LoginStep = "welcome" | "login" | "success";

export default function LoginRoute() {
  const params = useLocalSearchParams();
  const [step, setStep] = useState<LoginStep>("welcome");
  const router = useRouter();

  // Watch for step parameter in route query (e.g. from signup redirect)
  useEffect(() => {
    if (params.step === "success") {
      setStep("success");
    }
  }, [params.step]);

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
