import { TextInput,View,StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen(){
    return (
    <View style = {styles.inputContainer}>
        <TextInput/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>);
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer : {
        marginTop :100 ,
        padding : 24,
        marginHorizontal : 20,
        backgroundColor : '#27063c',
        borderRadius : 8,
        elevation : 4,
    },
});