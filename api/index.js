require('dotenv').config()
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const mongoose = require('mongoose');
const schema = require('./graphql/schema')
const cors = require('cors')
// const {createJwtToken} = require('./jwt/auth')
const {authenticate} = require('./jwt/tokenchecker')

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.connection.on('error', () => console.error(error))
mongoose.connection.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())
app.use(authenticate)

// const sellersRoute = require('./routes/sellers')
// app.use('/sellers', sellersRoute)

// app.get('/authtest', (req, res)=>{
//     res.json(
//         createJwtToken({
//             email: 'sample@gmail.com',
//             password: '12345',
//             name: 'denx'
//         })
//     )
// })

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(5000, () => console.log('Server Running'))