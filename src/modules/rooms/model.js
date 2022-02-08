const { fetch, fetchAll } = require('../../lib/postgress')

const Rooms = `
    SELECT 
        * 
    FROM
        rooms
`
const Rooms_By_Category = `
    SELECT
        room_id,
        room_number,
        room_size,
        room_tel,
        room_owner_first_name,
        room_owner_last_name,
        room_checkin,
        room_checkout,
        room_position
    FROM
        rooms
    WHERE
        room_category = $1
`

const rooms = () => fetchAll(Rooms)
const room_by_category = (room_category) => fetchAll(Rooms_By_Category, room_category)
module.exports = {
    rooms,
    room_by_category
}