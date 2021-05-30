const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLBoolean } = require('graphql')
const Product = require('../model/product')
const User = require('../model/user')

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'This represents a product by a user',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        sellerId: { type: GraphQLNonNull(GraphQLString) },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.sellerId)
            }
        }
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a user of a product',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        mobile: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        active: { type: GraphQLNonNull(GraphQLBoolean) },
        created: { type: GraphQLNonNull(GraphQLString) },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({ sellerId: parent.id })
            }
        }
    })
})

module.exports = {ProductType, UserType }