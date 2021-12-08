import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { useIsFocused } from "@react-navigation/native"
import { useQuery } from "@apollo/client"

import { GET_MESSAGES } from "../../services/queries/messages"

import { resolveBase64Uri } from "../../utils/base64"

import { Header, Message, Screen, Wallpaper } from "../../components"

import styles from "./__styles__/ListMessagesScreen.styles"

export const ListMessagesScreen = () => {
  const { data, loading, refetch } = useQuery(GET_MESSAGES)

  const isFocused = useIsFocused()

  const [messages, setMessages] = useState(null)

  useEffect(() => {
    isFocused && refetch()
  }, [isFocused])

  useEffect(() => {
    if (data) {
      setMessages(data.messages)
    }
  }, [data, loading])

  return (
    <View testID="ListMessagesScreen" style={styles.root}>
      <Wallpaper />
      <Screen preset="scroll" style={styles.screen} backgroundColor={styles.screen.backgroundColor}>
        <Header headerTx="sendMessageScreen.texts.title" titleStyle={styles.title} />
        {messages?.map(({ id, image: { base64, type }, text }) => (
          <Message key={id} uri={resolveBase64Uri(type, base64)} text={text} />
        ))}
      </Screen>
    </View>
  )
}
