import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import AdminDashboard from './AdminDashboard'
import JobTitle from './JobTitle'

const App = (props) => {

  const location = useLocation()
  console.log(location.pathname)

  const [users, setUsers] = useState([])
  // const [pathToggle, setPathToggle] = useState(false)

  useEffect(() => {
    axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
    .then((response) => {
      const result = response.data
      setUsers(result)
    })
    .catch((err) => {
      alert(err.message)
    })
  }, [])

  let pathToggle = false

  if(location.pathname === '/dashboard/front_end' || location.pathname === '/dashboard/node' || location.pathname === '/dashboard/mean' || location.pathname === '/dashboard/full_stack'  ) {
    pathToggle = true
  }

  return (
    <div>
      <Link to='/' > Home </Link> |||
      <Link to='/form' > Application Form </Link> |||
      <Link to='/dashboard' > Admin Dashboard </Link> <br/> <br/> <br/>
      <Route path='/form'>
        <ApplicationForm /* addItem={addItem} */ />
      </Route>  
      <Route path='/dashboard' exact={true} >
        <AdminDashboard users={users} />
      </Route>
      {
        pathToggle && (
          <Route  path={location.pathname} >
            <JobTitle pathname={location.pathname} users={users} />
          </Route> 
        )
      }
    </div>
  )
}

export default App