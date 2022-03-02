import React from 'react'

function Navbar() {
    return (
        <ul className="flex justify-end pr-5">
            <li className="mr-3">
                <a className="inline-block hover:border-gray-200 text-white hover:bg-gray-200 py-1 px-3"
                    href="#">ABOUT</a>
            </li>
            <li className="mr-3">
                <a className="inline-block hover:border-gray-200 text-white hover:bg-gray-200 py-1 px-3"
                    href="#">NEWS & EVENTS</a>
            </li>
            <li className="mr-3">
                <a className="inline-block hover:border-gray-200 text-white hover:bg-gray-200 py-1 px-3"
                    href="#">ESPORTS</a>
            </li>
            <li className="mr-3">
                <a className="inline-block hover:border-gray-200 text-white hover:bg-gray-200 py-1 px-3"
                    href="#">CONTACT</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-green-500 rounded py-1 px-3 bg-green-500 text-black" href="#">LOGIN</a>
            </li>
            <div class="relative text-gray-600 lg:block hidden">
                <input
                    class="border-2 border-gray-300 bg-white h-8 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />

            </div>

        </ul>
    )
}

export default Navbar