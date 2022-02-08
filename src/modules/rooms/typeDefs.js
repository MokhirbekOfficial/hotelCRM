const {gql} = require('apollo-server-express')

module.exports = gql `
    type Rooms{
        id: ID!
        number: String!
        size: String!
        tel: String!
        ownerFirstName: String!
        ownerLastName: String!
        checkIn: String!
        checkOut: String!
        position: String!
        roomCategories: String!
    }

    extend type Query{
        rooms: [Rooms!]!
    }
`