import React from 'react'

export default function Form({ children, style, onSubmit, id }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.()
    }


    return (
        <form className='py-6 px-14 bg-yellow-50 rounded  mx-auto w-2/5' id={id} style={style} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
