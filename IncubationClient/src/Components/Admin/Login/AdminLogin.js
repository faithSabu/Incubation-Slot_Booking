import React from 'react'

function AdminLogin() {
  return (
    <div>
      <div>
        <div>
          <span className=''>Welcome Admin</span>
          <span>Sign in to continue</span>
        </div>
        <form action="">
          <div>
            <label htmlFor="">User Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="Password" />
          </div>
          <button type='Submit'>Submit</button>
        </form>
      </div>
    </div>


  )
}

export default AdminLogin
