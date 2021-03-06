import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Login from './auth/SignIn';
import AuthRoute from './route/AuthRoute';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import {onError} from '@apollo/client/link/error';
require('dotenv').config()

const errorLink = onError(({graphqlError, networkError})=>{
  if(graphqlError){
      graphqlError.map(({message, location, path})=>{
        alert(`Graphql error ${message}`)
      })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:5000/graphql'}),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          style={styles.tinyLogo}
          source={require('./jetspeed-logo.png')}
        />
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <AuthRoute />
        </NavigationContainer>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    bottom: 30
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
