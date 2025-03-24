import React from 'react'

function Footer() {
  return (
    <footer className="w-screen bg-white rounded-lg shadow-sm m-4 sm:m-0">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-xs text-black sm:text-center sm:text-lg">© 2025 <a href="" className="hover:underline">Agile DevGrit, Inc.</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-1 text-xs font-medium text-black sm:mt-0 sm:text-lg">
            <li>
                <a href="#offer" className="hover:underline me-3 md:me-6">About</a>
            </li>
            <li>
                <a href="#contact" className="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer