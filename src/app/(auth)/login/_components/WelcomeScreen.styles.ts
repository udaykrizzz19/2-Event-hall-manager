import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    justifyContent: "space-between",
    paddingBottom: 48,
  },
  topImage: {
    width: "112%",
    height: 440,
    resizeMode: "cover",
    alignSelf: "center",
  },
  textGroup: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 38,
    marginBottom: 16,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#8a94a6",
    lineHeight: 22,
    fontFamily: "System",
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d90404",
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 14,
    shadowColor: "#d90404",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    marginRight: 10,
    letterSpacing: 0.5,
  },
});
