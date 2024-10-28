import {StatusBar} from 'expo-status-bar';
import RNPickerSelect from 'react-native-picker-select';
import {Button, Text, ScrollView, Alert, Image} from "react-native";
import {useState} from "react";

const App = () => {
    const [ansO , SetAO] = useState("");
    const [ansT , SetAT] = useState("");
    const [ansTh , SetATH] = useState("");
    return(
        <ScrollView>
            <Text>What number is this?</Text>
            <Image
                source={require('./img/74.png')}
                style={{width:400, height:200}}
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

            <Text>What number is this?</Text>
            <Image
                source={require('./img/42.png')}
                style={{width:400, height:200}}
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

            <Text>What number is this?</Text>
            <Image
                source={require('./img/15.png')}
                style={{width:400, height:200}}
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

export default App;
