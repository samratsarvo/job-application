import React,{useState} from 'react'

import axios from 'axios'

const ApplicationForm = (props) => {

    //const {addItem} = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cNum, setCNum] = useState('')
    const [job, setJob] = useState('')
    const [exp, setExp] = useState('')
    const [skills, setSkills] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.name
        if (inputValue === 'name') {
            setName(e.target.value)
        } else if (inputValue === 'email') {
            setEmail(e.target.value)
        } else if (inputValue === 'cNum') {
            setCNum((e.target.value))
        } else if (inputValue ==='job') {
            setJob(e.target.value)
        } else if (inputValue === 'exp') {
            setExp(e.target.value)
        } else if (inputValue === 'skills') {
            setSkills(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : name,
            email : email,
            phone : cNum,
            skills : skills,
            jobTitle : job,
            experience : exp
        }
        axios.post('http://dct-application-form.herokuapp.com/users/application-form', formData)
        
        .catch(err => {
            alert(err.message)
        })
        // addItem(formData)
        setName('')
        setEmail('')
        setCNum('')
        setJob('')
        setExp('')
        setSkills('')
    }

    return (
        <div>

            <h1> Application Form </h1>

            <form onSubmit={handleSubmit} >
                <label> Full Name :  </label>
                <input type="text" value={name} onChange={handleChange} name='name' /> <br/> <br/>
                <label> E-Mail : </label>
                <input type="text" placeholder='john@gmail.com' value={email} onChange={handleChange} name='email' /> <br/> <br/>
                <label> Contact Number : </label>
                <input type="number" placeholder='+91 9192939495' value={cNum} onChange={handleChange} name='cNum' /> <br/> <br/>
                <label> Applying for Job : </label>
                <select name='job' value={job} onChange={handleChange} >
                    <option> ---Select--- </option>
                    <option value='Front-End Developer' > Front-End Developer </option>
                    <option value='Node.js Developer' > Node.js Developer </option>
                    <option value='MEAN Stack Developer' > MEAN Stack Developer </option>
                    <option value='Full Stack Developer' > Full Stack Developer </option>
                </select> <br/> <br/>
                <label> Experience :  </label>
                <input type="text" placeholder='(2 years, 3 months)' value={exp} name='exp' onChange={handleChange} /> <br/> <br/>
                <label> Technical Skills :  </label> <br/>
                <textarea value={skills} name='skills' onChange={handleChange} > Mention your technical skills here </textarea> <br/> <br/>
                <input type="submit" value='Submit Application '/>
            </form> <br/><br/>
            
        </div>
    )
}

export default ApplicationForm