import React from 'react'
import {Link} from 'react-router-dom'
import Table from './Table'

const AdminDashboard = (props) => {

    const {users} = props

    return (
        <div>
            <Link to='/dashboard/front_end' > Front End Developers </Link> |||
            <Link to='/dashboard/node' > Node JS Developers </Link> |||
            <Link to='/dashboard/mean' > MEAN Stack Developers </Link> |||
            <Link to='/dashboard/full_stack' > Full Stack Developers </Link>
            <h1> Admin Dashboard </h1>
            <h2> Total Number of Applicants : {users.length} </h2>
            <Table users={users} />
        </div>
    )
}

export default AdminDashboard