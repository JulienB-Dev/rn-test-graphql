import { color, spacing } from "../../../theme"

const styles = {
  container: {
    marginBottom: spacing[4],
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: spacing[2],
  },
  image: {
    height: 300,
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    backgroundColor: color.lightGrey,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    fontSize: 15,
    textAlign: "center",
  },
}

export default styles
