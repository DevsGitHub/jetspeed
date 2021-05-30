import * as React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Feather, Entypo, Ionicons} from '@expo/vector-icons'

const SignUp = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        checkUsernameChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPass: true,
    });

    return (
        <SafeAreaProvider style={{paddingHorizontal : 20, flex: 1, backgroundColor: '#000'}}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{flexDirection: "row", marginTop: 40}}>
                    <Text style={{fontWeight: "bold", fontSize: 22, color: '#fff'}}>JET</Text>
                    <Text style={{fontWeight: "bold", fontSize: 22, color: '#333'}}>SPEED</Text>
                </View>
                <View style={{marginTop: 70}}>
                    <Text style={{fontSize: 27, fontWeight: 'bold', color: '#fff'}}>Welcome Back,</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333'}}>Sign up to continue</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={{flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5}}>
                        <Feather
                            name="user"
                            color={'#fff'}
                            size={20}
                            style={{position: 'absolute'}}
                        />
                        <TextInput
                            placeholder="Name"
                            style={{
                                color: '#fff', 
                                paddingLeft: 30, 
                                flex: 1, 
                                fontSize: 18
                            }}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5}}>
                        <Ionicons
                            name="location-outline"
                            color={'#fff'}
                            size={20}
                            style={{position: 'absolute'}}
                        />
                        <TextInput
                            placeholder="Address"
                            style={{
                                color: '#fff', 
                                paddingLeft: 30, 
                                flex: 1, 
                                fontSize: 18
                            }}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5}}>
                        <Feather
                            name="mail"
                            color={'#fff'}
                            size={20}
                            style={{position: 'absolute'}}
                        />
                        <TextInput
                            placeholder="Email"
                            style={{
                                color: '#fff', 
                                paddingLeft: 30, 
                                flex: 1, 
                                fontSize: 18
                            }}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5}}>
                        <Feather
                            name="smartphone"
                            color={'#fff'}
                            size={20}
                            style={{position: 'absolute'}}
                        />
                        <TextInput
                            placeholder="Contact No."
                            style={{
                                color: '#fff', 
                                paddingLeft: 30, 
                                flex: 1, 
                                fontSize: 18
                            }}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5}}>
                        <Feather
                            name="lock"
                            color={'#fff'}
                            size={20}
                            style={{position: 'absolute'}}
                        />
                        <TextInput
                            placeholder="Password"
                            style={{
                                color: '#fff', 
                                paddingLeft: 30, 
                                flex: 1, 
                                fontSize: 18
                            }}
                            secureTextEntry={data.secureTextEntry}
                            autoCapitalize="none"
                        />
                        <TouchableOpacity onPress={() => setData({...data, secureTextEntry: !data.secureTextEntry})}>
                            <Feather
                                name={data.secureTextEntry === true ? "eye" : "eye-off"}
                                size={20}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: '#fff', height: 50, marginTop: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                        <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
                            SIGN UP
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 40, marginBottom: 20}}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{color: 'red', fontWeight: 'bold'}}> Sign in </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

export default SignUp;