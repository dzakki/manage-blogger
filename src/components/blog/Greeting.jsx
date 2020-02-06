import React from "react";
import { useSelector } from 'react-redux';
export default function Greeting() {
    const user = useSelector(state => state.user)
    return (
        <>
            <div className="d-flex justify-content-center text-center">
                <div>
                    <h2>Welcome back!</h2>
                    { 
                        user.isLogged 
                            ? (<p>You have gotten access to your blog, lets choose your blog for look of the posts.</p>)
                            : (<p>You have't gotten access to your blog, lets choose your blog for look of the posts after login.</p>)
                    }
                </div>
            </div>
        </>
    )
}