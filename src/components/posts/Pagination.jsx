import React from "react";

export default function Pagination(props) {

    const previous = () => {
        props.filterPost(null, props.previous)
    }

    const next = () => {
        props.filterPost(null, props.next)
    }

    return (
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button 
                type="button" 
                className="btn page-link" 
                onClick={previous} 
                >
                Previous
            </button>
            <button 
                type="button" 
                className="btn page-link"
                onClick={next} 
                >
                Next
            </button>
        </div>  
    )
}