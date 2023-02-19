import { StyleSheet, Switch } from "react-native";


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },

  button: {
    borderRadius: 10,
    borderWidth: 10,
    backgroundColor: "blue",
    width: 700,
    height: 600,
    fontSize: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  label: {
    marginRight: 10,
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: "#000",
  },
  Text: {
    fontSize: 40,
    textAlign: "center",
    
  },
  Switch: {
    flex: 1,
    alignItems: "baseline",
    justifyContent: "center",
  },
});

// SpecialStyles
const SpecialStyles = StyleSheet.create({
  container: {
    ...Styles.container,
    backgroundColor: "#cefad0",
  },
  Text: {
    ...Styles.Text,
  },
  input: {
    ...Styles.input,
  },
  
  
  
});

export { Styles, SpecialStyles };
