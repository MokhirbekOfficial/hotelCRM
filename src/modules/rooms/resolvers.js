const {rooms} = require('./model')

module.exports = {
    Query: {
        rooms: async()=>await rooms()
    },
    Rooms: {
        id: global => global.room_id,
        number: global => global.room_number,
        size: global => global.room_size,
        tel: global => global.room_tel,
        ownerFirstName: global => global.room_owner_first_name,
        ownerLastName: global => global.room_owner_last_name,
        checkIn: global => global.room_checkin,
        checkOut: global => global.room_checkout,
        position: global => global.room_position,
        roomCategories: global => global.room_category
    }
}