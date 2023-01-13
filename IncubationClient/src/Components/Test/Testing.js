import React from 'react'
// import useForm from '../../Hooks/useForm'
import useForm from '../../Hooks/useForm'


function Testing() {
   const {handleFormChange} = useForm();
   function ha(e){
      e.persist()
      alert('jlk')
   }
  return (
    <div>
      <form>

         <input type="text" name= 'username' placeholder='userName' onChange={ha} />
         <input type="text" name= 'username' placeholder='userName' onChange={handleFormChange}/>
         <input type="submit"  />
      </form>
    </div>
  )
}

export default Testing