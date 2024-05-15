import { StyleSheet } from "react-native";
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.cordefundo   
    },
    image: {
        width:'100%',
        height:360
    },
    content:{
        marginTop: -40
    },
    title:{
        color:theme.colors.headin
    },
    subtitle:{
        color:theme.colors.headin,
        fontSize:15,
        textAlign:'center',
        marginBottom:64
    }
})

