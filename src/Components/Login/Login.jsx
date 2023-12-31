import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Register/Firebase/Firebase.init';


const provider = new GoogleAuthProvider(app);

const Login = () => {
    const { username, auth, user } = useContext(AuthContext)

    const navigate = useNavigate()

    if (user) {
        navigate('/home/welcome')
    }



    const handleSigninGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;

                console.log(user)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }

    const handleLogin = (event) => {

        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        const useData = {
            email, password
        }

        console.log(useData)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }







    return (
        <div>
            <div className="text-center text-[5vh] font-semibold p-4">Welcome to ChatBook</div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please login to be able to experience the features of chatbook and to explore more</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <p>don't have an account? <Link to='/register' className='text-blue-500'>register here</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="login" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                        <div className=" flex justify-center items-center">
                            <button onClick={handleSigninGoogle} className='btn btn-warning my-6 '>Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ChatBook Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Login;