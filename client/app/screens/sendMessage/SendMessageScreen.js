import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { launchImageLibrary } from "react-native-image-picker"
import { useMutation } from "@apollo/client"

import { POST_MESSAGE } from "../../services/queries/messages"

import { resolveBase64Uri } from "../../utils/base64"

import { Button, Header, Message, Screen, Text, TextField, Wallpaper } from "../../components"

import styles from "./__styles__/SendMessageScreen.styles"

export const SendMessageScreen = () => {
  const [sendMessage] = useMutation(POST_MESSAGE)

  const [addPhoto, setAddPhoto] = useState(null)
  const [addText, setAddText] = useState(null)
  const [base64uri, setBase64Uri] = useState(null)
  const [isPosted, setIsPosted] = useState(false)

  useEffect(() => {
    setBase64Uri(resolveBase64Uri(addPhoto?.type, addPhoto?.base64))
  }, [addPhoto])

  const handlerAddPhoto = () => {
    setIsPosted(false)
    launchImageLibrary(
      { mediaType: "photo", includeBase64: true, maxWidth: 500, maxHeight: 500 },
      ({ assets }) => {
        assets?.length > 0 && setAddPhoto(assets[0])
      },
    )
  }

  const handlerAddText = (value) => {
    setAddText(value)
  }

  const handlerSendMessage = () => {
    sendMessage({
      variables: {
        text: addText,
        base64: addPhoto.base64,
        type: addPhoto.type,
      },
    }).then(() => {
      setAddPhoto(null)
      setAddText(null)
      setBase64Uri(null)
      setIsPosted(true)
    })
  }

  return (
    <View testID="SendMessageScreen" style={styles.root}>
      <Wallpaper />
      <Screen preset="scroll" style={styles.screen} backgroundColor={styles.screen.backgroundColor}>
        <Header headerTx="sendMessageScreen.texts.title" titleStyle={styles.title} />
        <Text style={styles.description} tx="sendMessageScreen.texts.description" />
        <Button
          testID="add-photo-button"
          tx="sendMessageScreen.buttons.addPhoto"
          style={styles.addPhotoButton.button}
          textStyle={styles.addPhotoButton.text}
          onPress={handlerAddPhoto}
        />
        {!!addPhoto && !!base64uri && (
          <>
            <TextField
              labelTx="sendMessageScreen.inputs.addText"
              style={styles.addTextInput.container}
              inputStyle={styles.addTextInput.input}
              value={addText}
              onChangeText={handlerAddText}
            />
            <Message uri={base64uri} text={addText} titleTx="sendMessageScreen.texts.preview" />
            <Button
              testID="send-message-button"
              tx="sendMessageScreen.buttons.sendMessage"
              style={styles.sendMessageButton.button}
              textStyle={styles.sendMessageButton.text}
              onPress={handlerSendMessage}
            />
          </>
        )}
        {!!isPosted && <Text tx="sendMessageScreen.texts.success" />}
      </Screen>
    </View>
  )
}
