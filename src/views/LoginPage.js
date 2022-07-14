import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="login">

                <form className="login-form">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="user_name" aria-describedby="user_name" name="name" />
                        <label for="exampleInputEmail1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" aria-describedby="password" name="name" />
                        {/* <div id="characterCreationHelp" className="form-text">The one and only....</div> */}
                    </div>
                    <Link to='/'>
                        <button className="btn btn-primary">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
            <div className="container">

            </div>
        </>
    )
}

export default Login;