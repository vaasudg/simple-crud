import { Link, useNavigate } from 'react-router-dom'
import { useEmployeeContext } from '../context/EmployeeContext'
import Image from './Common/Image'

const ViewList = ({ userData }: any) => {
  const navigate = useNavigate()
  const { deleteEmployee } = useEmployeeContext()
  const onDelete = (id: number) => deleteEmployee(id)

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      {!userData.length ? (
        <h1 className='flex text-gray-300  items-center justify-center p-6'>
          No employee found, please add new employee
        </h1>
      ) : (
        <table className='w-full text-sm text-left text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Gender
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Mobile No
              </th>
              <th scope='col' className='px-6 py-3'>
                Date of Birth
              </th>
              <th scope='col' className='px-6 py-3'>
                City
              </th>
              <th scope='col' className='px-6 py-3'>
                Professional Skills
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((employee: any) => {
              const skills = employee.skils
              return (
                <tr key={employee.id} className='bg-white border-b '>
                  <th
                    onClick={() => navigate(`/${employee.id}`)}
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                    <div className='flex align-middle items-center'>
                      <div className='h-[60px] w-[60px] rounded-full'>
                        <Image
                          className='h-full w-full rounded-full'
                          url={employee?.photoUrl as string}
                          fallback='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                          description={employee?.firstName as string}
                        />
                      </div>
                      <p className='ml-4  overflow-hidden truncate w-[150px]'>{`${employee.firstName} ${employee.lastName}`}</p>
                    </div>
                  </th>
                  <td className='px-6 py-4 uppercase'>{employee.gender}</td>
                  <td className='px-6 py-4 uppercase'>{employee.email}</td>
                  <td className='px-6 py-4 uppercase'>{employee.mobileNo}</td>
                  <td className='px-6 py-4 uppercase'>{employee.dob}</td>
                  <td className='px-6 py-4 uppercase'>{employee.city}</td>
                  <td className='px-6 py-4 uppercase'>
                    {Object.keys(skills)
                      .filter(skill => skills[skill])
                      .join(', ')}
                  </td>
                  <td className='px-6 py-4 uppercase'>
                    <Link to={`/${employee.id}`} className='font-medium text-blue-600  hover:underline'>
                      View
                    </Link>
                    /
                    <Link to={`/add?isEdit=${employee.id}`} className='font-medium text-blue-600  hover:underline'>
                      Edit
                    </Link>
                    /
                    <Link
                      to={`/`}
                      onClick={() => onDelete(employee.id)}
                      className='font-medium text-blue-600  hover:underline'
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ViewList
