import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full text-white bg-main-color'>
      <div className='flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8'>
        <nav className='flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row'>
          <div className='relative'>
            <Link
              to={'..'}
              className='border-r-8 flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-lg font-semibold text-left bg-blue-800 hover:bg-gray-800 md:w-auto md:inline md:mt-0 md:ml-4  focus:bg-blue-800 focus:outline-none focus:shadow-outline'
            >
              Home
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
