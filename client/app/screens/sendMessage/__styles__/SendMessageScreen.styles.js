import { color, spacing } from "../../../theme"

const styles = {
  root: {
    flex: 1,
  },
  screen: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: spacing[6],
  },
  addPhotoButton: {
    button: {
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[3],
      marginBottom: spacing[4],
      backgroundColor: color.palette.brand,
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
    },
  },
  addTextInput: {
    container: {
      marginBottom: spacing[6],
    },
    input: {
      color: color.palette.black,
      paddingHorizontal: spacing[2],
    },
  },
  sendMessageButton: {
    button: {
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[3],
      marginBottom: spacing[6],
      backgroundColor: color.palette.brand,
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
    },
  },
}

export default styles
