import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";



(async()=>{
    const app = express();
    app.get('/', (_req, res)=>res.send("Say Hello"))

    const apolloServer = new ApolloServer({
        typeDefs:`
        type Query {
            hello: String!
        }`
        ,
        resolvers: {
            Query: {
                hello: ()=> "hello world"
            }
        }
    })

    apolloServer.applyMiddleware({app})

    console.log(apolloServer.subscriptionsPath) // remove afterwards

    app.listen(4000, ()=>{
        console.log('express server started')
    })


})()

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
