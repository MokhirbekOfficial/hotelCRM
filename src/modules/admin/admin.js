const secret_key = 'HotelCrm'
const jwt = require('jsonwebtoken')
const {getAdmin} = require('./model')

module.exports = {
    getAdmin: async(req,res)=>{
        try{
            let {admin_name, admin_password} = req.body
            let admin = await getAdmin()
            if(admin.admin_name == admin_name && admin.admin_password == admin_password){
                let admin_id = admin.admin_id
                const token = jwt.sign({admin_id}, secret_key)
                res.json(token)
            }else{
                res.json('false')
            }
        }catch(e){
            console.log(e)
        }
    }
}