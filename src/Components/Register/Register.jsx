import React from 'react';

const Register = () => {
    return (
        <div>
                       <div className="text-center text-[5vh] font-semibold p-4">Welcome to ChatBook</div>
                       <div className="flex justify-center items-center h-[60vh] border-2 border-black rounded-lg bg-base-200 lg:w-[60%] mx-auto w-[100%] h-[100%] py-4">
                           <form action="flex justify-center items-center flex-col">
                           <div className="text-center text-[5vh] font-semibold p-4 text-black">Please Register</div>
                           <div className="mt-6">
                               <p className='text-[3vh]'>username:</p>
                               <input className='py-4 px-12 border-2 border-black rounded-lg ' type="text" name="usename" id="" placeholder='enter username' />
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
                               <input  className='btn btn-primary mt-6 w-[100%]' type="submit" value="register" />
                               </div>
                           </form>
                       </div>
        </div>
    );
};

export default Register;