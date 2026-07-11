import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 50,
    paddingBottom: 32,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 14,
    color: "#8a94a6",
    fontWeight: "400",
    fontFamily: "System",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  logoImage: {
    width: 65,
    height: 65,
  },
  illustrationContainer: {
    width: "100%",
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  illustrationImage: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    width: "100%",
    // marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
    marginTop: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#d90404", // Red border as shown in the mockup
    paddingHorizontal: 16,
    height: 56,
  },
  leftIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    color: "#1a1f26",
    fontSize: 15,
    fontWeight: "500",
    height: "100%",
  },
  rightIcon: {
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#f0f2f5",
  },
  separatorText: {
    fontSize: 13,
    color: "#8a94a6",
    paddingHorizontal: 16,
    fontWeight: "500",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#edf0f4",
    backgroundColor: "#ffffff",
    marginBottom: 24,
  },
  googleIconContainer: {
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#626d7e",
    fontWeight: "600",
  },
  continueButton: {
    backgroundColor: "#d90404",
    height: 56,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#d90404",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    marginTop: 12,
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
