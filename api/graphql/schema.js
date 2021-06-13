const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const {addProduct, addUser} = require('./mutation')
const {product, user, products, users, signIn} = require('./query')

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields:{
        product,
        products,
        user,
        users,
        signIn
    }
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: {
        addProduct,
        addUser,
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
})