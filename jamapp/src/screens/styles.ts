import { StyleSheet } from "react-native";
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundcolor: theme.colors.cordefundo   
    },
    image: {
        width:'100%',
        height:360
    }
})

