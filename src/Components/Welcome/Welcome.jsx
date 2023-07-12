import { Link } from "react-router-dom";


const Welcome = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Go and explore the news feed to see the posts of the people</p>
                    <Link to='/home/feed'><button className="btn btn-primary">Visit NewsFeed</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;