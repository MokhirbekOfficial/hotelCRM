const { fetch, fetchAll } = require('../../lib/postgress')

const Categories = `
    SELECT 
        * 
    FROM
        categories
    WHERE 
        categorie_name = $1
`

const ChangeRooms = `
    UPDATE rooms
    SET 
        room_owner_first_name = $1,
        room_owner_last_name = $2,
        room_checkin = $3,
        room_checkout = $4,
        room_position = $5
    WHERE 
        room_id = $6;
`

const categories = (categorie_name) => fetchAll(Categories, categorie_name)
const changeRooms = (room_owner_first_name,room_owner_last_name,room_checkin,room_checkout,room_position,room_id) => fetch(ChangeRooms, room_owner_first_name,room_owner_last_name,room_checkin,room_checkout,room_position,room_id)
module.exports = {
    categories,
    changeRooms
}