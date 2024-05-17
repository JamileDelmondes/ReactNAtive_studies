import { StyleSheet } from "react-native";

export const theme = {
    colors: {
        background: '#0D133D',
        heading: '#DDE3F0',
        primary: '#E51C44',
        line: '#991F36'
    }
}

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height:18
    }
});
