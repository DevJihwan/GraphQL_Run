const express = require('express')
const expressGraphQL = require('express-graphql')
//const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const app = express()

/*
const schema = new GraphQLSchema({
    query : new GraphQLObjectType({
        name : 'Hello World',
        fields: () => ({
            message : { 
                type: GraphQLString,
                resolve : () => 'Hellow Wolrd' 
            }
        })
    })
})
*/

app.use('/graphql', expressGraphQL({
  //schema: schema,
  graphiql: true
}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
