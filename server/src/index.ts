import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { UserResolver } from "./UserResolver";



(async()=>{
    const app = express();
    app.get('/', (_req, res)=>res.send("Say Hello"))

    await createConnection()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        })
    })

    apolloServer.applyMiddleware({app})

    console.log(apolloServer.subscriptionsPath) // remove afterwards

    app.listen(4000, ()=>{
        console.log('express server started')
    })


})()

