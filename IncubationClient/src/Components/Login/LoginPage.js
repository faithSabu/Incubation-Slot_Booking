import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginImg from '../../Assets/welcome2.avif'
import axios from '../../Config/BaseUrl'
import { AuthLoginContext } from '../../Context/Context';

function LoginPage() {
  const navigate = useNavigate();
  const {setUser,setUserId} = useContext(AuthLoginContext);
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [invalidCred,setInvalidCred] = useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault()

    let response = await axios({
      method:'post',
      url:'/login',
      data:{
        email,password
      }
    })
    
    console.log(response);
    let user = response.data ? response.data.userData : undefined;

    if(response.data.login){
      setUser(user.name);
      setUserId(user._id)
      navigate('/',{name:'email'})

      
    }else{
      setInvalidCred('Invalid UserName or Password')
    }
  }
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
      <div className='hidden md:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-gray-900 px-8 rounded-lg py-8'>
          <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor="">User Name</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor="">Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="Password" 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
          </div>
          <p value={invalidCred} className=' text-red-400 text-center'>{invalidCred}</p>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
          <div className='text-white text-center'>
            <small onClick={()=>{
              navigate('/signup', {user:'true'})
            }} className='cursor-pointer hover:text-sm'>Sign Up</small>
          </div>
        </form>

      </div>

    </div>
  )
}

export default LoginPage