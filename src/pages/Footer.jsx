import React from 'react'

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow-sm m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-xs text-black sm:text-center">© 2025 <a href="" class="hover:underline">Agile DevGrit, Inc.</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-1 text-xs font-medium text-black sm:mt-0">
            <li>
                <a href="#offer" class="hover:underline me-3 md:me-6">About</a>
            </li>
            <li>
                <a href="#contact" class="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer