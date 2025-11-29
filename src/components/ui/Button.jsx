import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ name, to }) => {
    return (
        <Link to={to}>
            <button className="
                flex items-center gap-4
                bg-white border border-gray-300
                rounded-full px-6 py-2
                shadow-sm hover:shadow-md transition
            ">
                <span className="text-gray-800 font-medium">{name}</span>

                <span className="
                    w-9 h-9 flex items-center justify-center
                    rounded-full bg-primary
                ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7m0 0H9m8 0v8"
                        />
                    </svg>
                </span>
            </button>
        </Link>
    )
}

export default Button
