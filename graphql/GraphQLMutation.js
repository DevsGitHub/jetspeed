import { gql } from '@apollo/client'

export const ADD_USER_MUTATION = gql`
    mutation addUser(
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