import React, { useState } from 'react'
import axios from '../../Config/BaseUrl';
import LoginImg from '../../Assets/smiley balls.avif'
import {useNavigate} from 'react-router-dom'
import useForm from '../../Hooks/useForm';

function SignupPage() {

    const navigate = useNavigate();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [emailExist,setEmailExist] = useState('');


    // const handleSubmit = async(e)=>{
    //   console.log(name,email,phone,password);
    //   e.preventDefault()
    //   const data = await axios({
    //     method:'post',
    //     url:'/signup',
    //     data:{
    //       name,email,phone,password
    //     }
    //   })
    //   const {emailerr} = data.data.response
    //   if(emailerr){
    //     setEmailExist('Email Already Registered')
    //   }else{
    //     navigate('/login')
    //   }
    // }    

    const formLogin = async() =>{
      const data = await axios({
        method:'post',
        url:'/signup',
        data:{
          name:values.name,
          email:values.email,
          phone:values.phone,
          password:values.password
        }
      })
      const {emailerr} = data.data.response
      if(emailerr){
        setEmailExist('Email Already Registered')
      }else{
        navigate('/login')
      }
    }

    const {handleFormChange,values,errors,handleSubmit} = useForm(formLogin);

    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
      <div className='hidden md:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form onSubmit={handleSubmit}  className='max-w-[400px] w-full mx-auto bg-gray-900 px-8 rounded-lg py-8'>
          <h2 className='text-4xl text-white font-bold text-center'>SIGN UP</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor="name">Full Name</label>
            <input
             name='name' className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
             value={name}
             onChange={(e)=>{
              setName(e.target.value);
              handleFormChange(e)
              }}/>
          </div>
              {errors.name && <p className=' text-red-400 text-center'>{errors.name}</p>}
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor="email">Email Address (User Name)</label>
            <input name='email' className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="Email" 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
              handleFormChange(e)
              }}/>
          </div>
          {errors.email && <p className=' text-red-400 text-center'>{errors.email}</p>}
          {emailExist && <p value={emailExist} className=' text-red-400 text-center'>{emailExist}</p>}
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor="phone">Phone Number</label>
            <input name='phone' className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="Phone" 
            value={phone}
            onChange={e=>{
              setPhone(e.target.value)
              handleFormChange(e)
              }}/>
          </div>
          {errors.phone && <p className=' text-red-400 text-center'>{errors.phone}</p>}
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor="password">Password</label>
            <input name='password' className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="Password" 
            value={password}
            onChange={e=>{
              setPassword(e.target.value)
              handleFormChange(e)
              }}/>
          </div>
          {errors.password && <p className=' text-red-400 text-center'>{errors.password}</p>}
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign Up</button>
          <div className='text-white text-center'>
            <small onClick={()=>{
              navigate('/login')
            }} className='cursor-pointer hover:text-sm'>Sign In</small>
          </div>
        </form>

      </div>

    </div>
  )
}

export default SignupPage