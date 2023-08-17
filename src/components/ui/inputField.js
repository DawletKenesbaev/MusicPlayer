import React from 'react'

export default function InputField({ type, name, onChage, placeholder }) {
    return (
        <input className='p-[12px] shadow-lg rounded mx-auto font-bold w-3/4 outline-none' type={type || 'text'} name={name || ''} placeholder={placeholder || ''} />
    )
}