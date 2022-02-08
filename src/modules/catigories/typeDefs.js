const {gql} = require('apollo-server-express')

module.exports = gql `
    type Categories{
        id: ID!
        name: String!
        categoryRoom: [Rooms]
    }

    extend type Query { 
        categories(name: String!): [ Categories! ]! 
    }
    extend type Mutation {
        changeCategory (room_owner_first_name: String! room_owner_last_name: String! room_checkin: String! room_checkout: String! room_position: String! room_id: ID!): String!
    }
    extend type Subscription {
        getCategories(name: String!): [Categories]
    }
`