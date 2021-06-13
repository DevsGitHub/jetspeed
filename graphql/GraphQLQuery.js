import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    query signIn(
            $email: String!,
            $password: String!
        ){
        signIn(
            email: $email, 
            password: $password
        ){
            id
        }
    }
`;