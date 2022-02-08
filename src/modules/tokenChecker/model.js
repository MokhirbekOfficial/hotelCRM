const { fetch, fetchAll } = require('../../lib/postgress')

const TokenChecker = `
SELECT 
    *
FROM
    admin
WHERE 
    admin_id = $1
`
const tokenchecker = (admin_id) => fetch(TokenChecker, admin_id)

module.exports = {
    tokenchecker
}