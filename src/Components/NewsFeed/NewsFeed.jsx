import React, { useState } from 'react';

const NewsFeed = () => {

    const [upPhoto,setUpPhoto]=useState(false)

    const handlePhoto=()=>{
        setUpPhoto(!upPhoto)

    }

    const handlePost=(event)=>{

        event.preventDefault()

        const form=event.target 
        const post=form.post.value 
        const imgUrl=form.url.value 

    }


    return (
        <div>
            <div className="lg:grid lg:grid-cols-[1fr,4fr,1fr] h-[90vh] my-12">
                <div className="">
                    <div className="text-center text-[3vh] lg:block hidden border-r-2 border-[rgb(0,0,0,0.2)] min-h-[60vh]">
                        My Friends
                    </div>
                </div>
                <div className="">
                    <div className=" w-[100%] border-r-2 border-[rgb(0,0,0,0.2)] h-[90vh] overflow-y-scroll">
                    <div className="text-center text-[3vh] font-bold mb-6">
                    Posts

                    </div>
                    <div className="text-center text-[3vh] font-bold  ">
                        <div className="">
                            <p>Write a post!</p>
                        </div>
                        <form onSubmit={handlePost} className="text-center text-[3vh] flex flex-col justify-center items-center">
                            <textarea className='border-2 border-black rounded-lg mb-4' name="post" id="" cols="60" rows="5"></textarea>
                            {upPhoto?<input className='border-2 border-black py-4 px-12 my-6 rounded-lg' type="text" name="url" id="" placeholder='Image Url' />:''}
                            <div className="flex justify-center items-center gap-6">
                            <input className='btn btn-primary' type="submit" value="post" />
                            <button onClick={handlePhoto} className='btn btn-primary'>post a photo</button>
                            </div>
                        </form>
                        
                    </div>


                    </div>
                </div>
                <div className="">
                    <div className="text-center text-[3vh] lg:block hidden border-r-2 border-[rgb(0,0,0,0.2)] min-h-[60vh]">
                        Menu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;