const {  GraphQLString, GraphQLNonNull, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql')
const {UserType, ProductType} = require('./type')
const User = require('../model/user')
const Product = require('../model/product')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

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
    async resolve(parent, args, {req, res}){
        const existingEmail = await User.findOne({email: args.email});
        if(existingEmail){
            throw new Error('User exist already.')
        }
        const hashedPassword = await bcrypt.hash(args.password, 10);
        const user = new User({
            name: args.name,
            address: args.address,
            email: args.email,
            mobile: args.mobile,
            password: hashedPassword,
        });
        await user.save();
        return res.json({message: 'Sucessfull register!'})
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
        const user = await User.findOne({email: args.email}).select('+password');
        if(!user){
            throw new Error("Invalid Credentials")
        }
        const isEqual = await bcrypt.compare(args.password, user.password);
        if(!isEqual){
            throw new Error("Invalid Credentials")
        }
        return jwt.sign({userPass: user.password}, `${process.env.JWT_SECRET}`, {
            expiresIn: '1d'
        });
    }
}

module.exports = {addProduct, addUser, signIn}