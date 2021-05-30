const {  GraphQLString, GraphQLNonNull, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql')
const {UserType, ProductType} = require('./type')
const User = require('../model/user')
const Product = require('../model/product')
const {createJwtToken} = require('../jwt/auth')

const addProduct = {
    type: ProductType,
    description: 'Add a product',
    args: {
        product_name: { type: GraphQLNonNull(GraphQLString) },
        sellerId: { type: GraphQLNonNull(GraphQLID) },
        product_price: { type: GraphQLNonNull(GraphQLFloat) },
        product_available: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: (parent, args) => {
        let product = new Product({
            product_name: args.product_name,
            sellerId: args.sellerId,
            product_price: args.product_price,
            product_available: args.product_available,
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
     resolve(parent, args, {req, res}){
        new User({
            name: args.name,
            address: args.address,
            email: args.email,
            mobile: args.mobile,
            password: args.password,
        }).save()
        // user.save()
        return res.status(200).json({message: 'Sucessfull register!'})
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