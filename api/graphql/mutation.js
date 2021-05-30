const {  GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql')
const {UserType, ProductType} = require('./type')
const User = require('../model/user')
const Product = require('../model/product')
const {createJwtToken} = require('../jwt/auth')

const addProduct = {
    type: ProductType,
    description: 'Add a product',
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        sellerId: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, args) => {
        let product = new Product({
            name: args.name,
            sellerId: args.sellerId
        })
        return product.save()
    }
}

const addUser = {
    type: UserType,
    description: 'Add a user',
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        mobile: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
    },
     resolve(parent, args){
        const user = new User({
            name: args.name,
            address: args.address,
            email: args.email,
            mobile: args.mobile,
            password: args.password,
        })
        return user.save()
    }
}

const signIn = {
    type: GraphQLString,
    description: 'Sign in on the app',
    args:{
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent, args){
        const user = await User.findOne({email: args.email}).select('+password')
        if(!user || args.password !== user.password){
            throw new Error("Invalid Credentials")
        }
        const token = createJwtToken(user)
        return token
    }
}

module.exports = {addProduct, addUser, signIn}