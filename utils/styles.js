import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  coin: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  cameraHeader: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 20,
    marginBottom: 20,
  },
  carouselItemContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  carouselTitle: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
  carouselDescription: {
    marginTop: 5,
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    elevation: 3,
  },
  modalText: {
    fontSize: 22,
    marginBottom: 20,
  },
  summaryText: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  carouselImage: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
  bottomText: {
    fontSize: 16,
    marginTop: 20,
  },
  heart: {
    fontSize: 40,
    position: "absolute",
  },
  camera: {
    width: "40%",
    height: "40%",
    aspectRatio: 1,
  },
  captureButtonWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 20,
  },
  captureButtonOuterCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButtonInnerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  flipButton: {
    position: "absolute",
    top: 80,
    right: 60,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
