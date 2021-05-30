import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

const AuthStack = createStackNavigator();

const AuthRoute = () =>{
    return(
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    )
}

export default AuthRoute;