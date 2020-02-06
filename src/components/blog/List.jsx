import React from "react";
import { Link } from 'react-router-dom';

export default function BlogList({blog}) {
    return (
        <Link  
            to = { `/blogs/${blog.id}` }
            className="card text-dark" 
            style={{
                height: '10rem',
                cursor: 'pointer', 
                textDecoration: 'none'
            }}
        >
            <div className="card-body">
                <h4 className="card-title">
                    {blog.name}
                </h4>
                <p>{blog.description}.</p>
                <div style={{
                    color: '#999999',
                    font: 'normal normal 13px Roboto, Arial, sans-serif'
                }}>
                    <span className="mr-1">
                        Published {blog.published} {' - '}
                    </span>
                    <span>
                        {blog.posts.totalItems} posts {' - '}
                    </span>
                    <span>
                        status {blog.status} 
                    </span>
                </div>
            </div>
        </Link>
    )
}