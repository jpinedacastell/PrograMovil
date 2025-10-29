import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
};
export default function CustomButton({title, onPress, variant = "primary"}: Props){
    const styles = getStyles(variant);

    return(
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonTitle}> {title} </Text>
            </TouchableOpacity>
    );
} 

const getStyles = (variant: 'primary' | 'secondary' | 'tertiary') => 
    StyleSheet.create(
        {
            button:{    
                borderColor: "#000000ff",
                borderRadius: 6,
                padding: 15, 
                backgroundColor: variant === "primary" ? '#152cdaff' : 
                                    variant === "secondary" ? '#ca9494ff' :
                                        "#fff",
                width: 200,
            }, 
            buttonTitle:{
                color: variant === 'primary'?'#ccc' : 
                        variant === 'secondary'? '#000000ff' :
                        '#656c78',
                fontWeight: 'bold',
                fontSize: 16,
            }
        }
    )