import axios from '../../Config/BaseUrl';
import React, { useContext, useState } from 'react'
import { AuthLoginContext } from '../../Context/Context'
import Swal from 'sweetalert2';

function ApplicationForm() {
  const {user,userId} =useContext(AuthLoginContext);

  const initialValues = {
    name:'',
        address:'',
        city:'',
        state:'',
        email:'',
        phone:'',
        companyName:'',
        comapanyDescription:'',
        companyName:'',
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:'',
        j:'',
        typeOfIncubation:'',
        userId:userId,
        status:'Pending',
        view:'false'
  }
const [formData,setFormData] = useState(initialValues);

const handleChange = (e) =>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const handleApplicationSubmit = (e) =>{
  e.preventDefault();
  setFormData({...formData})

  axios({
    method:'post',
    url:'/applicationForm',
    data:formData
  }).then((response)=>{
    if(response){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } )
}

  return (
    <div className='bg-gray-700 text-white lg:px-56 px-28 py-10 mx-20 rounded-lg'>
      <div className='py-5'>
        <h1 className='text-center font-bold lg:text-4xl text-3xl mx-10 uppercase font-serif'>Application Form</h1>
        <form onSubmit={handleApplicationSubmit} className='mt-11'>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">Name</label>
              <input
              value={formData.name}
              onChange ={handleChange}
              required name='name' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">Address</label>
              <input
              value={formData.address}
              onChange ={handleChange}
               required name='address' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">City</label>
              <input
              value={formData.city}
              onChange ={handleChange} required name='city' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">State</label>
              <input
              value={formData.state}
              onChange ={handleChange} required name='state' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">Email</label>
              <input
              value={formData.email}
              onChange ={handleChange} required name='email' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">Phone Number</label>
              <input
              value={formData.phone}
              onChange ={handleChange} required name='phone' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">Company Name</label>
              <input
              value={formData.companyName}
              onChange ={handleChange} required name='companyName' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">Company Logo</label>
              <input
              value={formData.comapanyDescription}
              onChange ={handleChange} required name='comapanyDescription' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor="">1. Describe your team and background</label>
            <textarea
            value={formData.a}
            onChange ={handleChange} name='a' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">2. Describe your company and products</label>
            <textarea
            value={formData.b}
            onChange ={handleChange} name='b' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">3. Describe the problem you are trying to solve</label>
            <textarea
            value={formData.c}
            onChange ={handleChange} name='c' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">4. What is unique about your solution?</label>
            <textarea
            value={formData.d}
            onChange ={handleChange} name='d' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">5. What is your value proposition for the customer?</label>
            <textarea
            value={formData.e}
            onChange ={handleChange} name='e' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">6. What are your competitors and what is your competitve advantage?</label>
            <textarea
            value={formData.f}
            onChange ={handleChange} name='f' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg  focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">7. Explain your revenue model</label>
            <textarea
            value={formData.g}
            onChange ={handleChange} name='g' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">8. What is the potential market size of the product?</label>
            <textarea
            value={formData.h}
            onChange ={handleChange} name='h' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">9. How do you market or plan to market your products?</label>
            <textarea
            value={formData.i}
            onChange ={handleChange} name='i' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-6 flex-col'>
            <label htmlFor="">Type of Incubation needed</label>
            <div className='m-3'>
              <input
              value='Physical Incubation'
              onChange ={handleChange} required id='physical' name='typeOfIncubation' type="radio" />
              <label htmlFor="physical">Physical Incubation</label>
            </div>
            <div className='m-3'>
              <input
              value='Virtual Incubation'
              onChange ={handleChange} required id='virtual' name='typeOfIncubation' type="radio" />
              <label htmlFor="virtual">Virtual Incubation</label>
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor="">10. Upload a detailed business proposal</label>
            <textarea
            value={formData.j}
            onChange ={handleChange} name='j' className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='text-center'>
          <button type='submit' className='my-5 py-2 px-20 bg-blue-600 shadow-lg shadow-blue-100/10 hover:shadow-blue-500/40 text-white font-semibold rounded-lg'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicationForm