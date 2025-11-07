import { Text,View,StyleSheet, Alert } from "react-native";
import Title from "../components/ui/title";
import { useState } from "react";
import GuessNumber from "../components/game/guessnumber";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBondary = 1;
let maxbondary = 100;
 function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(minBondary,maxbondary,userNumber);
    const [guessNumber,setGuessNumber] = useState(initialGuess);
    
    function nextGuessHandler(direction){
        if((direction === 'lower' && guessNumber < userNumber) || (direction === 'greater' && guessNumber > userNumber)){
            Alert.alert("Don't Lie!",'You know this is wrong',[{text:'Sorry',style:'cancel'}])
            return
        }
        if(direction === 'lower'){
           
            maxbondary = guessNumber;
        }else {
         
            minBondary = guessNumber + 1;
        }
        console.log(minBondary,maxbondary);
        const newCurrentGuess = generateRandomBetween(minBondary,maxbondary,guessNumber);
        setGuessNumber(newCurrentGuess)
    }

    return <View style={styles.screen}>
        <Title>Opponent's Screen</Title>
        <GuessNumber>{guessNumber}</GuessNumber>
        <View>
            <Text>Higher or lower</Text>
            <View>
                <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
                <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
            </View>
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