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
  previewContainer: {
    marginBottom: spacing[4],
  },
  previewTitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: spacing[2],
  },
  previewImage: {
    height: 300,
    flex: 1,
    justifyContent: "flex-end",
  },
  previewMessage: {
    backgroundColor: color.lightGrey,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    fontSize: 15,
    textAlign: "center",
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
