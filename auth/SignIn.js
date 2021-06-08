import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons'
import * as yup from 'yup'
import { Formik } from 'formik'
import { styles } from '../styles/signInStyles';

const SignIn = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const loginValidationSchema = yup.object().shape({
        email: yup.string().email("Please enter valid email").required('Email Address is required'),
        password: yup.string().min(8, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),
    })

    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.jetSpeedWordContainter}>
                    <Text style={styles.jetWord}>JET</Text>
                    <Text style={styles.speedWord}>SPEED</Text>
                </View>
                <View style={styles.welcomeWordContainer}>
                    <Text style={styles.welcome}>Welcome Back,</Text>
                    <Text style={styles.signContinue}>Sign in to continue</Text>
                </View>
                <View style={styles.formContainer}>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ 
                            handleChange, 
                            handleBlur, 
                            handleSubmit, 
                            values,
                            errors,
                            isValid,
                         }) => (
                        <>
                            <View style={styles.fieldContainer}>
                                <Feather
                                    name="mail"
                                    size={20}
                                    style={styles.icon}
                                />
                                <TextInput
                                    name="email"
                                    placeholder="Email Address"
                                    style={styles.field}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                            </View>
                            {errors.email && <Text style={styles.errorField}>{errors.email}</Text>}

                            <View style={styles.fieldContainer}>
                                <Feather
                                    name="lock"
                                    size={20}
                                    style={styles.icon}
                                />
                                <TextInput
                                    name="password"
                                    placeholder="Password"
                                    style={styles.field}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={secureTextEntry}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                                    <Feather
                                        name={secureTextEntry === true ? "eye" : "eye-off"}
                                        size={20}
                                        color={'#fff'}
                                    />
                                </TouchableOpacity>
                            </View>
                            {errors.password && <Text style={styles.errorField}>{errors.password}</Text>}

                            <TouchableOpacity>
                                <Text style={styles.forgotPass}>Forgot password?</Text>
                            </TouchableOpacity>

                            <View style={styles.signInContainer}>
                                <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                                    <Text style={styles.signInButton}> SIGN IN </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        )}
                    </Formik>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.dontHaveAcc}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signUp}> Sign up </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

export default SignIn;