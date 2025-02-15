import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

taskItem: {
    width: 327,
    height: 64,
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 8,
    backgroundColor: "#262626",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

}, 
task: {
    marginBottom: 8,

},

completeButton: {


},
taskText: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#F2F2F2",
    width: 235,
    height: 40,
   

},
infoContent: {
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 208,

},
titleBold: {
    color: "#808080",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 19.6,
    marginTop: 10
},
titleInfo: {
    color: "#808080",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 19.6



},
trash: {
    width: 32,
    height: 32
}
})