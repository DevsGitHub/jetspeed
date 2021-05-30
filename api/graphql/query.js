const {ProductType, UserType} = require('./type')
const { GraphQLList, GraphQLID } = require('graphql')
const Product = require('../model/product')
const User = require('../model/user')

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

module.exports = {product, products, user, users}