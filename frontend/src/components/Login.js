import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
            const { data } = await axios.post("/api/user/login",
                {
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
            setError(error.response.data.message)
            // alert('Invalid Email Or Password!')
            setLoading(false)
        }
    }

    return (
        <div>
            {loading && <Loader />}
            <form className='p-3' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className='mt-3 p-3'>
                <span>Create new Account? <Link to="/register">Register</Link></span>
            </div>
        </div>
    )
}
