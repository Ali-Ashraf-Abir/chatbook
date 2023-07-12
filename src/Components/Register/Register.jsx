import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from './Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider(app);
const Register = () => {


    const [error,setError]=useState('')


    const navigate=useNavigate()

    const { username, auth } = useContext(AuthContext)


    const handleSigninGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;

                console.log(user)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }

    const handleRegister = (event) => {

        event.preventDefault()

        const form = event.target
        const username = form.username.value
        const email = form.email.value.toLowerCase()
        const password = form.password.value
        const imageUrl=form.url.value

        const userData = {
            email:email, username ,imageUrl
        }

        console.log(userData)


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

                updateProfile(auth.currentUser, {
                    displayName: username, photoURL: imageUrl
                  }).then(() => {
                    // Profile updated!
                    // ...
                    navigate('/home/welcome')

                    fetch('http://localhost:5000/users',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(userData)
                    })
                    .then(res=>res.json())
                    .then(data=>console.log(data))

                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });


    }





    console.log(username)
    return (
        <div className='font-sherif'>
            <div className="text-center text-[5vh] font-semibold p-4">Welcome to ChatBook</div>
            <div className="flex justify-center items-center border-2 border-black rounded-lg bg-base-200 lg:w-[60%] mx-auto w-[100%] h-[100%] py-4">
                <form onSubmit={handleRegister} action="flex justify-center items-center flex-col">
                    <div className="text-center text-[5vh] font-semibold p-4 text-black">Please Register</div>
                    <div className="mt-6">
                        <p className='text-[3vh]'>username:</p>
                        <input className='py-4 px-12 border-2 border-black rounded-lg ' type="text" name="username" id="" placeholder='enter username' />
                    </div>
                    <div className="mt-6">
                        <p className='text-[3vh]'>Image Url:</p>
                        <input className='py-4 px-12 border-2 border-black rounded-lg ' type="text" name="url" id="" placeholder='image url' />
                    </div>
                    <div className="mt-6">
                        <p className='text-[3vh]'>email:</p>
                        <input className='py-4 px-12 border-2 border-black rounded-lg ' type="email" name="email" id="" placeholder='enter email' />
                    </div>
                    <div className=" mt-6">
                        <p className='text-[3vh]'>password:</p>
                        <input className='py-4 px-12 border-2 border-black rounded-lg' type="password" name="password" id="" placeholder='password' />
                    </div>
                    <div className="">
                        <input className='btn btn-primary mt-6 w-[100%]' type="submit" value="register" />

                    </div>
                    <div className="">
                        {error?error:''}
                    </div>
                </form>


            </div>
            <div className=" flex justify-center items-center">
                <button onClick={handleSigninGoogle} className='btn btn-warning my-6 '>Login With Google</button>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ChatBook Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Register;