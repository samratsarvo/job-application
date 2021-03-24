import axios from 'axios'
import React from 'react'

const Table = (props) => {

    const {users} = props

    const handleDetails = (userObj) => {
        alert(`
            ${userObj.name} Profile
            Contact Number   :  ${userObj.phone}
            Email            :  ${userObj.email}
            Skills           :  ${userObj.skills}
            Experience       :  ${userObj.experience}
        `)
    }

    const handleEdit = (id, userStatus ) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-forms/${id}`, { status : userStatus })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th> Update Application Status </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user._id} >
                                    <td> {user.name} </td>
                                    <td> {user.skills} </td>
                                    <td> {user.experience} </td>
                                    <td> {user.createdAt.slice(0, 10)} </td>
                                    <td> <button onClick={ () => {
                                        handleDetails(user)
                                    } } > View Details </button> </td>
                                    {
                                        user.status === 'applied' && (
                                            <td>
                                                <button onClick={ () => {
                                                    handleEdit(user._id, 'shortlisted')
                                                }} > ShortList </button> <button onClick={() => {
                                                    handleEdit(user._id, 'rejected')
                                                }} > Reject </button>
                                            </td>
                                        )
                                    }
                                    {
                                        user.status === 'shortlisted' && (
                                            <td>
                                                <button> ShortListed </button>
                                            </td>
                                        )
                                    }
                                    {
                                        user.status === 'rejected' && (
                                            <td>
                                                <button> Rejected </button>
                                            </td>
                                        )
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table