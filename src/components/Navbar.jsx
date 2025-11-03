import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(prev => !prev)
  const handleClose = () => setOpen(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-50">
      <a href="#home" className="inline-flex items-center gap-2">
        <img src={logo} alt="Inno Craft" className="w-[124px] h-[32px]" />
      </a>

      {/* Desktop menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-dimWhite hover:text-white transition-colors`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={handleToggle}
          className="p-2 rounded-lg hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <img
            src={open ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        {/* Mobile dropdown */}
        <div
          className={`${
            open ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar z-50 backdrop-blur-sm ring-1 ring-white/10`}
        >
          <ul className="list-none flex flex-col items-start gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white transition-colors"
              >
                <a href={`#${nav.id}`} onClick={handleClose}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
