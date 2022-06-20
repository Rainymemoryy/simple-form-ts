import React, { useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <button
      className={`fixed right-4 bottom-9 rounded-full text-slate-400 shadow-2xl  outline-none transition-all duration-1000 hover:scale-125 hover:text-slate-600 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <BsArrowUpCircle className='h-8 w-8 ' />
    </button>
  )
}

export default ScrollButton
