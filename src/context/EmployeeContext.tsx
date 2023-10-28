import React, { createContext, useState, useContext, Dispatch, useReducer } from 'react'

type Employee = {
  id: number
  firstName: string
  lastName: string
  email: string
  photoUrl: string
  mobileNo: string
  dob: string
  city: string
  gender: string
  skils?: {
    communication?: boolean
    criticalThinking?: boolean
    initiative?: boolean
    problemSolving?: boolean
  }
}

type UserAction =
  | { type: 'ADD_USER'; employee: Employee }
  | { type: 'VIEW_USERS' }
  | { type: 'VIEW_USER'; id: number }
  | { type: 'UPDATE_USER'; employee: Employee }
  | { type: 'DELETE_USER'; employeeId: string }

type EmployeeState = {
  employees: Employee[]
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined)
const EmployeeDispatchContext = createContext<Dispatch<UserAction> | undefined>(undefined)

const employeeReducer = (state: EmployeeState, action: UserAction): EmployeeState => {
  switch (action.type) {
    case 'ADD_USER':
      return { employees: [...state.employees, action.employee] }
    case 'VIEW_USERS':
      return state
    case 'VIEW_USER':
      const user = state.employees.find(employee => employee?.id === action?.id)
      if (!user) return state
      return { employees: [user] }
    case 'UPDATE_USER':
      const updatedEmployees = state.employees.map(employee =>
        employee?.id === action.employee.id ? action.employee : employee
      )
      return { employees: updatedEmployees }
    case 'DELETE_USER':
      const deleteEmployees = state.employees.filter((employee: any) => employee?.id !== action?.employeeId)
      return { employees: deleteEmployees }
    default:
      return state
  }
}

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext)
  if (!context) {
    throw new Error('useEmployeeContext must be used within a EmpProvider')
  }
  return context
}

const temp = [
  {
    id: 1,
    firstName: 'Vas',
    lastName: 'string',
    email: 'string',
    photoUrl: 'https://images.pexels.com/photos/7594059/pexels-photo-7594059.jpeg?auto=compress&cs=tinysrgb&w=800',
    mobileNo: 'string',
    dob: 'string',
    city: 'string',
    gender: 'string',
    skils: {
      communication: true,
      criticalThinking: false,
      initiative: false,
      problemSolving: true
    }
  },
  {
    id: 2,
    firstName: 'Vas',
    lastName: 'string',
    email: 'string',
    photoUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
    mobileNo: 'string',
    dob: 'string',
    city: 'string',
    gender: 'string',
    skils: {
      communication: true,
      criticalThinking: false,
      initiative: false,
      problemSolving: true
    }
  },
  {
    id: 3,
    firstName: 'Vas',
    lastName: 'string',
    email: 'string',
    photoUrl: 'https://images.pexels.com/photos/6962108/pexels-photo-6962108.jpeg?auto=compress&cs=tinysrgb&w=800',
    mobileNo: 'string',
    dob: 'string',
    city: 'string',
    gender: 'string',
    skils: {
      communication: true,
      criticalThinking: true,
      initiative: false,
      problemSolving: true
    }
  },
  {
    id: 4,
    firstName: 'Deva',
    lastName: 'Pal',
    email: 'va@as.com',
    photoUrl: 'https://images.pexels.com/photos/8366756/pexels-photo-8366756.jpeg?auto=compress&cs=tinysrgb&w=800',
    mobileNo: '9888988900',
    dob: '2023-12-31',
    city: 'New York',
    gender: 'male',
    skils: {
      communication: true,
      criticalThinking: false,
      initiative: false,
      problemSolving: true
    }
  }
]

type EmployeeContextType = {
  employees: Employee[]
  addUser: (employee: Employee) => void
  viewUsers: () => void
  getUserById: (id: number) => Employee | undefined
  updateEmployee: (employee: Employee) => void
  deleteEmployee: (id: any) => void
}

export const EmpProvider: React.FC = ({ children }: any) => {
  // const [state, dispatch] = useReducer(employeeReducer, { employees: [...temp] }) // with test data (don't delete)
  const [state, dispatch] = useReducer(employeeReducer, { employees: [] })

  const getUserById = (userId: number) => {
    return state.employees.find(employee => employee?.id === userId)
  }
  const contextValue: EmployeeContextType = {
    employees: state.employees,
    addUser: employee => dispatch({ type: 'ADD_USER', employee }),
    viewUsers: () => dispatch({ type: 'VIEW_USERS' }),
    getUserById,
    updateEmployee: newData => dispatch({ type: 'UPDATE_USER', employee: { ...newData } }),
    deleteEmployee: id => {
      dispatch({ type: 'DELETE_USER', employeeId: id })
    }
  }
  return (
    <EmployeeContext.Provider value={contextValue}>
      <EmployeeDispatchContext.Provider value={dispatch}>{children}</EmployeeDispatchContext.Provider>
    </EmployeeContext.Provider>
  )
}

export const useEmployeeDispatch = () => {
  const context = useContext(EmployeeDispatchContext)
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider')
  }
  return context
}
