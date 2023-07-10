import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { Camera } from "expo-camera";
import { styles } from "../utils/styles";
import { AppContext } from "../utils/AppContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = ({ route }) => {
  const navigation = useNavigation();
  const { pictureID, nextPage } = route.params;
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const { pictures, setPictures } = useContext(AppContext);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef && isCameraReady) {
      const photo = await cameraRef.takePictureAsync();
      let newPictures = pictures;
      newPictures[pictureID] = photo;
      setPictures(newPictures);
      navigation.navigate(nextPage);
    }
  };

  const getCameraPermission = async () => {
    if (!permission) {
      requestPermission();
    }
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  if (permission === null) {
    return <View />;
  }

  if (permission === false) {
    return <Text>No access to camera</Text>;
  }

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <View style={styles.cameraContainer}>
      <Text style={styles.cameraHeader}>Take a picture of {pictureID}</Text>
      <Camera
        style={styles.camera}
        ref={(ref) => setCameraRef(ref)}
        onCameraReady={onCameraReady}
        type={cameraType}
      />
      <View style={styles.captureButtonWrapper}>
        <View style={styles.captureButtonOuterCircle}>
          <TouchableOpacity
            style={styles.captureButtonInnerCircle}
            onPress={takePicture}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
        <Ionicons name="camera-reverse" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
