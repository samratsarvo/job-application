import React from 'react'
import {Link} from 'react-router-dom'
import Table from './Table'

const JobTitle = (props) => {

    const {pathname, users} = props

    let title = ''

    if (pathname === '/dashboard/front_end') {
        title = "Front-End Developer"
    } else if (pathname === '/dashboard/node' ) {
        title = 'Node.js Developer'
    } else if ( pathname === '/dashboard/mean' ) {
        title = 'MEAN Stack Developer'
    } else {
        title = 'FULL Stack Developer'
    }

    const filUsers = users.filter(user => user.jobTitle === title)

    return (
        <div>
            <Link to='/dashboard/front_end' > Front End Developers </Link> |||
            <Link to='/dashboard/node' > Node JS Developers </Link> |||
            <Link to='/dashboard/mean' > MEAN Stack Developers </Link> |||
            <Link to='/dashboard/full_stack' > Full Stack Developers </Link>
            <h1> {title}s ({filUsers.length}) </h1>
            <Table users={filUsers} />
        </div>
    )
}

export default JobTitle