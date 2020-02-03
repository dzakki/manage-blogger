import React, { useState } from 'react';

export default function ({submit}) {
    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
        const newValue = e.target.value
        submit(value)
        setValue(newValue)

    }

    return (
        <>
            <input 
                type="text" 
                className="form-control" 
                id="search" 
                placeholder="search by title ..." 
                value={value}
                onChange={handleInputChange}
            />
        </>
    )
}