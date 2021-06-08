import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 20, 
        flex: 1, 
        backgroundColor: '#000'
    },
    jetSpeedWordContainter:{
        flexDirection: "row", 
        marginTop: 40
    },
    jetWord: {
        fontWeight: "bold", 
        fontSize: 22,
        color: '#fff'
    },
    speedWord :{
        fontWeight: "bold", 
        fontSize: 22,
        color: '#333'
    },
    welcomeWordContainer : {
        marginTop: 70
    },
    welcome:{
        fontSize: 27, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    signContinue: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#333'
    },
    formContainer:{
        marginTop: 20
    },
    fieldContainer:{
        flexDirection: 'row', 
        marginTop: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: '#f2f2f2', 
        paddingBottom: 5
    },
    icon: {
        position: 'absolute', 
        color: '#fff'
    },
    field : {
        color: '#fff',  
        paddingLeft: 30,  
        flex: 1,  
        fontSize: 18
    },
    errorField:{
        fontSize: 12, 
        color: 'red'
    },
    forgotPass: {
        color: '#17a2b8', 
        marginTop: 20
    },
    signInContainer:{
        backgroundColor: '#fff', 
        height: 50, 
        marginTop: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5
    },
    signInButton: {
        fontSize: 18, 
        color: '#000', 
        fontWeight: 'bold'
    },
    signUpContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        marginTop: 40, 
        marginBottom: 20
    },
    dontHaveAcc: {
        color: '#fff', 
        fontWeight: 'bold'
    },
    signUp: {
        color: 'red', 
        fontWeight: 'bold'
    }
});