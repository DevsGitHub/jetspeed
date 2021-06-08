import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Feather, Entypo, Ionicons} from '@expo/vector-icons'
import * as yup from 'yup'
import { Formik } from 'formik'
import { styles } from '../styles/signInStyles';

const SignUp = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const loginValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        address: yup.string().required('Address is required'),
        email: yup.string().email("Please enter valid email").required('Email Address is required'),
        mobile: yup.string().matches(/(09)(\d){9}\b/, 'Enter a valid phone number').required('Phone number is required'),
        password: yup.string().matches(/\w*[a-z]\w*/,  "Password must have a small letter").matches(/\w*[A-Z]\w*/,  "Password must have a capital letter").matches(/\d/, "Password must have a number").matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character").min(8, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),
        confirm_pass: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Confirm password is required'),
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
                    <Text style={styles.signContinue}>Sign up to continue</Text>
                </View>
                <View style={styles.formContainer}>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ name: '', address: '', email: '', mobile: '', password: '', confirm_pass: '' }}
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
                                        name="user"
                                        size={20}
                                        style={styles.icon}
                                    />
                                    <TextInput
                                        name="name"
                                        placeholder="Name"
                                        style={styles.field}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                </View>
                                {errors.name && <Text style={styles.errorField}>{errors.name}</Text>}

                                <View style={styles.fieldContainer}>
                                    <Ionicons
                                        name="location-outline"
                                        size={20}
                                        style={styles.icon}
                                    />
                                    <TextInput
                                        name="address"
                                        placeholder="Address"
                                        style={styles.field}
                                        onChangeText={handleChange('address')}
                                        onBlur={handleBlur('address')}
                                        value={values.address}
                                    />
                                </View>
                                {errors.address && <Text style={styles.errorField}>{errors.address}</Text>}

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
                                        name="smartphone"
                                        size={20}
                                        style={styles.icon}
                                    />
                                    <TextInput
                                        name="mobile"
                                        placeholder="Phone No.(eg. 09123456789)"
                                        style={styles.field}
                                        onChangeText={handleChange('mobile')}
                                        onBlur={handleBlur('mobile')}
                                        value={values.mobile}
                                    />
                                </View>
                                {errors.mobile && <Text style={styles.errorField}>{errors.mobile}</Text>}

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

                                <View style={styles.fieldContainer}>
                                    <Feather
                                        name="lock"
                                        size={20}
                                        style={styles.icon}
                                    />
                                    <TextInput
                                        name="confirm_pass"
                                        placeholder="Password"
                                        style={styles.field}
                                        onChangeText={handleChange('confirm_pass')}
                                        onBlur={handleBlur('confirm_pass')}
                                        value={values.confirm_pass}
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
                                {errors.confirm_pass && <Text style={styles.errorField}>{errors.confirm_pass}</Text>}
                                
                                <View style={styles.signInContainer}>
                                    <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                                        <Text style={styles.signInButton}> SIGN UP </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                    
                    <View style={styles.signUpContainer}>
                        <Text style={styles.dontHaveAcc}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.signUp}> Sign in </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

export default SignUp;