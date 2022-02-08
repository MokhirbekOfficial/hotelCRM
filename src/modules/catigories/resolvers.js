const {categories, changeRooms} = require('./model')
const {room_by_category} =require('../rooms/model')
const {ApolloError} = require('apollo-server-express')
const pubSub = require('../../pubSub')
const CATEGORIES = 'CATEGORIES'

module.exports = {
    Query: {
        categories: async(_, {name})=> {
            try{
                return await categories(name)
            }catch(e){
                console.log(e.message)
            }
        }
    },
    Mutation:{
        changeCategory: async(_,{room_owner_first_name,room_owner_last_name,room_checkin,room_checkout,room_position,room_id})=>{
            try{
                await changeRooms(room_owner_first_name,room_owner_last_name,room_checkin,room_checkout,room_position,room_id)
                pubSub.publish(CATEGORIES)
                return "ok"
            }catch(e){
                console.log(e.message)
            }
        }
    },
    Subscription:{
        getCategories:{
            resolve: async(_,{name})=>{
                try{
                    return await categories(name)
                }catch(e){
                    console.log(e.message)
                }
            },
            subscribe: () => pubSub.asyncIterator(CATEGORIES)
        }
    },
    Categories: {
        id: global => global.categorie_id,
        name: global => global.categorie_name,
        categoryRoom: async global => await room_by_category(global.categorie_id)
    }
    
}