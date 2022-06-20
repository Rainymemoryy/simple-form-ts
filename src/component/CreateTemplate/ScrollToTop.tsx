import React, { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
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

  console.log(visible)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <nav className='sticky top-0 max-h-screen'>
      <button
        className={`absolute bottom-10 rounded-full outline-none transition-all  duration-1000 hover:scale-125 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToTop}
      >
        <BsFillArrowUpCircleFill className='h-8 w-8' />
      </button>
    </nav>
  )
}

export default ScrollButton
