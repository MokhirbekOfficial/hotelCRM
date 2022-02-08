const http = require('http')
const express = require('express')
const app = express()
const {ApolloServer, gql} = require('apollo-server-express')
const modules = require('./src/modules')
const router = require('./src/modules/routes')
let cors = require('cors')
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

const server = new ApolloServer({
    modules,
    context: ({req,connection})=>{
        if(connection){
            return connection.context
        }

        return req.headers
    },

    subscriptions: {
        onConnect:(connectionParams, webSocket, context)=>{
            if(connectionParams){
                return connectionParams.context
            }
        },
        onDisconnect:(webSocket,context)=>{}
    }

})



server.applyMiddleware({app})


const PORT = process.env.PORT || 4000;


const httpServer = http.createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, ()=>{
    console.log('http://localhost:4000' + server.graphqlPath)
    console.log('ws://localhost:4000' + server.graphqlPath)
})