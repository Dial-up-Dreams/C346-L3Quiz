import {StatusBar} from 'expo-status-bar';
import RNPickerSelect from 'react-native-picker-select';
import {Button, Text, ScrollView, Alert, Image, StyleSheet} from "react-native";
import {useState} from "react";

const App = () => {
    const [ansO , SetAO] = useState("");
    const [ansT , SetAT] = useState("");
    const [ansTh , SetATH] = useState("");
    return(
        <ScrollView>
            <StatusBar hidden={true}/>
            <Text style={styles.Title}>Are You Colour Blind?</Text>
            <Text style={styles.Question}>What number is this?</Text>
            <Image
                source={require('./img/74.png')}
                style={styles.Images}
                resizeMode="contain"
            />
            <RNPickerSelect
                onValueChange={(value)=> SetAO(value)}
                items={[
                    {label:'15', value:'15'},
                    {label:'74', value:'74'},
                    {label:'42', value:'42'},

                ]}
            />

            <Text style={styles.Question}>What number is this?</Text>
            <Image
                source={require('./img/42.png')}
                style={styles.Images}
                resizeMode="contain"
            />
            <RNPickerSelect
                onValueChange={(value)=> SetAT(value)}
                items={[
                    {label:'15', value:'15'},
                    {label:'74', value:'74'},
                    {label:'42', value:'42'},

                ]}
            />

            <Text style={styles.Question}>What number is this?</Text>
            <Image
                source={require('./img/15.png')}
                style={styles.Images}
                resizeMode="contain"
            />
            <RNPickerSelect
                onValueChange={(value)=> SetATH(value)}
                items={[
                    {label:'15', value:'15'},
                    {label:'74', value:'74'},
                    {label:'42', value:'42'},

                ]}
            />
            <Button onPress={() => {
                const SetAO ='74'
                const SetAT ='42'
                const SetATH ='15'
                let message = 'no answer was entered.'
                let score = 0
                if (ansO === SetAO) {
                    score+=1
                }
                if (ansT === SetAT) {
                    score+=1
                }
                if (ansTh === SetATH) {
                    score+=1
                }
                if (score === 1) {
                    message = 'You have ' + score + '' + ' correct answer.'
                    Alert.alert(message)
                }
                if (score > 1){
                    message = 'You have ' + score + ' correct answers.'
                     Alert.alert(message)
                }
                    }}
                    title="Submit Answers"
            />
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    Title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:10,
        paddingBottom:15,
        fontFamily:'monospace'
    },

    Question:{
        fontSize:20,
        textAlign:'center',
        paddingBottom:5,
        backgroundColor:'lightblue',
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'navyblue',
        fontFamily:'monospace'

    },

    Images:{
        width:250,
        height:250,
        alignSelf:'center'
    },


})

export default App;
