import { Button,StyleSheet,Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import { useState } from "react";


type Props = {
    required? : boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder : string;
    onChange: (text: string) => void;
}

export default function CustumInput ({type = "email", required, value, placeholder, onChange}: Props){
    const [isSecureText, setIsSecureText] = useState(type === "password");

    const icon =    type === 'email' ? 'email' : 
                    type === 'password' ? 'lock' : '';
    return(
        // wrapper
            //inputContainer
            <View style={styles.inputContainer}>
                <MaterialIcons name={icon as any } size={20} color="#000000" />
                <TextInput 
                 placeholder={placeholder}
                 value={value} 
                 onChangeText={onChange}
                 onBlur={()=>{}}
                 secureTextEntry={isSecureText}
                 style={styles.input}
                 />
                
                {type === "password" && (
                    <TouchableOpacity 
                        onPress={
                            ()=>{
                                setIsSecureText(!isSecureText);
                            }
                        }
                    > 
                        <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={20} />
                    </TouchableOpacity>
                )}

            </View>
        //</wrapper>    
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 10, 
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        width:'80%'
    },
    input:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        flex: 1,
    }
})