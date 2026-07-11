import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 32,
  },
  illustrationContainer: {
    width: "100%",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  illustrationImage: {
    width: "100%",
    height: "100%",
  },
  textGroup: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 14,
    color: "#8a94a6",
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "400",
    fontFamily: "System",
  },
  emailHighlight: {
    color: "#d90404",
    fontWeight: "600",
  },
  formContainer: {
    width: "100%",
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 12,
  },
  otpInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#d90404", // Red border as shown in the mockup
    borderRadius: 14,
    backgroundColor: "#ffffff",
    height: 58,
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  leftIcon: {
    marginRight: 12,
    width: 22,
    height: 22,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1f26",
    letterSpacing: 2,
    height: "100%",
  },
  timerText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8a94a6",
  },
  verifyButton: {
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
    marginBottom: 40,
  },
  verifyButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  footerLinksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  footerLinkText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",
  },
  footerDivider: {
    fontSize: 13,
    color: "#cbd5e1",
    marginHorizontal: 10,
  },
});
