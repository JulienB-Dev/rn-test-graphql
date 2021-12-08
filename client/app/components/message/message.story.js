import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Message } from "./message"

import { base64Image } from "./base64Examples"

import { resolveBase64Uri } from "../../utils/base64"

const uri = resolveBase64Uri("image/jpg", base64Image)

storiesOf("Message", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Display message", () => (
    <Story>
      <UseCase text="message/noText" usage="Message without text.">
        <Message uri={uri} />
      </UseCase>
      <UseCase text="message/full" usage="Message with text.">
        <Message uri={uri} text="Salut Marhold !" />
      </UseCase>
    </Story>
  ))
