const USERS = require('../model/schema').users
const APPLICATION = require('../model/schema').applications
const SLOTS = require('../model/schema').slotdatas;
const bcrypt = require('bcrypt')
const { response } = require('express')
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken')

module.exports = {
    getApplicationData: () => {
        return new Promise((resolve, reject) => {
            APPLICATION.find().then((data) => {
                resolve(data);
            })
        })
    },

    getSingleApplicationData: (applId) => {
        return new Promise((resolve, reject) => {
            APPLICATION.find({ _id: new ObjectId(applId) }).then((data) => {
                resolve(data);
            })
        })
    },

    updateViewStatus: (applId) => {
        return new Promise((resolve, reject) => {
            APPLICATION.updateOne(
                {
                    _id: new ObjectId(applId)
                }, {
                $set: { view: true }
            }
            ).then((res) => {
                resolve(res)
            })
        })
    },

    approvalStatus: (data) => {
        return new Promise((resolve, reject) => {
            APPLICATION.updateOne(
                {
                    _id: new ObjectId(data.applId)
                },
                {
                    $set: { status: data.state }
                },
            ).then((res) => {
                resolve(res)
            })
        })
    },
    makeFalse: () => {
        return new Promise((resolve, reject) => {
            APPLICATION.updateMany({ status: 'Pending' },
                {
                    $set: { view: false }
                }).then((data) => {
                })
        })
    },

    createSlot: (data) => {
        return new Promise(async (resolve, reject) => {
            let inserted;
            for (let i = 1; i <= data.room; i++) {
                for (let j = 1; j <= data.slotNo; j++) {
                    inserted = await new SLOTS({
                        roomNumber: i,
                        slotNumber: j,
                        occupied: false,
                        // companyDetails:{}
                    }).save()
                }
            }
            if (inserted) {
                resolve();
            }
        })
    },

    getSlotData: () => {
        return new Promise((resolve,reject)=>{
            SLOTS.find().then((data)=>{
                resolve(data);
            })
        })
    },

    getApprovedList: () =>{
        return new Promise((resolve,reject)=>{
            APPLICATION.find({status:'Approved'}).then((data)=>{
                resolve(data);
            })
        })
    },

    assignSlotToCompany: (data)=>{
        return new Promise((resolve,reject)=>{
            console.log(data);
            SLOTS.updateMany(
                {
                    _id:new ObjectId(data.slotId)
                },
                {
                    occupied:true,
                    companyId:new ObjectId(data.company)
                },
                {
                    upsert:true
                }
            ).then((res)=>{
                console.log(res);
                resolve(res)
            })
        })
    },

    getAssignedSlotData:(data)=>{
        return new Promise((resolve,reject)=>{
            console.log('hii');
            // console.log(slotId);
            // slotId = slotId.trim()
            // SLOTS.find({_id:new ObjectId(data.slotId)  }).
            SLOTS.aggregate([
                {
                    $match:{'_id':new ObjectId(data.slotId)}
                }, 
                {
                    $lookup:{
                        from:'applications',
                        localField:'companyId',
                        foreignField:'_id',
                        as:'companyData'
                    }
                }
            ]).
            then((data)=>{
                    console.log(data[0].companyData);
                    resolve(data[0].companyData)
                })
        })
    }
}

