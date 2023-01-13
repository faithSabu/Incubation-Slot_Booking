import React, { useContext } from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import { AuthLoginContext } from '../../Context/Context';
// import HomeImg from '../../Assets/home.avif'

function HomePage(props) {
  const navigate = useNavigate();
  const { user } = useContext(AuthLoginContext);
  return (
    <section className="home">
      <div className='flex justify-between'>
        <div>
          <h1 className='text-gray-200 text-2xl ml-5 mt-4 cursor-pointer'>BookMySeat</h1>
        </div>
        <div className='mr-20 pt-5 flex justify-end'>
          {/* <p onClick={()=>{
        navigate('/login')
      }} className='text-white text-right cursor-pointer'>Sign In</p> */}
      {user ?  <h1 className='text-white text-lg'>{user}</h1>: (<div><button onClick={() => {
            navigate('/signup')
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ">
            SIGN UP
          </button>
          <button onClick={() => {
            navigate('/login')
          }} className="ml-5 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            LOGIN
          </button></div>) }

          
        </div>
      </div>

      <div className="justify-center text-center pt-36">
        {/* <img className="w-full h-full object-cover relative" src={HomeImg} alt="" /> */}
        <h1 className='text-white  text-4xl font-thin'>Welcome </h1>
        <h1 className='text-white mt-20 text-6xl font-//#endregion block'>Book Your Seats Today</h1>
        {/* <img className="inline-block animate-bounce ease duration-300 bg-black mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r5aEwBVBsp-r4L5bgqHuH7UKGNZTX_QgTA&usqp=CAU" alt="" /> */}
        <div className='mt-14'>
          {user ? <span onClick={() => {
            navigate('/applicationForm')
          }} className="text-2xl hover:underline text-gray-500 hover:text-gray-300 transition ease-in-out cursor-pointer">Register</span>: <span onClick={() => {
            navigate('/login')
          }} className="text-2xl hover:underline text-gray-500 hover:text-red-400 transition ease-in-out cursor-pointer">Please Login to Book Your Slots</span>}
          
        </div>
      </div>
    </section>
  )
}

export default HomePage
