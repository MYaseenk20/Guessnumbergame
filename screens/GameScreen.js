import { Text,View,StyleSheet } from "react-native";
import Title from "../components/title";
 function GameScreen(){
    return <View style={styles.screen}>
        <Title>Opponent's Screen</Title>
        <View>
            <Text>Higher or lpwer</Text>
        </View>

        <View>

        </View>
    </View>
}

export default GameScreen;  

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 12,
    },

});