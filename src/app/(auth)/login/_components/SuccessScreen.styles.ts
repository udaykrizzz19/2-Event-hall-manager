import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingBottom: 48,
  },
  illustrationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textGroup: {
    alignItems: "center",
    marginTop: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    marginBottom: 16,
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
  buttonContainer: {
    width: "100%",
    marginTop: 24,
  },
  button: {
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
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
