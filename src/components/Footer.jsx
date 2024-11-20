import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='mt-12 container mx-auto w-full bg-violet-600'>
      <div className='flex justify-between'>
        {/* intro */}
        <div style={{ width: '400px' }}>
          <h5 className='font-bold'><i className="fa-solid fa-truck-fast mr-2" ></i>E-Cart</h5>
          <p>Designed and built with all the love in the world by the Tailwind team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='flex flex-col'>
          <h5 className='font-bold'>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>Home Page</Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: 'black' }}>History Page</Link>
        </div>
        {/* guides */}
        <div className='flex flex-col'>
          <h5 className='font-bold'>Guides</h5>
          <a style={{ textDecoration: 'none', color: 'black' }} href='http://react.dev/' target='_blank'>React</a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        </div>
        {/* contact */}
        <div className=''>
          <h5 className='font-bold'>Contact</h5>
          <div className='flex flex-col'>
            <input placeholder='Enter your email here!!' type="text" className='w-full border px-4 py-2 rounded mr-2 focus:outline-none focus:ring' />
            <button className='btn btn-info'><i className="fa-solid fa-arrow-right text-xl text-gray-600"></i></button>
          </div>
          <div className='flex justify-between mt-3'>
            <a href="https://www.linkedin.com/in/habeeba-kassim-714490320/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter text-2xl text-black-500"></i></a>
            <a href="https://www.linkedin.com/in/habeeba-kassim-714490320/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram text-2xl text-black-500"></i></a>
            <a href="https://www.linkedin.com/in/habeeba-kassim-714490320/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook text-2xl text-black-500"></i></a>
            <a href="https://www.linkedin.com/in/habeeba-kassim-714490320/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin text-2xl text-black-500"></i></a>
            <a href="https://www.linkedin.com/in/habeeba-kassim-714490320/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github text-2xl text-black-500"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5'>copyright &copy; July 2024 Batch, E-cart App. Built with React</p>
    </div>
  )
}

export default Footer