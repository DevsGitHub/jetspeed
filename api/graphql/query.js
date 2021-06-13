const {ProductType, UserType, LoginType} = require('./type')
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const Product = require('../model/product')
const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const product = {
    type: ProductType,
    description: 'A Single Product',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return Product.findById(args.id)
    }
}

const products = {
    type: new GraphQLList(ProductType),
    description: 'List of all products',
    resolve(parent, args) {
        return Product.find({})
    }
}

const user = {
    type: UserType,
    description: 'A Single User',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

const users = {
    type: new GraphQLList(UserType),
    description: 'List of all users',
    resolve(parent, args) {
        return User.find({})
    }
}

const signIn = {
    type: LoginType,
    description: 'Sign in on the app',
    args:{
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent, args){
        const user = await User.findOne({email: args.email});
        const isEqual = await bcrypt.compare(args.password, user.password);
        if(!user || !isEqual){
            throw new Error("Invalid Credentials")
        }
        const token = jwt.sign({userPass: user.password}, `${process.env.JWT_SECRET}`, {
            expiresIn: '1d'
        })
        return {userPass: user.password, token: token, tokenExpiration : 1};
    }
}

module.exports = {product, products, user, users, signIn}