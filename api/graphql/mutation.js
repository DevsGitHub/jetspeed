const {  GraphQLString, GraphQLNonNull, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql')
const {UserType, ProductType} = require('./type')
const User = require('../model/user')
const Product = require('../model/product')
const bcrypt = require("bcrypt")

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
        return res.status(200).json({message: 'Sucessfull register!'})
    }
}

module.exports = {addProduct, addUser}