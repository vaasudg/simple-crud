import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'
import { useEmployeeContext, useEmployeeDispatch } from '../context/EmployeeContext'
import { EmployeeProps } from '../utils/types'
import Header from './Common/Header'
import { Input } from './Common/Input'

const addSchema = z.object({
  firstName: z.string().min(2, 'First name is too short').max(50, 'First name is too long'),
  lastName: z.string().min(2, 'Last name is too short').max(50, 'Last name is too long'),
  email: z.string().email(),
  photoUrl: z.string().url(),
  mobileNo: z.string().min(10, 'In valid mobile number'),
  dob: z.string().min(1, 'Please enter a date of birth'),
  city: z.string().min(1, 'Please select a city'),
  gender: z.string().refine(value => value === 'male' || value === 'female', {
    message: 'Please select a gender'
  }),
  communication: z.boolean(),
  criticalThinking: z.boolean(),
  problemSolving: z.boolean(),
  initiative: z.boolean()
})

type FormValues = z.infer<typeof addSchema>

const EmpForm: FC = () => {
  const { getUserById } = useEmployeeContext()
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(addSchema),
    mode: 'onSubmit'
  })

  const useQuery = () => {
    const { search } = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
  }
  const params = useQuery()

  const isEdit = Number(params.get('isEdit')) > 0
  const query = Number(params.get('isEdit'))

  const employee = getUserById(query)

  useEffect(() => {
    if (isEdit) {
      setValue('firstName', employee?.firstName as string)
      setValue('lastName', employee?.lastName as string)
      setValue('email', employee?.email as string)
      setValue('photoUrl', employee?.photoUrl as string)
      setValue('mobileNo', employee?.mobileNo as string)
      setValue('dob', employee?.dob as string)
      setValue('city', employee?.city as string)
      setValue('gender', employee?.gender as string)
      setValue('communication', employee?.skils?.communication as boolean)
      setValue('initiative', employee?.skils?.initiative as boolean)
      setValue('criticalThinking', employee?.skils?.criticalThinking as boolean)
      setValue('problemSolving', employee?.skils?.problemSolving as boolean)
    }
  }, [isEdit, setValue])
  const dispatch = useEmployeeDispatch()
  const navigate = useNavigate()
  const onAddEmployee: SubmitHandler<FormValues> = data => {
    const newData: EmployeeProps = {
      id: isEdit ? query : Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      photoUrl: data.photoUrl,
      dob: data.dob,
      city: data.city,
      gender: data.gender,
      mobileNo: data.mobileNo,
      skils: {
        communication: data?.communication,
        criticalThinking: data?.criticalThinking,
        initiative: data?.initiative,
        problemSolving: data?.problemSolving
      }
    }
    if (isEdit) {
      dispatch({ type: 'UPDATE_USER', employee: { ...newData } })
    } else {
      dispatch({ type: 'ADD_USER', employee: { ...newData } })
    }
    navigate('/')
  }

  return (
    <>
      <Header />
      <section className='max-w-4xl p-6 mx-auto rounded-md shadow-[0_50px_25px_-24px_rgb(0,0,0,0.3)]  sm:mt-0 md:mt-20 bg-blue-400'>
        <h1 className='text-xl font-bold text-white capitalize'>Add Employee</h1>
        <form onSubmit={handleSubmit(onAddEmployee)}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <Input label='First Name' register={register} errors={errors} name='firstName' placeholder='First name' />
            <Input label='Last Name' register={register} errors={errors} name='lastName' placeholder='Last name' />
          </div>

          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <Input label='Email' register={register} errors={errors} name='email' placeholder='Email' />
            <Input label='Photo Url' register={register} errors={errors} name='photoUrl' placeholder='Photo Url' />
          </div>

          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <Input label='Mobile No' register={register} errors={errors} name='mobileNo' placeholder='Mobile No' />
            <Input label='DOB' register={register} errors={errors} name='dob' type='date' />
          </div>

          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className={`${errors.city ? 'text-red-800' : 'text-white'}`} htmlFor=''>
                Select City
              </label>
              <select
                {...register('city')}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring'
              >
                <option value=''>--Select a city--</option>
                <option value='New York'>New York</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='Chicago'>Chicago</option>
              </select>
              {errors.city && <p className='text-[11px] text-red-800 font-bold mt-2'>{errors.city.message}</p>}
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div className='mr-4'>
              <p className={`${errors.gender ? 'text-red-800' : 'text-white'}`}>Gender:</p>
              <div>
                <label className='text-white'>
                  <input
                    type='radio'
                    {...register('gender')}
                    value='male'
                    className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                  />
                  Male
                </label>
              </div>
              <div>
                <label className='text-white'>
                  <input
                    type='radio'
                    {...register('gender')}
                    value='female'
                    className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                  />
                  Female
                </label>
              </div>
              {errors.gender && <p className='text-[11px] text-red-800 font-bold mt-2'>{errors.gender.message}</p>}
            </div>
            <div>
              <p className={`${errors.communication ? 'text-red-800' : 'text-white'}`}>Professional Skills:</p>
              <div>
                <label className='text-white'>
                  <input
                    type='checkbox'
                    {...register('communication')}
                    className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                  />
                  Communication
                </label>
              </div>
              <div>
                <label className='text-white'>
                  <input
                    type='checkbox'
                    {...register('criticalThinking')}
                    className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                  />
                  Critical Thinking
                </label>
              </div>
              <div>
                <label className='text-white'>
                  <input
                    type='checkbox'
                    {...register('problemSolving')}
                    className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                  />
                  Problem Solving
                </label>
              </div>
              <div>
                <label className='text-white'>
                  <input
                    type='checkbox'
                    {...register('initiative')}
                    className='mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black'
                  />
                  Initiative
                </label>
              </div>
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none'
            >
              ADD
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default EmpForm
