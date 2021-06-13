import { gql } from '@apollo/client'

export const ADD_USER_MUTATION = gql`
    mutation AddUser(
            $name: String!,
            $address: String!,
            $email: String!,
            $mobile: String!,
            $password: String!
        ){
        addUser(
            name: $name,
            address: $address,
            email: $email, 
            mobile: $mobile,
            password: $password
        ){
            id
        }
    }
`;

export const LOGIN_USER = gql`
    mutation SignIn(
            $email: String!,
            $password: String!
        ){
        signIn(
            email: $email, 
            password: $password
        )
    }
`;