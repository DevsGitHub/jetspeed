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
    resolve(parent, args, {req, res}) {
        // if(!req.isAuth){
        //     throw new Error('Unauthenticated!');
        // }
        return Product.findById(args.id);
    }
}

const products = {
    type: new GraphQLList(ProductType),
    description: 'List of all products',
    resolve(parent, args, {req, re}) {
        // if(!req.isAuth){
        //     throw new Error('Unauthenticated!');
        // }
        return Product.find({})
    }
}

const user = {
    type: UserType,
    description: 'A Single User',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args, {req, res}) {
        // if(!req.isAuth){
        //     throw new Error('Unauthenticated!');
        // }
        return User.findById(args.id)
    }
}

const users = {
    type: new GraphQLList(UserType),
    description: 'List of all users',
    resolve(parent, args, {req, res}) {
        // if(!req.isAuth){
        //     throw new Error('Unauthenticated!');
        // }
        return User.find({})
    }
}

module.exports = {product, products, user, users}