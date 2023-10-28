import { Link, useParams } from 'react-router-dom'
import { useEmployeeContext, useEmployeeDispatch } from '../context/EmployeeContext'
import { EmployeeProps } from '../utils/types'
import Header from './Common/Header'
import Image from './Common/Image'
const View = () => {
  const { getUserById, employees } = useEmployeeContext()
  const { id } = useParams()
  if (employees) {
    employees.length = 4
  }

  const employee = getUserById(Number(id))

  return (
    <div className='bg-gray-100'>
      <Header />

      <div className='container mx-auto my-5 p-5'>
        <div className='md:flex no-wrap md:-mx-2 '>
          <div className='w-full md:w-3/12 md:mx-2'>
            <div className='bg-white p-3 border-t-4 border-pink-400'>
              <div className='image overflow-hidden'>
                <Image
                  className='h-auto w-full mx-auto'
                  url={employee?.photoUrl as string}
                  fallback='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                  description={employee?.firstName as string}
                />
              </div>
              <h1 className='text-gray-900 font-bold text-xl leading-8 my-1'>{`${employee?.firstName} ${employee?.lastName}`}</h1>
              <p className='text-sm text-gray-500 hover:text-gray-600 leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui
                unde aspernatur non deserunt
              </p>
            </div>
            <div className='my-4'></div>
            <div className='bg-white p-3 hover:shadow'>
              <div className='flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8'>
                <span className='text-pink-500'>
                  <svg
                    className='h-5 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </span>
                <span>Other Profiles</span>
              </div>
              <div className='grid grid-cols-3'>
                {employees &&
                  employees.map(employee => {
                    // eslint-disable-next-line array-callback-return
                    if (employee?.id === Number(id)) return
                    return (
                      <div key={employee.id} className='text-center my-2'>
                        <Link to={`/${employee.id}`}>
                          <Image
                            className='h-16 w-16 rounded-full mx-auto'
                            url={employee?.photoUrl as string}
                            fallback='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                            description={employee?.firstName as string}
                          />
                          <p className={`mt-2 ${employee.id === Number(id) ? 'text-pink-500' : ''}`}>
                            {employee.firstName}
                          </p>
                        </Link>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
          <div className='w-full md:w-9/12 mx-2 '>
            <div className='bg-white p-3 shadow-sm rounded-sm h-full'>
              <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                <div className='flex justify-between  w-full'>
                  <div className='flex items-center'>
                    <span className='text-pink-500'>
                      <svg
                        className='h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </span>
                    <span className='tracking-wide ml-3'>Profile View</span>
                  </div>
                  <div>
                    <Link to={`/add?isEdit=${id}`} className='tracking-wide font-medium text-blue-600  hover:underline'>
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
              <div className='text-gray-700'>
                <div className='grid md:grid-cols-2 text-sm'>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>First Name</div>
                    <div className='px-4 py-2'>{employee?.firstName}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Last Name</div>
                    <div className='px-4 py-2'>{employee?.lastName}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Email</div>
                    <div className='px-4 py-2'>
                      <a className='text-blue-800' href={`mailto:${employee?.email}`}>
                        {employee?.email}
                      </a>
                    </div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Phone No.</div>
                    <div className='px-4 py-2'>{employee?.mobileNo}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Birthday</div>
                    <div className='px-4 py-2'>{employee?.dob}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Address</div>
                    <div className='px-4 py-2'>{employee?.city}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Gender</div>
                    <div className='px-4 py-2'>{employee?.gender}</div>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Skill</div>
                  <div className='px-4 py-2'>{employee?.gender}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
