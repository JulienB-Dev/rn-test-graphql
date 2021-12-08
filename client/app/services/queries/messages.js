import { gql } from "@apollo/client"

export const GET_MESSAGES = gql`
  query messages {
    messages {
      id
      image {
        type
        base64
      }
      text
    }
  }
`

export const POST_MESSAGE = gql`
  mutation message($text: String, $base64: String!, $type: String!) {
    message(text: $text, base64: $base64, type: $type) {
      id
      image {
        type
        base64
      }
      text
    }
  }
`
