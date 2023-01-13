const USERS = require('../model/schema').users
const APPLICATION = require('../model/schema').applications
const bcrypt = require('bcrypt')
const { response } = require('express')

module.exports = {

    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            // let emailExist = await USERS.findOne({email:userData.email})
            let emailerr = await USERS.count({ email: userData.email }) > 0
            if (emailerr) {
                resolve({ emailerr })
            } else {
                const hashedPassword = await bcrypt.hash(userData.password, 10)
                let password = hashedPassword
                await new USERS({
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    password: password,
                    timeStamp: new Date()
                }).save().then((response) => {
                    resolve(response);
                })
            }
        })
    },

    doLogin: (loginData) =>{
        return new Promise(async(resolve,reject)=>{
            let userData = await USERS.findOne({email:loginData.email})
            if(userData){
                bcrypt.compare(loginData.password,userData.password).then((status)=>{
                    if(status){
                        resolve({login:true,userData})
                    }else{
                        resolve({login:false})
                    }
                })
            }else{
                resolve({login:false})
            }
        })
    },

    submitApplication:(formData)=>{
        return new Promise(async(resolve,reject)=>{
            await new APPLICATION({
                ...formData,
                timeStamp: new Date()
            }).save().then((response)=>{
                resolve(response)
            })
        })
    }

}