import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import axios from 'axios';

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email)
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            };

            setLoading(true)
            const { data } = await axios.post(
                "/api/user/register",
                {
                    name,
                    email,
                    password,
                },
                config
            )
            console.log(data)
            localStorage.setItem('userInfo', JSON.stringify(data))
            setLoading(false)
            navigate("/welcome")



        } catch (error) {
            console.log(error.response.data.message)
            alert('Something went wrong!')
            setLoading(false)
        }
    }


    return (
        <div>
            {loading && <Loader />}
            <form className='p-3' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="examppleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className='mt-3 p-3'>
                <span>Already have an Account? <Link to="/login">Login</Link></span>
            </div>
        </div>
    )
}
