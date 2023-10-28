export type EmployeeProps = {
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
