import React from 'react'

export default function MainButton({ title, type }) {
    return (
        <button type={type || "button"} className="mx-auto py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-md hover:bg-yellow-300  focus:z-10 focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:text-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" style={{width: 100}}>
            {title}
        </button>
    )
}
