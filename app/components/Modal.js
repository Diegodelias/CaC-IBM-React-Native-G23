import React from "react";
import { StyleSheet, Text} from "react-native";
import { Overlay } from "react-native-elements";

export default function Modal(props) {
    
    const { isVisible, setIsVisible, children} = props;

    const closeModal = () => setIsVisible(false);

    return (
        <Overlay 
            isVisible={isVisible}
            backdropStyle={styles.backOverlay}
            overlayStyle={styles.overlay}
            onBackdropPress={closeModal}
        ><Text>{children}</Text></Overlay>
    );
}

const styles = StyleSheet.create({
    backOverlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    overlay: {
        height: "auto",
        width: "90%",
        backgroundColor: "#fff",
    },
});