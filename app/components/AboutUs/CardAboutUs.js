import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Modal from "../Modal";

export default function CardAboutUs(props) {
  const { title, text, modalContent, openModal, buttonAction } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [description, setDescription] = useState("");

  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      {text && <Text style={{ marginBottom: 10 }}>{text}</Text>}
      {openModal && (
        <Button
          title="Conoce más"
          onPress={() => {
            setDescription(modalContent);
            setIsVisibleModal(true);
          }}
        />
      )}
      {buttonAction && !openModal && (
        <Button
          title="Conoce más"
          onPress={() => {
            buttonAction();
          }}
        />
      )}

      <Modal
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        children={description}
      ></Modal>
    </Card>
  );
}

const styles = StyleSheet.create({});
