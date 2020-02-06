import React from 'react';
import { Link } from 'react-router-dom';

export default function ({post, blogId}) {
    return (
        <>
            <Link 
                to={ `/blogs/${blogId}/posts/${post.id}` } 
                className="card shadow-sm border-0 text-dark mb-3"
                style={{cursor: 'pointer', textDecoration: 'none'}}
                >
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                    </h5>
                    <div className="row">
                        <div className="col-6">
                            {
                                post.labels.map(label => {
                                    return <span className="badge badge-info mr-1" key={label}> {label} </span>
                                })
                            }
                        </div>
                        <div className="col-6"  style={{
                            color: '#999999',
                            font: 'normal normal 13px Roboto, Arial, sans-serif'
                        }}>
                            <span className="mr-1">
                                By {post.author.displayName} {' - '}
                            </span>
                            <span>
                                {post.updated} {' - '}
                            </span>
                            <span>
                                {post.replies.totalItems} comments
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}