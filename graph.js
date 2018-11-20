/**
 * This file should be used to create the schema
 */
var {UserList} = require('./Users.js');
var { buildSchema, GraphQLSchema, printSchema, GraphQLObjectType,
    GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = require('graphql');

// Instantiate the user list
let userList = new UserList();

// Create the user type object
var UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    }
});

// Create the mutation object
var Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {type: GraphQLString}
            },
            resolve: (_, {name}) => {
                return userList.addUser(name);
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (_, {id}) => {
                return userList.deleteUser(id);
            }
        }
    }
});

// Create the query object
var Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getUsers: {
            args: {
                id: {type: GraphQLInt}
            },
            type: GraphQLList(UserType),
            resolve: (_, {id}) => {
                return userList.userList;
            }
        }
    }
});


// Create the schema object
var schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

// Export the schema
module.exports = {
    schema: schema,
};

