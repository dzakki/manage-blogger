import React from 'react';
import { Link } from 'react-router-dom'
export default function ({post}) {

    const shorten = (str, maxLen = 100, separator = ' ') => {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
    }

    return (
        <>
            <Link 
                to={ `/posts/${post.id}` } 
                className="card shadow-sm border-0 text-dark mb-3"
                style={{cursor: 'pointer', textDecoration: 'none'}}
                >
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                    </h5>
                    <p> {shorten(post.body)} </p>
                </div>
            </Link>
        </>
    )
}