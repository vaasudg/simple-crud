import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ViewList from './Components/ViewList'

import { useEmployeeContext } from './context/EmployeeContext'

function App() {
  const employeeContext = useEmployeeContext()
  const { employees } = employeeContext

  return (
    <div>
      <div className='relative flex  w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] '>
        <div className='flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 '>
          <h4 className='text-lg font-bold text-navy-700'>
            {employees.length ? 'List of Employees' : 'No employee found'}
          </h4>
          <Link
            to={'/add'}
            className=' px-2 py-1 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none '
          >
            Add New
          </Link>
        </div>
      </div>
      <ViewList userData={employeeContext.employees} />
    </div>
  )
}

export default App
