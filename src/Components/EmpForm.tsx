import React, { FC, useState } from 'react'
type FormValues = {
  firstName: string
  lastName: string
  photoUrl: string
  gender: string
  email: string
  mobileNo: string
  dob: Date | null
  city: string
  skills: { [key: string]: boolean }
}

const EmpForm: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    photoUrl: '',
    gender: '',
    email: '',
    mobileNo: '',
    dob: null,
    city: '',
    skills: {
      Communication: false,
      'Critical Thinking': false,
      'Problem Solving': false,
      Initiative: false
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormValues(prev => ({
      ...prev,
      skills: { ...prev.skills, [name]: checked }
    }))
  }
  return (
    <section className='max-w-4xl p-6 mx-auto rounded-md shadow-[0_50px_25px_-24px_rgb(0,0,0,0.3)] dark:bg-gray-800 sm:mt-0 md:mt-20 bg-blue-400'>
      <h1 className='text-xl font-bold text-white capitalize dark:text-white'>Add Employee</h1>
      <form>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='firstName'>
              First Name:
            </label>
            <input
              name='firstName'
              id='firstName'
              placeholder='First Name'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='lastName'>
              Last Name:
            </label>
            <input
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='email'>
              Email:
            </label>
            <input
              name='email'
              placeholder='Email'
              type='email'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='photoUrl'>
              Photo Url:
            </label>
            <input
              id='photoUrl'
              name='photoUrl'
              placeholder='Photo URL'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='mobileNo'>
              Mobile No:
            </label>
            <input
              name='mobileNo'
              placeholder='Mobile No'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='dob'>
              DOB:
            </label>
            <input
              name='dob'
              type='date'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-white dark:text-gray-200' htmlFor='passwordConfirmation'>
              Select
            </label>
            <select
              name='city'
              onChange={handleInputChange}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            >
              <option value=''>--Select a city--</option>
              <option value='New York'>New York</option>
              <option value='Los Angeles'>Los Angeles</option>
              <option value='Chicago'>Chicago</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div className='mr-4'>
            <p className='text-white dark:text-gray-200'>Gender:</p>
            <div>
              <label className='text-white'>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  onChange={handleInputChange}
                  className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                />
                Male
              </label>
            </div>
            <div>
              <label className='text-white'>
                <input
                  type='radio'
                  name='female'
                  value='female'
                  onChange={handleInputChange}
                  className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                />
                Female
              </label>
            </div>
          </div>
          <div>
            <p className='text-white dark:text-gray-200'>Professional Skills:</p>
            <div>
              <label className='text-white'>
                <input
                  type='checkbox'
                  name='Communication'
                  onChange={handleCheckboxChange}
                  className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                />
                Communication
              </label>
            </div>
            <div>
              <label className='text-white'>
                <input
                  type='checkbox'
                  name='Critical Thinking'
                  onChange={handleCheckboxChange}
                  className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                />
                Critical Thinking
              </label>
            </div>
            <div>
              <label className='text-white'>
                <input
                  type='checkbox'
                  name='Problem Solving'
                  onChange={handleCheckboxChange}
                  className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                />
                Problem Solving
              </label>
            </div>
            <div>
              <label className='text-white'>
                <input
                  type='checkbox'
                  name='Initiative'
                  onChange={handleCheckboxChange}
                  className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                />
                Initiative
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button className='w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none'>
            ADD
          </button>
        </div>
      </form>
    </section>
  )
}

export default EmpForm
