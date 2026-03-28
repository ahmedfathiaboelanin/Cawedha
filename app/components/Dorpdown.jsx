import React from 'react'

export default function Dorpdown({title,options}) {
    return (
        <>
            <button className="btn shadow-none border-none" popoverTarget={title.toLowerCase() + "-dropdown"}>
                {title}
            </button>
            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto" id={title.toLowerCase() + "-dropdown"}>
                {options.map((option, index) => (
                    <li key={index}>
                        <a href={option.link}>{option.text}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}
