const { tokenchecker } = require('./model')
const secret_key = 'HotelCrm'
const jwt = require('jsonwebtoken')

module.exports = {
    tokenchecker: async (req, res) => {
        try{
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            await tokenchecker(decoded.admin_id)
            res.json(true)
        }catch(e){
            console.log(e.message)
            res.json(false)
        }
    }
}