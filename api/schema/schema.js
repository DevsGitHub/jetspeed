const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const {addProduct, addUser, signIn} = require('../graphql/mutation')
const {product, user, products, users} = require('../graphql/query')

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields:{
        product,
        user,
        products,
        users
    }
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: {
        addProduct,
        addUser,
        signIn
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
})