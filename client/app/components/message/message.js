import * as React from "react"
import { ImageBackground, View } from "react-native"

import { Text } from "../index"

import styles from "./__styles__/message.styles"

export const Message = (props) => {
  const { text, title, titleTx, uri } = props

  return (
    <View style={styles.container}>
      {(!!title || !!titleTx) && <Text style={styles.title} text={title} tx={titleTx} />}
      <ImageBackground style={styles.image} source={{ uri }}>
        {!!text && <Text style={styles.text} text={text} />}
      </ImageBackground>
    </View>
  )
}
