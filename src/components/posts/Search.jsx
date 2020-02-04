import React, { useState } from 'react';

export default function ({submit}) {
    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
        const newValue = e.target.value
        setValue(newValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    id="search" 
                    placeholder="search by title ..." 
                    value={value}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}