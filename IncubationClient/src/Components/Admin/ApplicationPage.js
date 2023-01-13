import React, { useEffect } from 'react'
import Sidebar from './AdminPartials/Sidebar'
import Navbar from './AdminPartials/Navbar'
import NewApplicantTable from '../Admin/ApplicationPageParts/NewApplicantTable'
import PendingApplicantTable from '../Admin/ApplicationPageParts/PendingApplicantTable'
import axios from '../../Config/BaseUrl'

function ApplicationPage() {

  useEffect(() => {
    axios.get('/admin/applicationData').then((data)=>{
      console.log(data);
    })
  },[])
  return (
    <div className=''>
        <Navbar/>
        <div className='flex'>

        <Sidebar/>
        <div>

        <NewApplicantTable/>
        <PendingApplicantTable/>
        </div>
        
        </div>
        

    </div>
  )
}

export default ApplicationPage