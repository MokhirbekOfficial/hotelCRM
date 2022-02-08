const { fetch, fetchAll } = require('../../lib/postgress')

const GetAdmin = `
    SELECT
        *
    FROM
        admin
`
const getAdmin = () => fetch(GetAdmin)

module.exports = {
    getAdmin
}